diff --git a/chrome/content/zotero/xpcom/translation/translate_item.js b/chrome/content/zotero/xpcom/translation/translate_item.js
index 5eed86e..9125137 100644
--- a/chrome/content/zotero/xpcom/translation/translate_item.js
+++ b/chrome/content/zotero/xpcom/translation/translate_item.js
@@ -572,9 +572,15 @@ Zotero.Translate.ItemSaver.prototype = {
 	"_saveFields":function(item, newItem) {
 		// fields that should be handled differently
 		const skipFields = ["note", "notes", "itemID", "attachments", "tags", "seeAlso",
-							"itemType", "complete", "creators"];
-		
+							"itemType", "complete", "creators", "multi"];
+
 		var typeID = Zotero.ItemTypes.getID(item.itemType);
+		var itemLanguage = undefined;
+		var defaultLanguage;
+		if (item.language) {
+			itemLanguage = item.language.split(/\s*[; ]\s*/)[0];
+		}
+
 		var fieldID;
 		for(var field in item) {
 			// loop through item fields
@@ -596,12 +602,78 @@ Zotero.Translate.ItemSaver.prototype = {
 				
 				// if field is valid for this type, set field
 				if(fieldID && Zotero.ItemFields.isValidForType(fieldID, typeID)) {
-					newItem.setField(fieldID, item[field]);
+					defaultLanguage = undefined;
+					if (item.multi && item.multi.main) {
+						var itemMultiMain = item.multi.main[field];
+						if(Zotero.zlsValidator.validate(itemMultiMain)) {
+							itemMultiMain = [Zotero.zlsValidator.tagdata[k].subtag for (k in Zotero.zlsValidator.tagdata)].join("-");
+							if (!Zotero.CachedLanguages.hasTag(itemMultiMain)) {
+								Zotero.CachedLanguages.getNickname(itemMultiMain);
+							}
+							if (itemMultiMain !== itemLanguage) {
+								defaultLanguage = itemMultiMain;
+							}
+						}
+					}
+					newItem.setField(fieldID, item[field], false, defaultLanguage, true);
+					if (item.multi && item.multi._lsts[field]) {
+						for (var j = 0, jlen = item.multi._lsts[field].length; j < jlen; j += 1) {
+							var langTag = item.multi._lsts[field][j];
+							// Normalize lang
+							// Patch code by Florian Ziche.
+							var langTag = item.multi._lsts[field][j];
+							if(Zotero.zlsValidator.validate(langTag)) {
+								langTag = [Zotero.zlsValidator.tagdata[k].subtag for (k in Zotero.zlsValidator.tagdata)].join("-");
+								if (!Zotero.CachedLanguages.hasTag(langTag)) {
+									Zotero.CachedLanguages.getNickname(langTag);
+								}
+							} else {
+								continue;
+							}
+							newItem.setField(fieldID, item.multi._keys[field][langTag], false, langTag);
+						}
+					}
 				} else {
 					Zotero.debug("Translate: Discarded field "+field+" for item: field not valid for type "+item.itemType, 3);
 				}
 			}
 		}
+		
+		var jurisdictionID = Zotero.ItemFields.getID('jurisdiction');
+		var fields = Zotero.ItemFields.getItemTypeFields(typeID);
+		if (fields.indexOf(jurisdictionID) > -1) {
+			if (["report","journalArticle","newspaperArticle"].indexOf(item.itemType) === -1) {
+				if (!newItem.getField(jurisdictionID)) {
+					var jurisdictionDefault = Zotero.Prefs.get("import.jurisdictionDefault");
+					var jurisdictionFallback = Zotero.Prefs.get("import.jurisdictionFallback");
+					if (jurisdictionDefault) {
+						newItem.setField(jurisdictionID,jurisdictionDefault);
+					} else if (jurisdictionFallback) {
+						newItem.setField(jurisdictionID,jurisdictionFallback);
+					} else {
+						newItem.setField(jurisdictionID,"us");
+					}
+				}
+			}
+		}
+		
+		// If "extra" contains {:variable: XX} hacks, recast as CslJSON,
+		// then merge result back into newItem.
+		if (item.extra && item.extra.match(/{:[-a-z]+:[^\}]+}/)) {
+			cslItem = Zotero.Utilities.itemToCSLJSON(newItem, false, false, true);
+			var extra = cslItem.note;
+			extra = extra.split(/{:([-a-z]+):([^\}]+)}/);
+			//dump("XXX CSL(before)=" + JSON.stringify(cslItem)+"\n");
+			for (var i=extra.length-2; i>0; i += -3) {
+				var varName = extra[i-1];
+				var varVal = extra[i];
+				cslItem[varName] = varVal;
+				extra = extra.slice(0,i-1).concat(extra.slice(i+1))
+			}
+			cslItem.note = extra.join(" ");
+			//dump("XXX CSL(after)=" + JSON.stringify(cslItem)+"\n");
+			Zotero.Utilities.itemFromCSLJSON(newItem, cslItem);
+		}
 	},
 	
 	"_saveCreators":function(item, newItem) {
@@ -638,7 +710,27 @@ Zotero.Translate.ItemSaver.prototype = {
 					lastName: creator.lastName
 				};
 			}
