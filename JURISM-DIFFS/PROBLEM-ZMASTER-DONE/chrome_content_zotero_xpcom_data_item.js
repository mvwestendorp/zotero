diff --git a/chrome/content/zotero/xpcom/data/item.js b/chrome/content/zotero/xpcom/data/item.js
index 2429014..b690b0e 100644
--- a/chrome/content/zotero/xpcom/data/item.js
+++ b/chrome/content/zotero/xpcom/data/item.js
@@ -23,6 +23,7 @@
     ***** END LICENSE BLOCK *****
 */
 
+/*global Zotero: true */
 
 /*
  * Constructor for Item object
@@ -52,6 +53,7 @@ Zotero.Item.prototype._init = function () {
 	this._dateAdded = null;
 	this._dateModified = null;
 	this._firstCreator = null;
+	this._sortCreator = null;
 	this._numNotes = null;
 	this._numNotesTrashed = null;
 	this._numNotesEmbedded = null;
@@ -71,6 +73,7 @@ Zotero.Item.prototype._init = function () {
 	this._changedPrimaryData = false;
 	this._changedItemData = false;
 	this._changedCreators = false;
+	this._changedAltCreators = false;
 	this._changedDeleted = false;
 	this._changedNote = false;
 	this._changedSource = false;
@@ -96,6 +99,8 @@ Zotero.Item.prototype._init = function () {
 	this._attachmentSyncState;
 	
 	this._relatedItems = false;
+
+	this.multi = new Zotero.MultiField(this);
 }
 
 
@@ -126,6 +131,7 @@ Zotero.Item.prototype.__defineGetter__('itemTypeID', function () {
 Zotero.Item.prototype.__defineGetter__('dateAdded', function () { return this.getField('dateAdded'); });
 Zotero.Item.prototype.__defineGetter__('dateModified', function () { return this.getField('dateModified'); });
 Zotero.Item.prototype.__defineGetter__('firstCreator', function () { return this.getField('firstCreator'); });
+Zotero.Item.prototype.__defineGetter__('sortCreator', function () { return this.getField('sortCreator'); });
 
 Zotero.Item.prototype.__defineGetter__('relatedItems', function () { var ids = this._getRelatedItems(true); return ids; });
 Zotero.Item.prototype.__defineSetter__('relatedItems', function (arr) { this._setRelatedItems(arr); });
@@ -181,7 +187,7 @@ Zotero.Item.prototype.exists = function() {
  * If |includeBaseMapped| is true and field is a base field, returns value of
  * 		type-specific field instead (e.g. 'label' for 'publisher' in 'audioRecording')
  */
