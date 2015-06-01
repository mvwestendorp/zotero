diff --git a/chrome/content/zotero/webpagedump/domsaver.js b/chrome/content/zotero/webpagedump/domsaver.js
index 5802557..add4ac2 100644
--- a/chrome/content/zotero/webpagedump/domsaver.js
+++ b/chrome/content/zotero/webpagedump/domsaver.js
@@ -173,10 +173,14 @@ var wpdDOMSaver = {
 		// Added by Dan S. for Zotero, replacing three lines below
 		this.document = document;
 		this.setFrameList(document.defaultView);
-		this.baseURL = document.location.href;
-
-
-		// Set the document and frames
+		if (document.location) {
+			this.baseURL = document.location.href;
+		} else {
+			this.baseURL = "about:blank";
+		}
+		
+		
+		// Set the document and frames                                          
 		//this.document = top.window._content.document;
 
 		//this.setFrameList(top.window._content);
@@ -1057,12 +1061,17 @@ var wpdDOMSaver = {
 	},
 
 	// Decides the calling of SaveDocumentFile or saveDocumentHTML
-	saveDocumentEx: function (aDocument, aFileName) {
-		// we have to set a new current url which is the
-		// base reference url (necessary for frame processing)
-		this.currentURL = aDocument.location.href;
-
-		// distinguish between HTML Documents and other
+	saveDocumentEx : function(aDocument,aFileName)
+	{
+    // we have to set a new current url which is the 
+    // base reference url (necessary for frame processing)
+		if (aDocument.location) {
+			this.currentURL = aDocument.location.href;    
+		} else {
+			this.currentURL = "about:blank";
+		}
+		                                                                    
+		// distinguish between HTML Documents and other 
 		// embedded files like flash, video or images...
 		if ((aDocument.getElementsByTagName("head").length == 0) || !aDocument.contentType.match(/htm|html|xml/i)) {
 			aFileName = this.saveDocumentFile(aDocument, aFileName);
@@ -1087,4 +1096,4 @@ var wpdDOMSaver = {
 		}
 	}
 
-};
\ No newline at end of file
+};
