diff --git a/chrome/content/zotero/fileInterface.js b/chrome/content/zotero/fileInterface.js
index 67dd690..2ba2458 100644
--- a/chrome/content/zotero/fileInterface.js
+++ b/chrome/content/zotero/fileInterface.js
@@ -427,10 +427,10 @@ var Zotero_File_Interface = new function() {
 		var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"].
 							   getService(Components.interfaces.nsIClipboard);
 		var style = Zotero.Styles.get(style);
-		var cslEngine = style.getCiteProc();
-        
+		var cslEngine = style.getCiteProc(null, true);
+
 		// add HTML
- 		var bibliography = Zotero.Cite.makeFormattedBibliographyOrCitationList(cslEngine, items, "html", asCitations);
+		var bibliography = Zotero.Cite.makeFormattedBibliographyOrCitationList(cslEngine, items, "html", asCitations);
 		var str = Components.classes["@mozilla.org/supports-string;1"].
 				  createInstance(Components.interfaces.nsISupportsString);
 		str.data = bibliography;
@@ -458,17 +458,33 @@ var Zotero_File_Interface = new function() {
 	 *
 	 * if |asHTML| is true, copy HTML source as text
 	 */
-	function copyCitationToClipboard(items, style, asHTML) {
+	function copyCitationToClipboard(items, style, asHTML, extras) {
+		// Recognize label, locator and affix data if requested.
 		// copy to clipboard
+        // Extras?
 		var transferable = Components.classes["@mozilla.org/widget/transferable;1"].
 						   createInstance(Components.interfaces.nsITransferable);
 		var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"].
 							   getService(Components.interfaces.nsIClipboard);
 		
-		var style = Zotero.Styles.get(style).getCiteProc();
-		var citation = {"citationItems":[{id:item.id} for each(item in items)], properties:{}};
+		var style = Zotero.Styles.get(style).csl;
+
+		var citation;
+		if (extras) {
+			citation = {"citationItems":extras, properties:{}};
+		} else {
+			citation = {"citationItems":[{id:item.id} for each(item in items)], properties:{}};
+		}
 		
 		// add HTML
+		// Optionally turn on HTML wrapper
+		if (Zotero.Prefs.get("export.quickCopy.linkOption") && !Zotero.Prefs.get("export.quickCopy.linkOptionDisable")) {
+			if (Zotero.Prefs.get("export.quickCopy.linkOptionHTML")) {
+				style.sys.wrapCitationEntry = style.sys.wrapCitationEntryHtml;
+			} else {
+				style.sys.wrapCitationEntry = style.sys.wrapCitationEntryText;
+			}
+		}
 		var bibliography = style.previewCitationCluster(citation, [], [], "html");
 		var str = Components.classes["@mozilla.org/supports-string;1"].
 				  createInstance(Components.interfaces.nsISupportsString);
@@ -478,8 +494,16 @@ var Zotero_File_Interface = new function() {
 		
 		// add text (or HTML source)
 		if(!asHTML) {
+			// Optionally turn on text wrapper
+			if (Zotero.Prefs.get("export.quickCopy.linkOption") && !Zotero.Prefs.get("export.quickCopy.linkOptionDisable")) {
+				style.sys.wrapCitationEntry = style.sys.wrapCitationEntryText;
+			}
 			var bibliography = style.previewCitationCluster(citation, [], [], "text");
 		}
+		
+		// Force wrapper off
+		style.sys.wrapCitationEntry = false;
+		
 		var str = Components.classes["@mozilla.org/supports-string;1"].
 				  createInstance(Components.interfaces.nsISupportsString);
 		str.data = bibliography;
@@ -525,7 +549,7 @@ var Zotero_File_Interface = new function() {
 			}
 			else {
 				var style = Zotero.Styles.get(io.style);
-				var cslEngine = style.getCiteProc();
+				var cslEngine = style.getCiteProc(null, true);
 				var bibliography = Zotero.Cite.makeFormattedBibliographyOrCitationList(cslEngine,
 					items, format, io.mode === "citations");
 			}
