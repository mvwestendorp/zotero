diff --git a/chrome/content/zotero/xpcom/itemTreeView.js b/chrome/content/zotero/xpcom/itemTreeView.js
index 883b695..45d7757 100644
--- a/chrome/content/zotero/xpcom/itemTreeView.js
+++ b/chrome/content/zotero/xpcom/itemTreeView.js
@@ -648,7 +648,14 @@ Zotero.ItemTreeView.prototype.notify = function(action, type, ids, extraData)
 				// Item already exists in this view
 				if( row != null)
 				{
-					var sourceItemID = this._getItemAtRow(row).ref.getSource();
+                    try {
+					    var sourceItemID = this._getItemAtRow(row).ref.getSource();
+                    } catch (e) {
+                        // this._getItemAtRow() turns up undefined here when a content
+                        // item has been dragged into an item as a child attachment.
+                        // This is a hack to see if it triggers a further error.
+                        continue;
+                    }
 					var parentIndex = this.getParentIndex(row);
 					
 					if (this.isContainer(row) && this.isContainerOpen(row))
@@ -2691,6 +2698,10 @@ Zotero.ItemTreeView.prototype.onDragStart = function (event) {
 	catch (e) {
 		Components.utils.reportError(e + " with format '" + format + "'");
 	}
+    // Drag-and-drop could be broken by intervening UI clicks on
+    // slow operations. This seems to prevent that breakage, and cause
+    // a quicker return to boot.
+    Zotero.Notifier.reset();
 }
 
 