-			
+
+			var defaultLanguage;
+			var multi = {};
+			var lst = [];
+			if (creator.multi) {
+				var itemLanguage;
+				if (item.language) {
+					itemLanguage = item.language.split(/\s*[; ]\s*/)[0];
+				}
+				if (creator.multi.main !== itemLanguage) {
+					defaultLanguage = creator.multi.main;
+				}
+				var lst = creator.multi._lst.slice();
+				for (lang in creator.multi._key) {
+					multi[lang] = {
+						firstName: creator.multi._key[lang].firstName,
+						lastName: creator.multi._key[lang].lastName
+					}
+				}
+			}
+
 			var creator = null;
 			var creatorDataID = Zotero.Creators.getDataID(fields);
 			if(creatorDataID) {
@@ -656,7 +748,40 @@ Zotero.Translate.ItemSaver.prototype = {
 				var creatorID = creator.save();
 			}
 			
-			newItem.setCreator(creatorIndex++, creator, creatorTypeID);
+			newItem.setCreator(creatorIndex++, creator, creatorTypeID, defaultLanguage);
+
+			for (var j = 0, jlen = lst.length; j < jlen; j += 1) {
+				// Normalize lang
+				// Patch code by Florian Ziche.
+				var langTag = lst[j];
+				if(Zotero.zlsValidator.validate(langTag)) {
+					langTag = [Zotero.zlsValidator.tagdata[j].subtag for (j in Zotero.zlsValidator.tagdata)].join("-");
+					if (!Zotero.CachedLanguages.hasTag(langTag)) {
+						Zotero.CachedLanguages.getNickname(langTag);
+					}
+				} else {
+					continue;
+				}
+				var mcreator = null;
+				var mfields = multi[langTag];
+				var mcreatorDataID = Zotero.Creators.getDataID(mfields);
+				
+				if(mcreatorDataID) {
+					var mlinkedCreators = Zotero.Creators.getCreatorsWithData(mcreatorDataID, this._libraryID);
+					if (mlinkedCreators) {
+						// TODO: support identical creators via popup? ugh...
+						var mcreatorID = mlinkedCreators[0];
+						mcreator = Zotero.Creators.get(mcreatorID);
+					}
+				}
+				if(!mcreator) {
+					mcreator = new Zotero.Creator;
+					mcreator.libraryID = this._libraryID;
+					mcreator.setFields(mfields);
+					var mcreatorID = mcreator.save();
+				}
+				newItem.setCreator(i, mcreator, creatorTypeID, langTag);
+			}
 		}
 	},
 	
