diff --git a/chrome/content/zotero/xpcom/style.js b/chrome/content/zotero/xpcom/style.js
index a1af74e..a7ba811 100644
--- a/chrome/content/zotero/xpcom/style.js
+++ b/chrome/content/zotero/xpcom/style.js
@@ -87,6 +87,19 @@ Zotero.Styles = new function() {
 	}
 	
 	/**
+	 * Sort function for visible styles cache
+	 */
+	function _sortVisibleStyles (a,b) {
+		if (a.title > b.title) {
+			return 1;
+		} else if (a.title < b.title) {
+			return -1;
+		} else {
+			return 0;
+		}
+	}
+	
+	/**
 	 * Reads all styles from a given directory and caches their metadata
 	 * @private
 	 */
@@ -128,9 +141,10 @@ Zotero.Styles = new function() {
 			}
 			i++;
 		}
+        _visibleStyles.sort(_sortVisibleStyles);
 		return i;
 	}
-	
+
 	/**
 	 * Gets a style with a given ID
 	 * @param {String} id
@@ -183,7 +197,9 @@ Zotero.Styles = new function() {
 			worker = new Worker("resource://zotero/csl-validator.js"); 
 		worker.onmessage = function(event) {
 			if(event.data) {
-				deferred.reject(event.data);
+                // Disable validation pending better information on the code.
+				//deferred.reject(event.data);
+                deferred.resolve();
 			} else {
 				deferred.resolve();
 			}
@@ -480,7 +496,7 @@ Zotero.Style = function(arg) {
  * Get a citeproc-js CSL.Engine instance
  * @param {Boolean} useAutomaticJournalAbbreviations Whether to automatically abbreviate titles
  */
-Zotero.Style.prototype.getCiteProc = function(automaticJournalAbbreviations) {
+Zotero.Style.prototype.getCiteProc = function(automaticJournalAbbreviations, useVariableWrapper) {
 	var locale = Zotero.Prefs.get('export.bibliographyLocale');
 	if(!locale) {
 		var locale = Zotero.locale;
@@ -539,15 +555,54 @@ Zotero.Style.prototype.getCiteProc = function(automaticJournalAbbreviations) {
 		var xml = this.getXML();
 	}
 	
+	if (Zotero.Prefs.get("csl.trigraphFormat")) {
+		var trigraph = Zotero.Prefs.get("csl.trigraphFormat");
+		if (!trigraph || !trigraph.match(/^(A[Aa]*00*)(?::(A[Aa]*00*))*$/)) {
+			// Be obnoxiously fussy and intrusive.
+			var msg = "Invalid csl.trigraphFormat string \"" + trigraph + "\".\nPlease adjust the value through about:config\nMeanwhile, the default value of \"Aaaa00:AaAa00:AaAA00:AAAA00\" will be used.";
+			alert(msg);
+			trigraph = "Aaaa00:AaAa00:AaAA00:AAAA00";
+		}
+	}
+
 	try {
-		return new Zotero.CiteProc.CSL.Engine(
-			new Zotero.Cite.System(automaticJournalAbbreviations),
-			xml,
-			locale,
-			overrideLocale
-		);
+		//var sys = new Zotero.Cite.System(automaticJournalAbbreviations);
+		var sys = new Zotero.Cite.System(false);
+		if (useVariableWrapper) {
+			sys.setVariableWrapper(Zotero.Prefs.get('linkTitles'));
+		} else {
+			sys.setVariableWrapper(false);
+		}
+		var citeproc = new Zotero.CiteProc.CSL.Engine(sys, xml, locale, overrideLocale);
+		Zotero.setCitationLanguages({}, citeproc);
+		citeproc.opt.trigraph = trigraph;
+        // Was for: invoking special features of MLZ.
+        // From now, the relevant code will be woken up by the style version attribute.
+        // That way, MLZ will more or less behave as expected with an official style.
+        // See citeproc sources at src/attributes.js
+        citeproc.opt.development_extensions.static_statute_locator = true;
+        citeproc.opt.development_extensions.handle_parallel_articles = true;
+        citeproc.opt.development_extensions.main_title_from_short_title = true;
+        citeproc.opt.development_extensions.strict_page_numbers = true;
+        citeproc.opt.development_extensions.rtl_support = true;
+        citeproc.opt.development_extensions.expect_and_symbol_form = true;
+        citeproc.opt.development_extensions.require_explicit_legal_case_short_title = true;
+        if (Zotero.Prefs.get("export.quickCopy.linkOption")) {
+            // This gets the processor ready for applying wrappers.
+            //
+            // The function required to invoke wrappers is set only
+            // in getContentFromItems() [quickCopy.js] and 
+            // copyCitationToClipboard() [fileInterface.js]
+            // from functions stored in cite.js.
+            // Output templates are set in Zotero preferences, as
+            // extensions.zotero.export.quickCopy.wrapCitationHtml
+            // and extensions.zotero.export.quickCopy.wrapCitationText
+            citeproc.opt.development_extensions.apply_citation_wrapper = true;
+        }
+
+		return citeproc;
 	} catch(e) {
-		Zotero.logError(e);
+ 		Zotero.logError(e);
 		throw e;
 	}
 };
