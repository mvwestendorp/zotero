diff --git a/chrome/content/zotero/xpcom/translation/translator.js b/chrome/content/zotero/xpcom/translation/translator.js
index d933b82..8749055 100644
--- a/chrome/content/zotero/xpcom/translation/translator.js
+++ b/chrome/content/zotero/xpcom/translation/translator.js
@@ -438,7 +438,7 @@ Zotero.Translator = function(file, json, code) {
 	const codeGetterFunction = function() { return Zotero.File.getContents(this.file); }
 	// Maximum length for the info JSON in a translator
 	const MAX_INFO_LENGTH = 4096;
-	const infoRe = /^\s*{[\S\s]*?}\s*?[\r\n]/;
+	const infoRe = /^\s*{[\S\s]*?[\r\n]}\s*?[\r\n]/;
 	
 	this.file = file;
 	
