Zotero.JurisMaps = new function() {
	var _initialized = false;
	var _populated = false;
	var _initializationDeferred = false;
	var _jurisMaps;
	
	Components.utils.import("resource://gre/modules/Services.jsm");
	Components.utils.import("resource://gre/modules/FileUtils.jsm");
	
	this.totalCount = 0;
	this.progressCount = 0;
	
	this.xsltProcessor = null;
	this.ns = {
		"csl":"http://purl.org/net/xbiblio/csl"
	};

	this.init = Zotero.Promise.coroutine(function* (options = {}) {
		Zotero.debug("[Jurism] Running JurisMaps init", 1);
		// Wait until bundled files have been updated, except when this is called by the schema update
		// code itself
		if (!options.fromSchemaUpdate) {
			yield Zotero.Schema.schemaUpdatePromise;
		}
		
		if (Zotero.test) {
			this.versionFile = "versions-zz.json";
		} else {
			this.versionFile = "versions.json";
		}
		
		// If an initialization has already started, a regular init() call should return the promise
		// for that (which may already be resolved). A reinit should yield on that but then continue
		// with reinitialization.
		if (_initializationDeferred) {
			let promise = _initializationDeferred.promise;
			if (options.reinit) {
				yield promise;
			}
			else {
				return promise;
			}
		}
		
		_initializationDeferred = Zotero.Promise.defer();
		
		Zotero.debug("Initializing juris maps");
		var start = new Date;
		
		_jurisMaps = {};
		
		// main dir
		var dir = Zotero.getJurisMapsDirectory().path;
		var num = yield this.readMapsFromDirectory(dir);
		
		Zotero.debug("Cached " + num + " juris maps in " + (new Date - start) + " ms");
		
		_initializationDeferred.resolve();
		_initialized = true;
	});
	
	this.reinit = function (options = {}) {
		return this.init(Object.assign({}, options, { reinit: true }));
	};
	
	/**
	 * Reads all maps from a given directory and caches their metadata
	 * @private
	 */
	this.readMapsFromDirectory = Zotero.Promise.coroutine(function* (dir) {
		var numCached = 0;
		
		var iterator = new OS.File.DirectoryIterator(dir);
		try {
			while (true) {
				let entries = yield iterator.nextBatch(10); // TODO: adjust as necessary
				if (!entries.length) break;
				
				for (let i = 0; i < entries.length; i++) {
					let entry = entries[i];
					let path = entry.path;
					let fileName = entry.name;
					if (!fileName || fileName[0] === "."
						|| fileName.substr(-5) !== ".json"
						|| (fileName.substr(0, 6) !== "juris-" && fileName !== this.versionFile)
						|| entry.isDir) continue;
					try {
						var id = fileName.slice(0, -5);
						var mapinfo = new Zotero.JurisMap(id, path);
					}
					catch (e) {
						Components.utils.reportError(e);
						Zotero.debug(e, 1);
						continue;
					}
					if(mapinfo.jurisMapID) {
						// same map is already cached
						if (_jurisMaps[mapinfo.jurisMapID]) {
							Components.utils.reportError('Juris map with ID ' + mapinfo.jurisMapID
								+ ' already loaded from ' + _jurisMaps[mapinfo.jurisMapID].fileName);
						} else {
							// add to cache
							_jurisMaps[mapinfo.jurisMapID] = mapinfo;
						}
					}
					numCached++;
				}
			}
		}
		finally {
			iterator.close();
		}
		return numCached;
	});
	
	/**
	 * Gets a map with a given ID
	 * @param {String} id
	 */
	this.get = function (id) {
		if (!_initialized) {
			throw new Zotero.Exception.UnloadedDataException("Juris maps not yet loaded (1)", 'juris-maps');
		}
		return _jurisMaps[id] || false;
	};

	/*
	 * (re)Populate the jurisdiction table
	 */
	this.populateJurisdictions = Zotero.Promise.coroutine(function*() {
		if (!_initialized) {
			Zotero.debug("jurisMaps not yet initialized. Postponing populateJurisdictions to assure compact source is up to date.");
			return;
		}
		if (_populated) return;
		Zotero.debug("[Jurism] populating database with jurisdiction info");
		var mapsToUpdate = {};
		this.progressCount = 0;
		// So. What this needs to do is:
		// 1. Find the source directory
		// 2. Get a list of files in the source directory (from this.versionFile)
		// 3. Sample each file, extract header date, compare with jurisMaps version value in DB
		// 4. Iterate over files for which update is appropriate.
		var jurisMapsDir = Zotero.getJurisMapsDirectory().path;
		var jurisMapsVersionsFile = OS.Path.join(jurisMapsDir, this.versionFile);
		var versions = yield Zotero.File.getContentsAsync(jurisMapsVersionsFile);
		versions = JSON.parse(versions);
		var jurisID;
		for (jurisID in versions) {
			var newVersionInfo = versions[jurisID];
			var oldVersion = yield Zotero.DB.valueQueryAsync("SELECT version FROM jurisVersion WHERE schema = ?", [jurisID]);
			// Check if database maps version exists and is greater than or equal to the new file date
			if (!oldVersion || newVersionInfo.timestamp > oldVersion) {
				this.totalCount = (this.totalCount + newVersionInfo.rowcount);
				mapsToUpdate[jurisID] = newVersionInfo;
			}
		}

		if (Object.keys(mapsToUpdate).length > 0) {
			Zotero.showZoteroPaneProgressMeter("Installing " + Object.keys(mapsToUpdate).length + " jurisdictions", true);

			var iterator = new OS.File.DirectoryIterator(jurisMapsDir);
			try {
				while (true) {
					let entries = yield iterator.nextBatch(10); // TODO: adjust as necessary
					if (!entries.length) break;
					// Iterate over entries list.
					for (let i = 0; i < entries.length; i++) {
						let entry = entries[i];
						let path = entry.path;
						let fileName = entry.name;
						let jurisID = fileName.replace(/^juris-/, "").replace(/-map\.json/, "");
						if (!mapsToUpdate[jurisID]
							|| !fileName
							|| fileName[0] === "."
							|| fileName.substr(-9) !== "-map.json"
							|| fileName.substr(0, 6) !== "juris-"
							|| entry.isDir) continue;
						// Process passing files one by one
						var jurisFilePath = OS.Path.join(jurisMapsDir, fileName);
						jurisID = fileName.replace("juris-", "").replace("-map.json", "");
						yield this.populateOneJurisdiction(jurisID, jurisFilePath, mapsToUpdate[jurisID].timestamp);
					}
				}
			} catch (e) {
				Zotero.hideZoteroPaneOverlays();
				throw e;
			}
			Zotero.hideZoteroPaneOverlays();
		}
		_populated = true;
	});

	this.populateOneJurisdiction = Zotero.Promise.coroutine(function*(jurisID, jurisFilePath, version) {
		Zotero.debug("Deleting any previous data in jurisdictions table for "+jurisID);
		yield Zotero.DB.queryAsync('DELETE FROM jurisdictions WHERE jurisdictionID=? OR jurisdictionID LIKE ?', [jurisID, jurisID + ":%"]);
		yield Zotero.DB.queryAsync('DELETE FROM courtNames WHERE courtNameIdx NOT IN (SELECT courtNameIdx FROM countryCourtLinks)')
		Zotero.debug("Populating jurisdictions for " + jurisID);
		this.idxMap = {
			jurisdictions: {},
			courtNames: {},
			countryCourtLinks: {},
			courts: {},
			courtJurisdictionLinks: {}			
		};
		
		// Fetch JSON file from data directory
		try {
			var fieldNames = [
				"courtNames",
				"countryCourtLinks",
				"courts",
				"courtJurisdictionLinks"
			];
			var jsonStr = yield Zotero.File.getContentsAsync(jurisFilePath);
			var jObj = JSON.parse(jsonStr);
			for (var i=0,ilen=fieldNames.length; i<ilen; i++) {
				var fieldName = fieldNames[i];
				if (!jObj[fieldName]) {
					jObj[fieldName] = [];
				}
			}
			yield this.setJurisdictionData(jObj, jurisID);
			yield this.setCourtNames(jObj);
			yield this.setCountryCourtLinks(jObj);
			yield this.setCourts(jObj);
			yield this.setCourtJurisdictionLinks(jObj);
			yield this.finalize(jurisID, version);
		} catch (e) {
			Zotero.debug("Failed to populate " + jurisID);
			Zotero.debug(e);
		}
	});
	
	this.updateProgressMeter = function() {
		this.progressCount++;
		if ((this.progressCount % 25) === 0) {
			Zotero.updateZoteroPaneProgressMeter(Math.round(this.progressCount * 100 / this.totalCount));
		}
	}
	
	this.setJurisdictionData = Zotero.Promise.coroutine(function* (jObj) {
		var jurisdictionsNewSql = "INSERT INTO jurisdictions VALUES (NULL, ?, ?, ?);";
		var jurisdictionsIdxSql = "SELECT jurisdictionIdx FROM jurisdictions WHERE jurisdictionID=?"
		
		var JurisdictionSpider = function(jObj) {
			this.jObj = jObj;
			this.jurisdictionIdLst = [];
			this.jurisdictionNameLst = [];
		}
		JurisdictionSpider.prototype.run = function (idx) {
			var elem = this.jObj.jurisdictions[idx];
			this.jurisdictionIdLst.push(elem[0]);
			this.jurisdictionNameLst.push(elem[1]);
			if (elem.length === 3) {
			   this.run(elem[2]);
			}
			jIdLst = this.jurisdictionIdLst.slice();
			jIdLst.reverse();
			jNameLst = this.jurisdictionNameLst.slice();
			jNameLst.reverse();
			return [jIdLst.join(":"), jNameLst.join("|")];
		}
		for (let i=0,ilen=jObj.jurisdictions.length;i<ilen;i++) {
			let entry = jObj.jurisdictions[i];
			var entryOne, entryZero, segmentCount;
			if ("undefined" !== typeof entry[2]) {
				let jurisdictionSpider = new JurisdictionSpider(jObj);
				let jurisdictionData = jurisdictionSpider.run(entry[2]);
				entryZero = jurisdictionData[0] + ":" + entry[0];
				entryOne = jurisdictionData[1] + "|" + entry[1];
			} else {
				entryZero = entry[0];
				// Hack the trailing jurisdictionID into top-level jurisdiction name
				entry[1] = entry[1] + "|" + entryZero.toUpperCase();
				entryOne = entry[1];
			}
			segmentCount = entryOne.split("|").length;
			var idx = yield Zotero.DB.valueQueryAsync(jurisdictionsIdxSql, [entryZero]);
			if ("number" !== typeof idx) {
				yield Zotero.DB.queryAsync(jurisdictionsNewSql, [entryZero, entryOne, segmentCount]);
				idx = yield Zotero.DB.valueQueryAsync(jurisdictionsIdxSql, [entryZero]);
			}
			this.updateProgressMeter();
			this.idxMap.jurisdictions[i] = idx;
		}
	});

	this.setCourtNames = Zotero.Promise.coroutine(function* (jObj) {
		// In contrast to jurisdictions, we could have existing entries in this
		// table, so the SQL jiggery-pokery is a little more involved.
		var courtNamesNewSql = "INSERT INTO courtNames VALUES (NULL, ?);";
		for (let i=0,ilen=jObj.courtNames.length;i<ilen;i++) {
			let entry = jObj.courtNames[i].replace(/^\<\s*/, "").replace(/\s*\>$/, "");
			// So ... check for name idx
			var idx = yield Zotero.DB.valueQueryAsync("SELECT courtNameIdx FROM courtNames WHERE courtName=?", [entry]);
			if ("number" !== typeof idx) {
				yield Zotero.DB.queryAsync(courtNamesNewSql, [entry]);
				idx = yield Zotero.DB.valueQueryAsync("SELECT courtNameIdx FROM courtNames WHERE courtName=?", [entry])
			}
			this.updateProgressMeter();
			this.idxMap.courtNames[i] = idx;
		}
	});

	this.setCountryCourtLinks = Zotero.Promise.coroutine(function* (jObj) {
		var countryCourtLinksNewSql = "INSERT INTO countryCourtLinks VALUES (NULL, ?, ?);";
		for (let i=0,ilen=jObj.countryCourtLinks.length;i<ilen;i++) {
			let entry = jObj.countryCourtLinks[i];
			let courtNameIdx = this.idxMap.courtNames[entry[0]];
			let countryIdx = this.idxMap.jurisdictions[entry[1]];
			var idx = yield Zotero.DB.valueQueryAsync("SELECT countryCourtLinkIdx FROM countryCourtLinks WHERE courtNameIdx=? AND countryIdx=?", [courtNameIdx, countryIdx]);
			if ("number" !== typeof idx) {
				yield Zotero.DB.queryAsync(countryCourtLinksNewSql, [courtNameIdx, countryIdx]);
				idx = yield Zotero.DB.valueQueryAsync("SELECT countryCourtLinkIdx FROM countryCourtLinks WHERE courtNameIdx=? AND countryIdx=?", [courtNameIdx, countryIdx]);
			}
			this.updateProgressMeter();
			this.idxMap.countryCourtLinks[i] = idx;
		}
	});

	this.setCourts = Zotero.Promise.coroutine(function* (jObj) {
		var courtsNewSql = "INSERT INTO courts VALUES(NULL, ?, ?);";
		for (let i=0,ilen=jObj.courts.length;i<ilen;i++) {
			let entry = jObj.courts[i];
			let courtID = entry[0];
			let countryCourtLinkIdx = this.idxMap.countryCourtLinks[entry[1]];
			var idx = yield Zotero.DB.valueQueryAsync("SELECT courtIdx FROM courts WHERE courtID=? AND countryCourtLinkIdx=?", [courtID, countryCourtLinkIdx]);
			if ("number" !== typeof idx) {
				yield Zotero.DB.queryAsync(courtsNewSql, [courtID, countryCourtLinkIdx]);
				idx = yield Zotero.DB.valueQueryAsync("SELECT courtIdx FROM courts WHERE courtID=? AND countryCourtLinkIdx=?", [courtID, countryCourtLinkIdx]);
			}
			this.updateProgressMeter();
			this.idxMap.courts[i] = idx;
		}
	});

	this.setCourtJurisdictionLinks = Zotero.Promise.coroutine(function* (jObj) {
		var courtJurisdictionLinksNewSql = "INSERT INTO courtJurisdictionLinks VALUES (?, ?);";
		for (let i=0,ilen=jObj.courtJurisdictionLinks.length;i<ilen;i++) {
			let entry = jObj.courtJurisdictionLinks[i];
			let jurisdictionIdx = this.idxMap.jurisdictions[entry[0]];
			let courtIdx = this.idxMap.courts[entry[1]];
			yield Zotero.DB.queryAsync(courtJurisdictionLinksNewSql, [jurisdictionIdx, courtIdx]);
			this.updateProgressMeter();
		}
	});

	this.finalize = Zotero.Promise.coroutine(function* (jurisID, version) {
		var sql = "INSERT OR REPLACE INTO jurisVersion VALUES (?, ?)";
		yield Zotero.DB.queryAsync(sql, [jurisID, version]);
	});
}

/**
 * @class Represents a style module file
 * @property {String} id The id of the style module derived from its filename
 * @property {String} path The path to the style file
 */
Zotero.JurisMap = function (id, path) {
	if (path) {
		this.path = path;
		this.fileName = OS.Path.basename(path);
	}
	this.jurisMapID = id;
	this.title = id;
}

/**
 * Retrieves the XML corresponding to this style module
 * @type String
 */
Zotero.JurisMap.prototype.getXML = function () {
	return Zotero.File.getContents(this.path);
};
