diff --git a/chrome/content/zotero/xpcom/sync.js b/chrome/content/zotero/xpcom/sync.js
index f2a9fc3..af1e09d 100644
--- a/chrome/content/zotero/xpcom/sync.js
+++ b/chrome/content/zotero/xpcom/sync.js
@@ -1375,8 +1375,10 @@ Zotero.Sync.Server = new function () {
 		}
 		
 		// TEMP
+		// XXX Zotero was able to use userdata, because it stopped reflecting userdata SQL version at level 76.
+		// XXX In MLZ, judge whether first-time install from presence of an upgrade-specific line in the verison table.
 		if (Zotero.Prefs.get("sync.fulltext.enabled") &&
-				Zotero.DB.valueQuery("SELECT version FROM version WHERE schema='userdata'") < 77) {
+			(!Zotero.DB.valueQuery("SELECT COUNT(*) FROM version WHERE schema='fulltext_upgrade'"))) {
 			// Don't show multiple times on idle
 			_syncInProgress = true;
 			
@@ -1400,8 +1402,8 @@ Zotero.Sync.Server = new function () {
 			
 			// Enable
 			if (index == 0) {
-				Zotero.DB.backupDatabase(76, true);
-				Zotero.DB.query("UPDATE version SET version=77 WHERE schema='userdata'");
+				Zotero.DB.backupDatabase(10001, true);
+				Zotero.DB.query("INSERT INTO version VALUES('fulltext_upgrade', 1)");
 				Zotero.wait(1000);
 			}
 			// Disable
@@ -2709,7 +2711,6 @@ Zotero.Sync.Server.Session.prototype._removeFromKeySet = function (keySet, objs)
 	this.uploadKeys[keySet].removeLibraryKeyPairs(type, keyPairs)
 }
 
-
 Zotero.Sync.Server.Data = new function() {
 	var _noMergeTypes = ['search'];
 	
@@ -2980,7 +2981,7 @@ Zotero.Sync.Server.Data = new function() {
 					isNewObject = false;
 					
 					var objDate = Zotero.Date.sqlToDate(obj.dateModified, true);
-					
+
 					// Local object has been modified since last sync
 					if ((objDate > lastLocalSyncDate &&
 								objDate < Zotero.Sync.Server.nextLocalSyncDate)
@@ -2989,7 +2990,7 @@ Zotero.Sync.Server.Data = new function() {
 							// date equal to Zotero.Sync.Server.nextLocalSyncDate
 							// and therefore excluded above
 							|| syncSession.objectInUpdated(obj)) {
-						
+
 						Zotero.debug("Local " + type + " " + obj.id
 								+ " has been modified since last sync", 4);
 						
@@ -3132,7 +3133,6 @@ Zotero.Sync.Server.Data = new function() {
 									}
 									continue;
 							}
-							
 							// TODO: order reconcile by parent/child?
 							
 							if (!skipCR) {
@@ -3162,7 +3162,7 @@ Zotero.Sync.Server.Data = new function() {
 						libraryID: libraryID,
 						key: key
 					};
-					
+
 					if (syncSession.objectInDeleted(fakeObj)) {
 						// TODO: non-merged items
 						
@@ -3209,7 +3209,6 @@ Zotero.Sync.Server.Data = new function() {
 						relatedItemsStore[objLibraryKeyHash] = missing;
 					}
 				}
-				
 				// Create or overwrite locally
 				//
 				// If we skipped CR above, we already have an object to use
@@ -3257,7 +3256,6 @@ Zotero.Sync.Server.Data = new function() {
 				else {
 					toSave.push(obj);
 				}
-				
 				if (type == 'item') {
 					// Make sure none of the item's creators are marked as
 					// deleted, which could happen if a creator was deleted
@@ -3426,7 +3424,6 @@ Zotero.Sync.Server.Data = new function() {
 				if (_timeToYield()) yield true;
 			}
 			
-			
 			//
 			// Reconcile objects that have changed locally and remotely
 			//
@@ -3556,7 +3553,6 @@ Zotero.Sync.Server.Data = new function() {
 					if (_timeToYield()) yield true;
 				}
 			}
-			
 			// Delete
 			Zotero.debug('Deleting merged ' + types);
 			if (toDelete.length) {
@@ -3681,11 +3677,21 @@ Zotero.Sync.Server.Data = new function() {
 						var elem = this.itemToXML(obj, doc, syncSession);
 					}
 					else {
+						if (type == 'tag' && obj.type == 10000) {
+							continue;
+						}
 						var elem = this[type + 'ToXML'](obj, doc);
 					}
 					
 					objectsNode.appendChild(elem);
 				}
+				if (objectsNode.childNodes && !objectsNode.childNodes.length) {
+					try {
+						docElem.removeChild(objectsNode);
+					} catch (e) {
+						Zotero.debug("MLZ: attempted to remove non-existent tags node during sync. Skipping operation, continuing with sync.");
+					}
+				}
 			}
 		}
 		
@@ -4168,6 +4174,8 @@ Zotero.Sync.Server.Data = new function() {
 	this.itemToXML = function (item, doc, syncSession) {
 		var item = item.serialize();
 		
+		this.mlzEncodeFieldsAndCreators(item);
+		
 		var itemNode = doc.createElement('item');
 		itemNode.setAttribute('libraryID', item.primary.libraryID ? item.primary.libraryID : Zotero.libraryID);
 		itemNode.setAttribute('key', item.primary.key);
@@ -4268,9 +4276,9 @@ Zotero.Sync.Server.Data = new function() {
 			var libraryID = item.creators[index].libraryID ? item.creators[index].libraryID : defaultLibraryID;
 			var key = item.creators[index].key;
 			if (!key) {
-				Zotero.debug('==========');
-				Zotero.debug(index);
-				Zotero.debug(item);
+				//Zotero.debug('==========');
+				//Zotero.debug(index);
+				//Zotero.debug(item);
 				throw ("Creator key not set for item in Zotero.Sync.Server.sync()");
 			}
 			creatorElem.setAttribute('libraryID', libraryID);
@@ -4311,7 +4319,145 @@ Zotero.Sync.Server.Data = new function() {
 		return itemNode;
 	}
 	
-	
+	this.mlzEncodeFieldsAndCreators = function (item) {
+		// Serialize extra fields as JSON, bundle into extra field
+		// with multilingual content, and delete before proceeding
+		// with sync.
+		var supp = false;
+		var extrafields = false;
+		var multifields = false;
+		var extracreators = false;
+		var multicreators = false;
+		// Save off the type in case it changes below
+		var localItemType = item.primary ? item.primary.itemType : item.itemType;
+		var syncItemType = localItemType;
+		// Apply extended type if needed
+		if (Zotero.EXTENDED_TYPES[localItemType]) {
+			syncItemType = Zotero.EXTENDED_TYPES[localItemType];
+			if (item.primary) {
+				item.primary.itemType = syncItemType;
+			} else {
+				item.type = syncItemType;
+			}
+		}
+		// Get extended fields, if any
+		var fields = item.fields ? item.fields : item;
+		if (Zotero.EXTENDED_FIELDS[localItemType]) {
+			for (var field in fields) {
+				if (Zotero.EXTENDED_FIELDS[localItemType][field]) {
+					if (fields[field]) {
+						if (!extrafields) {
+							extrafields = {};
+						}
+						extrafields[field] = fields[field];
+						delete fields[field];
+					}
+				}
+			}
+		}
+		// Get multi field data, if any
+		if (item.multi) {
+			for (var key in item.multi.main) {
+				multifields = item.multi;
+				break;
+			}
+			if (!multifields) {
+				for (var key in item.multi._keys) {
+					multifields = item.multi;
+					break;
+				}
+			}
+		}
+		// Normalize the sequence of any extra creators to avoid
+		// data mismatch in multicreators
+		if (item.creators) {
+			var deletecreatoridx = item.creators.length;
+			if (Zotero.EXTENDED_CREATORS[localItemType]) {
+				for (var i=item.creators.length-1; i>-1; i += -1) {
+					var creator = item.creators[i];
+					if (Zotero.EXTENDED_CREATORS[localItemType][creator.creatorType]) {
+						if (!extracreators) {
+							extracreators = [];
+						}
+						if (!creator.libraryID) {
+							creator.libraryID = 0;
+						}
+						extracreators.push(creator);
+						item.creators = item.creators.slice(0,i).concat(item.creators.slice(i+1))
+						deletecreatoridx += -1;
+					}
+				}
+				if (extracreators) {
+					item.creators = item.creators.concat(extracreators);
+				}
+			}
+			// Get multi creator data
+			for (var i=0,ilen=item.creators.length; i<ilen; i+=1) {
+				var multicreatorset = false;
+				var creator = item.creators[i];
+				if (creator.multi) {
+					for (var key in creator.multi._key) {
+						multicreatorset = creator.multi;
+						break;
+					}
+					if (!multicreatorset && creator.multi.main) {
+						multicreatorset = creator.multi;
+					}
+					if (multicreatorset) {
+						if (!multicreators) {
+							multicreators = {};
+						}
+						multicreatorset.fieldMode = creator.fieldMode;
+						multicreators[i] = multicreatorset;
+					}
+				}
+			}
+			// Remove multi segment from extracreators to avoid
+			// storing it twice
+			if (extracreators) {
+				for (var i=0,ilen=extracreators.length; i<ilen; i+=1) {
+					delete extracreators[i].multi;
+				}
+			}
+			// Remove extracreators from main object
+			item.creators = item.creators.slice(0,deletecreatoridx);
+		}
+		// If data exists, add it to the extra field
+		if (extrafields || multifields || extracreators || multicreators || syncItemType !== localItemType) {
+			supp = {type:syncItemType};
+			if (syncItemType !== localItemType) {
+				supp.xtype = localItemType;
+			}
+			if (extrafields) {
+				supp.extrafields = extrafields;
+			}
+			if (extracreators) {
+				supp.extracreators = extracreators;
+			}
+			if (multifields) {
+				supp.multifields = multifields;
+			}
+			if (multicreators) {
+				supp.multicreators = multicreators;
+			}
+			var supp = JSON.stringify(supp);
+			var supplen = "" + supp.length;
+			while (supplen.length < 4) {
+				supplen = "0" + supplen;
+			}
+			if ((fields.extra||supp) && !(fields.extra && fields.extra.match(/^mlzsync[0-9]:/))) {
+				if (!fields.extra) {
+					fields.extra = "";
+				}
+				fields.extra = "mlzsync1:" + supplen + supp + fields.extra;
+			}
+		}
+		if (item.multi) {
+			delete item.multi;
+		}
+	};
+
+
 	/**
 	 * Convert DOM <item> node into an unsaved Zotero.Item
 	 *
@@ -4329,7 +4475,7 @@ Zotero.Sync.Server.Data = new function() {
 		}
 		
 		// TODO: add custom item types
-		
+
 		var data = {};
 		if (!skipPrimary) {
 			data.libraryID = _getLibraryID(itemNode.getAttribute('libraryID'), defaultLibraryID);
@@ -4349,18 +4495,27 @@ Zotero.Sync.Server.Data = new function() {
 		
 		// Primary data
 		for (var field in data) {
+			// We apparently lack a toggle to block loading of multi data?
+			// The multi fields are the SAME on both the remote and local object,
+			// even when they differ in their original locations.
 			item.setField(field, data[field]);
 			changedFields[field] = true;
 		}
 		
 		// Item data
+		var extra = false;
 		var fields = itemNode.getElementsByTagName('field');
 		for (var i=0, len=fields.length; i<len; i++) {
 			var field = fields[i];
 			var fieldName = field.getAttribute('name');
-			item.setField(fieldName, field.textContent);
+			item.setField(fieldName, field.textContent, false);
+			if (fieldName === "extra") {
+				extra = field.textContent;
+			}
 			changedFields[fieldName] = true;
 		}
+
+		// HERE is where the purge comes in.
 		var previousFields = item.getUsedFields(true);
 		for each(var field in previousFields) {
 			if (!changedFields[field] &&
@@ -4372,16 +4527,28 @@ Zotero.Sync.Server.Data = new function() {
 				item.setField(field, false);
 			}
 		}
-		
+
+		// Merge field content of an mlzsync1: prefix on the extra field
+		// into the item
+		var obj = this.decodeMlzFields(item,data,extra,changedFields);
+
+		// RIGHT!!! So now we have the fields explicitly set
+		// from the sync item held in changedFields.
+
+		// We need to do the same thing for multi and main, working
+		// from the extra-field parse-out, and everything will work.
+		this.removeMlzFieldDeletes(item,data,obj);
+
 		// Deleted item flag
 		var deleted = itemNode.getAttribute('deleted');
 		item.deleted = (deleted == 'true' || deleted == "1");
 		
 		// Item creators
 		var i = 0;
+		var pos = 0;
 		var creators = Zotero.Utilities.xpath(itemNode, "creator");
 		for each(var creator in creators) {
-			var pos = parseInt(creator.getAttribute('index'));
+			pos = parseInt(creator.getAttribute('index'));
 			if (pos != i) {
 				throw ('No creator in position ' + i);
 			}
@@ -4402,8 +4569,14 @@ Zotero.Sync.Server.Data = new function() {
 				creator.getAttribute('creatorType')
 			);
 			i++;
+			pos = i;
 		}
-		
+
+		// Merge creator content of an mlzsync1: prefix on the extra field
+		// into the item
+		this.decodeMlzCreators(item,obj,pos);
+		this.removeMlzCreatorDeletes(item,obj);
+
 		// Remove item's remaining creators not in XML
 		var numCreators = item.numCreators();
 		var rem = numCreators - i;
@@ -4446,10 +4619,164 @@ Zotero.Sync.Server.Data = new function() {
 			}
 		}
 		item.relatedItems = relatedIDs;
-		
 		return item;
 	}
-	
+
+	this.decodeMlzFields = function(item,primaryFields,extra,changedFields) {
+		// Unserialize data stored as JSON on the extra field, and
+		// attach to the object before delivery to Zotero.
+		var obj = {};
+		var itemTypeID = false;
+		if (extra) {
+			var m = extra.match(/^mlzsync1:([0-9]{4})/);
+			if (m) {
+				var offset = parseInt(m[1],10);
+				var objstr = extra.slice(13,offset+13);
+				if (objstr) {
+					try {
+						obj = JSON.parse(objstr);
+						// Save type ID for comparison
+						itemTypeID = Zotero.ItemTypes.getID(obj.type);
+					} catch (e) {
+						Zotero.debug("Multilingual sync: Parse error on "+objstr);
+					}
+				}
+			}
+		}
+		if (obj && itemTypeID === primaryFields.itemTypeID) {
+			if (obj.xtype) {
+				xItemTypeID = Zotero.ItemTypes.getID(obj.xtype);
+				if (xItemTypeID) {
+					// Type already set on item, use changeToType() method
+					primaryFields.itemTypeID = xItemTypeID;
+					item.setType(xItemTypeID);
+				}
+			}
+			if (obj.extrafields) {
+				for (var fieldName in obj.extrafields) {
+					item.setField(fieldName, obj.extrafields[fieldName]);
+					changedFields[fieldName] = true;
+				}
+			}
+			if (obj.multifields) {
+				for (var fieldName in obj.multifields._keys) {
+					for (var lang in obj.multifields._keys[fieldName]) {
+						item.setField(fieldName, obj.multifields._keys[fieldName][lang], false, lang);
+					}
+				}
+				// Reset lang of headline fields
+				item.multi.main = {};
+				for (var fieldName in obj.multifields.main) {
+					item.setField(fieldName, item.getField(fieldName), false, obj.multifields.main[fieldName], true);
+				}
+			}
+			item.setField("extra", extra.slice(offset+13));
+			changedFields.extra = true;
+		}
+		// Not used it sync, but used in item.js when converting
+		// pre-synced records
+		return obj;
+	}
+
+	this.removeMlzFieldDeletes = function(item,data,obj) {
+		// Remove multifields that are not present in the sync
+		// (but only if there is some evidence that multilingual is being used -- if not,
+		// leave multilingual fields in place for safety)
+		var previousMultiMains = item.getUsedMultiMains(true);
+		for each(var f in previousMultiMains) {
+			if ((!obj.multifields || !obj.multifields.main[f.fieldName]) && Zotero.ItemFields.isValidForType(f.fieldID, data.itemTypeID)) {
+				delete item.multi.main[f.fieldID];
+			}
+		}
+		var previousMultiFields = item.getUsedMultiFields(true);
+		for each(var f in previousMultiFields) {
+			if (Zotero.ItemFields.isValidForType(f.fieldID, data.itemTypeID)) {
+				if (!obj.multifields || !obj.multifields._keys[f.fieldName]) {
+					item.setField(f.fieldName,false,false,f.languageTag);
+				} else if (obj.multifields && !obj.multifields._keys[f.fieldName][f.languageTag]) {
+					if (item.multi._keys[f.fieldName]) {
+						item.setField(f.fieldName,false,false,f.languageTag);
+					}
+				}
+			}
+		}
+	}
+
+	this.decodeMlzCreators = function(item,obj,pos) {
+		// Cast and set extracreators
+		if (obj && obj.extracreators) {
+			for (var i=0,ilen=obj.extracreators.length; i<ilen; i+=1) {
+				extracreator = obj.extracreators[i];
+				creator = new Zotero.Creator;
+				creator.libraryID = item.libraryID;
+				creator.key = extracreator.key;
+				//creator.dateAdded = extracreator.dateAdded;
+				//creator.dateModified = extracreator.dateModified;
+				if (extracreator.fieldMode == 1) {
+					creator.firstName = '';
+					creator.lastName = extracreator.lastName;
+					creator.fieldMode = 1;
+					
+				} else {
+					creator.firstName = extracreator.firstName;
+					creator.lastName = extracreator.lastName;
+					creator.fieldMode = 0;
+				}
+				creator.birthYear = creator.birthYear;
+				item.setCreator(
+					(pos+i),
+					creator,
+					extracreator.creatorType
+				);
+			}
+		}
+		// Cast and set multicreators
+		if (obj && obj.multicreators) {
+			for (var pos in obj.multicreators) {
+				multicreatorset = obj.multicreators[pos];
+				for (var lang in multicreatorset._key) {
+					multicreator = multicreatorset._key[lang];
+					var creator = new Zotero.Creator;
+					if (item.libraryID) {
+						creator.libraryID = item.libraryID;
+					}
+					creator.firstName = multicreator.firstName;
+					creator.lastName = multicreator.lastName;
+					creator.birthYear = multicreator.birthYear;
+					creator.fieldMode = multicreatorset.fieldMode;
+					if (multicreatorset.fieldMode && multicreatorset._key[lang].firstName) {
+						Zotero.debug("Warning: Adjusting fieldMode mismatch under creator at position " + pos + " on item " + item.id + ". Probable corruption in item received from server.");
+						if (creator.lastName) {
+							creator.lastName = creator.firstName + " " + creator.lastName;
+						} else {
+							creator.lastName = creator.firstName;
+						}
+						creator.firstName = '';
+						creator.fieldMode = multicreatorset.fieldMode;
+					}
+					item.setCreator(
+						parseInt(pos,10),
+						creator,
+						false,
+						lang
+					);
+				}
+			}
+		}
+	}
+
+	this.removeMlzCreatorDeletes = function(item,obj) {
+		// Remove multicreators that are not present in the sync
+		var creators = item.getCreators();
+		for (var i=0,ilen=creators.length; i<ilen; i+=1) {
+			var creator = creators[i];
+			for (var langTag in creator.multi._key) {
+				if (!obj || !obj.multicreators || !obj.multicreators[i] || !obj.multicreators[i]._key[langTag]) {
+					item.removeCreator(i, langTag);
+				}
+			}
+		}
+	}
 	
 	this.removeMissingRelatedItems = function (itemNode) {
 		var relatedNode = Zotero.Utilities.xpath(itemNode, "related");
