diff --git a/chrome/content/zotero/xpcom/schema.js b/chrome/content/zotero/xpcom/schema.js
index 71ea7ad..23f3b23 100644
--- a/chrome/content/zotero/xpcom/schema.js
+++ b/chrome/content/zotero/xpcom/schema.js
@@ -40,6 +40,45 @@ Zotero.Schema = new function(){
 	var self = this;
 	
 	/*
+	 * Multilingual Zotero schema upgrade notes
+	 *
+	 * With MLZ easing its way into wider use, we need more orderly
+	 * code for the upgrade process. The challenge is that upgrades
+	 * may appear in the Zotero source on which the project is based
+	 * (Z-upgrades). Going forward, these may require special handling
+	 * to apply correctly against an MLZ database, and may impact
+	 * Multilingual Zotero upgrades (M-upgrades).
+	 * 
+	 * The previous M-upgrade code assumed no Z-upgrade activity.
+	 * This worked as a short-term assumption, but we are now starting
+	 * to see activity, and a major refactoring of the Zotero schema
+	 * is likely to arrive this year or next. When that emerges, it is
+	 * important that we be able to follow the changes smoothly in MLZ.
+	 *
+	 * The current release MLZ client as of this writing brings the
+	 * schema safely to version userdata:77. Our difficulties involve
+	 * version levels beyond this point, where sequential increments
+	 * of userdata.sql in Zotero and MLZ will become ambiguous.
+	 *
+	 * To avoid ambiguity, the schema version baseline for MLZ clients
+	 * will be bumped to 10000. To permit Z-updates to be applied in a
+	 * controlled way, the Z version level at which the DB was
+	 * migrated to MLZ will be recorded as "mlzSchemaEntryLevel" in
+	 * the version table.
+	 *
+	 * Happily, the existing multilingual.sql schema version record
+	 * provides a means of identifying MLZ clients that may require
+	 * record conversion: 1 is for old-style client; 2 is for
+	 * new-style clients. Old-style MLZ clients can be assumed to be
+	 * at schema version 76, and so receive that value as
+	 * mlzSchemaEntryLevel.
+	 * 
+	 * 
+	 * 
+	 * 
+	 */
+
+	/*
 	 * Retrieve the DB schema version
 	 */
 	this.getDBVersion = function (schema) {
@@ -56,15 +95,16 @@ Zotero.Schema = new function(){
 		return false;
 	}
 	
-	
+		
 	this.userDataUpgradeRequired = function () {
 		var dbVersion = this.getDBVersion('userdata');
 		var schemaVersion = _getSchemaSQLVersion('userdata');
-		
-		return dbVersion && (dbVersion < schemaVersion);
+		// MLZ: upgrade if proposed userdata.sql version is greater than
+		// database record, or if existing DB is not MLZ
+		var multilingualVersion = this.getDBVersion('multilingual');
+		return dbVersion && (!multilingualVersion || (dbVersion < schemaVersion));
 	}
 	
-	
 	this.showUpgradeWizard = function () {
 		var dbVersion = this.getDBVersion('userdata');
 		var schemaVersion = _getSchemaSQLVersion('userdata');
@@ -118,20 +158,19 @@ Zotero.Schema = new function(){
 	 */
 	this.updateSchema = function () {
 		var dbVersion = this.getDBVersion('userdata');
-		var dbVersion2 = this.getDBVersion('userdata2');
-		
+ 		
 		// 'schema' check is for old (<= 1.0b1) schema system,
 		// 'user' is for pre-1.0b2 'user' table
 		if (!dbVersion && !this.getDBVersion('schema') && !this.getDBVersion('user')){
-			Zotero.debug('Database does not exist -- creating\n');
+			Zotero.debug('Database does not exist -- creating MLZ database\n');
 			_initializeSchema().then(function() {
 				_schemaUpdateDeferred.resolve(true);
 			});
 			return true;
 		}
-		
+
 		var schemaVersion = _getSchemaSQLVersion('userdata');
-		
+
 		try {
 			Zotero.UnresponsiveScriptIndicator.disable();
 			
@@ -166,8 +205,29 @@ Zotero.Schema = new function(){
 					this.updateCustomTables(up1);
 				}
 				if(up1) Zotero.wait();
+
+				// If first-time install of multilingual against an existing DB,
+				// make a permanent note of its version number, and bump the
+				// "multilingual" version flag down to 1 to request extra-field-hack
+				// record conversion.
+				// Earlier (Z-compatible) MLZ clients have schema version 76
+				var mlzVersion = this.getDBVersion('multilingual');
+				if (!mlzVersion) {
+					_updateSchema('multilingual');
+					Zotero.wait();
+   					_updateDBVersion('mlzSchemaEntryLevel', dbVersion);
+					// Set entry level to userdata2 level, if available
+					var dbVersion2 = this.getDBVersion('userdata2');
+					if (dbVersion2) {
+   						_updateDBVersion('mlzSchemaEntryLevel', dbVersion2);
+					}
+					_updateDBVersion('multilingual', 1);
+				} else if (mlzVersion === 1) {
+					_updateDBVersion('mlzSchemaEntryLevel', 76);
+				}
+
 				var up2 = _migrateUserDataSchema(dbVersion);
-				var up3 = _migrateUserDataSchemaSilent(dbVersion2);
+
 				var up4 = _updateSchema('triggers');
 				if (up2) {
 					// Update custom tables again in case custom fields were changed during user data migration
@@ -175,6 +235,18 @@ Zotero.Schema = new function(){
 					Zotero.wait()
 				}
 				
+				// MLZ: update language tables if required.
+				var up5 = _updateSchema('zls')
+				if (up5) Zotero.wait();
+
+				// MLZ: update language tables if required.
+				var up6 = _updateSchema('jurisdictions')
+				if (up6) {
+					Zotero.wait();
+					_populateJurisdictions();
+					Zotero.wait();
+				}
+
 				Zotero.DB.commitTransaction();
 			}
 			catch(e){
@@ -196,7 +268,7 @@ Zotero.Schema = new function(){
 						if (file.isDirectory()) {
 							continue;
 						}
-						var matches = file.leafName.match(/zotero\.sqlite\.([0-9]{2,})\.bak/);
+						var matches = file.leafName.match(/jurism\.sqlite\.([0-9]{2,})\.bak/);
 						if (!matches) {
 							continue;
 						}
@@ -552,6 +624,7 @@ Zotero.Schema = new function(){
 		var Mode = mode[0].toUpperCase() + mode.substr(1);
 		var Modes = Mode + "s";
 		
+		// MLZ: temporary
 		var repotime = Zotero.File.getContentsFromURL("resource://zotero/schema/repotime.txt");
 		var date = Zotero.Date.sqlToDate(repotime, true);
 		repotime = Zotero.Date.toUnixTimestamp(date);
@@ -1390,27 +1463,15 @@ Zotero.Schema = new function(){
 	 * Retrieve the version from the top line of the schema SQL file
 	 */
 	function _getSchemaSQLVersion(schema){
-		// TEMP
-		if (schema == 'userdata2') {
-			schema = 'userdata';
-			var newUserdata = true;
-		}
 		var sql = _getSchemaSQL(schema);
 		
 		// Fetch the schema version from the first line of the file
 		var schemaVersion = parseInt(sql.match(/^-- ([0-9]+)/)[1]);
 		
-		// TEMP: For 'userdata', cap the version at 76
-		// For 'userdata2', versions > 76 are allowed.
-		if (schema == 'userdata' && !newUserdata) {
-			schemaVersion = Math.min(76, schemaVersion);
-		}
-		
 		_schemaVersions[schema] = schemaVersion;
 		return schemaVersion;
 	}
 	
-	
 	/*
 	 * Load in SQL schema
 	 *
@@ -1423,8 +1484,7 @@ Zotero.Schema = new function(){
 		
 		return Zotero.File.getContentsFromURL("resource://zotero/schema/"+schema+".sql");
 	}
-	
-	
+
 	/*
 	 * Determine the SQL statements necessary to drop the tables and indexed
 	 * in a given schema file
@@ -1445,7 +1505,6 @@ Zotero.Schema = new function(){
 		return str;
 	}
 	
-	
 	/*
 	 * Create new DB schema
 	 */
@@ -1460,15 +1519,18 @@ Zotero.Schema = new function(){
 			Zotero.DB.query(_getSchemaSQL('system'));
 			Zotero.DB.query(_getSchemaSQL('userdata'));
 			Zotero.DB.query(_getSchemaSQL('triggers'));
+			Zotero.DB.query(_getSchemaSQL('multilingual'));
+			Zotero.DB.query(_getSchemaSQL('zls'));
+			Zotero.DB.query(_getSchemaSQL('jurisdictions'));
+			_populateJurisdictions();
 			Zotero.Schema.updateCustomTables(true);
 			
 			_updateDBVersion('system', _getSchemaSQLVersion('system'));
-			// TEMP: 77 is for full-text syncing. New users don't need the
-			// prompt, so initialize new databases to 77.
-			//_updateDBVersion('userdata', _getSchemaSQLVersion('userdata'));
-			_updateDBVersion('userdata', 77);
-			_updateDBVersion('userdata2', _getSchemaSQLVersion('userdata2'));
+			_updateDBVersion('userdata', _getSchemaSQLVersion('userdata'));
 			_updateDBVersion('triggers', _getSchemaSQLVersion('triggers'));
+			_updateDBVersion('multilingual', _getSchemaSQLVersion('multilingual'));
+			_updateDBVersion('zls', _getSchemaSQLVersion('zls'));
+			_updateDBVersion('jurisdictions', _getSchemaSQLVersion('jurisdictions'));
 			
 			if (!Zotero.Schema.skipDefaultData) {
 				// Quick Start Guide web page item
@@ -1535,7 +1597,7 @@ Zotero.Schema = new function(){
 	function _updateSchema(schema){
 		var dbVersion = Zotero.Schema.getDBVersion(schema);
 		var schemaVersion = _getSchemaSQLVersion(schema);
-		
+
 		if (dbVersion == schemaVersion){
 			return false;
 		}
@@ -1553,12 +1615,89 @@ Zotero.Schema = new function(){
 			}
 			return true;
 		}
+
+		// MLZ: decommissioning this code use for very early MLZ migrations.
+		// It is not conceivable that instances of the early client schema are still in service.
+		//
+		//else if (dbVersion == 32 && schemaVersion == 31 && !Zotero.Schema.getDBVersion('multilingual')) {
+		//	_updateDBVersion(schema, schemaVersion);
+		//	return false;
+		//}
 		
 		throw ("Zotero '" + schema + "' DB version (" + dbVersion
 			+ ") is newer than SQL file (" + schemaVersion + ")");
 	}
 	
 	
+	function _tableExists (tablename) {
+		var sql = "SELECT count(*) FROM sqlite_master WHERE name=? AND type='table'";
+		if (Zotero.DB.valueQuery(sql, [tablename])) {
+			return true;
+		} else {
+			return false;
+		}
+	};
+
+	function _populateJurisdictions () {
+		var jObj = JSON.parse(Zotero.File.getContentsFromURL("resource://zotero/schema/jurisdictions.json"));
+		var jurisdictionsSql = "INSERT INTO jurisdictions VALUES (?, ?, ?, ?);";
+		var courtNamesSql = "INSERT INTO courtNames VALUES (?, ?);";
+		var countryCourtLinksSql = "INSERT INTO countryCourtLinks VALUES (?, ?, ?);";
+		var courtsSql = "INSERT INTO courts VALUES(?, ?, ?);";
+		var courtJurisdictionLinksSql = "INSERT INTO courtJurisdictionLinks VALUES (?, ?);";
+		
+		var getJurisdictionData = function getJurisdictionData(jObj) {
+			this.jObj = jObj;
+			this.jurisdictionIdLst = [];
+			this.jurisdictionNameLst = [];
+		}
+		
+		getJurisdictionData.prototype.run = function (idx) {
+			var elem = this.jObj.jurisdictions[idx];
+			this.jurisdictionIdLst.push(elem[0]);
+			this.jurisdictionNameLst.push(elem[1]);
+			if (elem.length === 3) {
+			   this.run(elem[2]);
+			}
+			jIdLst = this.jurisdictionIdLst.slice();
+			jIdLst.reverse();
+			jNameLst = this.jurisdictionNameLst.slice();
+			jNameLst.reverse();
+			return [jIdLst.join(":"), jNameLst.join("|")];
+		}
+
+		for (var i=0,ilen=jObj.jurisdictions.length;i<ilen;i++) {
+			var entry = jObj.jurisdictions[i];
+			if (entry[2]) {
+				var jurisdictionSpider = new getJurisdictionData(jObj);
+				var jurisdictionData = jurisdictionSpider.run(entry[2]);
+				var entryZero = jurisdictionData[0] + ":" + entry[0];
+				var entryOne = jurisdictionData[1] + "|" + entry[1];
+				var segmentCount = entryOne.split("|").length;
+				Zotero.DB.query(jurisdictionsSql, [i, entryZero, entryOne, segmentCount]);
+			} else {
+				var segmentCount = entry[1].split("|").length;
+				Zotero.DB.query(jurisdictionsSql, [i, entry[0], entry[1], segmentCount])
+			}
+		}
+		for (var i=0,ilen=jObj.courtNames.length;i<ilen;i++) {
+			var entry = jObj.courtNames[i];
+			Zotero.DB.query(courtNamesSql, [i, entry]);
+		}
+		for (var i=0,ilen=jObj.countryCourtLinks.length;i<ilen;i++) {
+			var entry = jObj.countryCourtLinks[i];
+			Zotero.DB.query(countryCourtLinksSql, [i, entry[0], entry[1]]);
+		}
+		for (var i=0,ilen=jObj.courts.length;i<ilen;i++) {
+			var entry = jObj.courts[i];
+			Zotero.DB.query(courtsSql, [i, entry[0], entry[1]]);
+		}
+		for (var i=0,ilen=jObj.courtJurisdictionLinks.length;i<ilen;i++) {
+			var entry = jObj.courtJurisdictionLinks[i];
+			Zotero.DB.query(courtJurisdictionLinksSql, [entry[0], entry[1]]);
+		}
+	}
+
 	/**
 	* Process the response from the repository
 	**/
@@ -1918,23 +2057,25 @@ Zotero.Schema = new function(){
 		return;
 	}
 	
-	
+
 	/*
 	 * Migrate user data schema from an older version, preserving data
 	 */
 	function _migrateUserDataSchema(fromVersion){
+		// MLZ: get multilingual database version record (i.e. multilingual fromVersion)
+		var dbMultilingualVersion = Zotero.Schema.getDBVersion('multilingual');
+		var mlzSchemaEntryLevel = Zotero.Schema.getDBVersion('mlzSchemaEntryLevel');
 		var toVersion = _getSchemaSQLVersion('userdata');
-		
-		// Only upgrades through version 76 are handled here
-		toVersion = Math.min(76, toVersion);
-		
+
 		if (fromVersion==toVersion){
 			return false;
 		}
 		
 		// 77 is a hack for full-text content syncing
 		if (fromVersion == 77) {
-			return false;
+			// Uncommenting this will cause MLZ to superfluously request
+			// an upgrade every time Firefox is started.
+			//return false;
 		}
 		else if (fromVersion > toVersion) {
 			throw new Error("Zotero user data DB version is newer than SQL file "
@@ -1942,6 +2083,7 @@ Zotero.Schema = new function(){
 		}
 		
 		Zotero.debug('Updating user data tables from version ' + fromVersion + ' to ' + toVersion);
+
 		
 		Zotero.DB.beginTransaction();
 		
@@ -1950,6 +2092,7 @@ Zotero.Schema = new function(){
 			//
 			// Each block performs the changes necessary to move from the
 			// previous revision to that one.
+
 			for (var i=fromVersion + 1; i<=toVersion; i++){
 				if (i==1){
 					Zotero.DB.query("DELETE FROM version WHERE schema='schema'");
@@ -2728,6 +2871,7 @@ Zotero.Schema = new function(){
 					for each(var row in rows) {
 						keys[row.itemID] = row.key;
 					}
+
 					if (storage37.exists()) {
 						var entries = storage37.directoryEntries;
 						entries.QueryInterface(Components.interfaces.nsIDirectoryEnumerator);
@@ -2753,8 +2897,7 @@ Zotero.Schema = new function(){
 									file: file,
 									key: keys[id]
 								});
-							}
-							else {
+							} else {
 								orphanQueue.push({
 									id: id,
 									file: file
@@ -3395,7 +3538,7 @@ Zotero.Schema = new function(){
 				if (i==73) {
 					Zotero.DB.query("UPDATE savedSearchConditions SET condition='libraryCatalog' WHERE condition='repository'");
 				}
-				
+
 				// 2.1b1
 				if (i==74) {
 					Zotero.DB.query("CREATE INDEX deletedItems_dateDeleted ON deletedItems(dateDeleted)");
@@ -3411,6 +3554,519 @@ Zotero.Schema = new function(){
 					Zotero.DB.query("DELETE FROM itemTags WHERE tagID IS NULL");
 				}
 				
+				// MLZ: multilingual controls updates from here
+
+				// Do this one only if DB may contain extra-field-hack entries
+				// Otherwise, skip it
+				if (i==10000 && dbMultilingualVersion==1) {
+
+					// Date field IDs
+					var dateFieldIDs = [14, 27, 52, 96, 100, 121, 1265, 1266, 1268, 1272, 1277, 1278, 1279];
+
+					// Mapping table for type conversions
+					var typeMap = {};
+					typeMap["classic"] = {
+						newItemTypeID:1264,
+						oldItemTypeID:2,
+						fieldRemap:{},
+						fieldRemove:[3,4,6,8,11,30,45],
+						creatorRemap:{},
+						creatorRemove:[3,5]
+					};
+					typeMap["periodical"] = {
+						newItemTypeID:2,
+						oldItemTypeID:2,
+						fieldRemap:{},
+						fieldRemove:[],
+						creatorRemap:{},
+						creatorRemove:[]
+							};
+					typeMap["treaty"] = {
+						newItemTypeID:1262,
+						oldItemTypeID:20,
+						fieldRemap:{
+							"100":14,
+							"112":110,
+							"36":43,
+							"55":4
+						},
+						fieldRemove:[36,40,42,101],
+						creatorRemap:{},
+						creatorRemove:[]
+					};
+					typeMap["gazette"] = {
+						newItemTypeID:1261,
+						oldItemTypeID:20,
+						fieldRemap:{},
+						fieldRemove:[],
+						creatorRemap:{},
+						creatorRemove:[]
+					};
+					typeMap["regulation"] = {
+						newItemTypeID:1263,
+						oldItemTypeID:20,
+						fieldRemap:{},
+						fieldRemove:[],
+						creatorRemap:{},
+						creatorRemove:[]
+					};
+
+					// Mapping table for field and creator inserts
+					var typeFieldsMap = {}
+					// classic
+					typeFieldsMap["1264"] = {
+						fieldInsert: {"volume":4},
+						creatorInsert: {}
+					};
+					// treaty
+					typeFieldsMap["1262"] = {
+						fieldInsert: {
+							"container-title":43,
+							"volume":4,
+							"page":10,
+							"available-date":1278,
+							"original-date":1279,
+							"event-date":1277
+						},
+						creatorInsert: {}
+					};
+					// regulation
+					typeFieldsMap["1263"] = {
+						fieldInsert: {
+							"jurisdiction":1261,
+							"publisher":8,
+							"issued":1268
+						},
+						creatorInsert: {}
+					};
+					// gazette
+					typeFieldsMap["1261"] = {
+						fieldInsert: {
+							"jurisdiction":1261,
+							"volume":55
+						},
+						creatorInsert: {}
+					};
+					// report
+					typeFieldsMap["15"] = {
+						fieldInsert: {
+							"jurisdiction":1261
+						},
+						creatorInsert: {}
+					};
+					// podcast
+					typeFieldsMap["31"] = {
+						fieldInsert: {
+							"issued":14,
+							"publisher":8
+						},
+						creatorInsert: {}
+					};
+					// audioRecording
+					typeFieldsMap["26"] = {
+						fieldInsert: {
+							"container-title":1273,
+							"issued":14,
+							"original-date":1272,
+							"publisher":8,
+							"section":1274
+						},
+						creatorInsert: {}
+					};
+					// statute
+					typeFieldsMap["20"] = {
+						fieldInsert: {
+							"jurisdiction":1261,
+							"collection-number":1270,
+							"genre":1269,
+							"issued":1268,
+							"publisher":8,
+							"volume":55
+						},
+						creatorInsert: {}
+					};
+					// case
+					typeFieldsMap["17"] = {
+						fieldInsert: {
+							"jurisdiction":1261,
+							"archive":123,
+							"archive_location":19,
+							"collection-number":1267,
+							"event-place":7,
+							"genre":1271,
+							"issue":5,
+							"issued":1268,
+							"original-date":14
+						},
+						creatorInsert: {}
+					};
+					// patent
+					typeFieldsMap["19"] = {
+						fieldInsert: {
+							"jurisdiction":1261,
+							"original-date":1266
+						},
+						creatorInsert: {"recipient":16}
+					};
+					// artwork
+					typeFieldsMap["12"] = {
+						fieldInsert: {
+							"container-title":91
+						},
+						creatorInsert: {}
+					};
+					// hearing
+					typeFieldsMap["18"] = {
+						fieldInsert: {
+							"jurisdiction":1261,
+							"collection-number":1262,
+							"event":1263,
+							"genre":1264,
+							"archive_location":19,
+							"container-title":43,
+							"chapter-number":1275
+						},
+						creatorInsert: {}
+					};
+					// bill
+					typeFieldsMap["16"] = {
+						fieldInsert: {
+							"jurisdiction":1261,
+							"event":1263,
+							"collection-number":1262,
+							"genre":1264,
+							"archive_location":19,
+							"container-title":43,
+							"volume":94
+						},
+						creatorInsert: {
+							"author":12,
+							"original-author":12
+						}
+					};
+					// newspaperArticle
+					typeFieldsMap["6"] = {
+						fieldInsert: {
+							"jurisdiction":1261,
+							"original-date":1265
+						},
+						creatorInsert: {}
+					};
+					// Do not touch records that have already been converted
+					var extras = Zotero.DB.query("SELECT itemID,libraryID,key,itemTypeID,value FROM items NATURAL JOIN itemData NATURAL JOIN itemDataValues WHERE fieldID=22 AND value LIKE '%{:%' AND NOT value LIKE 'mlzsync1:%'");
+					var t;
+					for each(row in extras) {
+						var itemTypeID = row.itemTypeID;
+						// Fetch the Extra field content
+						var extra = row.value;
+						var extraSupp = "";
+						var lst = extra.split(/({:[-_a-z]+:[^}]+})/);
+						for (var j=lst.length-2; j>-1; j += -2) {
+							var m = lst[j].match(/{:([-_a-z]+):\s*([^}]+)\s*}/);
+							var cslKey = m[1];
+							var val = m[2];
+
+							// If a type is specified, convert the item, convert fields, and remove unused fields to Extra
+							if (typeMap[m[2]]) {
+								t = typeMap[m[2]];
+								itemTypeID = t.newItemTypeID;
+								// Change item type ID
+								Zotero.DB.query("UPDATE items SET itemTypeID=? WHERE itemID=? AND itemTypeID=?",[t.newItemTypeID,row.itemID,t.oldItemTypeID]);
+								// Change field IDs
+								for (var oFieldID in t.fieldRemap) {
+									Zotero.DB.query("UPDATE itemData SET fieldID=? WHERE itemID=? AND fieldID=?",[t.fieldRemap[oFieldID],row.itemID,oFieldID]);
+								}
+								// Change creator type IDs
+								for (var oCreatorTypeID in t.creatorRemap) {
+
+									Zotero.DB.query("UPDATE itemCreators SET creatorTypeID=? WHERE itemID=? AND creatorTypeID=?",[t.creatorRemap[oCreatorTypeID],row.itemID,oCreatorTypeID]);
+								}
+								// Remove creators (just a variation on remap in this case)
+								for each(var oCreatorTypeID in t.creatorRemove) {
+									Zotero.DB.query("UPDATE itemCreators SET creatorTypeID=? WHERE itemID=? AND creatorTypeID=?",[2,row.itemID,oCreatorTypeID]);
+								}
+								// Remove fields to Extra
+								var fieldIDs = [];
+								var fieldSQL = [];
+								for each(var fieldID in t.fieldRemove) {
+									fieldIDs.push(fieldID);
+									fieldSQL.push('?');
+								}
+								if (fieldIDs.length) {
+									fieldSQL = fieldSQL.join(",")
+									var sql = "SELECT itemID,fieldName,fieldID,value FROM items NATURAL JOIN itemData NATURAL JOIN fields NATURAL JOIN itemDataValues WHERE itemID=? AND itemTypeID=? AND fieldID IN ("+fieldSQL+")";
+									var removeFields = Zotero.DB.query(sql,[row.itemID,t.newItemTypeID].concat(fieldIDs));
+									for (var j in removeFields) {
+										var removeFieldInfo = removeFields[j];
+										// Append the data to the Extra field content
+										extraSupp = extraSupp + " [" + Zotero.getString("itemFields."+removeFieldInfo.fieldName)+": "+removeFieldInfo.value+"]";
+										// Remove field row
+										Zotero.DB.query("DELETE FROM itemData WHERE itemID=? AND fieldID=?",[row.itemID,removeFieldInfo.fieldID]);
+									}
+								}
+								// Removing type hack code from Extra
+								var m = extra.match(/(.*){:type:[^}]+}\s*(.*)/);
+								if (m) {
+									extra = m[1] + m[2];
+								}
+							}
+						}
+						for (var j=lst.length-2; j>-1; j += -2) {
+							var m = lst[j].match(/{:([-_a-z]+):\s*([^}]+)\s*}/);
+							var cslKey = m[1];
+							var cslKeyVal = m[2];
+
+							if (typeFieldsMap[itemTypeID]) {
+								t = typeFieldsMap[itemTypeID];
+								if (t.fieldInsert[cslKey]) {
+
+									if (dateFieldIDs.indexOf(t.fieldInsert[cslKey]) > -1) {
+										if (!cslKeyVal.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2} .*/)) {
+											cslKeyVal = "0000-00-00 "+cslKeyVal;
+										}
+									}
+									var hasFieldData = Zotero.DB.valueQuery("SELECT COUNT(*) FROM itemData WHERE itemID=? AND fieldID=?",[row.itemID,t.fieldInsert[cslKey]]);
+									if (hasFieldData) {
+										// Append to field? Or abort and leave on Extra? The latter, for now.
+									} else {
+										var hasDataValue = Zotero.DB.valueQuery("SELECT COUNT(*) FROM itemDataValues WHERE value=?",[cslKeyVal]);
+										if (!hasDataValue) {
+											Zotero.DB.query("INSERT INTO itemDataValues VALUES (NULL,?)",[cslKeyVal]);
+										}
+										var valueID = Zotero.DB.valueQuery("SELECT valueID FROM itemDataValues WHERE value=?",[cslKeyVal]);
+										Zotero.DB.query("INSERT INTO itemData VALUES (?, ?, ?)",[row.itemID,t.fieldInsert[cslKey],valueID]);
+										// Remove variable hack code from Extra
+										// XXX Build a compiled regexp with the variable name
+										var rex = new RegExp("(.*){:" + cslKey + ":[^}]+}\s*(.*)");
+										var m = extra.match(rex);
+										if (m) {
+											extra = m[1] + m[2];
+										}
+									}
+								}
+								if (t.creatorInsert[cslKey]) {
+									// Split the value to firstName and lastName and set fieldMode to 1 or 0
+									var l = cslKeyVal.split(/\s*\|\|\s*/);
+									var lastName = l[0];
+									var firstName = l[1] ? l[1] : "";
+									if (!lastName) {
+										continue;
+									}
+									var fieldMode = 1;
+									if (firstName) {
+										fieldMode = 0;
+									}
+									// Look in creatorData for an entry with matching firstName and lastName, or matching combined
+									var hasNameData;
+									if (fieldMode) {
+										hasNameData = Zotero.DB.valueQuery("SELECT COUNT(*) FROM creatorData WHERE firstName IS NULL AND lastName=? AND fieldMode=?",[lastName,fieldMode]);
+									} else {
+										hasNameData = Zotero.DB.valueQuery("SELECT COUNT(*) FROM creatorData WHERE firstName=? AND lastName=? AND fieldMode=?",[firstName,lastName,fieldMode]);
+									}
+									if (!hasNameData) {
+										if (fieldMode === 1) {
+											Zotero.DB.query("INSERT INTO creatorData VALUES (NULL, NULL, ?, NULL, ?, NULL)",[lastName,fieldMode]);
+										} else {
+											Zotero.DB.query("INSERT INTO creatorData VALUES (NULL, ?, ?, NULL, ?, NULL)",[firstName,lastName,fieldMode]);
+										}
+									}
+									// Insert value if necessary and get creatorDataID
+									var creatorDataID;
+									if (fieldMode === 1) {
+										creatorDataID = Zotero.DB.valueQuery("SELECT creatorDataID FROM creatorData WHERE firstName IS NULL AND lastName=? AND fieldMode=?",[lastName,fieldMode]);
+									} else {
+										creatorDataID = Zotero.DB.valueQuery("SELECT creatorDataID FROM creatorData WHERE firstName=? AND lastName=? AND fieldMode=?",[firstName,lastName,fieldMode]);
+									}
+									// Look in creators IN THIS LIBRARY for one carrying this creatorDataID
+									var creatorID;
+									if (!row.libraryID) {
+										creatorID = Zotero.DB.valueQuery("SELECT creatorID FROM creators WHERE libraryID IS NULL AND creatorDataID=?",[creatorDataID])
+									} else {
+										creatorID = Zotero.DB.valueQuery("SELECT creatorID FROM creators WHERE libraryID=? AND creatorDataID=?",[row.libraryID,creatorDataID])
+									}
+									// Insert value if necessary and get creatorID
+									if (!creatorID) {
+										var creatorKey = Zotero.ID.getKey();
+										if (!row.libraryID) {
+											Zotero.DB.query("INSERT INTO creators VALUES (NULL, ?, ?, ?, ?, NULL, ?)",[creatorDataID,Zotero.DB.transactionDateTime,Zotero.DB.transactionDateTime,Zotero.DB.transactionDateTime,creatorKey]);
+										} else {
+											Zotero.DB.query("INSERT INTO creators VALUES (NULL, ?, ?, ?, ?, ?, ?)",[creatorDataID,Zotero.DB.transactionDateTime,Zotero.DB.transactionDateTime,Zotero.DB.transactionDateTime,row.libraryID,creatorKey]);
+										}
+									}
+									var creatorID;
+									if (!row.libraryID) {
+										creatorID = Zotero.DB.valueQuery("SELECT creatorID FROM creators WHERE creatorDataID=? AND libraryID IS NULL",[creatorDataID]);
+									} else {
+										creatorID = Zotero.DB.valueQuery("SELECT creatorID FROM creators WHERE creatorDataID=? AND libraryID=?",[creatorDataID,row.libraryID]);
+									}
+									
+									// Look in itemCreators on this itemID for creatorID with the same creatorTypeID
+									var hasItemCreator = Zotero.DB.valueQuery("SELECT COUNT(*) FROM itemCreators WHERE itemID=? AND creatorID=? AND creatorTypeID=?",[row.itemID,creatorID,t.creatorInsert[cslKey]]);
+									// If it's not already in there, insert it, incrementing the orderIndex
+									if (!hasItemCreator) {
+										var maxIndex = Zotero.DB.valueQuery("SELECT MAX(orderIndex) FROM itemCreators WHERE itemID=?",[row.itemID]);
+										if ("number" === typeof maxIndex) {
+											maxIndex += 1;
+											Zotero.DB.query("INSERT INTO itemCreators VALUES (?, ?, ?, ?)",[row.itemID,creatorID,t.creatorInsert[cslKey],maxIndex]);
+										} else {
+											Zotero.DB.query("INSERT INTO itemCreators VALUES (?, ?, ?, ?)",[row.itemID,creatorID,t.creatorInsert[cslKey],0]);
+										}
+									}
+									// Remove variable hack code from Extra
+									// XXX Build a compiled regexp with the variable name
+									var rex = new RegExp("(.*){:" + cslKey + ":[^}]+}\s*(.*)");
+									var m = extra.match(rex);
+									if (m) {
+										extra = m[1] + m[2];
+									}
+								}
+							}
+						}
+						// Remove actioned items from Extra, and append the data from those that were removed.
+						extra += extraSupp;
+						if (extra !== row.value) {
+							if (extra) {
+								// Get a data ID for the new content
+								var hasValueID = Zotero.DB.valueQuery("SELECT COUNT(*) FROM itemDataValues WHERE value=?",[extra]);
+								var valueID;
+								if (!hasValueID) {
+									Zotero.DB.query("INSERT INTO itemDataValues VALUES (NULL, ?)",[extra]);
+								}
+								valueID = Zotero.DB.valueQuery("SELECT valueID FROM itemDataValues WHERE value=?",[extra]);
+								// Set the data ID on itemData
+								Zotero.DB.query("UPDATE itemData SET valueID=? WHERE itemID=? AND fieldID=?",[valueID,row.itemID,22]);
+								
+							} else {
+								Zotero.DB.query("DELETE from itemData WHERE itemID=? AND fieldID=?",[row.itemID,22]);
+							}
+							// Mark actioned items with current timestamp to force sync-up (if editable)
+							Zotero.DB.query("UPDATE items SET clientDateModified=? WHERE itemID=? AND (libraryID IS NULL OR libraryID IN (SELECT libraryID FROM groups WHERE editable=1))",[Zotero.DB.transactionDateTime,row.itemID]);
+						}
+					}
+					Zotero.wait();
+
+					// Force update of any entries with multilingual content (if editable)
+					var sql = "SELECT itemID FROM items"
+						+ " WHERE"
+						+ " itemID in (SELECT DISTINCT itemID FROM itemDataAlt) OR"
+						+ " itemID in (SELECT DISTINCT itemID FROM itemCreatorsAlt)";
+					var localMulti = Zotero.DB.query(sql);
+					for each(row in localMulti) {
+						Zotero.DB.query("UPDATE items SET clientDateModified=? WHERE itemID=? AND (libraryID IS NULL OR libraryID IN (SELECT libraryID FROM groups WHERE editable=1))",[Zotero.DB.transactionDateTime,row.itemID]);
+					}
+					Zotero.wait();
+					_updateDBVersion('multilingual', 2);
+					Zotero.wait();
+
+				}
+
+				if (i==10000 && mlzSchemaEntryLevel && mlzSchemaEntryLevel < 77) {
+					Zotero.DB.query("CREATE TABLE IF NOT EXISTS syncedSettings (\n    setting TEXT NOT NULL,\n    libraryID INT NOT NULL,\n    value NOT NULL,\n    version INT NOT NULL DEFAULT 0,\n    synced INT NOT NULL DEFAULT 0,\n    PRIMARY KEY (setting, libraryID)\n)");
+					Zotero.DB.query("INSERT OR IGNORE INTO syncObjectTypes VALUES (7, 'setting')");
+					Zotero.wait();
+				}
+
+				if (i==10000 && mlzSchemaEntryLevel && mlzSchemaEntryLevel < 78) {
+					Zotero.DB.query("CREATE INDEX IF NOT EXISTS creatorData_name ON creatorData(lastName, firstName)");
+				}
+
+				if (i==10001) {
+					
+					var sql = "SELECT IG.name AS itemgroup,CG.name AS creatorgroup,IDV.value AS title,CD.lastName AS name," +
+						"ICA.itemID AS itemID,ICA.creatorID AS creatorID,ICA.creatorTypeID AS creatorTypeID,ICA.orderIndex AS orderIndex," +
+						"C.creatorDataID AS creatorDataID,I.libraryID AS libraryID,ICA.languageTag AS languageTag " +
+						"FROM " +
+						"itemCreatorsAlt ICA " +
+						"JOIN items I ON I.itemID=ICA.itemID " +
+						"JOIN creators C ON ICA.creatorID=C.creatorID " +
+						"JOIN creatorData CD ON C.creatorDataID=CD.creatorDataID " +
+						"JOIN itemData ID ON I.itemID=ID.itemID " +
+						"JOIN itemDataValues IDV ON ID.valueID=IDV.valueID " +
+						"LEFT JOIN groups IG ON I.libraryID=IG.libraryID " +
+						"LEFT JOIN groups CG ON C.libraryID=CG.libraryID " +
+						"WHERE ((I.libraryID IS NULL AND C.libraryID IS NOT NULL) " +
+						"OR (I.libraryID IS NOT NULL AND C.libraryID IS NULL) " +
+						"OR (I.libraryID IS NOT NULL AND C.libraryID IS NOT NULL AND I.libraryID!=C.libraryID)) " +
+						"AND ID.fieldID IN (110,112,113) ORDER BY IG.name,CG.name";
+					var res = Zotero.DB.query(sql);
+
+					for (var j=0,jlen=res.length;j<jlen;j+=1) {
+						// Try to find an existing creator with the correct data
+						var sql = "SELECT creatorID FROM creators " +
+							"WHERE creatorDataID=? AND libraryID=?";
+						var sqlParams = [
+							res[j].creatorDataID,
+							res[j].libraryID
+						]
+						var newCreatorID = Zotero.DB.valueQuery(sql, sqlParams);
+						// If none is found, create one
+						if (!newCreatorID) {
+							var key = Zotero.ID.getKey();
+							sql = "INSERT INTO creators VALUES (NULL,?,?,?,?,?,?)";
+							sqlParams = [
+								res[j].creatorDataID,
+								Zotero.DB.transactionDateTime,
+								Zotero.DB.transactionDateTime,
+								Zotero.DB.transactionDateTime,
+								res[j].libraryID,
+								key
+							]
+							Zotero.DB.query(sql, sqlParams);
+							sql = "SELECT creatorID FROM creators WHERE key=? AND libraryID=?";
+							sqlParams = [
+								key,
+								res[j].libraryID
+							]
+							newCreatorID = Zotero.DB.valueQuery(sql, sqlParams);
+						}
+						// Point to the correct creator object
+						sql = "UPDATE itemCreatorsAlt SET creatorID=? WHERE itemID=? AND orderIndex=? AND languageTag=?";
+						sqlParams = [
+							newCreatorID,
+							res[j].itemID,
+							res[j].orderIndex,
+							res[j].languageTag
+						];
+						Zotero.DB.query(sql, sqlParams);
+
+						// Flag the item as updated so it will sync (?)
+						sql = "UPDATE items SET clientDateModified=? WHERE itemID=?";
+						sqlParams = [
+							Zotero.DB.transactionDateTime,
+							res[j].itemID
+						];
+						Zotero.DB.query(sql, sqlParams);
+					}
+				}
+				if (i==10002) {
+					// Get conversion mapping JSON
+					var conversionMap = JSON.parse(Zotero.File.getContentsFromURL("resource://zotero/schema/jurisdiction-map-10002.json"));
+					for (var key in conversionMap) {
+						// get itemIDs from itemData
+						var sql = "SELECT itemID FROM itemData JOIN itemDataValues USING(valueID) WHERE value=?";
+						var sqlParams = [key];
+						var itemIDs = Zotero.DB.columnQuery(sql, sqlParams);
+						if (itemIDs && itemIDs.length) {
+							var sql = "SELECT valueID FROM itemDataValues WHERE value=?";
+							var sqlParams = [conversionMap[key]];
+							var newValueID = Zotero.DB.valueQuery(sql, sqlParams);
+							if (!newValueID) {
+								var insertSql = "INSERT INTO itemDataValues VALUES(NULL, ?)";
+								var sqlParams = [conversionMap[key]];
+								Zotero.DB.query(insertSql, sqlParams);
+								newValueID = Zotero.DB.valueQuery(sql, sqlParams);
+							}
+							for (var j=0,jlen=itemIDs.length;j<jlen;j++) {
+								var sql = "UPDATE itemData SET valueID=? WHERE itemID=? AND fieldID=?";
+								Zotero.DB.query(sql, [newValueID, itemIDs[j], 1261]);
+								// Delete old jurisdiction key
+								// XXX Can cause foreign key error. Let purge take care of it.
+								//var sql = "DELETE FROM itemDataValues WHERE value=?";
+								//Zotero.DB.query(sql, key);
+							}
+						}
+					}
+				}
 				Zotero.wait();
 			}
 			
@@ -3457,51 +4113,4 @@ Zotero.Schema = new function(){
 		
 		return true;
 	}
-	
-	
-	// TEMP
-	//
-	// TODO: Make this asynchronous, and make it block other SQLite
-	function _migrateUserDataSchemaSilent(fromVersion) {
-		var toVersion = _getSchemaSQLVersion('userdata2');
-		
-		if (!fromVersion) {
-			fromVersion = 76;
-		}
-		
-		if (fromVersion >= toVersion) {
-			return false;
-		}
-		
-		Zotero.debug('Updating user data tables from version ' + fromVersion + ' to ' + toVersion);
-		
-		Zotero.DB.beginTransaction();
-		
-		try {
-			// Step through version changes until we reach the current version
-			//
-			// Each block performs the changes necessary to move from the
-			// previous revision to that one.
-			for (var i=fromVersion + 1; i<=toVersion; i++) {
-				if (i == 77) {
-					Zotero.DB.query("CREATE TABLE IF NOT EXISTS syncedSettings (\n    setting TEXT NOT NULL,\n    libraryID INT NOT NULL,\n    value NOT NULL,\n    version INT NOT NULL DEFAULT 0,\n    synced INT NOT NULL DEFAULT 0,\n    PRIMARY KEY (setting, libraryID)\n)");
-					Zotero.DB.query("INSERT OR IGNORE INTO syncObjectTypes VALUES (7, 'setting')");
-				}
-				
-				if (i == 78) {
-					Zotero.DB.query("CREATE INDEX IF NOT EXISTS creatorData_name ON creatorData(lastName, firstName)");
-				}
-			}
-			
-			_updateDBVersion('userdata2', toVersion);
-			
-			Zotero.DB.commitTransaction();
-		}
-		catch (e) {
-			Zotero.DB.rollbackTransaction();
-			throw(e);
-		}
-		
-		return true;
-	}
 }
