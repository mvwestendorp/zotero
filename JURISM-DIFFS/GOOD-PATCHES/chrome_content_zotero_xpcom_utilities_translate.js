diff --git a/chrome/content/zotero/xpcom/utilities_translate.js b/chrome/content/zotero/xpcom/utilities_translate.js
index 626cfcb..8248571 100644
--- a/chrome/content/zotero/xpcom/utilities_translate.js
+++ b/chrome/content/zotero/xpcom/utilities_translate.js
@@ -37,6 +37,8 @@
  * @borrows Zotero.Date.strToISO as this.strToISO
  * @borrows Zotero.OpenURL.createContextObject as this.createContextObject
  * @borrows Zotero.OpenURL.parseContextObject as this.parseContextObject
+ * @borrows Zotero.Multi.parseSerializedMultiField as this.parseSerializedMultiField
+ * @borrows Zotero.Utilities.Translate.prototype.ZlsValidator as Zotero.ZlsValidator
  * @borrows Zotero.HTTP.processDocuments as this.processDocuments
  * @borrows Zotero.HTTP.doPost as this.doPost
  * @param {Zotero.Translate} translate
@@ -52,8 +54,14 @@ Zotero.Utilities.Translate.prototype = new tmp();
 Zotero.Utilities.Translate.prototype.formatDate = Zotero.Date.formatDate;
 Zotero.Utilities.Translate.prototype.strToDate = Zotero.Date.strToDate;
 Zotero.Utilities.Translate.prototype.strToISO = Zotero.Date.strToISO;
+Zotero.Utilities.parseDateToObject = Zotero.DateParser.parseDateToObject;
+Zotero.Utilities.convertDateObjectToString = Zotero.DateParser.convertDateObjectToString;
+Zotero.Utilities.parseDateToString = Zotero.DateParser.parseDateToString;
+Zotero.Utilities.resetDateParserMonths = Zotero.DateParser.resetDateParserMonths;
+Zotero.Utilities.addDateParserMonths = Zotero.DateParser.addDateParserMonths;
 Zotero.Utilities.Translate.prototype.createContextObject = Zotero.OpenURL.createContextObject;
 Zotero.Utilities.Translate.prototype.parseContextObject = Zotero.OpenURL.parseContextObject;
+Zotero.Utilities.Translate.prototype.ZlsValidator = Zotero.ZlsValidator;
 
 /**
  * Hack to overloads {@link Zotero.Utilities.capitalizeTitle} to allow overriding capitalizeTitles 
