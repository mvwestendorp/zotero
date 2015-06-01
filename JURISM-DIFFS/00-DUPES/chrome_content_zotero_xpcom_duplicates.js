diff --git a/chrome/content/zotero/xpcom/duplicates.js b/chrome/content/zotero/xpcom/duplicates.js
index 6a990a6..74af1e2 100644
--- a/chrome/content/zotero/xpcom/duplicates.js
+++ b/chrome/content/zotero/xpcom/duplicates.js
@@ -230,6 +230,31 @@ Zotero.Duplicates.prototype._findDuplicates = function () {
 		processRows();
 	}
 	
+	// For legal types we ignore the title but we're fussy about other stuff
+	//
+	// 15 = section
+	// 36 = code
+	// 43 = reporter
+	// 44 = court
+	// 55 = codeNumber
+	// 60 = number
+	// 93 = billNumber
+	// 94 = codeVolume
+	// 97 = reporterVolume
+	// 98 = firstPage
+	// 101 = publicLawNumber
+    // 117 = docketNumber
+	//
+	var sql = "SELECT itemID, group_concat(itemDataValues.value, '::') as value FROM items JOIN itemData USING (itemID) "
+				+ "JOIN itemDataValues USING (valueID) "
+				+ "WHERE libraryID=? AND fieldID IN (15, 36, 43, 44, 55, 60, 93, 94, 97, 98, 101, 117) "
+				+ "AND itemTypeID IN (16, 17, 20) "
+				+ "AND itemID NOT IN (SELECT itemID FROM deletedItems) "
+                + "GROUP BY itemID "
+				+ "ORDER BY itemDataValues.value COLLATE locale";
+	var rows = Zotero.DB.query(sql, [this._libraryID]);
+	processRows();
+
 	// Get years
 	var dateFields = [Zotero.ItemFields.getID('date')].concat(
 		Zotero.ItemFields.getTypeFieldsFromBase('date')
@@ -251,13 +276,22 @@ Zotero.Duplicates.prototype._findDuplicates = function () {
 	}
 	
 	var creatorRowsCache = {};
-	
 	// Match on normalized title
-	var sql = "SELECT itemID, value FROM items JOIN itemData USING (itemID) "
+	// Return NULL if no title, otherwise catenate title and edition
+	// 
+	// 6 = edition
+	// 5 = issue
+	var sql = "SELECT itemID, CASE "
+				+ "WHEN maxID>6 THEN realvalue "
+				+ "ELSE NULL "
+			+ "END as value "
+			+ "FROM (SELECT itemID, max(fieldID) AS maxID, group_concat(value, '::') AS realvalue "
+				+ "FROM items JOIN itemData USING (itemID) "
 				+ "JOIN itemDataValues USING (valueID) "
-				+ "WHERE libraryID=? AND fieldID BETWEEN 110 AND 113 "
-				+ "AND itemTypeID NOT IN (1, 14) "
-				+ "AND itemID NOT IN (SELECT itemID FROM deletedItems)";
+				+ "WHERE libraryID=? AND fieldID in (5, 6, 110, 111, 112, 113) "
+				+ "AND itemTypeID NOT IN (1, 14, 16, 17, 20) "
+				+ "AND itemID NOT IN (SELECT itemID FROM deletedItems) "
+			+ "GROUP BY itemID)";
 	var rows = Zotero.DB.query(sql, [this._libraryID]);
 	if(rows) {
 		//normalize all values ahead of time
