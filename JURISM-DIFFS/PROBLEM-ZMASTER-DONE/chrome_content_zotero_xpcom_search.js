diff --git a/chrome/content/zotero/xpcom/search.js b/chrome/content/zotero/xpcom/search.js
index 7eb2333..3997a66 100644
--- a/chrome/content/zotero/xpcom/search.js
+++ b/chrome/content/zotero/xpcom/search.js
@@ -755,6 +755,9 @@ Zotero.Search.prototype.search = function(asTempTable){
 			else {
 				Zotero.debug('Running subsearch against fulltext word index');
 				var s = new Zotero.Search();
+				if (this._scope) {
+					s.addCondition("libraryID", "is", this._scope.libraryID);
+				}
 				
 				// Add any necessary conditions to the fulltext word search --
 				// those that are required in an ANY search and any outside the
@@ -769,7 +772,6 @@ Zotero.Search.prototype.search = function(asTempTable){
 						continue;
 					}
 					else if (c.condition == 'fulltextContent' ||
-							c.condition == 'fulltextContent' ||
 								inQS) {
 						continue;
 					}
@@ -2136,7 +2138,7 @@ Zotero.SearchConditions = new function(){
 					contains: true,
 					doesNotContain: true
 				},
-				table: 'itemCreators',
+				table: '(SELECT * FROM itemCreators UNION SELECT itemID,creatorID,creatorTypeID,orderIndex FROM itemCreatorsAlt)',
 				field: "TRIM(firstName || ' ' || lastName)"
 			},
 			
@@ -2148,7 +2150,7 @@ Zotero.SearchConditions = new function(){
 					contains: true,
 					doesNotContain: true
 				},
-				table: 'itemCreators',
+				table: '(SELECT * FROM itemCreators UNION SELECT itemID,creatorID,creatorTypeID,orderIndex FROM itemCreatorsAlt)',
 				field: 'lastName',
 				special: true
 			},
@@ -2161,10 +2163,10 @@ Zotero.SearchConditions = new function(){
 					contains: true,
 					doesNotContain: true
 				},
-				table: 'itemData',
+				table: '(SELECT * FROM itemData UNION SELECT itemID,fieldID,valueID FROM itemDataAlt)',
 				field: 'value',
 				aliases: Zotero.DB.columnQuery("SELECT fieldName FROM fieldsCombined " +
-					"WHERE fieldName NOT IN ('accessDate', 'date', 'pages', " +
+					"WHERE fieldName NOT IN ('accessDate', 'date', 'pages','firstPage', " +
 					"'section','seriesNumber','issue')"),
 				template: true // mark for special handling
 			},
@@ -2209,7 +2211,7 @@ Zotero.SearchConditions = new function(){
 				},
 				table: 'itemData',
 				field: 'value',
-				aliases: ['pages', 'section', 'seriesNumber','issue'],
+				aliases: ['pages', 'firstPage', 'section', 'seriesNumber','issue'],
 				template: true // mark for special handling
 			},
 			
@@ -2408,7 +2410,21 @@ Zotero.SearchConditions = new function(){
 		}
 		catch (e) {
 			Zotero.debug("String not found for searchConditions." + str, 2);
-			return Zotero.ItemFields.getLocalizedString(null, str);
+			// OOOOO: Not sure if this problem is specific to the multilingual
+			// version ... with a completely empty Zotero, we get an error on
+			// these two fields for want of a localized form.  Not sure if
+			// their inclusion (they're pulled out of the itemData table by
+			// the build of the "field" condition in this file) is an
+			// error, or whether there should be localized forms somewhere.
+			// For the present, this workaround allows startup.
+			if (str === 'firstCreator') {
+				var ret = "firstCreator";
+			} else if (str === 'sortCreator') {
+				var ret = "sortCreator";
+			} else {
+				var ret = Zotero.ItemFields.getLocalizedString(null, str);
+			}
+			return ret;
 		}
 	}
 	
