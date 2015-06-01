diff --git a/chrome/content/zotero/xpcom/data/tags.js b/chrome/content/zotero/xpcom/data/tags.js
index 790b4b8..28d57be 100644
--- a/chrome/content/zotero/xpcom/data/tags.js
+++ b/chrome/content/zotero/xpcom/data/tags.js
@@ -44,6 +44,7 @@ Zotero.Tags = new function() {
 	this.getName = getName;
 	this.getID = getID;
 	this.getIDs = getIDs;
+	this.getProjectNames = getProjectNames;
 	this.getTypes = getTypes;
 	this.getAll = getAll;
 	this.getAllWithinSearch = getAllWithinSearch;
@@ -125,7 +126,7 @@ Zotero.Tags = new function() {
 	/*
 	 * Returns all tagIDs for this tag (of all types)
 	 */
-	function getIDs(name, libraryID) {
+	function getIDs(name, libraryID, isProjectName) {
 		name = Zotero.Utilities.trim(name);
 		var sql = "SELECT tagID FROM tags WHERE name=? AND libraryID";
 		var params = [name];
@@ -136,8 +137,31 @@ Zotero.Tags = new function() {
 		else {
 			sql += " IS NULL";
 		}
+		if (isProjectName === true) {
+			sql += " AND type IS 10000";
+		} else if (isProjectName === false) {
+			sql += " AND type IS NOT 10000";
+		}
 		return Zotero.DB.columnQuery(sql, params);
 	}
+
+	
+	/*
+	 * Returns data for all tags that are project names
+	 */
+	function getProjectNames(libraryID) {
+		var sql = "SELECT tagID,name FROM tags WHERE libraryID";
+		var params = undefined;
+		if (libraryID) {
+			sql += "=?";
+			params = [libraryID];
+		}
+		else {
+			sql += " IS NULL";
+		}
+		sql += " AND type IS 10000";
+		return Zotero.DB.query(sql, params);
+	}
 	
 	
 	/*
@@ -501,7 +525,7 @@ Zotero.Tags = new function() {
 		return this.getColors(libraryID)
 		.then(function () {
 			var tagColors = _libraryColors[libraryID];
-			var tagIDs = self.getIDs(name, libraryID);
+			var tagIDs = self.getIDs(name, libraryID, true);
 			
 			// Unset
 			if (!color) {
@@ -598,7 +622,7 @@ Zotero.Tags = new function() {
 				var tagNames = tagColors.concat(previousTagColors).map(function (val) val.name);
 				tagNames = Zotero.Utilities.arrayUnique(tagNames);
 				for (let i=0; i<tagNames.length; i++) {
-					let tagIDs = self.getIDs(tagNames[i], libraryID) || [];
+					let tagIDs = self.getIDs(tagNames[i], libraryID, true) || [];
 					for (let i=0; i<tagIDs.length; i++) {
 						affectedItems = affectedItems.concat(self.getTagItems(tagIDs[i]));
 					}
