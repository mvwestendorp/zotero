diff --git a/chrome/content/zotero/xpcom/quickCopy.js b/chrome/content/zotero/xpcom/quickCopy.js
index 646d55a..6a00d0a 100644
--- a/chrome/content/zotero/xpcom/quickCopy.js
+++ b/chrome/content/zotero/xpcom/quickCopy.js
@@ -35,6 +35,12 @@ Zotero.QuickCopy = new function() {
 	var _initialized = false;
 	var _formattedNames = {};
 	
+    
+    var _labelKeys = [];
+    for (var key in Zotero.CiteProc.CSL.LOCATOR_LABELS_MAP) {
+        _labelKeys.push(key);
+    }
+    var _labelKeyRex = new RegExp('(^|[^a-zA-Z])(' + _labelKeys.join('|') + ')\\.\\s');
 	
 	function getFormattedNameFromSetting(setting) {
 		if (!_initialized) {
@@ -147,7 +153,7 @@ Zotero.QuickCopy = new function() {
 	 * |items| is an array of Zotero.Item objects
 	 *
 	 * |format| is a Quick Copy format string
-	 *    (e.g. "bibliography=http://purl.org/net/xbiblio/csl/styles/apa.csl")
+	 *	(e.g. "bibliography=http://purl.org/net/xbiblio/csl/styles/apa.csl")
 	 *
 	 * |callback| is only necessary if using an export format and should be
 	 * a function suitable for Zotero.Translate.setHandler, taking parameters
@@ -163,6 +169,10 @@ Zotero.QuickCopy = new function() {
 			return false;
 		}
 		
+		if (Zotero.Prefs.get("export.quickCopy.linkOption") && Zotero.Prefs.get("export.quickCopy.linkCitationFormReverse")) {
+			modified = !modified;
+		}
+
 		var [mode, format] = format.split('=');
 		var [mode, contentType] = mode.split('/');
 		
@@ -179,13 +189,61 @@ Zotero.QuickCopy = new function() {
 			// Move notes to separate array
 			var allNotes = true;
 			var notes = [];
-			for (var i=0; i<items.length; i++) {
-				if (items[i].isNote()) {
-					notes.push(items.splice(i, 1)[0]);
-					i--;
+
+			// Run default block or get extras, depending on mode
+			// This code is duplicated from zoteroPane.js.
+			var extras = undefined;
+
+			if (modified &&  Zotero.Prefs.get("export.quickCopy.linkOption")) {
+				allNotes = false;
+				extras = [];
+				for (var i = 0, ilen = items.length; i < ilen; i += 1) {
+					var item = items[i];
+					var extra = {};
+					if (item.isNote()) {
+						var parentID = item.getSource();
+						if (parentID) {
+							items[i] = Zotero.Items.get(parentID);
+						}
+						var note = item.getNote();
+						if (note) {
+							note = note.replace(/<[^>]+>/g, "");
+							note = note.replace(/&nbsp;/g, " ");
+							note = note.split("\n");
+							var summary = "";
+							var quote = "";
+							for (var j = 0, jlen = note.length; j < jlen; j += 1) {
+								if (_labelKeyRex.exec(note[j])) {
+									extra.locator_txt = note[j];
+								} else if (note[j].slice(0, 1) === "=") {
+									quote += note[j].slice(1).replace(/^\s+/, "").replace(/\s+$/, "") + " ";
+								} else if (note[j].slice(0, 1) === "~") {
+									summary += note[j].slice(1).replace(/^\s+/, "").replace(/\s+$/, "") + " ";
+								} else if (note[j].replace(/\s+/, "")) {
+									break;
+								}
+							}
+							if (quote) {
+								extra.suffix_txt = '("' + quote.replace(/\s+$/, "") + '")';
+							} else if (summary) {
+								extra.suffix_txt = '(' + summary.replace(/\s+$/, "") + ')';
+							}
+						}
+					}
+					if (items[i].isRegularItem()) {
+						extra.id = items[i].id;
+						extras.push(extra);
+					}
 				}
-				else {
-					allNotes = false;
+			} else {
+				for (var i=0; i<items.length; i++) {
+					if (items[i].isNote()) {
+						notes.push(items.splice(i, 1)[0]);
+						i--;
+					}
+					else {
+						allNotes = false;
+					}
 				}
 			}
 			
@@ -331,13 +389,33 @@ Zotero.QuickCopy = new function() {
 			if (modified) {
 				var csl = Zotero.Styles.get(format).getCiteProc();
 				csl.updateItems([item.id for each(item in items)]);
-				var citation = {citationItems:[{id:item.id} for each(item in items)], properties:{}};
+
+				var citation;
+				if (extras) {
+					citation = {citationItems:extras, properties:{}};
+				} else {
+					citation = {citationItems:[{id:item.id} for each(item in items)], properties:{}};
+				}
+				if (Zotero.Prefs.get("export.quickCopy.linkOption") && !Zotero.Prefs.get("export.quickCopy.linkOptionDisable")) {
+					if (Zotero.Prefs.get("export.quickCopy.linkOptionHTML")) {
+						csl.sys.wrapCitationEntry = csl.sys.wrapCitationEntryHtml;
+					} else {
+						csl.sys.wrapCitationEntry = csl.sys.wrapCitationEntryText;
+					}
+				}
 				var html = csl.previewCitationCluster(citation, [], [], "html"); 
+				
+				if (Zotero.Prefs.get("export.quickCopy.linkOption") && !Zotero.Prefs.get("export.quickCopy.linkOptionDisable")) {
+					csl.sys.wrapCitationEntry = csl.sys.wrapCitationEntryText;
+				}
 				var text = csl.previewCitationCluster(citation, [], [], "text"); 
+				
+				csl.sys.wrapCitationEntry = false;
+				
 			} else {
 				var style = Zotero.Styles.get(format);
-				var cslEngine = style.getCiteProc();
- 				var html = Zotero.Cite.makeFormattedBibliographyOrCitationList(cslEngine, items, "html");
+				var cslEngine = style.getCiteProc(null, true);
+				var html = Zotero.Cite.makeFormattedBibliographyOrCitationList(cslEngine, items, "html");
 				var text = Zotero.Cite.makeFormattedBibliographyOrCitationList(cslEngine, items, "text");
 			}
 			
