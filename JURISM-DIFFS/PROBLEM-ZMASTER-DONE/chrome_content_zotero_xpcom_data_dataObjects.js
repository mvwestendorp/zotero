diff --git a/chrome/content/zotero/xpcom/data/dataObjects.js b/chrome/content/zotero/xpcom/data/dataObjects.js
index 27ca169..2e6b637 100644
--- a/chrome/content/zotero/xpcom/data/dataObjects.js
+++ b/chrome/content/zotero/xpcom/data/dataObjects.js
@@ -275,10 +275,13 @@ Zotero.DataObjects = function (object, objectPlural, id, table) {
 		
 		var subs = ['primary', 'fields'];
 		var skipFields = ['collectionID', 'creatorID', 'itemID', 'searchID', 'tagID', 'libraryID', 'key'];
-		
+
+		var changedMulti = false;
+			
 		for each(var sub in subs) {
 			diff[0][sub] = {};
 			diff[1][sub] = {};
+			
 			for (var field in data1[sub]) {
 				if (skipFields.indexOf(field) != -1) {
 					continue;
@@ -289,7 +292,18 @@ Zotero.DataObjects = function (object, objectPlural, id, table) {
 				}
 				
 				var changed = !data1[sub][field] || !data2[sub][field] ||
-						data1[sub][field] != data2[sub][field];
+					data1[sub][field] !== data2[sub][field];
+
+				if (sub === "fields" && data1.multi) {
+					if (!data2.multi || data1.multi.main[field] !== data2.multi.main[field]) {
+						changedMulti = true;
+					}
+					for (var lang in data1.multi._keys[field]) {
+						if (!data2.multi || !data2.multi._keys || !data2.multi._keys[field] || data1.multi._keys[field][lang] !== data2.multi._keys[field][lang]) {
+							changedMulti = true;
+						}
+					}
+				}
 				
 				if (includeMatches || changed) {
 					diff[0][sub][field] = data1[sub][field] ?
@@ -320,6 +334,17 @@ Zotero.DataObjects = function (object, objectPlural, id, table) {
 				var changed = !data1[sub][field] || !data2[sub][field] ||
 						data1[sub][field] != data2[sub][field];
 				
+				if (sub === "fields" && data1.multi && data2.multi) {
+					if (data2.multi.main[field] !== data1.multi.main[field]) {
+						changedMulti = true;
+					}
+					for (var lang in data2.multi._keys[field]) {
+						if (!data1.multi || !data1.multi._keys || !data1.multi._keys[field] || data2.multi._keys[field][lang] !== data1.multi._keys[field][lang]) {
+							changedMulti = true;
+						}
+					}
+				}
+				
 				if (includeMatches || changed) {
 					diff[0][sub][field] = data1[sub][field] ?
 						data1[sub][field] : '';
@@ -332,7 +357,11 @@ Zotero.DataObjects = function (object, objectPlural, id, table) {
 				}
 			}
 		}
-		
+		if (changedMulti) {
+			diff[0].multi = data1.multi;
+			diff[1].multi = data2.multi;
+			numDiffs++;
+		}
 		return numDiffs;
 	}
 	
@@ -367,7 +396,8 @@ Zotero.DataObjects = function (object, objectPlural, id, table) {
 	
 	
 	this.editCheck = function (obj) {
-		if (!Zotero.Sync.Server.updatesInProgress && !Zotero.Sync.Storage.updatesInProgress && !this.isEditable(obj)) {
+		if (!Zotero.Sync.Server.updatesInProgress && !Zotero.Sync.Storage.updatesInProgress && !this.isEditable(obj)
+				&& !(this._ZDO_object === 'tag' && obj.type === 10000)) {
 			throw ("Cannot edit " + this._ZDO_object + " in read-only Zotero library");
 		}
 	}
