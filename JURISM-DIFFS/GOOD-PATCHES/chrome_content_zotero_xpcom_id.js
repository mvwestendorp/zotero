diff --git a/chrome/content/zotero/xpcom/id.js b/chrome/content/zotero/xpcom/id.js
index 4d68d79..51aded1 100644
--- a/chrome/content/zotero/xpcom/id.js
+++ b/chrome/content/zotero/xpcom/id.js
@@ -57,6 +57,7 @@ Zotero.ID_Tracker = function () {
 			case 'items':
 			case 'creators':
 			case 'creatorData':
+			case 'creatorDataAlt':
 			case 'collections':
 			case 'savedSearches':
 			case 'tags':
@@ -140,10 +141,15 @@ Zotero.ID_Tracker = function () {
 			table = 'savedSearches';
 		}
 		
+		// Note: creatorDataAlt is used for
+		// legacy data conversions on the multilingual
+		// branch. When that is no longer needed, it can
+		// be dropped.
 		switch (table) {
 			case 'collections':
 			case 'creators':
 			case 'creatorData':
+			case 'creatorDataAlt':
 			case 'itemDataValues':
 			case 'items':
 			case 'savedSearches':
@@ -244,6 +250,7 @@ Zotero.ID_Tracker = function () {
 		switch (table) {
 			case 'creators':
 			case 'creatorData':
+			case 'creatorDataAlt':
 			case 'items':
 			case 'itemDataValues':
 			case 'tags':
@@ -373,6 +380,9 @@ Zotero.ID_Tracker = function () {
 			case 'creatorData':
 				return 'creatorDataID';
 			
+			case 'creatorDataAlt':
+				return 'creatorDataAltID';
+			
 			default:
 				return table.substr(0, table.length - 1) + 'ID';
 		}
