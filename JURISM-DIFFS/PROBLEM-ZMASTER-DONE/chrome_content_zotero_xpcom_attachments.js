diff --git a/chrome/content/zotero/xpcom/attachments.js b/chrome/content/zotero/xpcom/attachments.js
index d57f571..ffe4806 100644
--- a/chrome/content/zotero/xpcom/attachments.js
+++ b/chrome/content/zotero/xpcom/attachments.js
@@ -524,6 +524,7 @@ Zotero.Attachments = new function(){
 	 * Save a snapshot -- uses synchronous WebPageDump or asynchronous saveURI()
 	 */
 	function importFromDocument(document, sourceItemID, forceTitle, parentCollectionIDs, callback, libraryID) {
+		var url, bases, base, pos, len;
 		Zotero.debug('Importing attachment from document');
 		
 		if (sourceItemID && parentCollectionIDs) {
@@ -533,7 +534,34 @@ Zotero.Attachments = new function(){
 			parentCollectionIDs = undefined;
 		}
 		
-		var url = document.location.href;
+		if (document.location) {
+			url = document.location.href;
+		} else {
+			//
+			// For documents generated internally with createDocument(),
+			// attempts to query the document URL produce the following
+			// results:
+			//
+			//   document.baseURIObject.spec:  about:blank
+			//   document.location:            null
+			//
+			// To process XHTML documents of this kind as attachments,
+			// set a base element inside the HEAD node of the document.
+			// If no base element is present, a generated attachment
+			// document will fail.
+			//
+			url = "about:blank";
+			var html = document.getElementsByTagName("html")[0];
+			bases = html.getElementsByTagName("base");
+			len = bases.length;
+			for (pos = 0; pos < len; pos += 1) {
+				base = bases.item(pos);
+				if (base.hasAttribute("href")) {
+					url = base.getAttribute("href");
+					break;
+				}
+			}
+		}
 		var title = forceTitle ? forceTitle : document.title;
 		var mimeType = document.contentType;
 		if(Zotero.Attachments.isPDFJS(document)) {
