diff --git a/chrome/content/zotero/xpcom/data/creators.js b/chrome/content/zotero/xpcom/data/creators.js
index fa65eb6..85b9fd2 100644
--- a/chrome/content/zotero/xpcom/data/creators.js
+++ b/chrome/content/zotero/xpcom/data/creators.js
@@ -224,7 +229,9 @@ Zotero.Creators = new function() {
 		
 		// Purge unused creators
 		var sql = 'SELECT creatorID FROM creators WHERE creatorID NOT IN '
-			+ '(SELECT creatorID FROM itemCreators)';
+			+ '(SELECT creatorID FROM itemCreators '
+			+ 'UNION '
+			+ 'SELECT creatorID FROM itemCreatorsAlt)';
 		var toDelete = Zotero.DB.columnQuery(sql);
 		
 		if (toDelete) {
@@ -233,8 +240,12 @@ Zotero.Creators = new function() {
 				delete this._objectCache[creatorID];
 			}
 			
-			var sql = "DELETE FROM creators WHERE creatorID NOT IN "
-				+ "(SELECT creatorID FROM itemCreators)";
+			// XXX: Do we need both suspenders and a belt here?
+			var sql = "DELETE FROM creators "
+				+ "WHERE creatorID NOT IN "
+				+ "(SELECT creatorID FROM itemCreators "
+				+ "UNION "
+				+ "SELECT creatorID FROM itemCreatorsAlt)";
 			Zotero.DB.query(sql);
 		}
 		
@@ -252,8 +263,14 @@ Zotero.Creators = new function() {
 			var sql = "DELETE FROM creatorData WHERE creatorDataID NOT IN "
 				+ "(SELECT creatorDataID FROM creators)";
 			Zotero.DB.query(sql);
+
 		}
 		
+		// Purge unused itemCreatorMain rows
+		var sql = 'DELETE FROM itemCreatorsMain WHERE creatorID NOT IN '
+			+ '(SELECT creatorID FROM creators)';
+		Zotero.DB.query(sql);
+
 		Zotero.Prefs.set('purge.creators', false);
 	}
 	
@@ -313,14 +330,15 @@ Zotero.Creators = new function() {
 					cleanedFields[field] = fields[field] ? fields[field] + '' : '';
 					break;
 				
-				// Integer
+				// Integer (but undefined is undefined)
 				case 'fieldMode':
 					cleanedFields[field] = fields[field] ? fields[field] : 0;
 					break;
 				
-				// Null if empty
+				// Null if empty (but undefined is undefined)
 				case 'birthYear':
 					cleanedFields[field] = fields[field] ? fields[field] : null;
+					break;
 			}
 		}
 		return cleanedFields;
@@ -342,7 +360,6 @@ Zotero.Creators = new function() {
 		return Zotero.DB.rowQuery(sql, creatorDataID);
 	}
 	
-	
 	function _updateCachedData(creatorDataID) {
 		for (var hash in _creatorDataHash) {
 			if (_creatorDataHash[hash] == creatorDataID) {
@@ -351,6 +368,7 @@ Zotero.Creators = new function() {
 		}
 		
 		var creators = getCreatorsWithData(creatorDataID);
+
 		for each(var creatorID in creators) {
 			if (Zotero.Creators._objectCache[creatorID]) {
 				Zotero.Creators._objectCache[creatorID].load();