-Zotero.Item.prototype.getField = function(field, unformatted, includeBaseMapped) {
+Zotero.Item.prototype.getField = function(field, unformatted, includeBaseMapped, language, honorEmpty) {
 	// We don't allow access after saving to force use of the centrally cached
 	// object, but we make an exception for the id
 	if (field != 'id') {
@@ -241,13 +247,17 @@ Zotero.Item.prototype.getField = function(field, unformatted, includeBaseMapped)
 		this._loadItemData();
 	}
 	
-	var value = this._itemData[fieldID] ? this._itemData[fieldID] : '';
+	if (Zotero.multiFieldIds[fieldID]) {
+		var value = this.multi.get(fieldID, language, honorEmpty);
+	} else {
+		var value = this._itemData[fieldID] ? this._itemData[fieldID] : '';
+	}
 	
 	if (!unformatted) {
 		// Multipart date fields
 		// TEMP - filingDate
-		if (Zotero.ItemFields.isFieldOfBase(fieldID, 'date') || field == 'filingDate') {
-			value = Zotero.Date.multipartToStr(value);
+		if (Zotero.ItemFields.isFieldOfBase(fieldID, 'date') || ['filingDate','priorityDate','publicationDate','originalDate','signingDate','openingDate','adoptionDate','newsCaseDate','conferenceDate', 'dateAmended'].indexOf(field) > -1) {
+			var value = Zotero.Date.multipartToStr(value);
 		}
 	}
 	//Zotero.debug('Returning ' + value);


@@ -274,6 +284,40 @@ Zotero.Item.prototype.getUsedFields = function(asNames) {
 	return fields;
 }
 
+/**
+ * @param	{Boolean}				asNames
+ * @return	{Integer{}|String[]}
+ */
+Zotero.Item.prototype.getUsedMultiMains = function() {
+	if (!this.id) {
+		return [];
+	}
+	sql = "SELECT fieldID FROM itemDataMain WHERE itemID=?";
+	sql = "SELECT DISTINCT fieldName,fieldID,languageTag FROM fields NATURAL JOIN itemDataMain WHERE itemID=? AND fieldID IN (" + sql + ")";
+	var rows = Zotero.DB.query(sql, [this.id,this.id]);
+	if (!rows) {
+		return [];
+	}
+	return rows;
+}
+Zotero.Item.prototype.getUsedMultiFields = function(asNames) {
+	if (!this.id) {
+		return [];
+	}
+	var sql = "SELECT DISTINCT fieldID,languageTag FROM itemDataAlt WHERE itemID=?";
+	if (asNames) {
+		// "";
+		sql = "SELECT DISTINCT fieldName,fieldID,languageTag FROM fields NATURAL JOIN itemDataAlt WHERE fieldID IN (SELECT fieldID FROM itemDataAlt WHERE itemID=20)"
+		sql = "SELECT fieldID FROM itemDataAlt WHERE itemID=?";
+		sql = "SELECT DISTINCT fieldName,fieldID,languageTag FROM fields NATURAL JOIN itemDataAlt WHERE itemID=? AND fieldID IN (" + sql + ")";
+	}
+	var rows = Zotero.DB.query(sql, [this.id,this.id]);
+	if (!rows) {
+		return [];
+	}
+	return rows;
+}
+

 
 
 /*
@@ -309,6 +353,10 @@ Zotero.Item.prototype.loadPrimaryData = function(allowFail) {
 					colSQL = Zotero.Items.getFirstCreatorSQL();
 					break;
 					
+				case 'sortCreator':
+					colSQL = Zotero.Items.getSortCreatorSQL();
+					break;
+
 				case 'numNotes':
 					colSQL = '(SELECT COUNT(*) FROM itemNotes INo '
 						+ 'WHERE sourceItemID=I.itemID AND INo.itemID '
@@ -430,6 +480,7 @@ Zotero.Item.prototype.hasChanged = function() {
 		|| this._changedPrimaryData
 		|| this._changedItemData
 		|| this._changedCreators
+		|| this._changedAltCreators
 		|| this._changedDeleted
 		|| this._changedNote
 		|| this._changedSource


@@ -457,6 +509,8 @@ Zotero.Item.prototype.setType = function(itemTypeID, loadIn) {
 		}
 		
 		var copiedFields = [];
+		var copiedMultilingualFieldData = {};
+		var copiedMultilingualLanguageLists = {};
 		
 		// Special cases handled below
 		var bookTypeID = Zotero.ItemTypes.getID('book');
@@ -472,6 +526,13 @@ Zotero.Item.prototype.setType = function(itemTypeID, loadIn) {
 				var shortTitleFieldID = Zotero.ItemFields.getID('shortTitle');
 				if (this._itemData[bookTitleFieldID] && !this._itemData[titleFieldID]) {
 					copiedFields.push([titleFieldID, this._itemData[bookTitleFieldID]]);
+					if (this.multi._keys[bookTitleFieldID]) {
+						copiedMultilingualLanguageLists[titleFieldID] = this.multi._lsts[bookTitleFieldID].slice();
+						copiedMultilingualFieldData[titleFieldID] = {};
+						for (var langTag in this.multi._keys[bookTitleFieldID]) {
+							copiedMultilingualFieldData[titleFieldID][langTag] = this.multi._keys[bookTitleFieldID][langTag];
+						}
+					}
 					newNotifierFields.push(titleFieldID);
 					if (this._itemData[shortTitleFieldID]) {
 						this.setField(shortTitleFieldID, false);
@@ -491,6 +553,15 @@ Zotero.Item.prototype.setType = function(itemTypeID, loadIn) {
 					// If so, save value to copy to new field
 					if (newFieldID) {
 						copiedFields.push([newFieldID, this.getField(oldFieldID)]);
+						if (this.multi._keys[oldFieldID]) {
+							if (!copiedMultilingualFieldData[newFieldID]) {
+								copiedMultilingualFieldData[newFieldID] = {};
+								copiedMultilingualLanguageLists[newFieldID] = this.multi._lsts[oldFieldID].slice();
+								for (var langTag in this.multi._keys[oldFieldID]) {
+									copiedMultilingualFieldData[newFieldID][langTag] = this.multi._keys[oldFieldID][langTag];
+								}
+							}
+						}
 					}
 				}
@@ -513,6 +584,15 @@ Zotero.Item.prototype.setType = function(itemTypeID, loadIn) {
 			var shortTitleFieldID = Zotero.ItemFields.getID('shortTitle');
 			if (this._itemData[titleFieldID]) {
 				copiedFields.push([bookTitleFieldID, this._itemData[titleFieldID]]);
+				if (this.multi._keys[titleFieldID]) {
+					if (!copiedMultilingualFieldData[bookTitleFieldID]) {
+						copiedMultilingualFieldData[bookTitleFieldID] = {};
+					}
+					copiedMultilingualLanguageLists[bookTitleFieldID] = this.multi._lsts[titleFieldID].slice();
+					for (var langTag in this.multi._keys[titleFieldID]) {
+						copiedMultilingualFieldData[bookTitleFieldID][langTag] = this.multi._keys[titleFieldID][langTag];
+					}
+				}
 				newNotifierFields.push(bookTitleFieldID);
 				this.setField(titleFieldID, false);
 			}
@@ -525,6 +605,15 @@ Zotero.Item.prototype.setType = function(itemTypeID, loadIn) {
 			if (this._itemData[fieldID] &&
 					(!obsoleteFields || obsoleteFields.indexOf(fieldID) == -1)) {
 				copiedFields.push([fieldID, this.getField(fieldID)]);
+				if (!copiedMultilingualFieldData[fieldID]) {
+					if (this.multi._keys[fieldID]) {
+						copiedMultilingualLanguageLists[fieldID] = this.multi._lsts[fieldID].slice();
+						copiedMultilingualFieldData[fieldID] = {};
+						for (var langTag in this.multi._keys[fieldID]) {
+							copiedMultilingualFieldData[fieldID][langTag] = this.multi._keys[fieldID][langTag];
+						}
+					}
+				}
 			}
 		}
 	}
@@ -554,7 +643,8 @@ Zotero.Item.prototype.setType = function(itemTypeID, loadIn) {
 					}
 					var target = newPrimary ? newPrimary : 2;
 					
-					this.setCreator(i, creators[i].ref, target);
+					this.setCreator(i, creators[i].ref, target, creators[i].multi.main);
+
 				}
 			}
 		}
@@ -584,6 +675,13 @@ Zotero.Item.prototype.setType = function(itemTypeID, loadIn) {
 				this.setField(f[0], f[1]);
 				this._clearFieldChange(Zotero.ItemFields.getName(f[0]));
 			}
+			if (copiedMultilingualFieldData[f[0]]) {
+				this.multi._keys[f[0]] = {};
+				this.multi._lsts[f[0]] = copiedMultilingualLanguageLists[f[0]];
+				for (var langTag in copiedMultilingualFieldData[f[0]]) {
+					this.setField(f[0], copiedMultilingualFieldData[f[0]][langTag], true, langTag);
+				}
+			}
 		}
 	}
 	
@@ -683,13 +781,35 @@ Zotero.Item.prototype.inCollection = function(collectionID) {
 		+ "itemID=" + this.id));
 }
 
+/*
+Zotero.Item.prototype.setJurisdiction = function (value) {
+	var jurisdictionID = Zotero.ItemFields.getID('jurisdiction');
+	var fields = Zotero.ItemFields.getItemTypeFields(this.itemTypeID);
+	if (fields.indexOf(jurisdictionID) > -1) {
+		var itemType = Zotero.ItemTypes.getName(this.itemTypeID);
+		if (["report","journalArticle"].indexOf(itemType) === -1) {
+			if (!this.getField(jurisdictionID)) {
+				var jurisdictionDefault = Zotero.Prefs.get("import.jurisdictionDefault");
+				var jurisdictionFallback = Zotero.Prefs.get("import.jurisdictionFallback");
+				if (jurisdictionDefault) {
+					this.setField(jurisdictionID,jurisdictionDefault);
+				} else if (jurisdictionFallback) {
+					this.setField(jurisdictionID,jurisdictionFallback);
+				} else {
+					this.setField(jurisdictionID,"us");
+				}
+			}
+		}
+	}
+}
+*/
 
 /*
  * Set a field value, loading existing itemData first if necessary
  *
  * Field can be passed as fieldID or fieldName
  */
-Zotero.Item.prototype.setField = function(field, value, loadIn) {
+Zotero.Item.prototype.setField = function(field, value, loadIn, lang, force_top) {
 	if (typeof value == 'string') {
 		value = value.trim().normalize();
 	}
@@ -737,6 +857,7 @@ Zotero.Item.prototype.setField = function(field, value, loadIn) {
 		switch (field) {
 			case 'itemID':
 			case 'firstCreator':
+			case 'sortCreator':
 			case 'numNotes':
 			case 'numAttachments':
 			case 'sourceItemID':
@@ -843,11 +964,10 @@ Zotero.Item.prototype.setField = function(field, value, loadIn) {
 	}
 	
 	if (!loadIn) {
-		// Save date field as multipart date
-		// TEMP - filingDate
-		if (value !== false
-				&& (Zotero.ItemFields.isFieldOfBase(fieldID, 'date') || field == 'filingDate')
-				&& !Zotero.Date.isMultipart(value)) {
+		// Save date field etc as multipart dates
+		// fieldIDs represent: ['filingDate','newsCaseDate','priorityDate','publicationDate','originalDate','signingDate','openingDate','adoptionDate','conferenceDate','dateAmended']
+		if ((Zotero.ItemFields.isFieldOfBase(fieldID, 'date') || [121,1265,1266,1268,1272,1277,1278,1279,1283,1287].indexOf(fieldID) > -1)
+			&& !Zotero.Date.isMultipart(value)) {
 			value = Zotero.Date.strToMultipart(value);
 		}
 		// Validate access date
@@ -862,29 +982,94 @@ Zotero.Item.prototype.setField = function(field, value, loadIn) {
 		}
 		
 		// If existing value, make sure it's actually changing
-		if ((typeof this._itemData[fieldID] == 'undefined' && value === false)
-				|| (typeof this._itemData[fieldID] != 'undefined'
-					&& this._itemData[fieldID] === value)) {
+
+		// Do nothing if:
+		// (1) The field is empty and so is the value; or
+		// (2) No lang is specified OR the specified lang is the lang of the main field; AND
+		//	 value is not nil and matches the main field value; or
+		// (3) Lang is specified AND value is not nil and matches the corresponding 
+		//     multi field value
+		// OOOOO: See multilingual/container for structure of multi object.
+
+		var baseID = Zotero.ItemFields.getBaseIDFromTypeAndField(this.itemTypeID, fieldID);
+
+		if (value && baseID == Zotero.ItemFields.getID('title')) {
+			value = value.replace(/(\u202a|\u202b|\u202c)/g, "");
+			var languageFieldID = Zotero.ItemFields.getID("language");
+			var itemLanguage = this._itemData[languageFieldID] ? this._itemData[languageFieldID] : '';
+			if (Zotero.isRTL([itemLanguage])) {
+				value = "\u202b" + value + "\u202c";
+			}
+		}
+		// Official 3.0 branch uses this for the condition below
+		//if ((typeof this._itemData[fieldID] == 'undefined' && value === false)
+		//		|| (typeof this._itemData[fieldID] != 'undefined'
+		//			&& this._itemData[fieldID] === value)) {
+		//	return false;
+		//}
+
+		if (
+			(!this._itemData[fieldID] && !value) 
+			|| (
+				value
+				&& (!lang || lang === this.multi.main[fieldID])
+					&& (this._itemData[fieldID] + "") === (value + "")
+				)
+			|| (
+				value
+				&& lang
+				&& this.multi._keys[fieldID]
+				&& this.multi._keys[fieldID][lang] === value
+				)
+			) {
 			return false;
 		}
 		
 		// Save a copy of the field before modifying
+		// (This should probably be extended to catch multilingual field values)
 		this._markFieldChange(
 			Zotero.ItemFields.getName(field), this._itemData[fieldID]
 		);
 	}
 	
-	this._itemData[fieldID] = value;
+	// Set with multi.set() if:
+	// - lang exists; AND
+	// - lang does NOT equal the language of the main entry; AND
+	// - main entry already has a value.
+	// Otherwise, set value in main entry.
+
+	if (lang && lang !== this.multi.main[fieldID] && this._itemData[fieldID]) {
+		this.multi._set(fieldID, value, lang, force_top);
+	} else {
+		this._itemData[fieldID] = value;
+		if (lang) {
+			// OOOOO: Should normalize language tag before this operation.
+			// (not sure how this will play during a delete operation)
+			this.multi.main[fieldID] = lang;
+		}
+	}
 	
 	if (!loadIn) {
+		// XXX Probably too busy. Shouldn't this check whether
+		// the values have actually changed?
 		if (!this._changedItemData) {
 			this._changedItemData = {};
+			this._changedItemData.main = {};
+			this._changedItemData.alt = {};
+		}
+		if (Zotero.multiFieldIds[fieldID] && lang && lang !== this.multi.main[fieldID]) {
+			if (!this._changedItemData.alt[fieldID]) {
+				this._changedItemData.alt[fieldID] = true;
+			}
+		} else {
+			this._changedItemData.main[fieldID] = true;
 		}
-		this._changedItemData[fieldID] = true;
 	}
+
 	return true;
 }
 
+
 /*
  * Get the title for an item for display in the interface
  *
@@ -892,8 +1077,13 @@ Zotero.Item.prototype.setField = function(field, value, loadIn) {
  * except for letters and interviews, which get placeholder titles in
  * square braces (e.g. "[Letter to Thoreau]")
  */
+
 Zotero.Item.prototype.getDisplayTitle = function (includeAuthorAndDate) {
-	var title = this.getField('title', false, true);
+
+	// XXXX Should the argument be recognized?
+	var language = Zotero.CachedLanguagePreferences.zoteroDisplay;
+
+	var title = this.getField('title', false, true, language);
 	var itemTypeID = this.itemTypeID;
 	var itemTypeName = Zotero.ItemTypes.getName(itemTypeID);
 	
@@ -905,22 +1095,29 @@ Zotero.Item.prototype.getDisplayTitle = function (includeAuthorAndDate) {
 			for (let i=0; i<creators.length; i++) {
 				let creator = creators[i];
 				if ((itemTypeID == 8 && creator.creatorTypeID == 16) || // 'letter'/'recipient'
-						(itemTypeID == 10 && creator.creatorTypeID == 7)) { // 'interview'/'interviewer'
+						(itemTypeID == 10 && creator.creatorTypeID == 6)) { // 'interview'/'interviewee'
 					participants.push(creator);
 				}
 				else if ((itemTypeID == 8 && creator.creatorTypeID == 1) ||   // 'letter'/'author'
-						(itemTypeID == 10 && creator.creatorTypeID == 6)) { // 'interview'/'interviewee'
+						(itemTypeID == 10 && creator.creatorTypeID == 7)) { // 'interview'/'interviewer'
 					authors.push(creator);
 				}
 			}
 		}
+
+		if (participants.length === 0) {
+			itemTypeName += ".from"
+			participants = authors;
+		} else {
+			itemTypeName += ".to"
+		}
 		
 		var strParts = [];

 		if (includeAuthorAndDate) {
 			let names = [];
 			for (let i=0; i<authors.length; i++) {
-				names.push(authors[i].ref.lastName);
+				names.push(authors[i].multi.get("lastName", language));
 			}
 			
 			// TODO: Use same logic as getFirstCreatorSQL() (including "et al.")
@@ -933,7 +1130,7 @@ Zotero.Item.prototype.getDisplayTitle = function (includeAuthorAndDate) {
 			let names = [];
 			let max = Math.min(4, participants.length);
 			for (let i=0; i<max; i++) {
-				names.push(participants[i].ref.lastName);
+				names.push(participants[i].multi.get("lastName", language));
 			}
 			switch (names.length) {
 				case 1:
@@ -969,26 +1166,36 @@ Zotero.Item.prototype.getDisplayTitle = function (includeAuthorAndDate) {
 		title += ']';
 	}
 	else if (itemTypeID == 17) { // 'case' itemTypeID
-		if (title) { // common law cases always have case names
-			var reporter = this.getField('reporter');
-			if (reporter) { 
+		if (title) { // common law cases always have case names, but come from multiple reporters
+			var reporter = this.getField('reporter', false, true, language);
+			if (reporter) {
 				title = title + ' (' + reporter + ')';
 			} else {
-				var court = this.getField('court');
-				if (court) {
-					title = title + ' (' + court + ')';
+				var jurisdictionID = this.getField('jurisdiction');
+				var courtID = this.getField('court');
+				if (jurisdictionID && courtID) {
+					var courtName = Zotero.Utilities.getCourtName(jurisdictionID,courtID, true);
+					title = title + ' (' + courtName + ')';
 				}
 			}
-		}
-		else { // civil law cases have only shortTitle as case name
+		} else if (this.getField('shortTitle')) { // civil law cases have only shortTitle as case name ...
+			title = this.getField('shortTitle', false, true, language);
+		} else { // ... if at all
 			var strParts = [];
 			var caseinfo = "";
 			
-			var part = this.getField('court');
-			if (part) {
+			var jurisdictionID = this.getField('jurisdiction');
+			var courtID = this.getField('court', false, true, language);
+			if (jurisdictionID && courtID) {
+				var part = Zotero.Utilities.getCourtName(jurisdictionID,courtID, true);
 				strParts.push(part);
 			}
 			
+			var reporter = this.getField('reporter', false, true, language);
+			if (reporter) {
+				strParts.push(reporter);
+			}
+
 			part = Zotero.Date.multipartToSQL(this.getField('date', true, true));
 			if (part) {
 				strParts.push(part);
@@ -1009,7 +1216,58 @@ Zotero.Item.prototype.getDisplayTitle = function (includeAuthorAndDate) {
 			title += ']';
 		}
 	}
-	
+	else if ([16,18,20,1261,1263].indexOf(itemTypeID) > -1) {
+		var strParts = [];
+		// Not needed, this mapping seems to be handled by higher layers.
+		//if (itemTypeID == 20) {
+		//	title = this.getField('nameOfAct');
+		//}
+
+		// XXX Ouch. Only one of these need exist surely?
+		var volume = this.getField('codeNumber');
+		if (!volume) {
+			volume = this.getField('codeVolume');
+		}
+		var code;
+		if (itemTypeID == 18) {
+			code = this.getField('committee', false, true, language);
+			if (!code) {
+				code = this.getField('reporter', false, true, language);
+			}
+		} else {
+			code = this.getField('code', false, true, language);
+		}
+
+		if (title) {
+			strParts.push(title); 
+		} else if (!title && code) {
+			if (volume) {
+				strParts.push(volume);
+			}
+			strParts.push(code);
+		}
+
+		var section;
+		var label;
+		if (18 === itemTypeID) {
+			section = this.getField('meetingNumber');
+			label = "sess. "
+		} else {
+			section = this.getField('section');
+			label = "sec. ";
+		}
+		if (section) {
+			section = "" + section;
+			if (section.match(/^[0-9].*/)) {
+				strParts.push(label + section);
+			} else {
+				strParts.push(section);
+			}
+		}
+		if (strParts.length) {
+			title = '[' + strParts.join(' ') + ']';
+		}
+	}
 	return title;
 }
 
@@ -1031,19 +1289,19 @@ Zotero.Item.prototype.hasCreatorAt = function(pos) {
 	}
 	
 	return !!this._creators[pos];
-}
+};
 

 /*
  * Returns an array of the creator data at the given position, or false if none
+ * Optionally specify a language tag to return a specific multilingual entry.
  *
  * Note: Creator data array is returned by reference
  */
-Zotero.Item.prototype.getCreator = function(pos) {
+ Zotero.Item.prototype.getCreator = function(pos, langTag) {
 	if (!this._creatorsLoaded && this.id) {
 		this._loadCreators();
 	}
-	
 	return this._creators[pos] ? this._creators[pos] : false;
 }
 
@@ -1057,7 +1315,8 @@ Zotero.Item.prototype.getCreatorPosition = function(creatorID) {
 	}
 	
 	for (var pos in this._creators) {
-		if (this._creators[pos].creatorID == creatorID) {
+		// was creatorID, which seems wrong
+		if (this._creators[pos].id == creatorID) {
 			return pos;
 		}
 	}

@@ -1075,10 +1334,48 @@ Zotero.Item.prototype.getCreators = function() {
 	if (!this._creatorsLoaded && this.id) {
 		this._loadCreators();
 	}
-	
 	return this._creators;
 }
 
// I think this is no longer needed

+/*
+ * Swap two creators and their multilingual variants
+ *
+ * |indexOne|: the position of one item to be swapped.
+ * |indexTwo|: the position of the other item.
+ */
+Zotero.Item.prototype.swapCreators = function(indexOne, indexTwo) {
+	var creatorOne = this.getCreator(indexOne);
+	var creatorTwo = this.getCreator(indexTwo);
+	var langTags = creatorOne.multi.langs();
+	var creatorTwoLangs = creatorTwo.multi.langs();
+	for (var i=0,ilen=creatorTwoLangs.length;i<ilen;i++) {
+	var langTag = creatorTwoLangs[i];
+	if (!creatorOne.multi.hasLang(langTag, true)) {
+		langTags.push(langTag);
+	}
+	}
+	this._creators[indexOne] = creatorTwo;
+	this._creators[indexTwo] = creatorOne;
+	if (!this._changedCreators) {
+	this._changedCreators = {};
+	}
+	this._changedCreators[indexOne] = true;
+	this._changedCreators[indexTwo] = true;
+	if (!this._changedAltCreators) {
+	this._changedAltCreators = {};
+	}
+	if (!this._changedAltCreators[indexOne]) {
+	this._changedAltCreators[indexOne] = {};
+	}
+	if (!this._changedAltCreators[indexTwo]) {
+	this._changedAltCreators[indexTwo] = {};
+	}
+	for (var i=0,ilen=langTags.length;i<ilen;i++) {
+	var langTag = langTags[i];
+	this._changedAltCreators[indexOne][langTag] = true;
+	this._changedAltCreators[indexTwo][langTag] = true;
+	}
+}
 

 /*
  * Set or update the creator at the specified position
@@ -1086,7 +1383,12 @@ Zotero.Item.prototype.getCreators = function() {
  * |orderIndex|: the position of this creator in the item (from 0)
  * |creatorTypeIDOrName|: id or type name
  */
-Zotero.Item.prototype.setCreator = function(orderIndex, creator, creatorTypeIDOrName) {
+Zotero.Item.prototype.setCreator = function(orderIndex, 
+											creator, 
+											creatorTypeIDOrName,
+											langTag,
+											forceTop,
+											forceInsert) {
 	if (this.id) {
 		if (!this._creatorsLoaded) {
 			this._loadCreators();
@@ -1115,37 +1417,104 @@ Zotero.Item.prototype.setCreator = function(orderIndex, creator, creatorTypeIDOr
 		creatorTypeID = Zotero.CreatorTypes.getPrimaryIDForType(this.itemTypeID);
 	}
 	
-	// If creator at this position hasn't changed, cancel
-	if (this._creators[orderIndex] &&
-			this._creators[orderIndex].ref.id == creator.id &&
+	// If forcing add, insert blank space in list for new creator
+	// (handled below)
+	if (forceInsert) {
+		this._creators = this._creators.slice(0, orderIndex).concat([false]).concat(this._creators.slice(orderIndex));
+	}
+
+	// Identify specific creator target to check for changes
+	// when comparing
+	var mytarget = false;
+	if (this._creators[orderIndex]) {
+		if (!langTag || forceTop) {
+			mytarget = this._creators[orderIndex].ref;
+		} else {
+			mytarget = this._creators[orderIndex].multi._key[langTag];
+		}
+	}
+
+	// If creator target at this position hasn't changed, cancel
+	if (mytarget &&
+			mytarget.id == creator.id &&
 			this._creators[orderIndex].creatorTypeID == creatorTypeID &&
+			this._creators[orderIndex].multi.mainLang() == langTag &&
 			!creator.hasChanged()) {
-		Zotero.debug("Creator in position " + orderIndex + " hasn't changed", 4);
-		return false;
+			return false;
 	}
-	
-	// Save copy of old creators for notifier
-	if (!this._changedCreators) {
-		this._changedCreators = {};
-		
-		var oldCreators = this._getOldCreators()
-		this._markFieldChange('creators', oldCreators);
+
+	var headlineChange = false;
+	var multiChange = false;
+	if (!this._creators[orderIndex]) {
+		// If no creator at all at this position, add one
+		this._creators[orderIndex] = {
+			ref: creator,
+			creatorTypeID: creatorTypeID,
+			multi: new Zotero.MultiCreator(creator, langTag)
+		};
+		// OOOOO: Aha. Overwrites.  Bad.
+		headlineChange = orderIndex;
+	} else if (!mytarget) {
+		// In this case mytarget must be multilingual. If it
+		// doesn't exist, create it.
+		this._creators[orderIndex].multi._key[langTag] = creator;
+		this._creators[orderIndex].multi._lst.push(langTag);
+		multiChange = langTag;
+	} else if (forceTop || !langTag) {
+		// If creator exists, and forceTop or not langTag, write
+		// this creator into the headline position
+		this._creators[orderIndex].ref = creator;
+		this._creators[orderIndex].creatorTypeID = creatorTypeID;
+		this._creators[orderIndex].multi.main = langTag;
+		headlineChange = orderIndex;
+	} else if (langTag && !forceTop && !mytarget) {
+		// If creator exists, and we have langTag but not
+		// forceTop, and no creator of that language exists
+		// yet, add it.
+		this._creators[orderIndex].multi._key[langTag] = creator;
+		this._creators[orderIndex].multi._lst.push(langTag);
+		multiChange = langTag;
+	} else {
+		// If creator exists, and we have langTag but not
+		// forceTop, and we do have a creator of that language
+		// already, just replace it with this one.
+		this._creators[orderIndex].multi._key[langTag] = creator;
+		multiChange = langTag;
+	}
+	
+	if (headlineChange !== false) {
+		if (!this._changedCreators) {
+			this._changedCreators = {};
+			
+			var oldCreators = this._getOldCreators()
+			this._markFieldChange('creators', oldCreators);
+		}
+		this._changedCreators[orderIndex] = true;
+		if (forceInsert) {
+			for (var i = orderIndex, ilen = this._creators.length; i < ilen; i += 1) {
+				this._changedCreators[i] = true;
+			}
+		}
+	} else if (multiChange) {
+		if (!this._changedAltCreators) {
+			this._changedAltCreators = {};
+		}
+		if (!this._changedAltCreators[orderIndex]) {
+			this._changedAltCreators[orderIndex] = {};
+		}
+		this._changedAltCreators[orderIndex][langTag] = true;
 	}
-	this._changedCreators[orderIndex] = true;
-	
-	this._creators[orderIndex] = {
-		ref: creator,
-		creatorTypeID: creatorTypeID
-	};
-	
 	return true;
 }
 
 
 /*
- * Remove a creator and shift others down
+ * Remove a creator and shift others down, or remove from multi if
+ * multilingual entry.
+ * (Note that entry is always treated as multilingual if
+ * languageTag is provided)
  */
-Zotero.Item.prototype.removeCreator = function(orderIndex) {
+Zotero.Item.prototype.removeCreator = function(orderIndex, langTag) {
 	if (!this._creatorsLoaded && this.id) {
 		this._loadCreators();
 	}
@@ -1153,35 +1522,67 @@ Zotero.Item.prototype.removeCreator = function(orderIndex) {
 	var creator = this.getCreator(orderIndex);
 	if (!creator) {
 		throw ('No creator exists at position ' + orderIndex
+			   + ' for language tag ' + langTag
 			+ ' in Zotero.Item.removeCreator()');
 	}
 	
-	if (creator.ref.countLinkedItems() == 1) {
-		Zotero.Prefs.set('purge.creators', true);
-	}
-	
-	// Save copy of old creators for notifier
-	if (!this._changedCreators) {
-		this._changedCreators = {};
+	if (langTag) {
+		creator.multi.removeCreator(langTag);
+		if (!this._changedAltCreators) {
+			this._changedAltCreators = {};
+		}
+		if (!this._changedAltCreators[orderIndex]) {
+			this._changedAltCreators[orderIndex] = {};
+		}
+		this._changedAltCreators[orderIndex][langTag] = true;
+		// XXX ??? purge.creators ???
+		return true;
+	} else {
 		
-		var oldCreators = this._getOldCreators();
-		this._markFieldChange('creators', oldCreators);
-	}
-	
-	// Shift creator orderIndexes down, going to length+1 so we clear the last one
-	for (var i=orderIndex, max=this._creators.length+1; i<max; i++) {
-		var next = this._creators[i+1] ? this._creators[i+1] : false;
-		if (next) {
-			this._creators[i] = next;
+		creator.ref._changed = true;
+		if (!this._changedCreators) {
+			this._changedCreators = {};
 		}
-		else {
-			this._creators.splice(i, 1);
+		
+		if (creator.ref.id && creator.ref.countLinkedItems() == 1) {
+			Zotero.Prefs.set('purge.creators', true);
+		}
+		
+		// Save copy of old creators for notifier
+		if (!this._changedCreators) {
+		this._changedCreators = {};
+			
+			var oldCreators = this._getOldCreators();
+			this._markFieldChange('creators', oldCreators);
 		}
 		
-		this._changedCreators[i] = true;
+		// Shift creator orderIndexes down, going to length+1 so we clear the last one
+		if (!this._changedAltCreators) {
+			this._changedAltCreators = {};
+		}
+		for (var i=orderIndex, max=this._creators.length+1; i<max; i++) {
+			// Flag all multi creators at their original positions
+			if (!this._changedAltCreators[i]) {
+				this._changedAltCreators[i] = {};
+			}
+			if (this._creators[i]) {
+				var myTags = this._creators[i].multi.langs();
+				for (var j=0,jlen=myTags.length;j<jlen;j++) {
+					var langTag = myTags[j];
+					this._changedAltCreators[i][langTag] = (i-1);
+					this._creators[i].multi._key[langTag].changed = true;
+				}
+			}
+			var next = this._creators[i+1] ? this._creators[i+1] : false;
+			if (next) {
+				this._creators[i] = next;
+			} else {
+				this._creators.splice(i, 1);
+			}
+			this._changedCreators[i] = true;
+		}
+		return true;
 	}
-	
-	return true;
 }
 
 
@@ -1283,8 +1684,12 @@ Zotero.Item.prototype.removeRelatedItem = function (itemID) {
  * Save changes back to database
  *
  * Returns true on item update or itemID of new item
+ * checkFields (String) a comma-delimited list of fields
+ *                      to check when identifying duplicates
+ *                      of this entry.
  */
 Zotero.Item.prototype.save = function(options) {
+	var itemID, valueID;
 	if (!options) {
 		options = {};
 	}
@@ -1386,103 +1789,45 @@ Zotero.Item.prototype.save = function(options) {
 				itemID = insertID;
 			}
 			
-			//Zotero.History.setAssociatedID(itemID);
-			//Zotero.History.add('items', 'itemID', itemID);
-			
+			var stmt = {};
+
 			//
 			// ItemData
 			//
 			if (this._changedItemData) {
 				// Use manual bound parameters to speed things up
+
 				sql = "SELECT valueID FROM itemDataValues WHERE value=?";
-				var valueStatement = Zotero.DB.getStatement(sql);
+				stmt.valueStatement = Zotero.DB.getStatement(sql);
 				
 				sql = "INSERT INTO itemDataValues VALUES (?,?)";
-				var insertValueStatement = Zotero.DB.getStatement(sql);
+				stmt.insertValueStatement = Zotero.DB.getStatement(sql);
 				
 				sql = "INSERT INTO itemData VALUES (?,?,?)";
-				var insertStatement = Zotero.DB.getStatement(sql);
-				
-				for (fieldID in this._changedItemData) {
-					var value = this.getField(fieldID, true);
-					if (!value) {
-						continue;
-					}
-					
-					if (Zotero.ItemFields.getID('accessDate') == fieldID
-							&& this.getField(fieldID) == 'CURRENT_TIMESTAMP') {
-						value = Zotero.DB.transactionDateTime;
-					}
-					
-					var dataType = Zotero.DB.getSQLDataType(value);
-					
-					switch (dataType) {
-						case 32:
-							valueStatement.bindInt32Parameter(0, value);
-							break;
+				stmt.insertStatement = Zotero.DB.getStatement(sql);
 							
-						case 64:
-							valueStatement.bindInt64Parameter(0, value);
-							break;
-						
-						default:
-							valueStatement.bindUTF8StringParameter(0, value);
-					}
-					if (valueStatement.executeStep()) {
-						var valueID = valueStatement.getInt32(0);
-					}
-					else {
-						var valueID = null;
-					}
-					
-					valueStatement.reset();
-					
-					if (!valueID) {
-						valueID = Zotero.ID.get('itemDataValues');
-						insertValueStatement.bindInt32Parameter(0, valueID);
-						
-						switch (dataType) {
-							case 32:
-								insertValueStatement.
-									bindInt32Parameter(1, value);
-								break;
+				sql = "INSERT INTO itemDataMain VALUES (?,?,?)";
+				stmt.insertMainStatement = Zotero.DB.getStatement(sql);
 							
-							case 64:
-								insertValueStatement.
-									bindInt64Parameter(1, value);
-								break;
-							
-							default:
-								insertValueStatement.
-									bindUTF8StringParameter(1, value);
-						}
+				sql = "INSERT INTO itemDataAlt VALUES (?,?,?,?)";
+				stmt.insertAltStatement = Zotero.DB.getStatement(sql);
 						
-						try {
-							insertValueStatement.execute();
-						}
-						catch (e) {
-							throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
+				// OOOOO: Outer loop provides toggle to modify update
+				// as appropriate for multilingual metadata.
+				for (var branch in {main: true, alt: true}) {
+					for (fieldID in this._changedItemData[branch]) {
+						var languageTag;
+						if (branch === 'main') {
+							languageTag = this.multi.main[fieldID];
+							this._insertMainOrAlt(stmt, branch, itemID, fieldID, languageTag);
+						} else {
+							for (var languageTag in this.multi._keys[fieldID]) {
+								this._insertMainOrAlt(stmt, branch, itemID, fieldID, languageTag);
 						}
 					}
-					
-					insertStatement.bindInt32Parameter(0, itemID);
-					insertStatement.bindInt32Parameter(1, fieldID);
-					insertStatement.bindInt32Parameter(2, valueID);
-					
-					try {
-						insertStatement.execute();
 					}
-					catch(e) {
-						throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
-					}
-					
-					/*
-					Zotero.History.add('itemData', 'itemID-fieldID',
-						[itemID, fieldID]);
-					*/
 				}
 			}
-			
 			//
 			// Creators
 			//
@@ -1502,7 +1847,7 @@ Zotero.Item.prototype.save = function(options) {
 					}
 					
 					if (creator.ref.hasChanged()) {
-						Zotero.debug("Auto-saving changed creator " + creator.ref.id);
+						Zotero.debug("Auto-saving changed creator (isNew) " + creator.ref.id);
 						creator.ref.save();
 					}
 					
@@ -1511,6 +1856,50 @@ Zotero.Item.prototype.save = function(options) {
 						[{ int: itemID }, { int: creator.ref.id },
 						{ int: creator.creatorTypeID }, { int: orderIndex }]);
 					
+					if (creator.multi.main) {
+						// OOOOO: languageTag needs to be handled in load() etc.
+						sql = 'INSERT INTO itemCreatorsMain VALUES (?, ?, ?, ?, ?)';
+						Zotero.DB.query(sql,
+										[{ int: itemID }, { int: creator.ref.id },
+										 { int: creator.creatorTypeID }, { int: orderIndex },
+										 creator.multi.main]);
+					}
+
+					if (this._changedAltCreators) {
+						// Multilingual entries
+						for (var orderIndex in this._changedAltCreators) {
+							Zotero.debug('A multilingual entry under creator (isNew) ' + orderIndex + ' has changed', 4);
+							var creator = this.getCreator(orderIndex);
+
+							for (var langTag in this._changedAltCreators[orderIndex]) {
+								
+								var sql2 = 'DELETE FROM itemCreatorsAlt WHERE itemID=?'
+									+ ' AND orderIndex=? AND languageTag=?';
+								Zotero.DB.query(sql2, [{ int: itemID }, { int: orderIndex }, langTag]);
+								
+								if (!creator || !creator.multi._key[langTag]) {
+									continue;
+								}
+								// OOOOO: This makes no sense here? Or does it?
+								if (creator.multi._key[langTag].hasChanged()) {
+									// Zotero.debug("Auto-saving changed multilingual creator " + creator.multi._key[langTag].id + " with libraryID " +creator.multi._key[langTag].libraryID);
+									creator.multi._key[langTag].save();
+								}
+								var creatorID = creator.multi._key[langTag].id;
+
+								sql = "INSERT INTO itemCreatorsAlt VALUES (?,?,?,?,?)";
+								sqlValues = [
+									{ int: itemID },
+									{ int: creatorID },
+									{ int: creator.creatorTypeID },
+									{ int: orderIndex },
+									langTag
+								];
+								Zotero.DB.query(sql, sqlValues);
+							}
+						}
+					}
+					
 					/*
 					Zotero.History.add('itemCreators',
 						'itemID-creatorID-creatorTypeID',
@@ -1634,14 +2025,14 @@ Zotero.Item.prototype.save = function(options) {
 				
 				if (newids.length) {
 					var sql = "INSERT INTO itemSeeAlso (itemID, linkedItemID) VALUES (?,?)";
-					var insertStatement = Zotero.DB.getStatement(sql);
+					stmt.insertStatement = Zotero.DB.getStatement(sql);
 					
 					for each(var linkedItemID in newids) {
-						insertStatement.bindInt32Parameter(0, itemID);
-						insertStatement.bindInt32Parameter(1, linkedItemID);
+						stmt.insertStatement.bindInt32Parameter(0, itemID);
+						stmt.insertStatement.bindInt32Parameter(1, linkedItemID);
 						
 						try {
-							insertStatement.execute();
+							stmt.insertStatement.execute();
 						}
 						catch (e) {
 							throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
@@ -1657,7 +2048,7 @@ Zotero.Item.prototype.save = function(options) {
 		// Existing item, update
 		//
 		else {
-			Zotero.debug('Updating database with new item data', 4);
+			Zotero.debug('Updating database with new item data ['+this.id+']', 4);
 			
 			// Begin history transaction
 			//Zotero.History.begin('modify-item', this.id);
@@ -1702,117 +2093,83 @@ Zotero.Item.prototype.save = function(options) {
 				Zotero.DB.query(sql, sqlValues);
 			}
 			
-			
 			//
 			// ItemData
 			//
 			if (this._changedItemData) {
-				var del = [];
+				var stmt = {};
+
+				var del = {};
+				del.main = [];
+				del.alt = [];
 				
 				sql = "SELECT valueID FROM itemDataValues WHERE value=?";
-				var valueStatement = Zotero.DB.getStatement(sql);
+				stmt.valueStatement = Zotero.DB.getStatement(sql);
 				
 				sql = "INSERT INTO itemDataValues VALUES (?,?)";
-				var insertStatement = Zotero.DB.getStatement(sql);
+				stmt.insertStatement = Zotero.DB.getStatement(sql);
 				
 				sql = "REPLACE INTO itemData VALUES (?,?,?)";
-				var replaceStatement = Zotero.DB.getStatement(sql);
-				
-				for (fieldID in this._changedItemData) {
-					var value = this.getField(fieldID, true);
+				stmt.replaceStatement = Zotero.DB.getStatement(sql);
 					
-					// If field changed and is empty, mark row for deletion
-					if (!value) {
-						del.push(fieldID);
-						continue;
-					}
+				sql = "REPLACE INTO itemDataMain VALUES (?,?,?)";
+				stmt.replaceMainStatement = Zotero.DB.getStatement(sql);
 					
-					/*
-					// Field exists
-					if (this._preChangeArray[Zotero.ItemFields.getName(fieldID)]) {
-						Zotero.History.modify('itemData', 'itemID-fieldID',
-							[this.id, fieldID]);
-					}
-					// Field is new
-					else {
-						Zotero.History.add('itemData', 'itemID-fieldID',
-							[this.id, fieldID]);
-					}
-					*/
-					
-					if (Zotero.ItemFields.getID('accessDate') == fieldID
-							&& this.getField(fieldID) == 'CURRENT_TIMESTAMP') {
-						value = Zotero.DB.transactionDateTime;
-					}
-					
-					var dataType = Zotero.DB.getSQLDataType(value);
-					
-					switch (dataType) {
-						case 32:
-							valueStatement.bindInt32Parameter(0, value);
-							break;
+				sql = "REPLACE INTO itemDataAlt VALUES (?,?,?,?)";
+				stmt.replaceAltStatement = Zotero.DB.getStatement(sql);
 							
-						case 64:
-							valueStatement.bindInt64Parameter(0, value);
-							break;
+				// Oh, I gotcha. Deleting main should implicitly delete
+				// alt as well.
 						
-						default:
-							valueStatement.bindUTF8StringParameter(0, value);
+				for (var branch in {main: true, alt: true}) {
+					for (fieldID in this._changedItemData[branch]) {
+						var languageTag;
+						if (branch === 'main') {
+							languageTag = this.multi.main[fieldID];
+							// This is ugly
+							del = this._replaceMainOrAlt(stmt, branch, fieldID, languageTag, del);
+						} else {
+							for (var languageTag in this.multi._keys[fieldID]) {
+								// This is ugly too
+								del = this._replaceMainOrAlt(stmt, branch, fieldID, languageTag, del);
 					}
-					if (valueStatement.executeStep()) {
-						var valueID = valueStatement.getInt32(0);
 					}
-					else {
-						var valueID = null;
 					}
-					
-					valueStatement.reset();
-					
-					// Create data row if necessary
-					if (!valueID) {
-						valueID = Zotero.ID.get('itemDataValues');
-						insertStatement.bindInt32Parameter(0, valueID);
-						
-						// If this is changed, search.js also needs to
-						// change
-						switch (dataType) {
-							case 32:
-								insertStatement.
-									bindInt32Parameter(1, value);
-								break;
-							
-							case 64:
-								insertStatement.
-									bindInt64Parameter(1, value);
-								break;
-							
-							default:
-								insertStatement.
-									bindUTF8StringParameter(1, value);
 						}
 						
-						try {
-							insertStatement.execute();
-						}
-						catch (e) {
-							throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
+				// If deleting main value, delete multi with it
+				for (var k = 0, klen = del.main.length; k < klen; k += 1) {
+					// del.main[k] is the fieldID
+					if (this.multi._keys[del.main[k]]) {
+						for (var langTag in this.multi._keys[fieldID]) {
+							del.alt.push([del.main[k], langTag]);
 						}
 					}
-					
-					replaceStatement.bindInt32Parameter(0, this.id);
-					replaceStatement.bindInt32Parameter(1, fieldID);
-					replaceStatement.bindInt32Parameter(2, valueID);
-						
-					try {
-						replaceStatement.execute();
+				}
+				
+				
+				if (del.alt.length) {
+					/*
+					// Add to history
+					for (var i in del) {
+					Zotero.History.remove('itemData', 'itemID-fieldID',
+					[this.id, del[i]]);
 					}
-					catch (e) {
-						throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
+					*/
+
+					sql = 'DELETE from itemDataAlt WHERE itemID=? '
+						+ 'AND ('
+						+ del.alt.map(function () {return '(fieldID=? AND languageTag=?)'}).join(' OR ')
+						+ ')';
+					var lst = [];
+					for (var i = 0, ilen = del.alt.length; i < ilen; i += 1) {
+						for (var k = 0; k < 2; k += 1) {
+							lst.push(del.alt[i][k]);
+						}
 					}
+					Zotero.DB.query(sql, [this.id].concat(lst));
 				}
-				
-				// Delete blank fields
-				if (del.length) {
+				if (del.main.length) {
 					/*
 					// Add to history
 					for (var i in del) {
@@ -1820,19 +2177,27 @@ Zotero.Item.prototype.save = function(options) {
 							[this.id, del[i]]);
 					}
 					*/
+					sql = 'DELETE from itemDataMain WHERE itemID=? '
+						+ 'AND fieldID IN ('
+						+ del.main.map(function () '?').join()
+						+ ')';
+					Zotero.DB.query(sql, [this.id].concat(del.main));
 					
 					sql = 'DELETE from itemData WHERE itemID=? '
 						+ 'AND fieldID IN ('
-						+ del.map(function () '?').join()
+						+ del.main.map(function () '?').join()
 						+ ')';
-					Zotero.DB.query(sql, [this.id].concat(del));
+					Zotero.DB.query(sql, [this.id].concat(del.main));
 				}
 			}
 			
 			//
 			// Creators
 			//
+
 			if (this._changedCreators) {
+				
+				// Headline entries
 				for (var orderIndex in this._changedCreators) {
 					Zotero.debug('Creator ' + orderIndex + ' has changed', 4);
 					
@@ -1874,6 +2239,17 @@ Zotero.Item.prototype.save = function(options) {
 					
 					Zotero.DB.query(sql, sqlValues);
 					
+					if (creator.multi.main) {
+						// OOOOO: languageTag needs to be handled in load() etc.
+						sql = 'DELETE FROM itemCreatorsMain WHERE itemID=? AND creatorID=? AND creatorTypeID=? AND orderIndex=?'
+							Zotero.DB.query(sql, [{int: this.id},{int: creator.ref.id},{int: creator.creatorTypeID},{int: orderIndex}]);
+						sql = 'INSERT INTO itemCreatorsMain VALUES (?, ?, ?, ?, ?)';
+						Zotero.DB.query(sql,
+										[{ int: this.id }, { int: creator.ref.id },
+										 { int: creator.creatorTypeID }, { int: orderIndex },
+										 creator.multi.main]);
+					}
+
 					/*
 					Zotero.History.add('itemCreators',
 						'itemID-creatorID-creatorTypeID',
@@ -1882,11 +2258,61 @@ Zotero.Item.prototype.save = function(options) {
 				}
 			}
 			
+			if (this._changedAltCreators) {
+				// Multilingual entries
+
+				// Assure that we step through these in forward sequence, in case a creator
+				// has been removed and we are renumbering.
+				var orderIndices = [];
+				for (var orderIndex in this._changedAltCreators) {
+					orderIndices.push(parseInt(orderIndex, 10));
+				}
+				orderIndices.sort();
+				for (var i in orderIndices) {
+					var orderIndex = orderIndices[i];
+					Zotero.debug('A multilingual entry under creator ' + orderIndex + ' has changed', 4);
+
+					for (var langTag in this._changedAltCreators[orderIndex]) {
+
+						var newIndex = orderIndex;
+						var tryIndex = this._changedAltCreators[orderIndex][langTag];
+						if ("number" === typeof tryIndex) {
+							newIndex = tryIndex;
+						}
+						var creator = this.getCreator(newIndex);
+
+						var sql2 = 'DELETE FROM itemCreatorsAlt WHERE itemID=?'
+							+ ' AND orderIndex=? AND languageTag=?';
+						Zotero.DB.query(sql2, [{ int: this.id }, { int: orderIndex }, langTag]);
+						
+						if (!creator || !creator.multi._key[langTag]) {
+							continue;
+						}
+						
+						if (creator.multi._key[langTag].hasChanged()) {
+							Zotero.debug("Auto-saving changed multilingual creator " + creator.multi._key[langTag].id + " for library "+creator.multi._key[langTag].libraryID);
+							creator.multi._key[langTag].save();
+						}
+						var creatorID = creator.multi._key[langTag].id;
+						
+						sql = "INSERT INTO itemCreatorsAlt VALUES (?,?,?,?,?)";
+						sqlValues = [
+							{ int: this.id },
+							{ int: creatorID },
+							{ int: creator.creatorTypeID },
+							{ int: newIndex },
+							langTag
+						];
+						Zotero.DB.query(sql, sqlValues);
+					}
+				}
+			}
 			
 			let parentItem = this.getSource();
 			parentItem = parentItem ? Zotero.Items.get(parentItem) : null;
 			
 			if (this._changedDeleted) {
+				Zotero.debug("Acting on this.deleted="+this.deleted);
 				if (this.deleted) {
 					sql = "REPLACE INTO deletedItems (itemID) VALUES (?)";
 				}
@@ -2153,15 +2582,16 @@ Zotero.Item.prototype.save = function(options) {
 				}
 				
 				if (newids.length) {
+					var stmt = {};
 					var sql = "INSERT INTO itemSeeAlso (itemID, linkedItemID) VALUES (?,?)";
-					var insertStatement = Zotero.DB.getStatement(sql);
+					stmt.insertStatement = Zotero.DB.getStatement(sql);
 					
 					for each(var linkedItemID in newids) {
-						insertStatement.bindInt32Parameter(0, this.id);
-						insertStatement.bindInt32Parameter(1, linkedItemID);
+						stmt.insertStatement.bindInt32Parameter(0, this.id);
+						stmt.insertStatement.bindInt32Parameter(1, linkedItemID);
 						
 						try {
-							insertStatement.execute();
+							stmt.insertStatement.execute();
 						}
 						catch (e) {
 							throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
@@ -2232,8 +2662,244 @@ Zotero.Item.prototype.save = function(options) {
 	}
 	
 	return true;
-}
+};
+
+//
+// First of two helper functions used in this function item.save();
+//
+Zotero.Item.prototype._insertMainOrAlt = function(stmt, branch, itemID, fieldID, languageTag) {
+	
+		// OOOOO: Start of _saveMainOrAlt()
+		var value = this.getField(fieldID, true, false, languageTag);
+		if (!value) {
+			return;
+		}
+		if (Zotero.ItemFields.getID('accessDate') == fieldID
+			&& this.getField(fieldID) == 'CURRENT_TIMESTAMP') {
+			value = Zotero.DB.transactionDateTime;
+		}
+		
+		var dataType = Zotero.DB.getSQLDataType(value);
+		switch (dataType) {
+		case 32:
+			stmt.valueStatement.bindInt32Parameter(0, value);
+			break;
+			
+		case 64:
+			stmt.valueStatement.bindInt64Parameter(0, value);
+			break;
+			
+		default:
+			stmt.valueStatement.bindUTF8StringParameter(0, value);
+		}
 
+		if (stmt.valueStatement.executeStep()) {
+			var valueID = stmt.valueStatement.getInt32(0);
+		}
+		else {
+			var valueID = null;
+		}
+		
+		stmt.valueStatement.reset();
+		
+		if (!valueID) {
+			valueID = Zotero.ID.get('itemDataValues');
+			stmt.insertValueStatement.bindInt32Parameter(0, valueID);
+			
+			switch (dataType) {
+			case 32:
+				stmt.insertValueStatement.bindInt32Parameter(1, value);
+				break;
+				
+			case 64:
+				stmt.insertValueStatement.bindInt64Parameter(1, value);
+				break;
+
+			default:
+				stmt.insertValueStatement.bindUTF8StringParameter(1, value);
+			}
+			
+			try {
+				stmt.insertValueStatement.execute();
+			}
+			catch (e) {
+				throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
+			}
+		}
+		
+		
+		// OOOOO: Here we go for inserts.
+		// Use insertStatement or
+		// insertAltStatement as appropriate.  I think.
+		if (branch === 'main') {
+			stmt.insertStatement.bindInt32Parameter(0, itemID);
+			stmt.insertStatement.bindInt32Parameter(1, fieldID);
+			stmt.insertStatement.bindInt32Parameter(2, valueID);
+			
+			// OOOOO: Set multilingual label for main entry if appropriate.
+			if (languageTag) {
+				stmt.insertMainStatement.bindInt32Parameter(0, itemID);
+				stmt.insertMainStatement.bindInt32Parameter(1, fieldID);
+				stmt.insertMainStatement.bindUTF8StringParameter(2, languageTag);
+			}
+			
+			try {
+				stmt.insertStatement.execute();
+				if (languageTag) {
+					stmt.insertMainStatement.execute();
+				}
+			}
+			catch(e) {
+				throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
+			}
+			
+			/*
+			  Zotero.History.add('itemData', 'itemID-fieldID',
+			  [itemID, fieldID]);
+			*/
+		} else {
+			// OOOOO: Here is the multilingual insert stuff.
+			stmt.insertAltStatement.bindInt32Parameter(0, itemID);
+			stmt.insertAltStatement.bindInt32Parameter(1, fieldID);
+			stmt.insertAltStatement.bindUTF8StringParameter(2, languageTag);
+			stmt.insertAltStatement.bindInt32Parameter(3, valueID);
+			
+			try {
+				stmt.insertAltStatement.execute();
+			}
+			catch(e) {
+				throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
+			}
+		}
+	}
+
+//
+// Second of two helper functions for item.save()
+//
+Zotero.Item.prototype._replaceMainOrAlt = function(stmt, branch, fieldID, languageTag, del) {
+
+	// The final true toggle enables return of empty values from multilingual
+	// alt metadata requests.
+	var value = this.getField(fieldID, true, false, languageTag, true);
+	
+	// If field changed and is empty, mark row for deletion
+	if (!value) {
+		if (!languageTag || this.multi.main[fieldID] === languageTag) {
+			del.main.push(fieldID);
+		} else {
+			del.alt.push([fieldID,languageTag]);
+		}
+		return del;
+	}
+
+
+	// Field exists
+	//if (this._preChangeArray[Zotero.ItemFields.getName(fieldID)]) {
+	//Zotero.History.modify('itemData', 'itemID-fieldID',
+	//[this.id, fieldID]);
+	//}
+	// Field is new
+	//else {
+	//	Zotero.History.add('itemData', 'itemID-fieldID',
+	//					   [this.id, fieldID]);
+	//}
+	
+	if (Zotero.ItemFields.getID('accessDate') == fieldID
+		&& this.getField(fieldID) == 'CURRENT_TIMESTAMP') {
+		value = Zotero.DB.transactionDateTime;
+	}
+	
+	var dataType = Zotero.DB.getSQLDataType(value);
+	
+	switch (dataType) {
+	case 32:
+		stmt.valueStatement.bindInt32Parameter(0, value);
+		break;
+		
+	case 64:
+		stmt.valueStatement.bindInt64Parameter(0, value);
+		break;
+		
+	default:
+		stmt.valueStatement.bindUTF8StringParameter(0, value);
+	}
+	if (stmt.valueStatement.executeStep()) {
+		var valueID = stmt.valueStatement.getInt32(0);
+	}
+	else {
+		var valueID = null;
+	}
+	
+	stmt.valueStatement.reset();
+	
+	// Create data row if necessary
+	if (!valueID) {
+		valueID = Zotero.ID.get('itemDataValues');
+		stmt.insertStatement.bindInt32Parameter(0, valueID);
+		
+		// If this is changed, search.js also needs to
+		// change
+		switch (dataType) {
+		case 32:
+			stmt.insertStatement.bindInt32Parameter(1, value);
+			break;
+			
+		case 64:
+			stmt.insertStatement.bindInt64Parameter(1, value);
+			break;
+			
+		default:
+			stmt.insertStatement.bindUTF8StringParameter(1, value);
+		}
+		
+		try {	
+			stmt.insertStatement.execute();
+		}
+		catch (e) {
+			throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
+		}
+	}
+	
+	// OOOOO: Here we go for replacements.
+	// Use replaceStatement or
+	// replaceAltStatement as appropriate.  I think.
+	if (branch === 'main') {
+		stmt.replaceStatement.bindInt32Parameter(0, this.id);
+		stmt.replaceStatement.bindInt32Parameter(1, fieldID);
+		stmt.replaceStatement.bindInt32Parameter(2, valueID);
+		
+		// OOOOO: Set multilingual label for main entry if appropriate.
+		if (languageTag) {
+			stmt.replaceMainStatement.bindInt32Parameter(0, this.id);
+			stmt.replaceMainStatement.bindInt32Parameter(1, fieldID);
+			stmt.replaceMainStatement.bindUTF8StringParameter(2, languageTag);
+		}
+		
+		try {
+			stmt.replaceStatement.execute();
+			if (languageTag) {
+				stmt.replaceMainStatement.execute();
+			}
+		}
+		catch (e) {
+			throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
+		}
+	} else {
+		// OOOOO: Here is the multilingual replace stuff.
+		stmt.replaceAltStatement.bindInt32Parameter(0, this.id);
+		stmt.replaceAltStatement.bindInt32Parameter(1, fieldID);
+		stmt.replaceAltStatement.bindUTF8StringParameter(2, languageTag);
+		stmt.replaceAltStatement.bindInt32Parameter(3, valueID);
+		
+		try {
+			stmt.replaceAltStatement.execute();
+		}
+		catch(e) {
+			throw (e + ' [ERROR: ' + Zotero.DB.getLastErrorString() + ']');
+		}
+	}
+	return del;
+}
 
 /**
  * Used by sync code
@@ -3764,7 +4430,6 @@ Zotero.Item.prototype.getBestAttachments = function() {
 	return Zotero.DB.columnQuery(sql, [this.id, Zotero.Attachments.LINK_MODE_LINKED_URL, url]);
 }
 
-

 //
 // Methods dealing with item tags
 //
@@ -3889,7 +4554,7 @@ Zotero.Item.prototype.hasTag = function(tagID) {
 Zotero.Item.prototype.hasTags = function(tagIDs) {
 	var tagIDs = Zotero.flattenArguments(tagIDs);
 	
-	var sql = "SELECT COUNT(*) FROM itemTags WHERE itemID=? AND tagID IN ("
+	var sql = "SELECT COUNT(*) FROM itemTags NATURAL JOIN tags WHERE itemID=? AND type IS NOT 10000 AND tagID IN ("
 				+ tagIDs.map(function () '?').join() + ")";
 	return !!Zotero.DB.valueQuery(sql, [this.id].concat(tagIDs));
 }


// XXX So far, so good. zzz

@@ -3903,7 +4568,7 @@ Zotero.Item.prototype.getTags = function() {
 	if (!this.id) {
 		return [];
 	}
-	var sql = "SELECT tagID, name FROM tags WHERE tagID IN "
+	var sql = "SELECT tagID, name FROM tags WHERE type IS NOT 10000 AND tagID IN "
 		+ "(SELECT tagID FROM itemTags WHERE itemID=?)";
 	var tags = Zotero.DB.query(sql, this.id);
 	if (!tags) {
@@ -3924,7 +4589,7 @@ Zotero.Item.prototype.getTags = function() {
 }
 
 Zotero.Item.prototype.getTagIDs = function() {
-	var sql = "SELECT tagID FROM itemTags WHERE itemID=?";
+	var sql = "SELECT itemTags.tagID FROM itemTags NATURAL JOIN tags WHERE itemID=? AND type IS NOT 10000";
 	return Zotero.DB.columnQuery(sql, this.id);
 }
 


@@ -4292,6 +4957,7 @@ Zotero.Item.prototype.multiDiff = function (otherItems, ignoreFields) {
  * @param  {Boolean}       [skipTags=false]       Skip tags (implied by 'unsaved')
  */
 Zotero.Item.prototype.clone = function(includePrimary, newItem, unsaved, skipTags) {
+	var newItem;
 	Zotero.debug('Cloning item ' + this.id);
 	
 	if (includePrimary && newItem) {
@@ -4399,7 +5065,8 @@ Zotero.Item.prototype.clone = function(includePrimary, newItem, unsaved, skipTag
 					var creatorDataID = Zotero.Creators.getDataID(this.getCreator(c).ref);
 					var creatorIDs = Zotero.Creators.getCreatorsWithData(creatorDataID, newItem.libraryID);
 					if (creatorIDs) {
-						// TODO: support multiple creators?
+						// OOOOO: TODO: support multiple creators?
+						// (supported already?)
 						var creator = Zotero.Creators.get(creatorIDs[0]);
 					}
 					else {
@@ -4457,6 +5124,14 @@ Zotero.Item.prototype.clone = function(includePrimary, newItem, unsaved, skipTag
 		newItem.relatedItems = obj.related;
 	}
 	
+	newItem.multi = this.multi.clone(newItem);
+
+	var newCreators = newItem.getCreators();
+	var creators = this.getCreators();
+	for (var i = 0, ilen = newCreators.length; i < ilen; i += 1) { 
+		newCreators[i].multi = creators[i].multi.clone(newCreators[i].ref, creators[i].multi.main, newItem, i);
+	}
+
 	Zotero.DB.commitTransaction();
 	
 	return newItem;
@@ -4588,6 +5263,7 @@ Zotero.Item.prototype.erase = function() {
 	);
 	if (hasCreators) {
 		Zotero.DB.query('DELETE FROM itemCreators WHERE itemID=?', this.id);
+		Zotero.DB.query('DELETE FROM itemCreatorsAlt WHERE itemID=?', this.id);
 	}
 	Zotero.DB.query('DELETE FROM itemNotes WHERE itemID=?', this.id);
 	Zotero.DB.query('DELETE FROM itemAttachments WHERE itemID=?', this.id);
@@ -4608,6 +5284,8 @@ Zotero.Item.prototype.erase = function() {
 	}
 	
 	Zotero.DB.query('DELETE FROM itemData WHERE itemID=?', this.id);
+	Zotero.DB.query('DELETE FROM itemDataMain WHERE itemID=?', this.id);
+	Zotero.DB.query('DELETE FROM itemDataAlt WHERE itemID=?', this.id);
 	
 	try {
 		Zotero.DB.query('DELETE FROM items WHERE itemID=?', this.id);
@@ -4665,7 +5343,7 @@ Zotero.Item.prototype.isCollection = function() {
 
 Zotero.Item.prototype.toArray = function (mode) {
 	Zotero.debug('Zotero.Item.toArray() is deprecated -- use Zotero.Item.serialize()');
-	
+
 	if (this.id || this.key) {
 		if (!this._primaryDataLoaded) {
 			this.loadPrimaryData(true);
@@ -4676,6 +5354,10 @@ Zotero.Item.prototype.toArray = function (mode) {
 	}
 	
 	var arr = {};
+	arr.multi = {};
+	arr.multi.main = {};
+	arr.multi._keys = {};
+	arr.multi._lsts = {};
 	
 	// Primary fields
 	for each(var i in Zotero.Items.primaryFields) {
@@ -4690,6 +5372,7 @@ Zotero.Item.prototype.toArray = function (mode) {
 			
 			// Skip virtual fields
 			case 'firstCreator':
+			case 'sortCreator':
 			case 'numNotes':
 			case 'numAttachments':
 			case 'sourceItemID':
@@ -4706,6 +5389,31 @@ Zotero.Item.prototype.toArray = function (mode) {
 		arr[Zotero.ItemFields.getName(i)] = this.getField(i) + '';
 	}
 	
+	// OOOOO: Should be safe to copy multilingual data
+	// directly to new object.  Field keys will be fieldID,
+	// but multi layer helper functions will map keys
+	// appropriately as required.
+	// (construct above is to force use of formatted form of dates,
+	// which don't have multilingual variants in DB)
+	for (var fieldID in this.multi.main) {
+		var fieldName = Zotero.ItemFields.getName(fieldID);
+		arr.multi.main[fieldName] = this.multi.main[fieldID];
+	}
+	for (var fieldID in this.multi._keys) {
+		var fieldName = Zotero.ItemFields.getName(fieldID);
+		if (!arr.multi._keys[fieldName]) {
+			arr.multi._keys[fieldName] = {};
+			arr.multi._lsts[fieldName] = [];
+		}
+		for (var languageTag in this.multi._keys[fieldID]) {
+			arr.multi._keys[fieldName][languageTag] = this.multi._keys[fieldID][languageTag];
+			if (arr.multi._lsts[fieldName].indexOf(languageTag) === -1) {
+				arr.multi._lsts[fieldName].push(languageTag);
+			}
+		}
+	}
+
+
 	if (mode == 1 || mode == 2) {
 		if (!arr.title &&
 				(this.itemTypeID == Zotero.ItemTypes.getID('letter') ||
@@ -4727,6 +5435,21 @@ Zotero.Item.prototype.toArray = function (mode) {
 			creator.firstName = creators[i].ref.firstName;
 			creator.lastName = creators[i].ref.lastName;
 			creator.fieldMode = creators[i].ref.fieldMode;
+			creator.shortName = '';
+			creator.birthYear = '';
+			creator.multi = {};
+			creator.multi._lst = creators[i].multi._lst.slice();
+			creator.multi._key = {};
+			for each (var langTag in creators[i].multi._lst) {
+				if (!creators[i].multi._key[langTag]) {
+					creator.multi._key[langTag] = {};
+				}
+				creator.multi._key[langTag] = {
+					lastName: creators[i].multi._key[langTag].lastName,
+					firstName: creators[i].multi._key[langTag].firstName
+				}
+			}
+			creator.multi.main = creators[i].multi.main;
 			arr.creators.push(creator);
 		}
 	}
@@ -4792,6 +5515,7 @@ Zotero.Item.prototype.toArray = function (mode) {
  * 1 == e.g. [Letter to Valee]
  * 2 == e.g. [Stothard; Letter to Valee; May 8, 1928]
  */
+
 Zotero.Item.prototype.serialize = function(mode) {
 	if (this.id || this.key) {
 		if (!this._primaryDataLoaded) {
@@ -4806,6 +5530,10 @@ Zotero.Item.prototype.serialize = function(mode) {
 	arr.primary = {};
 	arr.virtual = {};
 	arr.fields = {};
+	arr.multi = {};
+	arr.multi.main = {};
+	arr.multi._keys = {};
+	arr.multi._lsts = {};
 	
 	// Primary and virtual fields
 	for each(var i in Zotero.Items.primaryFields) {
@@ -4819,6 +5547,7 @@ Zotero.Item.prototype.serialize = function(mode) {
 				continue;
 			
 			case 'firstCreator':
+			case 'sortCreator':
 				arr.virtual[i] = this['_' + i] + '';
 				continue;
 				
@@ -4840,6 +5569,25 @@ Zotero.Item.prototype.serialize = function(mode) {
 	for (var i in this._itemData) {
 		arr.fields[Zotero.ItemFields.getName(i)] = this.getField(i) + '';
 	}
+
+	// OOOOO: Have to serialize the multi object here as well.
+	for (var fieldID in this.multi.main) {
+		var fieldName = Zotero.ItemFields.getName(fieldID);
+		arr.multi.main[fieldName] = this.multi.main[fieldID];
+	}
+	for (var fieldID in this.multi._keys) {
+		var fieldName = Zotero.ItemFields.getName(fieldID);
+		if (!arr.multi._keys[fieldName]) {
+			arr.multi._keys[fieldName] = {};
+			arr.multi._lsts[fieldName] = [];
+		}
+		for (var langTag in this.multi._keys[fieldID]) {
+			arr.multi._keys[fieldName][langTag] = this.multi._keys[fieldID][langTag];
+			if (arr.multi._lsts[fieldName].indexOf(langTag) === -1) {
+				arr.multi._lsts[fieldName].push(langTag);
+			}
+		}
+	}
 	
 	if (mode == 1 || mode == 2) {
 		if (!arr.fields.title &&
@@ -4860,6 +5608,10 @@ Zotero.Item.prototype.serialize = function(mode) {
 		var creators = this.getCreators();
 		for (var i in creators) {
 			var creator = {};
+			creator.multi = {};
+			creator.multi = {};
+			creator.multi._key = {};
+			creator.multi._lst = [];
 			// Convert creatorTypeIDs to text
 			creator.creatorType = Zotero.CreatorTypes.getName(creators[i].creatorTypeID);
 			creator.creatorID = creators[i].ref.id;
@@ -4868,6 +5620,16 @@ Zotero.Item.prototype.serialize = function(mode) {
 			creator.fieldMode = creators[i].ref.fieldMode;
 			creator.libraryID = creators[i].ref.libraryID;
 			creator.key = creators[i].ref.key;
+			for each (var langTag in creators[i].multi._lst) {
+					if (!creators[i].multi._key[langTag]) {
+						creator.multi._key[langTag] = {};
+					}
+					creator.multi._key[langTag] = {
+						lastName: creators[i].multi._key[langTag].lastName,
+						firstName: creators[i].multi._key[langTag].firstName
+					}
+				}
+			creator.multi.main = creators[i].languageTag;
 			arr.creators.push(creator);
 		}
 		
@@ -4964,7 +5726,11 @@ Zotero.Item.prototype.toJSON = function(options) {
 		itemType: Zotero.ItemTypes.getName(this.itemTypeID),
 		tags: [],
 		collections: [],
-		relations: {}
+		relations: {},
+		multi: {
+			main: {},
+			_keys: {}
+		}
 	};
 	
 	// Type-specific fields
@@ -4983,6 +5749,19 @@ Zotero.Item.prototype.toJSON = function(options) {
 			}
 			
 			obj[name] = val;
+
+			let mainLang = this.multi.mainLang(i)
+			if (mainLang) {
+				obj.multi.main[name] = mainlang;
+			}
+
+			let langs = this.multi.langs(name);
+			for (let j=0,jlen=langs.length;j<jlen;j++) {
+				obj.multi._keys[name] = {
+					[langs[j]]: this.multi.get(i, langs[j], true)
+
+				}
+			}
 		}
 	}
 	
@@ -4992,16 +5771,33 @@ Zotero.Item.prototype.toJSON = function(options) {
 		let creators = this.getCreators();
 		for (let i=0; i<creators.length; i++) {
 			let creator = creators[i].ref;
+			let creatorMulti = creators[i].multi;
 			let creatorObj = {
-				creatorType: Zotero.CreatorTypes.getName(creators[i].creatorTypeID)
+				creatorType: Zotero.CreatorTypes.getName(creators[i].creatorTypeID),
+				multi: {
+					_key: {}
+				}
 			};
 			
+			var mainLang = creatorMulti.mainLang();
+			if (creatorMulti.mainLang()) {
+				creatorObj.multi.main = mainLang;
+			}
+
 			if (creator.fieldMode == 1) {
 				creatorObj.name = creator.lastName;
 			} else {
 				creatorObj.lastName = creator.lastName;
 				creatorObj.firstName = creator.firstName;
 			}
+
+			var langs = creatorMulti.langs();
+			for (let j=0,jlen=langs.length;j<jlen;j++) {
+				creatorObj.multi._key[langs[j]] = {
+					lastName: creatorMulti.get("lastName", langs[j]),
+					firstName: creatorMulti.get("firstName", langs[j])
+				}
+			}
 			
 			obj.creators.push(creatorObj);
 		}
@@ -5123,9 +5919,9 @@ Zotero.Item.prototype._loadCreators = function() {
 	if (!this.id) {
 		throw ('ItemID not set for item before attempting to load creators');
 	}
-	
-	var sql = 'SELECT creatorID, creatorTypeID, orderIndex FROM itemCreators '
-		+ 'WHERE itemID=? ORDER BY orderIndex';
+	// XXXX As below.
+	var sql = 'SELECT creatorID, creatorTypeID, orderIndex, libraryID FROM itemCreators IC JOIN items I ON I.itemID=IC.itemID '
+		+ 'WHERE I.itemID=? ORDER BY orderIndex';
 	var creators = Zotero.DB.query(sql, this.id);
 	
 	this._creators = [];
@@ -5139,14 +5935,45 @@ Zotero.Item.prototype._loadCreators = function() {
 		var creatorObj = Zotero.Creators.get(creators[i].creatorID);
 		if (!creatorObj) {
 			creatorObj = new Zotero.Creator();
+			creatorObj.libraryID = creators[i].libraryID;
 			creatorObj.id = creators[i].creatorID;
 		}
+		
+		// OOOOO: Get the main lang
+		sql = "SELECT languageTag FROM itemCreatorsMain WHERE itemID=? AND creatorID=? AND creatorTypeID=? AND orderIndex=?";
+		var langTag = Zotero.DB.valueQuery(sql, [this.id, creators[i].creatorID, creators[i].creatorTypeID, creators[i].orderIndex]);
+		
+		sql = 'SELECT ICA.creatorID, creatorTypeID, orderIndex, languageTag, libraryID FROM itemCreatorsAlt ICA JOIN creators C ON ICA.creatorID=C.creatorID '
+		+ 'WHERE itemID=? AND orderIndex=? ORDER BY languageTag';
+		var multiRows = Zotero.DB.query(sql, [this.id, i]);
+		
+		var multi = new Zotero.MultiCreator(creatorObj, langTag);
+		for (var j = 0, jlen = multiRows.length; j < jlen; j += 1) {
+			if (!multiRows[j].languageTag) {
+				continue;
+			}
+			var creatorAltObj = Zotero.Creators.get(multiRows[j].creatorID);
+			if (!creatorAltObj) {
+				creatorAltObj = new Zotero.Creator();
+				creatorAltObj.libraryID = multiRows[j].libraryID;
+				Zotero.debug("XXX Odd: empty creator alternate");
+			}
+			creatorAltObj.id = multiRows[j].creatorID;
+			multi._key[multiRows[j].languageTag] = creatorAltObj;
+			
+			multi._lst.push(multiRows[j].languageTag);
+		}
+
+		// Note that the main language is carried on multi, as
+		// key "main".
+
 		this._creators[creators[i].orderIndex] = {
 			ref: creatorObj,
-			creatorTypeID: creators[i].creatorTypeID
+			creatorTypeID: creators[i].creatorTypeID,
+			multi: multi
 		};
+
 	}
-	
 	return true;
 }
 
@@ -5155,6 +5982,7 @@ Zotero.Item.prototype._loadCreators = function() {
  * Load in the field data from the database
  */
 Zotero.Item.prototype._loadItemData = function() {
+	
 	if (!this.id) {
 		// Log backtrace and data
 		try {
@@ -5171,24 +5999,52 @@ Zotero.Item.prototype._loadItemData = function() {
 		throw ('ItemID not set for object before attempting to load data');
 	}
 	
-	var sql = "SELECT fieldID, value FROM itemData NATURAL JOIN itemDataValues "
-				+ "WHERE itemID=?";
-	var fields = Zotero.DB.query(sql, this.id);
+	// OOOOO: This needs to grab field item data with hints
+	// necessary to allot data to correct locations within
+	// the Zotero item.
+
+	var sql = "SELECT I.fieldID AS fieldID, V.value AS value, M.languageTag AS languageTag "
+				+ "FROM itemData I "
+				+ "NATURAL JOIN itemDataValues V "
+				+ "LEFT JOIN itemDataMain M ON I.itemID=M.itemID AND I.fieldID=M.fieldID "
+				+ "WHERE I.itemID=?";
 	
-	var itemTypeFields = Zotero.ItemFields.getItemTypeFields(this.itemTypeID);
+	var fields = Zotero.DB.query(sql, this.id);
 	
 	for each(var field in fields) {
-		this.setField(field.fieldID, field.value, true);
+	   	// the final true argument forces recognition of main (headline) langTag
+	   	this.setField(field.fieldID, field.value, true, field.languageTag, true);
+	}
+
+	var sql = "SELECT fieldID, value, languageTag "
+				+ "FROM itemDataAlt NATURAL JOIN itemDataValues "
+				+ "WHERE itemID=?";
+
+	var alts = Zotero.DB.query(sql, this.id);
+
+	for each(var field in alts) {
+		this.setField(field.fieldID, field.value, true, field.languageTag);
 	}
 	
 	// Mark nonexistent fields as loaded
+	var itemTypeFields = Zotero.ItemFields.getItemTypeFields(this.itemTypeID);
 	for each(var fieldID in itemTypeFields) {
 		if (this._itemData[fieldID] === null) {
 			this._itemData[fieldID] = false;
 		}
 	}
-	
+
 	this._itemDataLoaded = true;
+
+	// This does need to run from this position, to avoid a fatal loop ... but it won't work here
+	// because the libraryID cannot be adjusted after loading the creator. Hmmm.
+	if (this._itemData[22] && ("" + this._itemData[22]).slice(0, 9) === 'mlzsync1:') {
+		var data = {itemTypeID:this._itemTypeID};
+		var obj = Zotero.Sync.Server.Data.decodeMlzFields(this,data,this._itemData[22],{});
+		if (obj) {
+			Zotero.Sync.Server.Data.decodeMlzCreators(this,obj,this._creators.length);
+		}
+	}
 }
 
 
@@ -5276,7 +6132,6 @@ Zotero.Item.prototype._getRelatedItemsReverse = function () {
 Zotero.Item.prototype._getRelatedItemsBidirectional = function () {
 	var related = this._getRelatedItems(true);
 	var reverse = this._getRelatedItemsReverse();
-	
 	if (reverse.length) {
 		if (!related.length) {
 			return reverse;
