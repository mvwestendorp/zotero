/*
    ***** BEGIN LICENSE BLOCK *****
    
    Copyright © 2009 Center for History and New Media
                     George Mason University, Fairfax, Virginia, USA
                     http://zotero.org
    
    This file is part of Zotero.
    
    Zotero is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    Zotero is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    
    You should have received a copy of the GNU Affero General Public License
    along with Zotero.  If not, see <http://www.gnu.org/licenses/>.
    
    ***** END LICENSE BLOCK *****
*/


/*
 * Small cache for language preferences.
 * Run taint(<prefName>) method on this object after update to DB.
 */
Zotero.CachedLanguagePreferences = function () {
	this._zoteroSort = false;
	this._zoteroDisplay = false;
	this._tainted = {};
	this._tainted.zoteroSort = true;
	this._tainted.zoteroDisplay = true;
};

Zotero.CachedLanguagePreferences.prototype.__defineGetter__('zoteroSort', function () { return this.get('zoteroSort'); });
Zotero.CachedLanguagePreferences.prototype.__defineGetter__('zoteroDisplay', function () { return this.get('zoteroDisplay'); });

Zotero.CachedLanguagePreferences.prototype.get = function (prefName) {
	if (this._tainted[prefName]) {
		var sql = "SELECT tag FROM zlsPreferences WHERE profile=? AND param=?";
		this["_" + prefName] = Zotero.DB.columnQuery(sql,['default',prefName]);
		this._tainted[prefName] = false;
	}
	return this["_" + prefName];
};

Zotero.CachedLanguagePreferences.prototype.taint = function () {
	this._tainted.zoteroSort = true;
	this._tainted.zoteroDisplay = true;
};
Zotero.CachedLanguagePreferences = new Zotero.CachedLanguagePreferences();


/*
 * Simple cache for language nicknames.
 */
Zotero.CachedLanguages = new function() {
	var _languages = {};
	var _languagesLoaded = false;
	
	this.getNickname = getNickname;
	this.taint = taint;
	this.hasTag = hasTag;
	this.getLanguageList = getLanguageList;
	this.getVariantList = getVariantList;

	function hasTag(langTag) {
		if (_languages[langTag]) {
			return true;
		} else {
			return false;
		}
	};

	function taint () {
		_languagesLoaded = false;
	}
	
	function load () {
		for (var key in _languages) {
			delete _languages[key];
		}
		var sql = 'SELECT tag,nickname FROM zlsTags';
		var tags = Zotero.DB.query(sql);
		for (var i = 0, ilen = tags.length; i < ilen; i += 1) {
			var tag = tags[i].tag;
			var nickname = tags[i].nickname;
			_languages[tag] = nickname;
		}
		_languagesLoaded = true;
	}

	function getNickname(tag) {
		if (!_languagesLoaded) {
			load();
		}
		// Add language(s) for tag on cache failure.
		// Returns undefined if tag is invalid.
		if ("undefined" === typeof _languages[tag]) {
			var validator = Zotero.zlsValidator;
			var res = validator.validate(tag);
			if (res) {
				tag = [validator.tagdata[i].subtag for (i in validator.tagdata)].join("-");
				var sql = 'INSERT INTO zlsTags VALUES(?,?,NULL)';
				Zotero.DB.query(sql,[tag,tag]);
				load();
			}
		}
		return _languages[tag];
	}

	function getLanguageList (item, fieldNameOrIndex, isMulti) {
		return _languageList(item, fieldNameOrIndex, null, true, isMulti);
	}

	function getVariantList (item, fieldNameOrIndex, tag) {
		return _languageList(item, fieldNameOrIndex, tag);
	}

	function _languageList (item, fieldNameOrIndex, variantsOnly, languagesOnly, multiField) {
		var item, isItem, fieldName, creator;
		if ('number' === typeof fieldNameOrIndex) {
			creator = item.getCreator(fieldNameOrIndex);
		if (!creator) {
		return [];
		}
			isItem = false;
		} else {
			fieldName = fieldNameOrIndex;
			isItem = true;
		}
		var mainLang = null;
	if (item) {
			if (isItem) {
				if (fieldName) {
					mainLang = item.multi.mainLang(fieldName);
				}
			} else {
				fieldName = true;
				mainLang = creator.multi.mainLang();
			}
		var checkLanguages = {};
		var insertSql = "INSERT INTO zlsTags VALUES (?,?,?)";
		var snoopSql = "SELECT COUNT (*) FROM zlsTags WHERE tag=?";
		for (var fieldID in item.multi._keys) {
		for (var langTag in item.multi._keys[fieldID]) {
			checkLanguages[langTag] = true;
		}
		if (item.multi.main[fieldID]) {
			checkLanguages[item.multi.main[fieldID]] = true;
		}
		}
		for (var tag in checkLanguages) {
		if (!Zotero.DB.valueQuery(snoopSql, [tag])) {
			Zotero.DB.query(insertSql, [tag,tag,null]);
					_languagesLoaded = false;
		}
		}
	}
		var mainLangRex;
		if (mainLang) {
			mainLangStub = mainLang.replace(/^([a-z]+)-.*/, "$1");
			mainLangRex = new RegExp("^(" + mainLangStub + "(-.+)*|[a-z]{2,3}(?:-[A-Z]{2})*)$")
		} else {
			mainLangRex = new RegExp("^([a-z]{2,3}(?:-[A-Z]{2})*)$")
		}
		if (!_languagesLoaded) {
			load();
		}
		var result = [];
		var itemMultiLangs;
		// Ugh.
		if (item) {
			if (isItem && fieldName) {
				itemMultiLangs = item.multi.langs(fieldName);
			} else if (!isItem) {
				itemMultiLangs = creator.multi.langs();
			} else {
				itemMultiLangs = [];
			}
		} else {
			itemMultiLangs = [];
		}
		for (var tag in _languages) {
			
			// Check tags on the item for this field.

			if (item && !mainLang && languagesOnly) {
				// For languagesOnly (i.e. main language selections), skip
				// tags that already exist on the item for this field,
				// IFF the main language is not yet set.
				if (itemMultiLangs.indexOf(tag) > -1) {
					continue;
				}
			}

			if (languagesOnly && !tag.match(/^[a-z]{2,3}(?:-[A-Z]{2})*$/)) {
				continue;
			}

			if (languagesOnly && multiField && (mainLang === tag || itemMultiLangs.indexOf(tag) > -1)) {
				continue;
			}

			if (variantsOnly && (mainLang === tag || !mainLangRex.exec(tag) || itemMultiLangs.indexOf(tag) > -1)) {
				continue;
			}
			result.push({tag:tag, nickname:_languages[tag]})
		}
		if (item) {
			// If we have no main language, and we are returning for baseTag
			// (i.e. language variants), return only if there are two or more
			// items in the menu, to (try to) leave some room for maneuver.
			if (variantsOnly && !mainLang && result.length < 2) {
				result = [];
			}
		}
		result.sort(function(a,b){
			return a.nickname.localeCompare(b.nickname);
		});
		return result;
	}
};
