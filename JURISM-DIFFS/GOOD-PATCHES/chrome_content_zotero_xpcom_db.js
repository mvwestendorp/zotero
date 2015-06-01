diff --git a/chrome/content/zotero/xpcom/db.js b/chrome/content/zotero/xpcom/db.js
index d7eafc0..ad9a569 100644
--- a/chrome/content/zotero/xpcom/db.js
+++ b/chrome/content/zotero/xpcom/db.js
@@ -1297,4 +1297,4 @@ Zotero.DBConnection.prototype._getTypedValue = function (statement, i) {
 
 
 // Initialize main database connection
-Zotero.DB = new Zotero.DBConnection('zotero');
+Zotero.DB = new Zotero.DBConnection('jurism');
