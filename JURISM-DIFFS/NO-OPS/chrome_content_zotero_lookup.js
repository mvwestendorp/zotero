diff --git a/chrome/content/zotero/lookup.js b/chrome/content/zotero/lookup.js
index 3ee559d..0412dd7 100644
--- a/chrome/content/zotero/lookup.js
+++ b/chrome/content/zotero/lookup.js
@@ -117,6 +117,10 @@ const Zotero_Lookup = new function () {
 
 				// be lenient about translators
 				var translators = translate.getTranslators();
+                for (var i=0,ilen=translators.length;i<ilen;i++) {
+                    Zotero.debug("XXXX LISTED: "+translators[i].label+" "+translators[i].priority);
+                }
+
 				translate.setTranslator(translators);
 
 				translate.setHandler("done", function(translate, success) {
