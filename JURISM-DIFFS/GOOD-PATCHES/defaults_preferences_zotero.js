diff --git a/defaults/preferences/zotero.js b/defaults/preferences/zotero.js
index c49ee66..1e961b2 100644
--- a/defaults/preferences/zotero.js
+++ b/defaults/preferences/zotero.js
@@ -3,22 +3,29 @@
 // Add new user-adjustable hidden preferences to
 // http://www.zotero.org/documentation/hidden_prefs
 
+// Hack
+pref("extensions.zotero.hackUseCiteprocJsDateParser", false);
+
 pref("extensions.zotero.firstRun2", true);
 pref("extensions.zotero@chnm.gmu.edu.description", "chrome://zotero/locale/zotero.properties");
 
+pref("extensions.zotero.import.jurisdictionFallback", "us");
+pref("extensions.zotero.import.jurisdictionDefault", "us");
+
 pref("extensions.zotero.saveRelativeAttachmentPath", false);
 pref("extensions.zotero.baseAttachmentPath", '');
 pref("extensions.zotero.useDataDir", false);
 pref("extensions.zotero.dataDir", '');
 pref("extensions.zotero.lastDataDir", '');
 pref("extensions.zotero.debug.log",false);
-pref("extensions.zotero.debug.stackTrace", false);
+pref("extensions.zotero.debug.stackTrace",false);
 pref("extensions.zotero.debug.store",false);
 pref("extensions.zotero.debug.store.limit",500000);
 pref("extensions.zotero.debug.store.submitSize",10000000);
 pref("extensions.zotero.debug.store.submitLineLength",10000);
 pref("extensions.zotero.debug.level",5);
 pref("extensions.zotero.debug.time", false);
+pref("extensions.zotero.debugShowDuplicates", true);
 pref("extensions.zotero.automaticScraperUpdates",true);
 pref("extensions.zotero.zoteroDotOrgVersionHeader", true);
 pref("extensions.zotero.triggerProxyAuthentication", true);
@@ -32,6 +39,7 @@ pref("extensions.zotero.openURL.version","1.0");
 pref("extensions.zotero.parseEndNoteMIMETypes",true);
 pref("extensions.zotero.automaticSnapshots",true);
 pref("extensions.zotero.downloadAssociatedFiles",true);
+pref("extensions.zotero.newWebItemTag","New");
 pref("extensions.zotero.reportTranslationFailure",true);
 pref("extensions.zotero.automaticTags",true);
 pref("extensions.zotero.fontSize", "1.0");
@@ -102,23 +110,43 @@ pref("extensions.zotero.export.bibliographySettings", 'save-as-rtf');
 pref("extensions.zotero.export.bibliographyLocale", '');
 pref("extensions.zotero.export.displayCharsetOption", false);
 pref("extensions.zotero.export.citePaperJournalArticleURL", false);
-pref("extensions.zotero.cite.automaticJournalAbbreviations", true);
+pref("extensions.zotero.export.citeSuppressTrailingPunctuation", false);
+pref("extensions.zotero.cite.automaticJournalAbbreviations", false);
 pref("extensions.zotero.import.charset", "auto");
 pref("extensions.zotero.import.createNewCollection.fromFileOpenHandler", true);
 pref("extensions.zotero.rtfScan.lastInputFile", "");
 pref("extensions.zotero.rtfScan.lastOutputFile", "");
+pref("extensions.zotero.linkTitles", false);
 
 pref("extensions.zotero.export.quickCopy.setting", 'bibliography=http://www.zotero.org/styles/chicago-note-bibliography');
 pref("extensions.zotero.export.quickCopy.dragLimit", 50);
+pref("extensions.zotero.export.quickCopy.linkOption", false);
+pref("extensions.zotero.export.quickCopy.linkOptionHTML", false);
+pref("extensions.zotero.export.quickCopy.linkCitationFormReverse", false);
+pref("extensions.zotero.export.quickCopy.citationWrapperHtml", '<a href="zotero://select/items/%%ITEM_ID%%">{  | %%STRING%% | %%LOCATOR%% | %%SUFFIX%% }</a>');
+pref("extensions.zotero.export.quickCopy.citationWrapperText", '{  | %%STRING%% | %%LOCATOR%% | %%SUFFIX%% | zotero://select/items/%%ITEM_ID%%}');
 pref("extensions.zotero.export.quickCopy.quoteBlockquotes.plainText", true);
 pref("extensions.zotero.export.quickCopy.quoteBlockquotes.richText", true);
 pref("extensions.zotero.export.quickCopy.compatibility.indentBlockquotes", true);
 pref("extensions.zotero.export.quickCopy.compatibility.word", false);
 
+// Language settings
+pref("extensions.zotero.csl.locale", 'en-US');
+pref("extensions.zotero.csl.citationPersons", "orig");
+pref("extensions.zotero.csl.citationInstitutions", "orig");
+pref("extensions.zotero.csl.citationTitles", "orig");
+pref("extensions.zotero.csl.citationJournals", "orig");
+pref("extensions.zotero.csl.citationPublishers", "orig");
+pref("extensions.zotero.csl.citationPlaces", "orig");
+pref("extensions.zotero.csl.citationAffixes", "||||||||||||||||||");
+pref("extensions.zotero.csl.autoVietnameseNames", false);
+pref("extensions.zotero.csl.enableInstitutionFormatting", true);
+pref("extensions.zotero.csl.trigraphFormat", "Aaaa00:AaAa00:AaAA00:AAAA00");
+
 // Integration settings
 pref("extensions.zotero.integration.port", 50001);
 pref("extensions.zotero.integration.autoRegenerate", -1);	// -1 = ask; 0 = no; 1 = yes
-pref("extensions.zotero.integration.useClassicAddCitationDialog", false);
+pref("extensions.zotero.integration.useClassicAddCitationDialog", true);
 pref("extensions.zotero.integration.keepAddCitationDialogRaised", false);
 
 // Connector settings
