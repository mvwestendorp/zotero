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

Zotero.MultiField.prototype.get = function (fieldID, langs, honorEmpty, multiOnly) {
	var val, lang;
    /*
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
    */
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

	if (!multiOnly && (!lang || lang === this.main[fieldID])) {
		val = this.parent._itemData[fieldID];
	} else {
		if (lang && this._keys[fieldID] && this._keys[fieldID][lang]) {
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

Zotero.MultiField.prototype.setChange = function(fieldID) {
	if (!this.parent._changed.itemData) {
        this.parent._changed.itemData = {};
    }
	this.parent._changed.itemData[fieldID] = true;
}

Zotero.MultiField.prototype.setMainChange = function(fieldID) {
	if (!this.parent._changed.itemDataMain) {
        this.parent._changed.itemDataMain = {};
    }
	this.parent._changed.itemDataMain[fieldID] = true;
}

Zotero.MultiField.prototype.setAltChange = function(fieldID, languageTag) {
	if (!this.parent._changed.itemDataAlt) {
	   	this.parent._changed.itemDataAlt = {};
	}
	if (!this.parent._changed.itemDataAlt[fieldID]) {
		this.parent._changed.itemDataAlt[fieldID] = {};
	}
	this.parent._changed.itemDataAlt[fieldID][languageTag] = true;
}

Zotero.MultiField.prototype.changeLangTag = function (oldTag, newTag, field) {
	var fieldID = Zotero.ItemFields.getID(field);

	// Three possibilities here.
	// (1) oldTag is null, newTag has value
	// (2) oldTag is main, newTag value does not exist
	// (3) oldTag is main, newTag value exists
	// (4) oldTag is alt

	if (!oldTag) {
		// (1) add tag to main, protecting against clash
		if (this._keys[fieldID] && this._keys[fieldID][newTag]) {
			throw "Attempt to change to existing alt language tag in main (field.js)";
		}
		this.main[fieldID] = newTag;
		this.setMainChange(fieldID);
	} else if (oldTag === this.main[fieldID]) {
		// Definitely doing this, at the very least
		// (2) set main field tag
		this.main[fieldID] = newTag;
		this.setMainChange(fieldID);
		if (this._keys[fieldID] && this._keys[fieldID][newTag]) {
			// (3) swap main and alt fields and tags
			var oldMainValue = this.parent._itemData[fieldID];
			this.parent._itemData[fieldID] = this._keys[fieldID][newTag];
			this.setChange(fieldID);
			this._keys[fieldID][newTag] = '';
			this.setAltChange(fieldID, newTag);
			this._keys[fieldID][oldTag] = oldMainValue;
			this.setAltChange(fieldID, oldTag);
		}
	} else {
		// (4) set tag on alt, protecting against clash
		if (this._keys[fieldID] && this._keys[fieldID][newTag]) {
			throw "Attempt to change to existing alt language tag in alt (field.js)";
		}
		this._keys[fieldID][newTag] = this._keys[fieldID][oldTag];
		this._keys[fieldID][oldTag] = '';
		this.setAltChange(fieldID, newTag);
		this.setAltChange(fieldID, oldTag);
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
					this._keys[fieldID][langTag] = otherItem.multi._keys[fieldID][langTag];
					this.setAltChange(fieldID, langTag);
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
    var langTags = [];
    for (var langTag in this._keys[fieldID]) {
        langTags.push(langTag);
    }
    langTags.sort();
	var ret = [{languageTag: langTags[i], value: this._keys[fieldID][langTags[i]]} for (i in langTags)]
    return ret;
}

Zotero.MultiField.prototype.clone = function (parent) {
	var clone = new Zotero.MultiField(parent);
	for (var fieldID in this._keys) {
		clone._keys[fieldID] = {};
		for (var langTag in this._keys[fieldID]) {
			clone._keys[fieldID][langTag] = this._keys[fieldID][langTag];
			clone.setAltChange(fieldID, langTag);
		}
	}
	return clone;
};
