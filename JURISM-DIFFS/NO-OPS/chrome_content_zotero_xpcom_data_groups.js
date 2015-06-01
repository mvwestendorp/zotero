diff --git a/chrome/content/zotero/xpcom/data/groups.js b/chrome/content/zotero/xpcom/data/groups.js
index 4fec47d..11527c1 100644
--- a/chrome/content/zotero/xpcom/data/groups.js
+++ b/chrome/content/zotero/xpcom/data/groups.js
@@ -72,12 +72,16 @@ Zotero.Groups = new function () {
 	}
 	
 	
-	this.getLibraryIDFromGroupID = function (groupID) {
+	this.getLibraryIDFromGroupID = function (groupID, ignoreError) {
 		var sql = "SELECT libraryID FROM groups WHERE groupID=?";
 		var libraryID = Zotero.DB.valueQuery(sql, groupID);
 		if (!libraryID) {
-			throw ("Group with groupID " + groupID + " does not exist "
-					+ "in Zotero.Groups.getLibraryIDFromGroupID()");
+			if (ignoreError) {
+				libraryID = false;
+			} else {
+				throw ("Group with groupID " + groupID + " does not exist "
+					   + "in Zotero.Groups.getLibraryIDFromGroupID()");
+			}
 		}
 		return libraryID;
 	}
