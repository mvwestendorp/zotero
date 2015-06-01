diff --git a/chrome/content/zotero/xpcom/data/items.js b/chrome/content/zotero/xpcom/data/items.js
index abc500e..bf2d19c 100644
--- a/chrome/content/zotero/xpcom/data/items.js
+++ b/chrome/content/zotero/xpcom/data/items.js
@@ -28,6 +28,7 @@
  * Primary interface for accessing Zotero items
  */
 Zotero.Items = new function() {
+	var _primaryFields;
 	Zotero.DataObjects.apply(this, ['item']);
 	this.constructor.prototype = new Zotero.DataObjects();
 	
@@ -39,6 +40,7 @@ Zotero.Items = new function() {
 	this.cacheFields = cacheFields;
 	this.erase = erase;
 	this.getFirstCreatorSQL = getFirstCreatorSQL;
+	this.getSortCreatorSQL = getSortCreatorSQL;
 	this.getSortTitle = getSortTitle;
 	
 	this.__defineGetter__('primaryFields', function () {
@@ -46,7 +48,7 @@ Zotero.Items = new function() {
 			_primaryFields = Zotero.DB.getColumns('items');
 			_primaryFields.splice(_primaryFields.indexOf('clientDateModified'), 1);
 			_primaryFields = _primaryFields.concat(
-				['firstCreator', 'numNotes', 'numAttachments', 'sourceItemID']
+				['firstCreator', 'numNotes', 'numAttachments', 'sortCreator', 'sourceItemID']
 			);
 		}
 		
@@ -61,9 +63,8 @@ Zotero.Items = new function() {
 	// Private members
 	var _cachedFields = [];
 	var _firstCreatorSQL = '';
+	var _sortCreatorSQL = '';
 	var _primaryFields = [];
-	var _emptyTrashIdleObserver = null;
-	var _emptyTrashTimer = null;
 	
 	
 	/*
@@ -422,6 +423,20 @@ Zotero.Items = new function() {
 			// All other operations are additive only and do not affect the,
 			// old item, which will be put in the trash
 			
+			// Add multilingual field segments to each field on master when none present
+			// true is for a shy merge (merge only if no multilingual data for target language)
+			item.multi.merge(otherItem, true);
+
+			// Add multilingual creator segments to each creator on master when none present
+			var creators = item.getCreators();
+			var otherCreators = otherItem.getCreators();
+			if (creators.length === otherCreators.length) {
+				for (var i = 0, ilen = creators.length; i < ilen; i += 1) {
+					// true is for a shy merge (merge only if no multilingual data for target language)
+					creators[i].multi.merge(item, i, otherCreators[i], true);
+				}
+			}
+
 			// Add collections to master
 			var collectionIDs = otherItem.getCollections();
 			for each(var collectionID in collectionIDs) {
@@ -612,7 +628,7 @@ Zotero.Items = new function() {
 		}
 		
 		var sql = "DELETE FROM itemDataValues WHERE valueID NOT IN "
-					+ "(SELECT valueID FROM itemData)";
+					+ "(SELECT valueID FROM itemData UNION SELECT valueID FROM itemDataAlt)";
 		Zotero.DB.query(sql);
 		
 		Zotero.Prefs.set('purge.items', false)
@@ -642,34 +658,72 @@ Zotero.Items = new function() {
 			") " +
 			"WHEN 0 THEN NULL " +
 			"WHEN 1 THEN (" +
-				"SELECT lastName FROM itemCreators IC NATURAL JOIN creators " +
+				"SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+						"LEFT JOIN " + 
+					   		"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+							   	"FROM itemCreatorsAlt " +
+						   			"NATURAL JOIN creators " +
 				"NATURAL JOIN creatorData " +
+								"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+				   		"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
 				"LEFT JOIN itemTypeCreatorTypes ITCT " +
 				"ON (IC.creatorTypeID=ITCT.creatorTypeID AND ITCT.itemTypeID=I.itemTypeID) " +
-				"WHERE itemID=I.itemID AND primaryField=1" +
+				"WHERE IC.itemID=I.itemID AND primaryField=1" +
 			") " +
 			"WHEN 2 THEN (" +
-				"SELECT " +
-				"(SELECT lastName FROM itemCreators IC NATURAL JOIN creators " +
+				"(SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+							"LEFT JOIN " + 
+								"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+									"FROM itemCreatorsAlt " +
+										"NATURAL JOIN creators " +
 				"NATURAL JOIN creatorData " +
+									"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+							"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
 				"LEFT JOIN itemTypeCreatorTypes ITCT " +
 				"ON (IC.creatorTypeID=ITCT.creatorTypeID AND ITCT.itemTypeID=I.itemTypeID) " +
-				"WHERE itemID=I.itemID AND primaryField=1 ORDER BY orderIndex LIMIT 1)" +
+				"WHERE IC.itemID=I.itemID AND primaryField=1 ORDER BY IC.orderIndex LIMIT 1) " +
 				" || ' " + localizedAnd + " ' || " +
-				"(SELECT lastName FROM itemCreators IC NATURAL JOIN creators " +
+				"(SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+							"LEFT JOIN " + 
+								"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+									"FROM itemCreatorsAlt " +
+										"NATURAL JOIN creators " +
 				"NATURAL JOIN creatorData " +
+									"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+							"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
 				"LEFT JOIN itemTypeCreatorTypes ITCT " +
 				"ON (IC.creatorTypeID=ITCT.creatorTypeID AND ITCT.itemTypeID=I.itemTypeID) " +
-				"WHERE itemID=I.itemID AND primaryField=1 ORDER BY orderIndex LIMIT 1,1)" +
+				"WHERE IC.itemID=I.itemID AND primaryField=1 ORDER BY IC.orderIndex LIMIT 1,1)" +
 			") " +
 			"ELSE (" +
-				"SELECT " +
-				"(SELECT lastName FROM itemCreators IC NATURAL JOIN creators " +
+				"(SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+							"LEFT JOIN " + 
+								"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+									"FROM itemCreatorsAlt " +
+										"NATURAL JOIN creators " +
 				"NATURAL JOIN creatorData " +
+									"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+							"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
 				"LEFT JOIN itemTypeCreatorTypes ITCT " +
 				"ON (IC.creatorTypeID=ITCT.creatorTypeID AND ITCT.itemTypeID=I.itemTypeID) " +
-				"WHERE itemID=I.itemID AND primaryField=1 ORDER BY orderIndex LIMIT 1)" +
-				" || ' " + localizedEtAl + "' " + 
+				"WHERE IC.itemID=I.itemID AND primaryField=1 ORDER BY IC.orderIndex LIMIT 1) " +
+				" || ' " + localizedEtAl + "' " +
 			") " +
 			"END, " +
 			
@@ -679,22 +733,63 @@ Zotero.Items = new function() {
 			") " +
 			"WHEN 0 THEN NULL " +
 			"WHEN 1 THEN (" +
-				"SELECT lastName FROM itemCreators NATURAL JOIN creators " +
+				"SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+						"LEFT JOIN " + 
+					   		"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+							   	"FROM itemCreatorsAlt " +
+						   			"NATURAL JOIN creators " +
 				"NATURAL JOIN creatorData " +
-				"WHERE itemID=I.itemID AND creatorTypeID IN (3)" +
+								"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+				   		"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
+				"WHERE IC.itemID=I.itemID AND creatorTypeID IN (3)" +
 			") " +
 			"WHEN 2 THEN (" +
-				"SELECT " +
-				"(SELECT lastName FROM itemCreators NATURAL JOIN creators NATURAL JOIN creatorData " +
-				"WHERE itemID=I.itemID AND creatorTypeID IN (3) ORDER BY orderIndex LIMIT 1)" +
+				"(SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+						"LEFT JOIN " + 
+					   		"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+							   	"FROM itemCreatorsAlt " +
+						   			"NATURAL JOIN creators " +
+					   				"NATURAL JOIN creatorData " +
+								"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+				   		"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
+				"WHERE IC.itemID=I.itemID AND creatorTypeID IN (3) ORDER BY IC.orderIndex LIMIT 1)" +
 				" || ' " + localizedAnd + " ' || " +
-				"(SELECT lastName FROM itemCreators NATURAL JOIN creators NATURAL JOIN creatorData " +
-				"WHERE itemID=I.itemID AND creatorTypeID IN (3) ORDER BY orderIndex LIMIT 1,1) " +
+				"(SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+						"LEFT JOIN " + 
+					   		"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+							   	"FROM itemCreatorsAlt " +
+						   			"NATURAL JOIN creators " +
+					   				"NATURAL JOIN creatorData " +
+								"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+				   		"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
+				"WHERE IC.itemID=I.itemID AND creatorTypeID IN (3) ORDER BY IC.orderIndex LIMIT 1,1)" +
 			") " +
 			"ELSE (" +
-				"SELECT " +
-				"(SELECT lastName FROM itemCreators NATURAL JOIN creators NATURAL JOIN creatorData " +
-				"WHERE itemID=I.itemID AND creatorTypeID IN (3) ORDER BY orderIndex LIMIT 1)" +
+				"(SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+						"LEFT JOIN " + 
+					   		"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+							   	"FROM itemCreatorsAlt " +
+						   			"NATURAL JOIN creators " +
+					   				"NATURAL JOIN creatorData " +
+								"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+				   		"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
+				"WHERE IC.itemID=I.itemID AND creatorTypeID IN (3) ORDER BY IC.orderIndex LIMIT 1)" +
 				" || ' " + localizedEtAl + "' " +
 			") " +
 			"END, " +
@@ -705,23 +800,64 @@ Zotero.Items = new function() {
 			") " +
 			"WHEN 0 THEN NULL " +
 			"WHEN 1 THEN (" +
-				"SELECT lastName FROM itemCreators NATURAL JOIN creators " +
+				"SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+						"LEFT JOIN " + 
+					   		"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+							   	"FROM itemCreatorsAlt " +
+						   			"NATURAL JOIN creators " +
 				"NATURAL JOIN creatorData " +
-				"WHERE itemID=I.itemID AND creatorTypeID IN (2)" +
+								"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+				   		"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
+				"WHERE IC.itemID=I.itemID AND creatorTypeID IN (2)" +
 			") " +
 			"WHEN 2 THEN (" +
-				"SELECT " +
-				"(SELECT lastName FROM itemCreators NATURAL JOIN creators NATURAL JOIN creatorData " +
-				"WHERE itemID=I.itemID AND creatorTypeID IN (2) ORDER BY orderIndex LIMIT 1)" +
+				"(SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+						"LEFT JOIN " + 
+					   		"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+							   	"FROM itemCreatorsAlt " +
+						   			"NATURAL JOIN creators " +
+					   				"NATURAL JOIN creatorData " +
+								"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+				   		"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
+				"WHERE IC.itemID=I.itemID AND creatorTypeID IN (2) ORDER BY IC.orderIndex LIMIT 1)" +
 				" || ' " + localizedAnd + " ' || " +
-				"(SELECT lastName FROM itemCreators NATURAL JOIN creators NATURAL JOIN creatorData " +
-				"WHERE itemID=I.itemID AND creatorTypeID IN (2) ORDER BY orderIndex LIMIT 1,1) " +
+				"(SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+						"LEFT JOIN " + 
+					   		"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+							   	"FROM itemCreatorsAlt " +
+						   			"NATURAL JOIN creators " +
+					   				"NATURAL JOIN creatorData " +
+								"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+				   		"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
+				"WHERE IC.itemID=I.itemID AND creatorTypeID IN (2) ORDER BY IC.orderIndex LIMIT 1,1)" +
 			") " +
 			"ELSE (" +
-				"SELECT " +
-				"(SELECT lastName FROM itemCreators NATURAL JOIN creators NATURAL JOIN creatorData " +
-				"WHERE itemID=I.itemID AND creatorTypeID IN (2) ORDER BY orderIndex LIMIT 1)" +
-				" || ' " + localizedEtAl + "' " + 
+				"(SELECT COALESCE(lastNameAlt,lastName) AS lastName FROM itemCreators IC " +
+					"NATURAL JOIN (SELECT itemID,orderIndex,lastName " +
+						"FROM itemCreators " +
+							"NATURAL JOIN creators " +
+							"NATURAL JOIN creatorData) C " +
+						"LEFT JOIN " + 
+					   		"(SELECT itemID,orderIndex,lastName AS lastNameAlt " +
+							   	"FROM itemCreatorsAlt " +
+						   			"NATURAL JOIN creators " +
+					   				"NATURAL JOIN creatorData " +
+								"WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroDisplay')) A " +
+				   		"ON A.itemID=C.itemID AND A.orderIndex=C.orderIndex " +
+				"WHERE IC.itemID=I.itemID AND creatorTypeID IN (2) ORDER BY IC.orderIndex LIMIT 1)" +
+				" || ' " + localizedEtAl + "' " +
 			") " +
 			"END" +
 		") AS firstCreator";
@@ -731,6 +867,79 @@ Zotero.Items = new function() {
 	}
 	
 	
+	function getSortCreatorSQL() {
+		if (_sortCreatorSQL) {
+			return _sortCreatorSQL;
+		}
+
+		// OOOOO: This should just get up to three names, and bang them
+		// together in a single string, with no spaces.  Last name, first name,
+		// last name ...
+
+		// OOOOO: Prefers a specific language from itemCreatorsAlt, falling back to
+		// creators if it's not found.
+		
+		var sql = "COALESCE(" +
+			"(SELECT lastName FROM itemCreators IC " +
+			  "NATURAL JOIN " +
+			    "(SELECT C.creatorID,COALESCE(A.lastName,C.lastName) AS lastName " +
+			        "FROM (SELECT creatorID,lastName FROM creators " +
+			          "NATURAL JOIN creatorData) C " +
+			        "LEFT JOIN (SELECT creatorID,lastName FROM itemCreatorsAlt " +
+			          "NATURAL JOIN creators " +
+			          "WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroSort')) A " +
+			        "ON C.creatorID=A.creatorID) " +
+			  "LEFT JOIN itemTypeCreatorTypes ITCT ON IC.creatorTypeID=ITCT.creatorTypeID " +
+			"WHERE ITCT.itemTypeID=I.itemTypeID " +
+			  "AND itemID=I.itemID " +
+			  "AND itemID=IC.itemID " +
+			  "AND ITCT.primaryField=1 " +
+			"ORDER BY orderIndex LIMIT 1)," +
+			// Then for editors
+			"(SELECT lastName FROM itemCreators IC " +
+			  "NATURAL JOIN " +
+			    "(SELECT C.creatorID,COALESCE(A.lastName,C.lastName) AS lastName " +
+			        "FROM (SELECT creatorID,lastName FROM creators " +
+			          "NATURAL JOIN creatorData) C " +
+			        "LEFT JOIN (SELECT creatorID,lastName FROM itemCreatorsAlt " +
+			          "NATURAL JOIN creators " +
+			          "WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroSort')) A " +
+			        "ON C.creatorID=A.creatorID) " +
+			  "LEFT JOIN itemTypeCreatorTypes ITCT ON IC.creatorTypeID=ITCT.creatorTypeID " +
+			"WHERE ITCT.itemTypeID=I.itemTypeID " +
+			  "AND itemID=I.itemID " +
+			  "AND itemID=IC.itemID " +
+			  "AND ITCT.creatorTypeID in (3) " +
+			"ORDER BY orderIndex LIMIT 1)," +
+
+			// And finally for contributors
+			"(SELECT lastName FROM itemCreators IC " +
+			  "NATURAL JOIN " +
+			    "(SELECT C.creatorID,COALESCE(A.lastName,C.lastName) AS lastName " +
+			        "FROM (SELECT creatorID,lastName FROM creators " +
+			          "NATURAL JOIN creatorData) C " +
+			        "LEFT JOIN (SELECT creatorID,lastName FROM itemCreatorsAlt " +
+			          "NATURAL JOIN creators " +
+			          "WHERE languageTag in (SELECT tag FROM zlsPreferences WHERE param='zoteroSort')) A " +
+			        "ON C.creatorID=A.creatorID) " +
+			  "LEFT JOIN itemTypeCreatorTypes ITCT ON IC.creatorTypeID=ITCT.creatorTypeID " +
+			"WHERE ITCT.itemTypeID=I.itemTypeID " +
+			  "AND itemID=I.itemID " +
+			  "AND itemID=IC.itemID " +
+			  "AND ITCT.creatorTypeID in (2) " +
+			"ORDER BY orderIndex LIMIT 1)" +
+
+	
+   		") AS sortCreator";
+		
+		_sortCreatorSQL = sql;
+		return sql;
+	}
+
+
 	function getSortTitle(title) {
 		if (!title) {
 			return '';
@@ -755,10 +980,11 @@ Zotero.Items = new function() {
 			+ "(SELECT COUNT(*) FROM itemAttachments IA WHERE sourceItemID=I.itemID AND "
 			+ "IA.itemID NOT IN (SELECT itemID FROM deletedItems)) AS numAttachments, "
 			+ "(CASE I.itemTypeID WHEN 14 THEN (SELECT sourceItemID FROM itemAttachments IA WHERE IA.itemID=I.itemID) "
-			+ "WHEN 1 THEN (SELECT sourceItemID FROM itemNotes INo WHERE INo.itemID=I.itemID) END) AS sourceItemID "
-			+ 'FROM items I WHERE 1';
+			+ "WHEN 1 THEN (SELECT sourceItemID FROM itemNotes INo WHERE INo.itemID=I.itemID) END) AS sourceItemID, "
+			+ getSortCreatorSQL()
+			+ ' FROM items I WHERE 1';
 		if (arguments[0]) {
-			sql += ' AND I.itemID IN (' + Zotero.join(arguments[0], ',') + ')';
+			sql += ' AND I.itemID IN (' + Zotero.join(args, ',') + ')';
 		}
 		var itemsRows = Zotero.DB.query(sql),
 			itemIDs = {};
@@ -788,7 +1014,7 @@ Zotero.Items = new function() {
 			}
 			
 			_cachedFields = ['itemID', 'itemTypeID', 'dateAdded', 'dateModified',
-				'firstCreator', 'numNotes', 'numAttachments', 'sourceItemID', 'numChildren'];
+				'firstCreator', 'numNotes', 'numAttachments', 'sourceItemID', 'numChildren', 'sortCreator'];
 			this._reloadCache = false;
 		}
 	}
