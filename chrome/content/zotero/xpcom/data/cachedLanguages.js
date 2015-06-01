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

// XXX zzz Same problems here as below. Try to find an analog
// XXX zzz to this functionality (dynamic cached prefs) in
// XXX zzz existing code.


/*

    (1) an object with all languages and their nicknames
    (2) an object with all default preferences
    (3) a bunch of async (?) helper functions
    (4) a few sync helper functions

*/

Zotero.CachedLanguages = new function() {
    this.langPrefIsSet = langPrefIsSet;
    this.nicknameExists = nicknameExists;
    this.getDisplayLang = getDisplayLang;
    this.hasTag = hasTag;
    this.getLangPrefsForParam = getLangPrefsForParam;
    this.getLangTags = getLangTags;
    this.getNickname = getNickname;
    this.hasTagDependents = hasTagDependents;

    var _languages = {};
    var _nicknames = {};
    var _prefs = {
        zoteroSort: {},
 		zoteroDisplay: {},
 		citationTransliteration: {},
 		citationTranslation: {},
 		citationSort: {}
    };

	var init = Zotero.Promise.coroutine(function* () {
        // Get all the langTag and prefs data into memory.
		var sql = 'SELECT tag,nickname FROM zlsTags';
		var tags = yield Zotero.DB.queryAsync(sql);
		for (var i = 0, ilen = tags.length; i < ilen; i += 1) {
            var tag = tags[i].tag;
			var nickname = tags[i].nickname;
            var validator = new Zotero.ZlsValidator();
            yield validator.validate(tag);
            var tagdata = validator.tagdata;
			_languages[tag] = {
                nickname: nickname,
                tagdata: tagdata
            };
			_nicknames[nickname] = tag;
		}
        for (var prefName in _prefs) {
		    var sql = "SELECT tag FROM zlsPreferences WHERE profile=? AND param=?";
            var langTags = yield Zotero.DB.columnQueryAsync(sql,['default', prefName]);
            for (var i = 0, ilen = langTags.length; i < ilen; i++) {
                var langTag = langTags[i];
                _prefs[prefName][langTag] = true; 
            }
        }
	});

    var changePref = Zotero.Promise.coroutine(function* (profile, param, langTag, checked) {
 	    if (checked) {
 		    var sql = 'INSERT INTO zlsPreferences VALUES (?,?,?)';
 		    yield Zotero.DB.queryAsync(sql,[profile,param,langTag]);
            _prefs[param][langTag] = true;
 	    } else {
 		    var sql = 'DELETE FROM zlsPreferences WHERE profile=? AND param=? and tag=?';
 		    yield Zotero.DB.queryAsync(sql,[profile,param,langTag]);
            delete _prefs[param][langTag];
 	    }
        return true;
    });
    
    var addTag = Zotero.Promise.coroutine(function* (tag) {
        var validator = new Zotero.ZlsValidator();
        yield validator.validate(tag);
        var tagdata = validator.tagdata;
        if (tagdata.length > 1) {
 	        var params = [tag, tag, [for (i of tagdata.slice(0,-1)) tagdata[i].subtag].join('-')];
 	        var sql = "INSERT INTO zlsTags VALUES (?,?,?)";
        } else {
 	        var params = [tag, tag];
 	        var sql = "INSERT INTO zlsTags VALUES (?,?,NULL)";
        }
 	    yield Zotero.DB.queryAsync(sql, params);
        _languages[tag] = {
            nickname: tag,
            tagdata: tagdata
        }
        _nicknames[tag] = tag;
    });

    var deleteTag = Zotero.Promise.coroutine(function* (tag) {
 		var sql = "SELECT COUNT(*) FROM zlsPreferences WHERE tag=?";
 		var hasDependents = yield Zotero.DB.valueQueryAsync(sql, [tag]);
 	    if (!hasDependents) {
 		    var sql = "DELETE FROM zlsTags WHERE tag=?";
 		    yield Zotero.DB.queryAsync(sql,[tag]);
 	    }
        delete _nicknames[_languages[tag].nickname];
        delete _languages[tag];
    });

    var nicknameReset = Zotero.Promise.coroutine(function* (oldNickname, newNickname) {
        var tag = _nicknames[oldNickname];
        if (!newNickname) {
            newNickname = tag;
        }
        var sql = 'UPDATE zlsTags SET nickname=? WHERE nickname=?';
 	    Zotero.DB.queryAsync(sql,[newNickname,oldNickname]);
        delete _nicknames[oldNickname];
        _nicknames[newNickname] = tag;
        _languages[tag].nickname = newNickname;
        return newNickname;
    });

	function getLanguageList(item, fieldNameOrIndex, isMulti) {
		return _languageList(item, fieldNameOrIndex, null, true, isMulti);
	};
    
    function getVariantList (item, fieldNameOrIndex, tag) {
		return _languageList(item, fieldNameOrIndex, tag);
	};

    function hasTagDependents(tag) {
        for (var key in _languages) {
            var keyStart = key.slice(0, tag.length);
            var nextChar = key.slice(tag.length, tag.length+1);
            if (keyStart === tag && (nextChar === '-')) {
                return true;
            }
        }
        return false;
    }

    function langPrefIsSet(profile,param,langTag) {
        return !!_prefs[param][langTag];
    }

    function nicknameExists(nickname) {
        return !!_nicknames[nickname];
    }
    
    function getDisplayLang() {
        var langTags = Object.keys(_prefs.zoteroDisplay);
        if (langTags.length) {
            return langTags[0];
        }
        return false;
    }
    
	function hasTag(langTag) {
        return !!_languages[langTag];
	}

    function getLangPrefsForParam(param, asArray) {
        return asArray ? Object.keys(_params[param]) : _params[param];
    };

    function getLangTags() {
        var ret = [];
        var langs = Object.keys(_languages);
        langs.sort();
        for (var i = 0, ilen = langs.length; i < ilen; i++) {
            var item = {
                nickname: _languages[langs[i]].nickname,
                tagdata: _languages[langs[i]].tagdata,
                tag: langs[i]
            }
            ret.push(item);
        }
        return ret;
    };

    var validateTag = Zotero.Promise.coroutine(function* (tag) {
		var validator = new Zotero.ZlsValidator();
		var isValid = yield validator.validate(tag);
        if (isValid) {
            return validator.tagdata;
        } else {
            return false;
        }
    });

    var validateTagAndAdd = Zotero.Promise.coroutine(function* (tag) {
        var tagdata = yield validateTag(tag);
		if (res) {
			tag = [validator.tagdata[i].subtag for (i in validator.tagdata)].join("-");
            addTag(tag);
		}
    });

	function getNickname(tag) {
		// Add language(s) for tag on cache failure.
		// Returns undefined if tag is invalid.
        var ret;
		if ("undefined" === typeof _languages[tag]) {
            ret = tag;
            validateTagAndAdd(tag);
		} else {
            ret = _languages[tag].nickname;
        }
		return ret;
	}

	function _languageList (item, fieldNameOrIndex, variantsOnly, languagesOnly, multiField) {
		var item, isItem, fieldName, creator;
		if ('number' === typeof fieldNameOrIndex) {
			creator = item.getCreator(fieldNameOrIndex);
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
			} else if (creator) {
				fieldName = true;
				mainLang = creator.multi.mainLang();
			}
			var checkLanguages = {};
			for (var fieldID in item.multi._keys) {
				for (var langTag in item.multi._keys[fieldID]) {
					checkLanguages[langTag] = true;
				}
				if (item.multi.main[fieldID]) {
					checkLanguages[item.multi.main[fieldID]] = true;
				}
			}
			for (var tag in checkLanguages) {
				if (!_languages[tag]) {
                    validateTagAndAdd(tag);
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
		var result = [];
		var itemMultiLangs;
		// Ugh.
		if (item) {
			if (isItem && fieldName) {
				itemMultiLangs = item.multi.langs(fieldName);
			} else if (!isItem && creator) {
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
			result.push({tag:tag, nickname:_languages[tag].nickname})
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
	};

    this.init = init;
    this.changePref = changePref;
    this.addTag = addTag;
    this.deleteTag = deleteTag;
    this.nicknameReset = nicknameReset;
	this.getLanguageList = getLanguageList;
	this.getVariantList = getVariantList;
}
