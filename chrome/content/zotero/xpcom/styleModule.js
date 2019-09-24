Zotero.StyleModules = new function() {
	var _initialized = false;
	var _initializationDeferred = false;
	var _styleModules;
	
	Components.utils.import("resource://gre/modules/Services.jsm");
	Components.utils.import("resource://gre/modules/FileUtils.jsm");
	
	this.xsltProcessor = null;
	this.ns = {
		"csl":"http://purl.org/net/xbiblio/csl"
	};

	/**
	 * Initializes styles cache, loading metadata for styles into memory
	 */
	this.init = Zotero.Promise.coroutine(function* (options = {}) {
		// Wait until bundled files have been updated, except when this is called by the schema update
		// code itself
		if (!options.fromSchemaUpdate) {
			yield Zotero.Schema.schemaUpdatePromise;
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
		
		Zotero.debug("Initializing style modules");
		var start = new Date;
		
		_styleModules = {};
		
		// main dir
		var dir = Zotero.getStyleModulesDirectory().path;
		var num = yield _readStylesFromDirectory(dir);
		
		Zotero.debug("Cached " + num + " style modules in " + (new Date - start) + " ms");
		
		_initializationDeferred.resolve();
		_initialized = true;
	});
	
	this.reinit = function (options = {}) {
		return this.init(Object.assign({}, options, { reinit: true }));
	};
	
	/**
	 * Reads all styles from a given directory and caches their metadata
	 * @private
	 */
	var _readStylesFromDirectory = Zotero.Promise.coroutine(function* (dir) {
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
							|| fileName.substr(-4) !== ".csl"
							|| fileName.substr(0, 6) !== "juris-"
							|| entry.isDir) continue;
					
					try {
						var id = fileName.slice(0, -4);
						var style = new Zotero.StyleModule(id, path);
					}
					catch (e) {
						Components.utils.reportError(e);
						Zotero.debug(e, 1);
						continue;
					}
					if(style.styleModuleID) {
						// same style is already cached
						if (_styleModules[style.styleModuleID]) {
							Components.utils.reportError('Style module with ID ' + style.styleModuleID
								+ ' already loaded from ' + _styleModules[style.styleModuleID].fileName);
						} else {
							// add to cache
							_styleModules[style.styleModuleID] = style;
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
	 * Gets a style with a given ID
	 * @param {String} id
	 */
	this.get = function (id) {
		if (!_initialized) {
			throw new Zotero.Exception.UnloadedDataException("Styles not yet loaded (1)", 'styles');
		}
		return _styleModules[id] || false;
	};
}

/**
 * @class Represents a style module file
 * @property {String} id The id of the style module derived from its filename
 * @property {String} path The path to the style file
 */
Zotero.StyleModule = function (id, path) {
	if (path) {
		this.path = path;
		this.fileName = OS.Path.basename(path);
	}
	this.styleModuleID = id;
	this.title = id;
}

/**
 * Retrieves the XML corresponding to this style module
 * @type String
 */
Zotero.StyleModule.prototype.getXML = function () {
	return Zotero.File.getContents(this.path);
};
