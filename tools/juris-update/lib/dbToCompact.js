var fs = require("fs");
var path = require("path");
var os = require("os");
var sqlite = require("sqlite");
const rfc6902 = require("rfc6902");

const util = require("./util");
const handleError = require("./errors").handleError;
const config = require("./config").getConfig();

const dbPath = path.join(config.path.dataDir, "jurism.sqlite");
const jurisMapPath = path.join(config.path.dataDir, "juris-maps");

if (!fs.existsSync(jurisMapPath)) {
	var e = new Error("path does not exist: "+jurisMapPath);
	handleError(e);
}

async function dbToCompact (opts) {
	// console.log("dbToCompact");
	console.log("Reading jurisdictions from database in: " + config.path.dataDir);
	console.log("Writing compact jurisdiction data to: " + config.path.jurisMapDir);
	var db = await sqlite.open(dbPath, { Promise });
	var jurisdictionIDs = await dbToCompact_jurisdictionIDs(db);
	if (opts.a) {
		for (var id of jurisdictionIDs) {
			opts.j = id;
			await dbToCompact_runner(db, opts);
		}
	} else if (opts.j) {
		if (jurisdictionIDs.indexOf(opts.j) == -1) {
			var e = new Error("Jurisdiction ID \"" + opts.j + "\" is not in the database.");
			throw e;
		}
		await dbToCompact_runner(db, opts);
	}
	var plural = "s";
	var count = convertedJurisdictions.length;
	if (count === 1) {
		plural = "";
	}
	console.log("Converted " + count + " jurisdiction" + plural + ": " + convertedJurisdictions.join(", "));
}

async function dbToCompact_jurisdictionIDs(db) {
	var sql = "SELECT jurisdictionID FROM jurisdictions WHERE jurisdictionID NOT LIKE '%:%'";
	var params = [];
	var rows = await db.all(sql, params);
	return rows.map(r => r.jurisdictionID);
}

async function dbToCompact_runner(db, opts) {
	var ret = {
		courtNames: [],
		courtJurisdictionLinks: [],
		jurisdictions: [],
		countryCourtLinks: [],
		courts: []
	};
	var indexMap = {
		jurisdictions: {},
		jurisdictionsIdToIdx: {},
		jurisdictionsIdxToId: {},
		courtNames: {},
		countryCourtLinks: {},
		courts: {},
		courtJurisdictionLinks: {}
	};
	await dbToCompact_jurisdictions(db, opts, ret, indexMap);
	await dbToCompact_courtNames(db, opts, ret, indexMap);
	await dbToCompact_countryCourtLinks(db, opts, ret, indexMap);
	await dbToCompact_courts(db, opts, ret, indexMap);	
	await dbToCompact_courtJurisdictionLinks(db, opts, ret, indexMap);
	util.writeCompactData(opts, ret);
	convertedJurisdictions.push(opts.j);
}

async function dbToCompact_jurisdictions(db, opts, ret, indexMap) {
	var sql = "SELECT * FROM jurisdictions WHERE (jurisdictionID = ? OR jurisdictionID LIKE ?)";
	var params = [opts.j, opts.j + ':%'];
	var rows = await db.all(sql, params);
	for (var row of rows) {
		indexMap.jurisdictions[row.jurisdictionIdx] = ret.jurisdictions.length;
		indexMap.jurisdictionsIdToIdx[row.jurisdictionID] = ret.jurisdictions.length;
		var jurisdictionID, jurisdictionName;
		if (row.jurisdictionID.indexOf(":") == -1) {
			jurisdictionID = row.jurisdictionID;
			jurisdictionName = row.jurisdictionName;
			ret.jurisdictions.push([jurisdictionID, jurisdictionName]);
		} else {
			indexMap.jurisdictionsIdxToId[ret.jurisdictions.length] = row.jurisdictionID;
			jurisdictionID = row.jurisdictionID.split(":").slice(-1)[0];
			jurisdictionName = row.jurisdictionName.split("|").slice(-1)[0];
			ret.jurisdictions.push([jurisdictionID, jurisdictionName]);
		}
	}
	for (var i=0,ilen=ret.jurisdictions.length; i<ilen; i++) {
		var obj = ret.jurisdictions[i];
		if ("undefined" !== typeof indexMap.jurisdictionsIdxToId[i]) {
			var parentID = indexMap.jurisdictionsIdxToId[i].split(":").slice(0, -1).join(":");
			var parentIdx = indexMap.jurisdictionsIdToIdx[parentID];
			ret.jurisdictions[i].push(parentIdx);
		}
	}
}

