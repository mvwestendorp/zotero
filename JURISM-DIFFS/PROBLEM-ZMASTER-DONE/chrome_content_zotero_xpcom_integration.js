diff --git a/chrome/content/zotero/xpcom/integration.js b/chrome/content/zotero/xpcom/integration.js
index 3d92761..3f57071 100644
--- a/chrome/content/zotero/xpcom/integration.js
+++ b/chrome/content/zotero/xpcom/integration.js
@@ -1679,6 +1679,60 @@ Zotero.Integration.Fields.prototype._updateDocument = function(forceCitations, f
 	for(var i=(removeCodeFields.length-1); i>=0; i--) {
 		this._fields[removeCodeFields[i]].removeCode();
 	}
+
+	// Update projectName tags on Zotero-side
+	var projectName = this._session.data.prefs.projectName;
+	var groupID = this._session.data.prefs.groupID;
+	var groupName = this._session.data.prefs.groupName;
+
+	// Act only if the document defines a projectName
+	if (projectName) {
+
+		// If a project name has only one associated document, we may
+		// want to purge the tag from all libraries where it might have 
+		// on each update.
+
+		//var sql = 'SELECT tagID FROM tags WHERE type=10000 AND name=?;';
+		//var tagIDs = Zotero.DB.columnQuery(sql,[projectName]);
+		//Zotero.Tags.erase(tagIDs);
+		//Zotero.Tags.purge(tagIDs);
+
+		// Set the document projectName tag on each cited reference
+		var libraryTagMap = {};
+		var ids = this._session.style.registry.getSortedIds();
+		var existingIDs = Zotero.Items.exist(ids);
+		//var nonexistingIDs = ids.filter(function(x){return existingIDs.indexOf(x) == -1});
+		for (var i=0,ilen=existingIDs.length;i<ilen;i+=1) {
+			var itemID = existingIDs[i];
+			// We can't get the libraryID from the processor registry
+			var libraryID = Zotero.Items.get(itemID).libraryID;
+			if (!libraryTagMap[libraryID]) {
+				// Reuse an existing project name if we can
+				var existingTagID = Zotero.Tags.getID(projectName, 10000, libraryID);
+				if (existingTagID) {
+					libraryTagMap[libraryID] = Zotero.Tags.get(existingTagID);
+				} else {
+					libraryTagMap[libraryID] = new Zotero.Tag;
+					libraryTagMap[libraryID].libraryID = libraryID;
+					libraryTagMap[libraryID].name = projectName;
+					libraryTagMap[libraryID].type = 10000;
+					libraryTagMap[libraryID].save();
+				}
+			}
+			libraryTagMap[libraryID].addItem(itemID);
+		}
+		//for (var i=0,ilen=nonexistingIDs.length;i<ilen;i+=1) {
+		//	var id = nonexistingIDs[i];
+		//	Zotero.debug('MLZ: NONEXISTING embedded item: '+JSON.stringify(this._session.style.registry.registry[id].ref));
+		//}
+		//for (var i=0,ilen=existingIDs.length;i<ilen;i+=1) {
+		//	var id = existingIDs[i];
+		//	Zotero.debug('MLZ: EXISTING embedded item: '+JSON.stringify(this._session.style.registry.registry[id].ref));
+		//}
+		for (var libraryID in libraryTagMap) {
+			libraryTagMap[libraryID].save(true);
+		}
+	}
 }
 
 /**
@@ -2043,6 +2097,11 @@ Zotero.Integration.Session.prototype.setData = function(data, resetStyle) {
 			this.style.setOutputFormat("rtf");
 			this.styleClass = getStyle.class;
 			this.dateModified = new Object();
+			this.style.setLangTagsForCslTransliteration(data.prefs.citationTransliteration);
+			this.style.setLangTagsForCslTranslation(data.prefs.citationTranslation);
+			this.style.setLangTagsForCslSort(data.prefs.citationSort);
+			this.style.setLangPrefsForCites(data.prefs, function(key){return 'citationLangPrefs'+key});
+			this.style.setLangPrefsForCiteAffixes(data.prefs.citationAffixes);
 		} catch(e) {
 			Zotero.logError(e);
 			data.style.styleID = undefined;
@@ -2076,6 +2135,20 @@ Zotero.Integration.Session.prototype.setDocPrefs = function(doc, primaryFieldTyp
 		io.storeReferences = this.data.prefs.storeReferences;
 		io.automaticJournalAbbreviations = this.data.prefs.automaticJournalAbbreviations;
 		io.requireStoreReferences = !Zotero.Utilities.isEmpty(this.embeddedItems);
+		io.citationTransliteration = this.data.prefs.citationTransliteration;
+		io.citationTranslation = this.data.prefs.citationTranslation;
+		io.citationSort = this.data.prefs.citationSort;
+		io.citationLangPrefsPersons = this.data.prefs.citationLangPrefsPersons;
+		io.citationLangPrefsInstitutions = this.data.prefs.citationLangPrefsInstitutions;
+		io.citationLangPrefsTitles = this.data.prefs.citationLangPrefsTitles;
+		io.citationLangPrefsJournals = this.data.prefs.citationLangPrefsJournals;
+		io.citationLangPrefsPublishers = this.data.prefs.citationLangPrefsPublishers;
+		io.citationLangPrefsPlaces = this.data.prefs.citationLangPrefsPlaces;
+		io.citationAffixes = this.data.prefs.citationAffixes;
+		io.projectName = this.data.prefs.projectName;
+		io.groupID = this.data.prefs.groupID;
+		io.groupName = this.data.prefs.groupName;
+		io.suppressTrailingPunctuation = this.data.prefs.suppressTrailingPunctuation;
 	}
 	
 	var me = this;
@@ -2102,6 +2175,21 @@ Zotero.Integration.Session.prototype.setDocPrefs = function(doc, primaryFieldTyp
 		// need to do this after setting the data so that we know if it's a note style
 		me.data.prefs.noteType = me.style && me.styleClass == "note" ? io.useEndnotes+1 : 0;
 		
+		me.data.prefs.citationTransliteration = io.citationTransliteration;
+		me.data.prefs.citationTranslation = io.citationTranslation;
+		me.data.prefs.citationSort = io.citationSort;
+		me.data.prefs.citationLangPrefsPersons = io.citationLangPrefsPersons;
+		me.data.prefs.citationLangPrefsInstitutions = io.citationLangPrefsInstitutions;
+		me.data.prefs.citationLangPrefsTitles = io.citationLangPrefsTitles;
+		me.data.prefs.citationLangPrefsJournals = io.citationLangPrefsJournals;
+		me.data.prefs.citationLangPrefsPublishers = io.citationLangPrefsPublishers;
+		me.data.prefs.citationLangPrefsPlaces = io.citationLangPrefsPlaces;
+		me.data.prefs.citationAffixes = io.citationAffixes;
+		me.data.prefs.projectName = io.projectName;
+		me.data.prefs.groupID = io.groupID;
+		me.data.prefs.groupName = io.groupName;
+		me.data.prefs.suppressTrailingPunctuation = io.suppressTrailingPunctuation;
+		
 		if(!oldData || oldData.style.styleID != data.style.styleID
 				|| oldData.prefs.noteType != data.prefs.noteType
 				|| oldData.prefs.fieldType != data.prefs.fieldType
@@ -2110,6 +2198,14 @@ Zotero.Integration.Session.prototype.setDocPrefs = function(doc, primaryFieldTyp
 			me.oldCitationIDs = {};
 		}
 		
+		me.style.setLangTagsForCslTransliteration(me.data.prefs.citationTransliteration);
+		me.style.setLangTagsForCslTranslation(me.data.prefs.citationTranslation);
+		me.style.setLangTagsForCslSort(me.data.prefs.citationSort);
+		me.style.setLangPrefsForCites(me.data.prefs, function(key){return 'citationLangPrefs'+key});
+		me.style.setLangPrefsForCiteAffixes(me.data.prefs.citationAffixes);
+		me.style.setSuppressTrailingPunctuation(me.data.prefs.suppressTrailingPunctuation);
+		me.style.setAutoVietnameseNamesOption(Zotero.Prefs.get('csl.autoVietnameseNames'));
+
 		return oldData || null;
 	});
 }
@@ -2147,7 +2243,8 @@ Zotero.Integration.Session.prototype.reselectItem = function(doc, exception) {
  * Generates a field from a citation object
  */
 Zotero.Integration.Session.prototype.getCitationField = function(citation) {
-	const saveProperties = ["custom", "unsorted", "formattedCitation", "plainCitation", "dontUpdate"];
+	const saveProperties = ["custom", "unsorted", "formattedCitation", "plainCitation", "dontUpdate",
+ 		"suppress-trailing-punctuation"];
 	const saveCitationItemKeys = ["locator", "label", "suppress-author", "author-only", "prefix",
 		"suffix"];
 	var addSchema = false;
@@ -2181,6 +2278,8 @@ Zotero.Integration.Session.prototype.getCitationField = function(citation) {
 			
 			// always store itemData, since we have no way to get it back otherwise
 			serializeCitationItem.itemData = citationItem.itemData;
+			// Normalize legacy multilingual data lurking in document
+			Zotero.Sync.Server.Data.mlzEncodeFieldsAndCreators(serializeCitationItem.itemData);
 			addSchema = true;
 		} else {
 			serializeCitationItem.id = citationItem.id;
@@ -2191,7 +2290,8 @@ Zotero.Integration.Session.prototype.getCitationField = function(citation) {
 		
 			// add itemData only if requested
 			if(this.data.prefs.storeReferences) {
-				serializeCitationItem.itemData = this.style.sys.retrieveItem(citationItem.id);
+				var zoteroItem = Zotero.Items.get(citationItem.id);
+				serializeCitationItem.itemData = Zotero.Utilities.itemToCSLJSON(zoteroItem, undefined, true);
 				addSchema = true;
 			}
 		}
@@ -2288,7 +2388,7 @@ Zotero.Integration.Session.prototype.lookupItems = function(citation, index) {
 		
 		// get Zotero item
 		var zoteroItem = false,
-		    needUpdate;
+			needUpdate;
 		if(citationItem.uris) {
 			[zoteroItem, needUpdate] = this.uriMap.getZoteroItemForURIs(citationItem.uris);
 			if(needUpdate && index) this.updateIndices[index] = true;
@@ -2309,7 +2409,12 @@ Zotero.Integration.Session.prototype.lookupItems = function(citation, index) {
 			}
 		} else {
 			if(citationItem.key) {
-				zoteroItem = Zotero.Items.getByKey(citationItem.key);
+				// official Zotero uses key, but library and key seem to be needed
+				// to avoid a (very, very small) possibility of ambiguity.
+				//zoteroItem = Zotero.Items.getByKey(citationItem.key);
+				var m = ("" + citationItem.key).match(/(?:([0-9]+)_)*(.*)/);
+				var libraryID = m[1] === "0" ? null : m[1];
+				zoteroItem = Zotero.Items.getByLibraryAndKey(libraryID, m[2]);
 			} else if(citationItem.itemID) {
 				zoteroItem = Zotero.Items.get(citationItem.itemID);
 			} else if(citationItem.id) {
@@ -2346,23 +2451,58 @@ Zotero.Integration.Session.prototype.lookupItems = function(citation, index) {
 			
 			if(!zoteroItem) {
 				if(citationItem.itemData) {
-					// add new embedded item
-					var itemData = Zotero.Utilities.deepCopy(citationItem.itemData);
-					
-					// assign a random string as an item ID
-					var anonymousID = Zotero.randomString();
-					var globalID = itemData.id = citationItem.id = this.data.sessionID+"/"+anonymousID;
-					this.embeddedItems[anonymousID] = itemData;
-					
-					// assign a Zotero item
-					var surrogateItem = this.embeddedZoteroItems[anonymousID] = new Zotero.Item();
-					Zotero.Utilities.itemFromCSLJSON(surrogateItem, itemData);
-					surrogateItem.cslItemID = globalID;
-					surrogateItem.cslURIs = citationItem.uris;
-					surrogateItem.cslItemData = itemData;
-					
-					for(var j=0, m=citationItem.uris.length; j<m; j++) {
-						this.embeddedZoteroItemsByURI[citationItem.uris[j]] = surrogateItem;
+					if (this.data.prefs.groupID) {
+						var libraryID = Zotero.Groups.getLibraryIDFromGroupID(this.data.prefs.groupID, true);
+						if (libraryID) {
+							var itemData = citationItem.itemData;
+							zoteroItem = new Zotero.Item();
+							// true is for portableJSON (MLZ decoding)
+							Zotero.Utilities.itemFromCSLJSON(zoteroItem, itemData, libraryID, true);
+							zoteroItem.itemData = itemData;
+							var itemID = zoteroItem.save();
+							zoteroItem = Zotero.Items.get(itemID);
+							citationItem.itemData.id = zoteroItem.id;
+							citationItem.itemData.key = zoteroItem.key;
+							var newURIs = this.uriMap.getURIsForItemID(zoteroItem.id);
+							if (citationItem.uris && citationItem.uris.length) {
+								// Set up to reselect the newly created item
+								this.reselectedItems[citationItem.uris[0]] = zoteroItem.id;
+								// Prefer the newly created item over the private copy
+								for (var j=newURIs.length-1;j>-1;j+=-1) {
+									citationItem.uris.unshift(newURIs[j]);
+								}
+							} else if (citationItem.key) {
+								this.reselectedItems[citationItem.key] = zoteroItem.id;
+								citationItem.uris = newURIs;
+							} else if (citationItem.id) {
+								this.reselectedItems[citationItem.id] = zoteroItem.id;
+							} else {
+								this.reselectedItems[citationItem.itemID] = zoteroItem.id;
+							}
+							citationItem.id = zoteroItem.id;
+							citationItem.key = zoteroItem.key;
+							citationItem.libraryID = zoteroItem.libraryID;
+						}
+					} else {
+						// add new embedded item
+						var itemData = Zotero.Utilities.deepCopy(citationItem.itemData);
+						
+						// assign a random string as an item ID
+						var anonymousID = Zotero.randomString();
+						var globalID = itemData.id = citationItem.id = this.data.sessionID+"/"+anonymousID;
+						this.embeddedItems[anonymousID] = itemData;
+						
+						// assign a Zotero item
+						var surrogateItem = this.embeddedZoteroItems[anonymousID] = new Zotero.Item();
+						// true is for portableJSON (MLZ decoding)
+						Zotero.Utilities.itemFromCSLJSON(surrogateItem, itemData, undefined, true);
+						surrogateItem.cslItemID = globalID;
+						surrogateItem.cslURIs = citationItem.uris;
+						surrogateItem.cslItemData = itemData;
+						
+						for(var j=0, m=citationItem.uris.length; j<m; j++) {
+							this.embeddedZoteroItemsByURI[citationItem.uris[j]] = surrogateItem;
+						}
 					}
 				} else {
 					// if not already reselected, throw a MissingItemException
@@ -2705,7 +2845,11 @@ Zotero.Integration.Session.prototype.loadBibliographyData = function(json) {
 		} else {
 			for(var itemID in documentData.uncited) {
 				// if not yet in item set, add to item set
-				var zoteroItem = Zotero.Items.getByKey(itemID);
+				// see above
+				//var zoteroItem = Zotero.Items.getByKey(itemID);
+				var m = ("" + itemID).match(/(?:([0-9]+)_)*(.*)/);
+				var libraryID = m[1] === "0" ? null : m[1];
+				var zoteroItem = Zotero.Items.getByLibraryAndKey(libraryID, m[2]);
 				if(!zoteroItem) zoteroItem = Zotero.Items.get(itemID);
 				if(zoteroItem) this.uncitedItems[zoteroItem.id] = true;
 			}
@@ -2956,6 +3100,19 @@ Zotero.Integration.Session.BibliographyEditInterface.prototype.setCustomText = f
 Zotero.Integration.DocumentData = function(string) {
 	this.style = {};
 	this.prefs = {};
+	this.prefs.citationTransliteration = [];
+	this.prefs.citationTranslation = [];
+	this.prefs.citationSort = [];
+	this.prefs.citationLangPrefsPersons = [];
+	this.prefs.citationLangPrefsInstitutions = [];
+	this.prefs.citationLangPrefsTitles = [];
+	this.prefs.citationLangPrefsJournals = [];
+	this.prefs.citationLangPrefsPublishers = [];
+	this.prefs.citationLangPrefsPlaces = [];
+	this.prefs.citationAffixes = [,,,,,,,,,,,,,,,,,,];
+	this.prefs.projectName = '';
+	this.prefs.groupID = '';
+	this.prefs.groupName = '';
 	this.sessionID = null;
 	if(string) {
 		this.unserialize(string);
@@ -2968,8 +3125,25 @@ Zotero.Integration.DocumentData = function(string) {
 Zotero.Integration.DocumentData.prototype.serializeXML = function() {
 	var prefs = "";
 	for(var pref in this.prefs) {
-		prefs += '<pref name="'+Zotero.Utilities.htmlSpecialChars(pref)+'" '+
-			'value="'+Zotero.Utilities.htmlSpecialChars(this.prefs[pref])+'"/>';
+		if (pref === 'citationAffixes') {
+			var citeaffixes = "|||||||||||||||||||||||||||||||||||||||||||||||";
+			if (this.prefs.citationAffixes && this.prefs.citationAffixes.length === 48) {
+				citeaffixes = this.prefs.citationAffixes.join('|');
+			}
+			prefs += '<pref name="citationAffixes" '+
+				'value="'+Zotero.Utilities.htmlSpecialChars(citeaffixes)+'"/>'
+		} else if (Zotero.DOCUMENT_MULTI_PREFERENCES.indexOf(pref) > -1) {
+			// Probably not necessary
+			if (!this.prefs[pref]) {
+				this.prefs[pref] = ['orig'];
+			}
+			var citeprefdata = this.prefs[pref].join(",");
+			prefs += '<pref name="'+Zotero.Utilities.htmlSpecialChars(pref)+'" '+
+				'value="'+Zotero.Utilities.htmlSpecialChars(citeprefdata)+'"/>';
+		} else {
+			prefs += '<pref name="'+Zotero.Utilities.htmlSpecialChars(pref)+'" '+
+				'value="'+Zotero.Utilities.htmlSpecialChars("" + this.prefs[pref])+'"/>';
+		}
 	}
 	
 	return '<data data-version="'+Zotero.Utilities.htmlSpecialChars(DATA_VERSION)+'" '+
@@ -3004,9 +3178,24 @@ Zotero.Integration.DocumentData.prototype.unserializeXML = function(xmlData) {
 		}
 		
 		this.prefs[name] = value;
+		if (Zotero.DOCUMENT_MULTI_PREFERENCES.indexOf(name) > -1) {
+			if (value) {
+				this.prefs[name] = value.split(",");
+			} else {
+				this.prefs[name] = [];
+			}
+		} else if ("citationAffixes" === name) {
+			this.prefs[name] = value.split("|");
+		} else {
+			this.prefs[name] = value;
+		}
 	}
 	if(this.prefs["storeReferences"] === undefined) this.prefs["storeReferences"] = false;
 	if(this.prefs["automaticJournalAbbreviations"] === undefined) this.prefs["automaticJournalAbbreviations"] = false;
+	if(this.prefs["projectName"] === undefined) this.prefs["projectName"] = "";
+	if(this.prefs["groupID"] === undefined) this.prefs["groupID"] = "";
+	if(this.prefs["groupName"] === undefined) this.prefs["groupName"] = "";
+	if(this.prefs["suppressTrailingPunctuation"] === undefined) this.prefs["suppressTrailingPunctuation"] = false;
 	this.zoteroVersion = doc.documentElement.getAttribute("zotero-version");
 	if(!this.zoteroVersion) this.zoteroVersion = "2.0";
 	this.dataVersion = doc.documentElement.getAttribute("data-version");
