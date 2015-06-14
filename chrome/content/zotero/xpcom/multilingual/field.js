/*
 * Container object for multilingual field data.
 * Used by both hot Zotero items and translator data carriers.
 * Use accessors instead of direct reads or writes to the
 * JS primitives.
 * 
 * multi.set(fieldID, value, [lang])
 *   (value can be nil, but blocks on main entry if alternatives exist)
 *
 * multi.get(fieldID, langs, honorEmpty)
 */

Zotero.MultiField = function(parent){
	this.parent = parent;
	this.main = {};
	this._keys = {};
};

Zotero.MultiField.prototype._set = function (fieldID, value, lang, force_top, justLooking) {
	if (!fieldID) {
		throw "MultiField._set called without specifying fieldID";
	}
	// Add or edit (if field is empty, deletion will be handled
	// in item.save())
	if (!lang || lang === this.main[fieldID] || force_top) {
		// MAIN mode
		if (this.hasLang(lang, fieldID, true)) {
			lang = undefined;
			Zotero.debug("JURISM: Attempt to save existing tag to main: " + lang + ", for field " + fieldID + " and value (" + value + ") on item " + this.parent.key + " with force_top=" + force_top + " and justLooking=" + justLooking);
		}
		if (value === this.parent._itemData[fieldID] && (!lang || lang === this.main[fieldID])) {
			// no action, in either mode
			return false;
		} else {
			// main
			if (justLooking) {
				return "MAIN";
			} else {
				// Set the field value
				this.parent._itemData[fieldID] = value;
				if (lang) {
					// If there is a lang value, set it; never unset the headline field lang
					this.main[fieldID] = lang;
				}
			}
		}
	} else {
        // ALT mode
        if (lang === this.main[fieldID]) {
            throw "Attempt to save main tag value to alt: " + lang;
        }
		if (this._keys[fieldID] && this._keys[fieldID] && this._keys[fieldID][lang] == value) {
            // No action in either mode
            return false;
        } else {
		    if (justLooking) {
				return "ALT";
			} else {
			    if (!this._keys[fieldID]) {
				    this._keys[fieldID] = {};
			    }
			    this._keys[fieldID][lang] = value;
			}
		}
	}
};

Zotero.MultiField.prototype.get = function (fieldID, langs, honorEmpty) {
	var val, lang;
	if (!this.parent._itemDataLoaded) {
		// Safer path to initialisation, may avoid "itemID not set for object" error.
		if ((this.parent._id || this.parent._key) && !this.parent._primaryDataLoaded) {
			this.parent.loadPrimaryData(true);
		}
		if (this.parent.id) {
			this.parent._loadItemData();
		} else {
			return '';
		}
	}
	fieldID = Zotero.ItemFields.getID(fieldID);
	if ("object" === typeof langs) {
		for (var i = 0, ilen = langs.length; i < ilen; i += 1) {
			if (this._keys[fieldID] && this._keys[fieldID][langs[i]]) {
				lang = langs[i];
				break;
			}
		}
	} else {
		lang = langs;
	}

	if (!lang || lang === this.main[fieldID]) {
		val = this.parent._itemData[fieldID];
	} else {
		if (this._keys[fieldID] && this._keys[fieldID][lang]) {
			val = this._keys[fieldID][lang];
		} else if (!honorEmpty) {
			val = this.parent._itemData[fieldID];
		}
	}
	return val ? val : '';
};

Zotero.MultiField.prototype.mainLang = function (fieldID) {
	if (!fieldID) {
		throw "MultiField.mainLang() called without fieldID"
	}
	fieldID = Zotero.ItemFields.getID(fieldID);
	if (this.main[fieldID]) {
		return this.main[fieldID];
	}
	return false;
};

Zotero.MultiField.prototype.langs = function (fieldID) {
	if (!fieldID) {
		throw "MultiField.langs() called without fieldID"
	}
	fieldID = Zotero.ItemFields.getID(fieldID);
	if (this._keys[fieldID]) {
		return Object.keys(this._keys[fieldID]);
	}
	return [];
};


Zotero.MultiField.prototype.hasLang = function (langTag, field, multiOnly) {
	var fieldID = Zotero.ItemFields.getID(field);
	if (!multiOnly && this.main[fieldID] === langTag) {
		return true;
	} else if (this._keys[fieldID] && this._keys[fieldID][langTag]) {
		return true;
	}
	return false;
};

Zotero.MultiField.prototype.changeLangTag = function (oldTag, newTag, field) {
	var fieldID = Zotero.ItemFields.getID(field);
	if (this.main[fieldID] === newTag || (this._keys[fieldID] && this._keys[fieldID][newTag])) {
		throw "Attempt to change to existing language tag in creator";
	}
	if (!oldTag || oldTag === this.main[fieldID]) {
		this.main[fieldID] = newTag;
		if (!this.parent._changedItemData) {
	   		this.parent._changedItemData = {};
		}
		this.parent._changedItemData[fieldID] = true;
	} else if (this._keys[fieldID] && this._keys[fieldID][oldTag]) {
		this._keys[fieldID][newTag] = this._keys[fieldID][oldTag];
		this._keys[fieldID][oldTag] = '';
		if (!this.parent._changedItemDataAlt) {
	   		this.parent._changedItemDataAlt = {};
		}
		this.parent._changedItemDataAlt[fieldID] = true;
	}
};

Zotero.MultiField.prototype.merge = function (otherItem, shy) {
	for (var fieldID in otherItem.multi._keys) {
		if (!this.parent._itemData[fieldID]) {
			continue;
		}
		if (!this._keys[fieldID]) {
			this._keys[fieldID] = {};
		}
		for (var langTag in otherItem.multi._keys[fieldID]) {
			if (!shy || (shy && !this._keys[fieldID][langTag])) {
				if (this._keys[fieldID][langTag] != otherItem.multi._keys[fieldID][langTag]) {
					if (!this.parent._changedItemDataAlt) {
	   					this.parent._changedItemDataAlt = {};
					}
					this._keys[fieldID][langTag] = otherItem.multi._keys[fieldID][langTag];
					this.parent._changedItemDataAlt[fieldID] = true;
					this.parent._changed = true;
				}
			}
		}
	}
}

Zotero.MultiField.prototype.data = function (fieldID) {
	if (!fieldID) {
		throw "MultiField.data() called without fieldID"
	}
	var fieldID = Zotero.ItemFields.getID(fieldID);
	return [{languageTag: langTag,value: this._keys[fieldID][langTag]} for (langTag in this._keys[fieldID])];
};


Zotero.MultiField.prototype.clone = function (parent) {
	var clone = new Zotero.MultiField(parent);
	if (!clone.parent._changedItemDataAlt) {
	   	clone.parent._changedItemDataAlt = {};
	}
	for (var fieldID in this._keys) {
		clone._keys[fieldID] = {};
		for (var langTag in this._keys[fieldID]) {
			clone._keys[fieldID][langTag] = this._keys[fieldID][langTag];
			clone.parent._changedItemDataAlt[fieldID] = true;
		}
	}
	return clone;
};
