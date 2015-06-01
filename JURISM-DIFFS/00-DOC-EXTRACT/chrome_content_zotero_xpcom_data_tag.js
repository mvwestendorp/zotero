diff --git a/chrome/content/zotero/xpcom/data/tag.js b/chrome/content/zotero/xpcom/data/tag.js
index b2133a2..41e05f0 100644
--- a/chrome/content/zotero/xpcom/data/tag.js
+++ b/chrome/content/zotero/xpcom/data/tag.js
@@ -283,7 +283,7 @@ Zotero.Tag.prototype.save = function (full) {
 		this.type = 0;
 	}
 	
-	if (this.type != 0 && this.type != 1) {
+	if (this.type != 0 && this.type != 1 && this.type != 10000) {
 		Zotero.debug(this);
 		throw ('Invalid tag type ' + this.type + ' for tag ' + this.id + ' in Zotero.Tag.save()');
 	}
@@ -466,6 +466,7 @@ Zotero.Tag.prototype.save = function (full) {
 				
 				var pairs = [];
 				for each(var itemID in newids) {
+
 					insertStatement.bindInt32Parameter(0, itemID);
 					insertStatement.bindInt32Parameter(1, tagID);
 					