async function dbToCompact_courtNames(db, opts, ret, indexMap) {
	var sql = "SELECT courtNameIdx,courtName FROM courtNames NATURAL JOIN countryCourtLinks CCL JOIN jurisdictions J ON J.jurisdictionIdx=CCL.countryIdx WHERE (jurisdictionID = ? OR jurisdictionID LIKE ?)";
	var params = [opts.j, opts.j + ':%'];
	var rows = await db.all(sql, params);
	for (var row of rows) {
		indexMap.courtNames[row.courtNameIdx] = ret.courtNames.length;
		ret.courtNames.push(row.courtName);
	}
}

async function dbToCompact_countryCourtLinks(db, opts, ret, indexMap) {
	var sql = "SELECT countryCourtLinkIdx,courtNameIdx,countryIdx FROM courtNames NATURAL JOIN countryCourtLinks CCL JOIN jurisdictions J ON J.jurisdictionIdx=CCL.countryIdx WHERE (jurisdictionID = ? OR jurisdictionID LIKE ?)";
	var params = [opts.j, opts.j + ':%'];
	var rows = await db.all(sql, params);
	for (var row of rows) {
		// This is misnamed in the JSON. Should be courtCountryLinks,
		// or the array order should be reversed.
		indexMap.countryCourtLinks[row.countryCourtLinkIdx] = ret.countryCourtLinks.length;
		var newCourtNameIdx = indexMap.courtNames[row.courtNameIdx];
		var newCountryIdx = indexMap.jurisdictions[row.countryIdx];
		ret.countryCourtLinks.push([newCourtNameIdx, newCountryIdx]);
	}
}

async function dbToCompact_courts(db, opts, ret, indexMap) {
	var sql = "SELECT C.courtIdx,CCL.countryCourtLinkIdx,C.courtID FROM courtNames NATURAL JOIN countryCourtLinks CCL JOIN jurisdictions J ON J.jurisdictionIdx=CCL.countryIdx JOIN courts C ON C.countryCourtLinkIdx=CCL.countryCourtLinkIdx WHERE (jurisdictionID = ? OR jurisdictionID LIKE ?)";
	var params = [opts.j, opts.j + ':%'];
	var rows = await db.all(sql, params);
	for (var row of rows) {
		indexMap.courts[row.courtIdx] = ret.courts.length;
		var newCountryCourtLinkIdx = indexMap.countryCourtLinks[row.countryCourtLinkIdx];
		ret.courts.push([row.courtID, newCountryCourtLinkIdx]);
	}
}

async function dbToCompact_courtJurisdictionLinks(db, opts, ret, indexMap) {
	var sql = "SELECT CJL.jurisdictionIdx,CJL.courtIdx FROM (SELECT C.courtIdx FROM courtNames CN NATURAL JOIN countryCourtLinks CCL JOIN jurisdictions J ON J.jurisdictionIdx=CCL.countryIdx JOIN courts C ON C.countryCourtLinkIdx=CCL.countryCourtLinkIdx WHERE (jurisdictionID = ? OR jurisdictionID LIKE ?)) XX JOIN courtJurisdictionLinks CJL ON (CJL.courtIdx=XX.courtIdx)";
	var params = [opts.j, opts.j + ':%'];
	var rows = await db.all(sql, params);
	for (var row of rows) {
		var newJurisdictionIdx = indexMap.jurisdictions[row.jurisdictionIdx];
		var newCourtIdx = indexMap.courts[row.courtIdx];
		ret.courtJurisdictionLinks.push([newJurisdictionIdx, newCourtIdx]);
	}
	return ret;
}

module.exports = {
	dbToCompact: dbToCompact
}
