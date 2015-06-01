diff --git a/test/content/support.js b/test/content/support.js
index 2f67b97..2ed88c8 100644
--- a/test/content/support.js
+++ b/test/content/support.js
@@ -202,6 +202,21 @@ function resetDB() {
  * Equivalent to JSON.stringify, except that object properties are stringified
  * in a sorted order.
  */
+function stableStringify(obj) {
+	return JSON.stringify(obj, function(k, v){
+		if (v && "object" === typeof v && !Array.isArray(v)) {
+			var o = {},
+				keys = Object.keys(v).sort();
+			for (var i=0,ilen=keys.length;i<ilen;i++) {
+				o[keys[i]] = v[keys[i]];
+			}
+			return o;
+		}
+		return v;
+	}, "\t");
+}
+
+
 function stableStringify(obj, level, label) {
 	if (!level) level = 0;
 	let indent = '\t'.repeat(level);
@@ -280,7 +295,11 @@ function generateAllTypesAndFieldsData() {
 		if (excludeItemTypes.indexOf(itemTypes[i].name) != -1) continue;
 		
 		let itemFields = data[itemTypes[i].name] = {
-			itemType: itemTypes[i].name
+			itemType: itemTypes[i].name,
+			multi: {
+				main: {},
+				_keys: {}
+			}
 		};
 		
 		let fields = Zotero.ItemFields.getItemTypeFields(itemTypes[i].id);
@@ -302,6 +321,11 @@ function generateAllTypesAndFieldsData() {
 			}
 			
 			itemFields[name] = value;
+
+			if (Zotero.multiFieldNames[name]) {
+				itemFields.multi._keys[name] = {};
+				itemFields.multi._keys[name].zz = value + "ay";
+			}
 		}
 		
 		let creatorTypes = Zotero.CreatorTypes.getTypesForItemType(itemTypes[i].id),
@@ -311,7 +335,15 @@ function generateAllTypesAndFieldsData() {
 			creators.push({
 				creatorType: typeName,
 				firstName: typeName + 'First',
-				lastName: typeName + 'Last'
+				lastName: typeName + 'Last',
+				multi: {
+					_key: {
+						zz: {
+							firstName: typeName + 'Firstay',
+							lastName: typeName + 'Lastay'
+						}
+					}
+				}
 			});
 		}
 	}
@@ -331,6 +363,7 @@ function populateDBWithSampleData(data) {
 		let zItem = new Zotero.Item(item.itemType);
 		for (let itemField in item) {
 			if (itemField == 'itemType') continue;
+			if (itemField == 'multi') continue;
 			
 			if (itemField == 'creators') {
 				let creators = item[itemField];
@@ -340,7 +373,17 @@ function populateDBWithSampleData(data) {
 					creator.lastName = creators[i].lastName;
 					creator = Zotero.Creators.get(creator.save());
 					
-					zItem.setCreator(i, creator, creators[i].creatorType);
+					let mainLang = creators[i].multi.main;
+					zItem.setCreator(i, creator, creators[i].creatorType, mainLang);
+
+					let langs = Object.keys(creators[i].multi._key);
+					for (var j=0,jlen=langs.length;j<jlen;j++) {
+						let creator = new Zotero.Creator();
+						creator.firstName = creators[i].multi._key[langs[j]].firstName;
+						creator.lastName = creators[i].multi._key[langs[j]].lastName;
+						creator = Zotero.Creators.get(creator.save());
+						zItem.setCreator(i, creator, creators[i].creatorType, langs[j]);
+					}
 				}
 				continue;
 			}
@@ -350,7 +393,13 @@ function populateDBWithSampleData(data) {
 				continue;
 			}
 			
-			zItem.setField(itemField, item[itemField]);
+			var mainLang = item.multi.main[itemField];
+			zItem.setField(itemField, item[itemField], false, mainLang);
+
+			var langs = item.multi._keys[itemField] ? Object.keys(item.multi._keys[itemField]) : [];
+			for (let i=0,ilen=langs.length;i<ilen;i++) {
+				zItem.setField(itemField, item.multi._keys[itemField][langs[i]], false, langs[i]);
+			}
 		}
 		item.id = zItem.save();
 		
