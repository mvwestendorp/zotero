diff --git a/chrome/content/zotero/xpcom/collectionTreeView.js b/chrome/content/zotero/xpcom/collectionTreeView.js
index b844479..9dea2c2 100644
--- a/chrome/content/zotero/xpcom/collectionTreeView.js
+++ b/chrome/content/zotero/xpcom/collectionTreeView.js
@@ -2192,6 +2192,7 @@ Zotero.ItemGroup.prototype.getSearchObject = function() {
 			includeScopeChildren = true;
 		}
 		else if (this.isGroup()) {
+			s.libraryID = this.ref.libraryID;
 			s.addCondition('libraryID', 'is', this.ref.libraryID);
 			s.addCondition('noChildren', 'true');
 			includeScopeChildren = true;
