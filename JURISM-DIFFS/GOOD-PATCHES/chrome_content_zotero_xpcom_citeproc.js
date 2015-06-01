diff --git a/chrome/content/zotero/xpcom/citeproc.js b/chrome/content/zotero/xpcom/citeproc.js
index ad318b1..98fb16a 100644
--- a/chrome/content/zotero/xpcom/citeproc.js
+++ b/chrome/content/zotero/xpcom/citeproc.js
@@ -80,18 +80,17 @@ if (!Array.indexOf) {
     };
 }
 var CSL = {
-    PROCESSOR_VERSION: "1.0.543",
+    PROCESSOR_VERSION: "1.1.25",
     CONDITION_LEVEL_TOP: 1,
     CONDITION_LEVEL_BOTTOM: 2,
     PLAIN_HYPHEN_REGEX: /(?:[^\\]-|\u2013)/,
-    LOCATOR_LABELS_REGEXP: new RegExp("^((art|ch|Ch|subch|col|fig|l|n|no|op|p|pp|para|subpara|pt|r|sec|subsec|Sec|sv|sch|tit|vrs|vol)\\.)\\s+(.*)"),
-    STATUTE_SUBDIV_GROUPED_REGEX: /((?:^| )(?:art|ch|Ch|subch|p|pp|para|subpara|pt|r|sec|subsec|Sec|sch|tit)\.)/g,
-    STATUTE_SUBDIV_PLAIN_REGEX: /(?:(?:^| )(?:art|ch|Ch|subch|p|pp|para|subpara|pt|r|sec|subsec|Sec|sch|tit)\.)/,
+    LOCATOR_LABELS_REGEXP: new RegExp("^((art|ch|subch|col|fig|l|n|no|op|p|pp|para|subpara|pt|r|sec|subsec|sv|sch|tit|vrs|vol)\\.)\\s+(.*)"),
+    STATUTE_SUBDIV_GROUPED_REGEX: /((?:^| )(?:art|ch|subch|p|pp|para|subpara|pt|r|sec|subsec|sch|tit)\.)/g,
+    STATUTE_SUBDIV_PLAIN_REGEX: /(?:(?:^| )(?:art|ch|subch|p|pp|para|subpara|pt|r|sec|subsec|sch|tit)\.)/,
     STATUTE_SUBDIV_STRINGS: {
         "art.": "article",
         "bk.": "book",
         "ch.": "chapter",
-        "Ch.": "Chapter",
         "subch.": "subchapter",
         "p.": "page",
         "pp.": "page",
@@ -101,7 +100,6 @@ var CSL = {
         "r.": "rule",
         "sec.": "section",
         "subsec.": "subsection",
-        "Sec.": "Section",
         "sch.": "schedule",
         "tit.": "title",
         "col.": "column",
@@ -119,7 +117,6 @@ var CSL = {
         "article": "art.",
         "book": "bk.",
         "chapter": "ch.",
-        "Chapter": "Ch.",
         "subchapter": "subch.",
         "page": "p.",
         "paragraph": "para.",
@@ -128,7 +125,6 @@ var CSL = {
         "rule": "r.",
         "section": "sec.",
         "subsection": "subsec.",
-        "Section": "Sec.",
         "schedule": "sch.",
         "title": "tit.",
         "column": "col.",
@@ -147,7 +143,6 @@ var CSL = {
         "art": "article",
         "bk": "book",
         "ch": "chapter",
-        "Ch": "Chapter",
         "subch": "subchapter",
         "col": "column",
         "fig": "figure",
@@ -162,15 +157,37 @@ var CSL = {
         "subpara": "subparagraph",
         "pt": "part",
         "r": "rule",
-        "sec": "section",
-        "subsec": "subsection",
-        "Sec": "Section",
-        "sv": "sub-verbo",
+		"sec": "section",
+		"subsec": "subsection",
+		"sv": "sub-verbo",
         "sch": "schedule",
         "tit": "title",
         "vrs": "verse",
         "vol": "volume"
     },
+    MODULE_MACROS: {
+        "juris-title": true,
+        "juris-title-short": true,
+        "juris-main": true,
+        "juris-main-short": true,
+        "juris-comma-spotter": true,
+        "juris-default-spotter": true,
+        "juris-comma-spotter-short": true,
+        "juris-default-spotter-short": true,
+        "juris-locator": true,
+        "juris-locator-label": true,
+        "juris-tail": true,
+        "juris-tail-short": true
+    },
+    MODULE_TYPES: {
+        "legal_case": true,
+        "legislation": true,
+        "bill": true,
+        "hearing": true,
+        "gazette": true,
+        "report": true,
+        "regulation": true
+    },
     NestedBraces: [
         ["(", "["],
         [")", "]"]
@@ -235,7 +252,7 @@ var CSL = {
     POSITION_TEST_VARS: ["position", "first-reference-note-number", "near-note"],
     AREAS: ["citation", "citation_sort", "bibliography", "bibliography_sort"],
     MULTI_FIELDS: ["event", "publisher", "publisher-place", "event-place", "title", "container-title", "collection-title", "authority","edition","genre","title-short","medium","jurisdiction","archive","archive-place"],
-    CITE_FIELDS: ["first-reference-note-number", "locator", "locator-revision"],
+    CITE_FIELDS: ["first-reference-note-number", "locator", "locator-extra"],
     MINIMAL_NAME_FIELDS: ["literal", "family"],
     SWAPPING_PUNCTUATION: [".", "!", "?", ":", ","],
     TERMINAL_PUNCTUATION: [":", ".", ";", "!", "?", " "],
@@ -478,6 +495,7 @@ var CSL = {
         fi: "fi_FI",
         fr: "fr_FR",
         he: "he_IL",
+        hr: "hr-HR",
         hu: "hu_HU",
         is: "is_IS",
         it: "it_IT",
@@ -485,6 +503,7 @@ var CSL = {
         km: "km_KH",
         ko: "ko_KR",
         lt: "lt_LT",
+        lv: "lv-LV",
         mn: "mn_MN",
         nb: "nb_NO",
         nl: "nl_NL",
@@ -628,8 +647,8 @@ CSL.error = function (str) {
     Zotero.debug("CSL error: " + str);
 };
 function DOMParser() {
-    return Components.classes["@mozilla.org/xmlextras/domparser;1"]
-        .createInstance(Components.interfaces.nsIDOMParser);
+	return Components.classes["@mozilla.org/xmlextras/domparser;1"]
+		.createInstance(Components.interfaces.nsIDOMParser);
 };
 if ("undefined" === typeof CSL_IS_IE) {
     var CSL_IS_IE;
@@ -1130,7 +1149,7 @@ CSL.getMinVal = function () {
     return this.tmp["et-al-min"];
 };
 CSL.tokenExec = function (token, Item, item) {
-    var next, maybenext, exec, pos, len, debug;
+    var next, maybenext, exec, debug;
     debug = false;
     next = token.next;
     maybenext = false;
@@ -1146,9 +1165,8 @@ CSL.tokenExec = function (token, Item, item) {
     if (token.test) {
         next = record.call(this,token.test(Item, item));
     }
-    len = token.execs.length;
-    for (pos = 0; pos < len; pos += 1) {
-        exec = token.execs[pos];
+    for (var i=0,ilen=token.execs.length;i<ilen;i++) {
+        exec = token.execs[i];
         maybenext = exec.call(token, this, Item, item);
         if (maybenext) {
             next = maybenext;
@@ -1156,14 +1174,11 @@ CSL.tokenExec = function (token, Item, item) {
     }
     return next;
 };
-CSL.expandMacro = function (macro_key_token) {
+CSL.expandMacro = function (macro_key_token, target) {
     var mkey, start_token, key, end_token, navi, macro_nodes, newoutput, mergeoutput, end_of_macro, func;
     mkey = macro_key_token.postponed_macro;
-    if (this.build.macro_stack.indexOf(mkey) > -1) {
-        throw "CSL processor error: call to macro \"" + mkey + "\" would cause an infinite loop";
-    } else {
-        this.build.macro_stack.push(mkey);
-    }
+    var alt_macro = macro_key_token.alt_macro;
+    macro_key_token = new CSL.Token("group", CSL.START);
     var hasDate = false;
     var macroid = false;
     macro_nodes = this.sys.xml.getNodesByName(this.cslXml, 'macro', mkey);
@@ -1172,6 +1187,7 @@ CSL.expandMacro = function (macro_key_token) {
         hasDate = this.sys.xml.getAttributeValue(macro_nodes[0], "macro-has-date");
     }
     if (hasDate) {
+        mkey = mkey + "@" + this.build.current_default_locale;
         func = function (state, Item) {
             if (state.tmp.extension) {
                 state.tmp["doing-macro-with-date"] = true;
@@ -1179,18 +1195,53 @@ CSL.expandMacro = function (macro_key_token) {
         };
         macro_key_token.execs.push(func);
     }
-    macro_key_token.tokentype = CSL.START;
+    if (this.build.macro_stack.indexOf(mkey) > -1) {
+        throw "CSL processor error: call to macro \"" + mkey + "\" would cause an infinite loop";
+    } else {
+        this.build.macro_stack.push(mkey);
+    }
     macro_key_token.cslid = macroid;
-    CSL.Node.group.build.call(macro_key_token, this, this[this.build.area].tokens, true);
+    if (CSL.MODULE_MACROS[mkey]) {
+        macro_key_token.juris = mkey;
+        this.opt.update_mode = CSL.POSITION;
+    }
+    CSL.Node.group.build.call(macro_key_token, this, target);
     if (!this.sys.xml.getNodeValue(macro_nodes)) {
         throw "CSL style error: undefined macro \"" + mkey + "\"";
     }
-    var builder = CSL.makeBuilder(this);
-    builder(macro_nodes[0]);
-    end_of_macro = new CSL.Token("group", CSL.END);
-    if (macro_key_token.decorations) {
-        end_of_macro.decorations = macro_key_token.decorations.slice();
+    var mytarget = CSL.getMacroTarget.call(this, mkey);
+    if (mytarget) {
+        CSL.buildMacro.call(this, mytarget, macro_nodes);
+        CSL.configureMacro.call(this, mytarget);
     }
+    if (!this.build.extension) {
+        var func = function(macro_name, alt_macro) {
+            return function (state, Item, item) {
+                var next = 0;
+                while (next < state.macros[macro_name].length) {
+                    next = CSL.tokenExec.call(state, state.macros[macro_name][next], Item, item);
+                }
+                var flag = state.tmp.group_context.value();
+                if (((flag[1] && !flag[2]) || (!flag[0] && !flag[1])) && alt_macro) {
+                    flag[1] = false;
+                    var mytarget = CSL.getMacroTarget.call(state, alt_macro);
+                    if (mytarget) {
+                        var macro_nodes = state.sys.xml.getNodesByName(state.cslXml, 'macro', alt_macro);
+                        CSL.buildMacro.call(state, mytarget, macro_nodes);
+                        CSL.configureMacro.call(state, mytarget);
+                    }
+                    var next = 0;
+                    while (next < state.macros[alt_macro].length) {
+                        next = CSL.tokenExec.call(state, state.macros[alt_macro][next], Item, item);
+                    }
+                }
+            }
+        }(mkey, alt_macro);
+        var text_node = new CSL.Token("text", CSL.SINGLETON);
+        text_node.execs.push(func);
+        target.push(text_node);
+    }
+    end_of_macro = new CSL.Token("group", CSL.END);
     if (hasDate) {
         func = function (state, Item) {
             if (state.tmp.extension) {
@@ -1199,10 +1250,45 @@ CSL.expandMacro = function (macro_key_token) {
         };
         end_of_macro.execs.push(func);
     }
-    CSL.Node.group.build.call(end_of_macro, this, this[this.build.area].tokens, true);
+    if (macro_key_token.juris) {
+        end_of_macro.juris = mkey;
+        if (alt_macro) {
+            end_of_macro.alt_macro = alt_macro;
+        }
+    }
+    CSL.Node.group.build.call(end_of_macro, this, target);
     this.build.macro_stack.pop();
 };
-CSL.XmlToToken = function (state, tokentype) {
+CSL.getMacroTarget = function (mkey) {
+    var mytarget;
+    if (this.build.extension) {
+        mytarget = this[this.build.root + this.build.extension].tokens;
+    } else {
+        if (!this.macros[mkey]) {
+            mytarget = [];
+            this.macros[mkey] = mytarget;
+        } else {
+            mytarget = false;
+        }
+    }
+    return mytarget;
+}
+CSL.buildMacro = function (mytarget, macro_nodes) {
+    var builder = CSL.makeBuilder(this, mytarget);
+    var mynode;
+    if ("undefined" === typeof macro_nodes.length) {
+        mynode = macro_nodes;
+    } else {
+        mynode = macro_nodes[0];
+    }
+    builder(mynode);
+}
+CSL.configureMacro = function (mytarget) {
+    if (!this.build.extension) {
+        this.configureTokenList(mytarget);
+    }
+}
+CSL.XmlToToken = function (state, tokentype, explicitTarget) {
     var name, txt, attrfuncs, attributes, decorations, token, key, target;
     name = state.sys.xml.nodename(this);
     if (state.build.skip && state.build.skip !== name) {
@@ -1246,7 +1332,11 @@ CSL.XmlToToken = function (state, tokentype) {
     } else if (tokentype === CSL.END && attributes['@variable']) {
         token.hasVariable = true;
     }
-    target = state[state.build.area].tokens;
+    if (explicitTarget) {
+        target = explicitTarget;
+    } else {
+        target = state[state.build.area].tokens;
+    }
     CSL.Node[name].build.call(token, state, target);
 };
 CSL.DateParser = function () {
@@ -1391,7 +1481,7 @@ CSL.DateParser = function () {
     };
     this.parse = function (txt) {
         var slash, dash, lst, l, m, number, note, thedate, slashcount, range_delim, date_delim, ret, delim_pos, delims, isrange, suff, date, breakme, item, delim, element, mm, slst, mmpos, i, ilen, j, jlen, k, klen;
-    if (txt) {
+	if (txt) {
         txt = "" + txt;
         txt = txt.replace(/\s*[0-9]{2}:[0-9]{2}(?::[0-9]+)/,"");
         m = txt.match(jmd);
@@ -1433,7 +1523,7 @@ CSL.DateParser = function () {
             slash = txt.indexOf("/");
             dash = txt.indexOf("-");
         }
-    }
+	}
         txt = txt.replace(/([A-Za-z])\./g, "$1");
         number = "";
         note = "";
@@ -1639,9 +1729,15 @@ CSL.Engine = function (sys, style, lang, forceLang) {
     if ("undefined" === typeof CSL_JSON && "string" !== typeof style) {
         style = "";
     }
+    if (CSL.retrieveStyleModule) {
+        this.sys.retrieveStyleModule = CSL.retrieveStyleModule;
+    }
     if (CSL.getAbbreviation) {
         this.sys.getAbbreviation = CSL.getAbbreviation;
     }
+    if (CSL.suppressJurisdictions) {
+        this.sys.suppressJurisdictions = CSL.suppressJurisdictions;
+    }
     if (this.sys.stringCompare) {
         CSL.stringCompare = this.sys.stringCompare;
     }
@@ -1690,11 +1786,12 @@ CSL.Engine = function (sys, style, lang, forceLang) {
     this.opt["initialize-with-hyphen"] = true;
     this.setStyleAttributes();
     this.opt.xclass = sys.xml.getAttributeValue(this.cslXml, "class");
+    this.opt.class = this.opt.xclass;
     this.opt.styleID = this.sys.xml.getStyleId(this.cslXml);
-    this.opt.styleName = this.sys.xml.getStyleId(this.cslXml, true);
-    if (CSL.getSuppressJurisdictions) {
-        this.opt.suppressJurisdictions = CSL.getSuppressJurisdictions(this.opt.styleID);
+    if (CSL.setSuppressJurisdictions) {
+        CSL.setSuppressJurisdictions(this.opt.styleID);
     }
+    this.opt.styleName = this.sys.xml.getStyleId(this.cslXml, true);
     if (this.opt.version.slice(0,4) === "1.1m") {
         this.opt.development_extensions.static_statute_locator = true;
         this.opt.development_extensions.handle_parallel_articles = true;
@@ -1741,8 +1838,14 @@ CSL.Engine = function (sys, style, lang, forceLang) {
     this.locale[this.opt.lang].opts["skip-words-regexp"] = makeRegExp(this.locale[this.opt.lang].opts["skip-words"]);
     this.output.adjust = new CSL.Output.Queue.adjust(this.getOpt('punctuation-in-quote'));
     this.registry = new CSL.Registry(this);
-    this.buildTokenLists("citation");
-    this.buildTokenLists("bibliography");
+    this.macros = {};
+    this.build.area = "citation";
+    var area_nodes = this.sys.xml.getNodesByName(this.cslXml, this.build.area);
+    this.buildTokenLists(area_nodes, this[this.build.area].tokens);
+    this.build.area = "bibliography";
+    var area_nodes = this.sys.xml.getNodesByName(this.cslXml, this.build.area);
+    this.buildTokenLists(area_nodes, this[this.build.area].tokens);
+    this.juris = {};
     this.configureTokenLists();
     this.disambiguate = new CSL.Disambiguation(this);
     this.splice_delimiter = false;
@@ -1764,15 +1867,15 @@ CSL.Engine.prototype.setCloseQuotesArray = function () {
     ret.push("'");
     this.opt.close_quotes_array = ret;
 };
-CSL.makeBuilder = function (me) {
+CSL.makeBuilder = function (me, target) {
     function enterFunc (node) {
-        CSL.XmlToToken.call(node, me, CSL.START);
+        CSL.XmlToToken.call(node, me, CSL.START, target);
     };
     function leaveFunc (node) {
-        CSL.XmlToToken.call(node, me, CSL.END);
+        CSL.XmlToToken.call(node, me, CSL.END, target);
     };
     function singletonFunc (node) {
-        CSL.XmlToToken.call(node, me, CSL.SINGLETON);
+        CSL.XmlToToken.call(node, me, CSL.SINGLETON, target);
     };
     function buildStyle (node) {
         var starttag, origparent;
@@ -1797,22 +1900,22 @@ CSL.makeBuilder = function (me) {
     }
     return buildStyle;
 };
-CSL.Engine.prototype.buildTokenLists = function (area) {
-    var builder = CSL.makeBuilder(this);
-    var area_nodes;
-    area_nodes = this.sys.xml.getNodesByName(this.cslXml, area);
-    if (!this.sys.xml.getNodeValue(area_nodes)) {
-        return;
+CSL.Engine.prototype.buildTokenLists = function (area_nodes, target) {
+    if (!this.sys.xml.getNodeValue(area_nodes)) return;
+    var builder = CSL.makeBuilder(this, target);
+    var mynode;
+    if ("undefined" === typeof area_nodes.length) {
+        mynode = area_nodes;
+    } else {
+        mynode = area_nodes[0];
     }
-    this.build.area = area;
-    var mynode = area_nodes[0];
     builder(mynode);
 };
 CSL.Engine.prototype.setStyleAttributes = function () {
     var dummy, attr, key, attributes, attrname;
     dummy = {};
     var cslXml = this.cslXml;
-    var tagName = this.cslXml.tagName ? ("" + this.cslXml.tagName).toLowerCase() : "";
+	var tagName = this.cslXml.tagName ? ("" + this.cslXml.tagName).toLowerCase() : "";
     if (tagName !== 'style' && tagName !== 'cslstyle') {
         if (this.cslXml.getElementsByTagName) {
             var cslXml = this.cslXml.getElementsByTagName('style')[0];
@@ -1929,38 +2032,43 @@ CSL.Engine.getField = function (mode, hash, term, form, plural, gender) {
 };
 CSL.Engine.prototype.configureTokenLists = function () {
     var dateparts_master, area, pos, token, dateparts, part, ppos, pppos, len, llen, lllen;
-    dateparts_master = ["year", "month", "day"];
     len = CSL.AREAS.length;
     for (pos = 0; pos < len; pos += 1) {
         area = CSL.AREAS[pos];
-        llen = this[area].tokens.length - 1;
-        for (ppos = llen; ppos > -1; ppos += -1) {
-            token = this[area].tokens[ppos];
-            if ("date" === token.name && CSL.END === token.tokentype) {
-                dateparts = [];
-            }
-            if ("date-part" === token.name && token.strings.name) {
-                lllen = dateparts_master.length;
-                for (pppos = 0; pppos < lllen; pppos += 1) {
-                    part = dateparts_master[pppos];
-                    if (part === token.strings.name) {
-                        dateparts.push(token.strings.name);
-                    }
-                }
-            }
-            if ("date" === token.name && CSL.START === token.tokentype) {
-                dateparts.reverse();
-                token.dateparts = dateparts;
-            }
-            token.next = (ppos + 1);
-            if (token.name && CSL.Node[token.name].configure) {
-                CSL.Node[token.name].configure.call(token, this, ppos);
-            }
-        }
+        var tokens = this[area].tokens;
+        this.configureTokenList(tokens);
     }
     this.version = CSL.version;
     return this.state;
 };
+CSL.Engine.prototype.configureTokenList = function (tokens) {
+    var dateparts_master, area, pos, token, dateparts, part, ppos, pppos, len, llen, lllen;
+    dateparts_master = ["year", "month", "day"];
+    llen = tokens.length - 1;
+    for (ppos = llen; ppos > -1; ppos += -1) {
+        token = tokens[ppos];
+        if ("date" === token.name && CSL.END === token.tokentype) {
+            dateparts = [];
+        }
+        if ("date-part" === token.name && token.strings.name) {
+            lllen = dateparts_master.length;
+            for (pppos = 0; pppos < lllen; pppos += 1) {
+                part = dateparts_master[pppos];
+                if (part === token.strings.name) {
+                    dateparts.push(token.strings.name);
+                }
+            }
+        }
+        if ("date" === token.name && CSL.START === token.tokentype) {
+            dateparts.reverse();
+            token.dateparts = dateparts;
+        }
+        token.next = (ppos + 1);
+        if (token.name && CSL.Node[token.name].configure) {
+            CSL.Node[token.name].configure.call(token, this, ppos);
+        }
+    }
+}
 CSL.Engine.prototype.retrieveItems = function (ids) {
     var ret, pos, len;
     ret = [];
@@ -2030,7 +2138,7 @@ CSL.Engine.prototype.retrieveItem = function (id) {
     if (Item.page) {
         Item["page-first"] = Item.page;
         var num = "" + Item.page;
-        m = num.split(/\s*(?:&|,|-|\u2013)\s*/);
+        m = num.split(/\s*(?:&|, |-|\u2013)\s*/);
         if (m[0].slice(-1) !== "\\") {
             Item["page-first"] = m[0];
         }
@@ -2072,26 +2180,26 @@ CSL.Engine.prototype.retrieveItem = function (id) {
         }
     }
     if (this.opt.development_extensions.static_statute_locator) {
-        if (Item.type && ["bill","gazette","legislation","treaty"].indexOf(Item.type) > -1) {
+        if (Item.type && ["bill","gazette","legislation","regulation","treaty"].indexOf(Item.type) > -1) {
             var varname;
             var elements = ["type", "title", "jurisdiction", "genre", "volume", "container-title"];
             var legislation_id = [];
             for (i = 0, ilen = elements.length; i < ilen; i += 1) {
                 varname = elements[i];
-                if (Item[varname]) {
-                    legislation_id.push(Item[varname]);
-                }
-            }
+				if (Item[varname]) {
+					legislation_id.push(Item[varname]);
+				}
+			}
             elements = ["original-date", "issued"];
-            for (i = 0, elements.length; i < ilen; i += 1) {
+			for (i = 0, elements.length; i < ilen; i += 1) {
                 varname = elements[i];
-                if (Item[varname] && Item[varname].year) {
-                    var value = Item[varname].year;
-                    legislation_id.push(value);
-                    break;
-                }
-            }
-            Item.legislation_id = legislation_id.join("::");
+				if (Item[varname] && Item[varname].year) {
+					var value = Item[varname].year;
+					legislation_id.push(value);
+					break;
+				}
+			}
+			Item.legislation_id = legislation_id.join("::");
         }
     }
     if (!Item["title-short"]) {
@@ -2106,10 +2214,21 @@ CSL.Engine.prototype.retrieveItem = function (id) {
             if (Item.title.slice(0,offset) === shortTitle && Item.title.slice(offset).match(/^\s*:/)) {
                 Item["title-main"] = Item.title.slice(0,offset).replace(/\s+$/,"");
                 Item["title-sub"] = Item.title.slice(offset).replace(/^\s*:\s*/,"");
+                if (this.opt.development_extensions.uppercase_subtitles && Item["title-sub"]) {
+                    var subtitle = Item["title-sub"]
+                    for (var i=0,ilen=subtitle.length;i<ilen;i++) {
+                        if (subtitle.charAt(i).toLowerCase() !== subtitle.charAt(i).toUpperCase()) {
+                            Item["title-sub"] = subtitle.slice(0,i) + subtitle.charAt(i).toUpperCase() + subtitle.slice(i+1);
+                            break
+                        }
+                    }
+                }
+                var mainPlusJoinOffset = offset + Item.title.length - Item["title-main"].length - Item["title-sub"].length;
+                Item.title = Item.title.slice(0,mainPlusJoinOffset) + Item["title-sub"];
             }
         }
     }
-    var isLegalType = ["legal_case","legislation","gazette","regulation"].indexOf(Item.type) > -1;
+    var isLegalType = ["bill","legal_case","legislation","gazette","regulation"].indexOf(Item.type) > -1;
     if (!isLegalType && Item.title && this.sys.getAbbreviation) {
         var noHints = false;
         if (!Item.jurisdiction) {
@@ -2161,7 +2280,7 @@ CSL.Engine.prototype.remapSectionVariable = function (inputList) {
         var section_label_count = 0;
         var later_label = false;
         var value = false;
-        if (["bill","gazette","legislation","treaty"].indexOf(Item.type) > -1) {
+        if (["bill","gazette","legislation","regulation","treaty"].indexOf(Item.type) > -1) {
             item.force_pluralism = 0;
             if (!item.label) {
                 item.label = "page"
@@ -2241,7 +2360,7 @@ CSL.Engine.prototype.remapSectionVariable = function (inputList) {
 }
 CSL.Engine.prototype.setNumberLabels = function (Item) {
     if (Item.number
-        && ["bill", "gazette", "legislation", "treaty"].indexOf(Item.type) > -1
+        && ["bill", "gazette", "legislation","regulation","treaty"].indexOf(Item.type) > -1
         && this.opt.development_extensions.static_statute_locator
         && !this.tmp.shadow_numbers["number"]) {
         this.tmp.shadow_numbers["number"] = {};
@@ -2251,7 +2370,7 @@ CSL.Engine.prototype.setNumberLabels = function (Item) {
         this.tmp.shadow_numbers["number"].label = false;
         var value = "" + Item.number;
         value = value.replace("\\", "", "g");
-        var firstword = value.split(/\s/)[0];
+        var firstword = value.split(/\s+/)[0];
         var firstlabel = CSL.STATUTE_SUBDIV_STRINGS[firstword];
         if (firstlabel) {
             var m = value.match(CSL.STATUTE_SUBDIV_GROUPED_REGEX);
@@ -2260,13 +2379,13 @@ CSL.Engine.prototype.setNumberLabels = function (Item) {
                 var lst = [];
                 for (var j=1, jlen=splt.length; j < jlen; j += 1) {
                     var subdiv = m[j - 1].replace(/^\s*/, "");
-                    lst.push(subdiv.replace("sec.", "Sec.").replace("ch.", "Ch."));
                     lst.push(splt[j].replace(/\s*$/, "").replace(/^\s*/, ""));
                 }
                 value = lst.join(" ");
             } else {
                 value = splt[0];
             }
+            this.tmp.shadow_numbers["number"].label = firstlabel;
             this.tmp.shadow_numbers["number"].values.push(["Blob", value, false]);
             this.tmp.shadow_numbers["number"].numeric = false;
         } else {
@@ -2763,7 +2882,10 @@ CSL.Output.Queue.prototype.append = function (str, tokname, notSerious, ignorePr
     if ("string" === typeof str && str.length) {
         str = str.replace(/ ([:;?!\u00bb])/g, "\u202f$1").replace(/\u00ab /g, "\u00ab\u202f");
         this.last_char_rendered = str.slice(-1);
-        str = str.replace(/\s+'/g, "  \'").replace(/^'/g, " \'");
+        str = str.replace(/\s+'/g, "  \'");
+        if (!notSerious) {
+            str = str.replace(/^'/g, " \'");
+        }
         if (!ignorePredecessor) {
             this.state.tmp.term_predecessor = true;
         } else if (notSerious) {
@@ -3211,6 +3333,19 @@ CSL.Output.Queue.adjust = function (punctInQuote) {
         if (blobHasDescendantQuotes(blob.blobs[blob.blobs.length-1])) return true;
         return false;
     }
+    function blobHasDescendantMergingPunctuation(parentChar,blob) {
+        var childChar = blob.strings.suffix.slice(-1);
+        if (!childChar && "string" === typeof blob.blobs) {
+            childChar = blob.blobs.slice(-1);
+        }
+        var mergedChars = RtoL_MAP[parentChar][childChar];
+        if (mergedChars && mergedChars.length === 1) {
+            return true;
+        }
+        if ("object" !== typeof blob.blobs) return false;
+        if (blobHasDescendantMergingPunctuation(parentChar,blob.blobs[blob.blobs.length-1])) return true;
+        return false;
+    }
     function matchLastChar(blob, chr) {
         if (!PUNCT[chr]) {
             return false;
@@ -3259,7 +3394,6 @@ CSL.Output.Queue.adjust = function (punctInQuote) {
             return RtoL_MAP[secondChar];
         }
         function matchOnLeft () {
-            var chr = FirstStrings[first].slice(-1);
             return LtoR_MAP[firstChar];
         }
         var match = merge_right ? matchOnLeft : matchOnRight;
@@ -3386,7 +3520,9 @@ CSL.Output.Queue.adjust = function (punctInQuote) {
                 var delimChar = parentStrings.delimiter.slice(0, 1);
                 for (var i=parent.blobs.length-2;i>-1;i--) {
                     var childStrings = parent.blobs[i].strings;
-                    childStrings.suffix += delimChar;
+                    if (childStrings.suffix.slice(-1) !== delimChar) {
+                        childStrings.suffix += delimChar;
+                    }
                 }
                 parentStrings.delimiter = parentStrings.delimiter.slice(1);
             }
@@ -3400,20 +3536,28 @@ CSL.Output.Queue.adjust = function (punctInQuote) {
             var childIsNumber = blobIsNumber(child);
             if (i === (parent.blobs.length - 1)) {
                 if (true || !someChildrenAreNumbers) {
-                    if (!parentDecorations || blobHasDescendantQuotes(child)) {
-                        var parentChar = parentStrings.suffix.slice(0, 1);
+                    var parentChar = parentStrings.suffix.slice(0, 1);
+                    var allowMigration = blobHasDescendantQuotes(child);
+                    if (!allowMigration && PUNCT[parentChar]) {
+                        allowMigration = blobHasDescendantMergingPunctuation(parentChar,child);
+                    }
+                    if (allowMigration) {
                         if (PUNCT[parentChar]) {
                             if (!blobEndsInNumber(child)) {
-                                mergeChars(child, 'suffix', parent, 'suffix');
+                                if ("string" === typeof child.blobs) {
+                                    mergeChars(child, 'blobs', parent, 'suffix');
+                                } else {
+                                    mergeChars(child, 'suffix', parent, 'suffix');
+                                }
                                 if (parentStrings.suffix.slice(0,1) === ".") {
                                     childStrings.suffix += parentStrings.suffix.slice(0,1);
                                     parentStrings.suffix = parentStrings.suffix.slice(1);
                                 }
                             }
                         }
-                        if (childStrings.suffix.slice(-1) === " " && parentStrings.suffix.slice(0,1)) {
-                            parentStrings.suffix = parentStrings.suffix.slice(1);
-                        }
+                    }
+                    if (childStrings.suffix.slice(-1) === " " && parentStrings.suffix.slice(0,1) === " ") {
+                        parentStrings.suffix = parentStrings.suffix.slice(1);
                     }
                     if (PUNCT_OR_SPACE[childStrings.suffix.slice(0,1)]) {
                         if ("string" === typeof child.blobs && child.blobs.slice(-1) === childStrings.suffix.slice(0,1)) {
@@ -3448,6 +3592,35 @@ CSL.Output.Queue.adjust = function (punctInQuote) {
             this.downward(parent.blobs[i]);
         }
     };
+    function swapToTheLeft (child) {
+        var childChar = child.strings.suffix.slice(0,1);
+        if ("string" === typeof child.blobs) {
+            while (SWAP_IN[childChar]) {
+                mergeChars(child, 'blobs', child, 'suffix');
+                childChar = child.strings.suffix.slice(0,1);
+            }                                
+        } else {
+            while (SWAP_IN[childChar]) {
+                mergeChars(child.blobs[child.blobs.length-1], 'suffix', child, 'suffix');
+                childChar = child.strings.suffix.slice(0,1);
+            }
+        }
+    }
+    function swapToTheRight (child) {
+        if ("string" === typeof child.blobs) {
+            var childChar = child.blobs.slice(-1);
+            while (SWAP_OUT[childChar]) {
+                mergeChars(child, 'blobs', child, 'suffix', true);
+                childChar = child.blobs.slice(-1);
+            }
+        } else {
+            var childChar = child.blobs[child.blobs.length-1].strings.suffix.slice(-1);
+            while (SWAP_OUT[childChar]) {
+                mergeChars(child.blobs[child.blobs.length-1], 'suffix', child, 'suffix', true);
+                childChar = child.blobs[child.blobs.length-1].strings.suffix.slice(-1);
+            }
+        }
+    }
     function fix (parent) {
         if ("object" !== typeof parent || "object" !== typeof parent.blobs || !parent.blobs.length) {
             return;
@@ -3464,32 +3637,9 @@ CSL.Output.Queue.adjust = function (punctInQuote) {
             }
             if (quoteSwap) {
                 if (punctInQuote) {
-                    var childChar = child.strings.suffix.slice(0,1);
-                    if ("string" === typeof child.blobs) {
-                        while (SWAP_IN[childChar]) {
-                            mergeChars(child, 'blobs', child, 'suffix');
-                            childChar = child.strings.suffix.slice(0,1);
-                        }                                
-                    } else {
-                        while (SWAP_IN[childChar]) {
-                            mergeChars(child.blobs[child.blobs.length-1], 'suffix', child, 'suffix');
-                            childChar = child.strings.suffix.slice(0,1);
-                        }
-                    }
+                    swapToTheLeft(child);
                 } else {
-                    if ("string" === typeof child.blobs) {
-                        var childChar = child.blobs.slice(-1);
-                        while (SWAP_OUT[childChar]) {
-                            mergeChars(child, 'blobs', child, 'suffix', true);
-                            childChar = child.blobs.slice(-1);
-                        }
-                    } else {
-                        var childChar = child.blobs[child.blobs.length-1].strings.suffix.slice(-1);
-                        while (SWAP_OUT[childChar]) {
-                            mergeChars(child.blobs[child.blobs.length-1], 'suffix', child, 'suffix', true);
-                            childChar = child.blobs[child.blobs.length-1].strings.suffix.slice(-1);
-                        }
-                    }
+                    swapToTheRight(child);
                 }
             }
             lastChar = this.fix(parent.blobs[i]);
@@ -3504,6 +3654,7 @@ CSL.Engine.Opt = function () {
     this.has_disambiguate = false;
     this.mode = "html";
     this.dates = {};
+    this.jurisdictions_seen = {};
     this["locale-sort"] = [];
     this["locale-translit"] = [];
     this["locale-translat"] = [];
@@ -3606,6 +3757,18 @@ CSL.Engine.Opt = function () {
     this["parse-names"] = true;
     this.citation_number_slug = false;
     this.trigraph = "Aaaa00:AaAa00:AaAA00:AAAA00";
+    this.nodenames = [];
+    this.gender = {};
+    this['cite-lang-prefs'] = {
+        persons:['orig'],
+        institutions:['orig'],
+        titles:['orig','translat'],
+        journals:['translit'],
+        publishers:['orig'],
+        places:['orig'],
+        number:['translat']
+    };
+    this.has_layout_locale = false;
     this.development_extensions = {};
     this.development_extensions.field_hack = true;
     this.development_extensions.locator_date_and_revision = true;
@@ -3624,24 +3787,14 @@ CSL.Engine.Opt = function () {
     this.development_extensions.thin_non_breaking_space_html_hack = false;
     this.development_extensions.apply_citation_wrapper = false;
     this.development_extensions.main_title_from_short_title = false;
+    this.development_extensions.uppercase_subtitles = false;
     this.development_extensions.normalize_lang_keys_to_lowercase = false;
     this.development_extensions.strict_text_case_locales = false;
     this.development_extensions.rtl_support = false;
     this.development_extensions.strict_page_numbers = false;
     this.development_extensions.expect_and_symbol_form = false;
     this.development_extensions.require_explicit_legal_case_title_short = false;
-    this.nodenames = [];
-    this.gender = {};
-    this['cite-lang-prefs'] = {
-        persons:['orig'],
-        institutions:['orig'],
-        titles:['orig','translat'],
-        journals:['translit'],
-        publishers:['orig'],
-        places:['orig'],
-        number:['translat']
-    };
-    this.has_layout_locale = false;
+    this.development_extensions.spoof_institutional_affiliations = false;
 };
 CSL.Engine.Tmp = function () {
     this.names_max = new CSL.Stack();
@@ -3687,6 +3840,7 @@ CSL.Engine.Tmp = function () {
     };
     this.strip_periods = 0;
     this.shadow_numbers = {};
+    this.authority_stop_last = 0;
 };
 CSL.Engine.Fun = function (state) {
     this.match = new CSL.Util.Match;
@@ -3834,7 +3988,6 @@ CSL.Engine.prototype.processCitationCluster = function (citation, citationsPre,
         if (Item.id) {
             this.transform.loadAbbreviation("default", "hereinafter", Item.id);
         }
-        this.remapSectionVariable([[Item,item]]);
         if (this.opt.development_extensions.locator_date_and_revision) {
             if (item.locator) {
                 item.locator = "" + item.locator;
@@ -3848,12 +4001,16 @@ CSL.Engine.prototype.processCitationCluster = function (citation, citationsPre,
                         item["locator-date"] = this.fun.dateparser.parse(m[1]);
                         raw_locator = raw_locator.slice(m[1].length);
                     }
-                    item["locator-revision"] = raw_locator.replace(/^\s+/, "").replace(/\s+$/, "");
+                    item["locator-extra"] = raw_locator.replace(/^\s+/, "").replace(/\s+$/, "");
                 }
             }
         }
+        if (item.locator) {
+            item.locator = ("" + item.locator).replace(/\s+$/, '');
+        }
+        this.remapSectionVariable([[Item,item]]);
         if (this.opt.development_extensions.locator_label_parse) {
-            if (item.locator && ["bill","gazette","legislation","treaty"].indexOf(Item.type) === -1 && (!item.label || item.label === 'page')) {
+            if (item.locator && ["bill","gazette","legislation","regulation","treaty"].indexOf(Item.type) === -1 && (!item.label || item.label === 'page')) {
                 m = CSL.LOCATOR_LABELS_REGEXP.exec(item.locator);
                 if (m) {
                     item.label = CSL.LOCATOR_LABELS_MAP[m[2]];
@@ -4259,7 +4416,7 @@ CSL.Engine.prototype.makeCitationCluster = function (rawList) {
         }
         Item = this.retrieveItem("" + item.id);
         if (this.opt.development_extensions.locator_label_parse) {
-            if (item.locator && ["bill","gazette","legislation","treaty"].indexOf(Item.type) === -1 && (!item.label || item.label === 'page')) {
+            if (item.locator && ["bill","gazette","legislation","regulation","treaty"].indexOf(Item.type) === -1 && (!item.label || item.label === 'page')) {
                 var m = CSL.LOCATOR_LABELS_REGEXP.exec(item.locator);
                 if (m) {
                     item.label = CSL.LOCATOR_LABELS_MAP[m[2]];
@@ -4267,6 +4424,9 @@ CSL.Engine.prototype.makeCitationCluster = function (rawList) {
                 }
             }
         }
+        if (item.locator) {
+            item.locator = ("" + item.locator).replace(/\s+$/, '');
+        }
         newitem = [Item, item];
         inputList.push(newitem);
     }
@@ -4304,8 +4464,7 @@ CSL.getAmbiguousCite = function (Item, disambig, visualForm) {
         }
     }
     this.tmp.area = "citation";
-    use_parallels = this.parallel.use_parallels;
-    this.parallel.use_parallels = false;
+    this.parallel.use_parallels = (this.parallel.use_parallels === true || this.parallel.use_parallels === null) ? null : false;
     this.tmp.suppress_decorations = true;
     this.tmp.just_looking = true;
     CSL.getCite.call(this, Item, itemSupp);
@@ -4323,7 +4482,7 @@ CSL.getAmbiguousCite = function (Item, disambig, visualForm) {
     ret = this.output.string(this, this.output.queue);
     this.tmp.just_looking = false;
     this.tmp.suppress_decorations = false;
-    this.parallel.use_parallels = use_parallels;
+    this.parallel.use_parallels = this.parallel.use_parallels === null ? true : false;
     this.tmp.group_context.replace(oldTermSiblingLayer, "literal");
     return ret;
 };
@@ -4668,6 +4827,7 @@ CSL.citeStart = function (Item, item) {
     this.tmp.shadow_numbers = {};
     this.setNumberLabels(Item);
     this.tmp.first_name_string = false;
+    this.tmp.authority_stop_last = 0;
     if (this.opt.development_extensions.flip_parentheses_to_braces && item && item.prefix) {
         var openBrace = CSL.checkNestedBraceOpen.exec(item.prefix);
         var closeBrace = CSL.checkNestedBraceClose.exec(item.prefix);
@@ -5123,11 +5283,11 @@ CSL.Engine.prototype.updateItems = function (idList, nosort, rerun_ambigs) {
     var debug = false;
     var oldArea = this.tmp.area;
     this.registry.init(idList);
-    if (rerun_ambigs) {
-        for (var ambig in this.registry.ambigcites) {
-            this.registry.ambigsTouched[ambig] = true;
-        }
-    }
+	if (rerun_ambigs) {
+		for (var ambig in this.registry.ambigcites) {
+			this.registry.ambigsTouched[ambig] = true;
+		}
+	}
     this.registry.dodeletes(this.registry.myhash);
     this.registry.doinserts(this.registry.mylist);
     this.registry.dorefreshes();
@@ -5413,6 +5573,9 @@ CSL.Engine.prototype.localeSet = function (myxml, lang_in, lang_out) {
                         } else {
                             this.locale[lang_out].opts[attrname.slice(1)] = false;
                         }
+                    } else if (attrname === "@jurisdiction-preference") {
+                        var jurisdiction_preference = attributes[attrname].split(/\s*,\s*/);
+                        this.locale[lang_out].opts[attrname.slice(1)] = jurisdiction_preference;
                     } else if (attrname === "@skip-words") {
                         var skip_words = attributes[attrname].split(/\s*,\s*/);
                         this.locale[lang_out].opts[attrname.slice(1)] = skip_words;
@@ -5906,6 +6069,9 @@ CSL.Node.group = {
             if (state.build.substitute_level.value()) {
                 state.build.substitute_level.replace((state.build.substitute_level.value() + 1));
             }
+            if (!this.juris) {
+                target.push(this);
+            }
             func = function (state, Item) {
                 state.output.startTag("group", this);
                 if (state.tmp.group_context.mystack.length) {
@@ -5940,7 +6106,86 @@ CSL.Node.group = {
                 };
                 this.execs.push(func);
             }
-        } else {
+            if (this.juris) {
+                for (var x=0,xlen=target.length;x<xlen;x++) {
+                    var token = target[x];
+                }
+                var choose_start = new CSL.Token("choose", CSL.START);
+                CSL.Node.choose.build.call(choose_start, state, target);
+                var if_start = new CSL.Token("if", CSL.START);
+                func = function (macroName) {
+                    return function (Item) {
+                        if (!state.sys.retrieveStyleModule || !CSL.MODULE_MACROS[macroName] || !Item.jurisdiction) return false;
+                        var jurisdictionList = state.getJurisdictionList(Item.jurisdiction);
+                        if (!state.opt.jurisdictions_seen[jurisdictionList[0]]) {
+                            var res = state.retrieveAllStyleModules(jurisdictionList);
+                            for (var jurisdiction in res) {
+                                var macroCount = 0;
+                                state.juris[jurisdiction] = {};
+                                var myXml = state.sys.xml.makeXml(res[jurisdiction]);
+                                var myNodes = state.sys.xml.getNodesByName(myXml, "law-module");
+                                for (var i=0,ilen=myNodes.length;i<ilen;i++) {
+                                    var myTypes = state.sys.xml.getAttributeValue(myNodes[i],"types");
+                                    if (myTypes) {
+                                        state.juris[jurisdiction].types = {};
+                                        myTypes =  myTypes.split(/\s+/);
+                                        for (var j=0,jlen=myTypes.length;j<jlen;j++) {
+                                            state.juris[jurisdiction].types[myTypes[j]] = true;
+                                        }
+                                    }
+                                }
+                                if (!state.juris[jurisdiction].types) {
+                                    state.juris[jurisdiction].types = CSL.MODULE_TYPES;
+                                }
+                                var myNodes = state.sys.xml.getNodesByName(myXml, "macro");
+                                for (var i=0,ilen=myNodes.length;i<ilen;i++) {
+                                    var myName = state.sys.xml.getAttributeValue(myNodes[i], "name");
+                                    if (!CSL.MODULE_MACROS[myName]) {
+                                        CSL.debug("CSL: skipping non-modular macro name \"" + myName + "\" in module context");
+                                        continue;
+                                    };
+                                    macroCount++;
+                                    state.juris[jurisdiction][myName] = [];
+                                    state.buildTokenLists(myNodes[i], state.juris[jurisdiction][myName]);
+                                    state.configureTokenList(state.juris[jurisdiction][myName]);
+                                }
+                                if (macroCount < Object.keys(state.juris[jurisdiction].types).length) {
+                                    throw "CSL ERROR: Incomplete jurisdiction style module for: " + jurisdiction;
+                                }
+                            }
+                        }
+                        for (var i=0,ilen=jurisdictionList.length;i<ilen;i++) {
+                            var jurisdiction = jurisdictionList[i];
+                            if(state.juris[jurisdiction] && state.juris[jurisdiction].types[Item.type]) {
+                                Item["best-jurisdiction"] = jurisdiction;
+                                return true;
+                            }
+                        }
+                        return false;
+                    };
+                }(this.juris);
+                if_start.tests.push(func);
+                if_start.test = state.fun.match.any(if_start, state, if_start.tests);
+                target.push(if_start);
+                var text_node = new CSL.Token("text", CSL.SINGLETON);
+                func = function (state, Item, item) {
+                    var next = 0;
+                    if (state.juris[Item["best-jurisdiction"]][this.juris]) {
+                        while (next < state.juris[Item["best-jurisdiction"]][this.juris].length) {
+                            next = CSL.tokenExec.call(state, state.juris[Item["best-jurisdiction"]][this.juris][next], Item, item);
+                        }
+                    }
+                }
+                text_node.juris = this.juris;
+                text_node.execs.push(func);
+                target.push(text_node);
+                var if_end = new CSL.Token("if", CSL.END);
+                CSL.Node.if.build.call(if_end, state, target);
+                var else_start = new CSL.Token("else", CSL.START);
+                CSL.Node.else.build.call(else_start, state, target);
+            }
+        }
+        if (this.tokentype === CSL.END) {
             if (state.build["publisher-special"]) {
                 state.build["publisher-special"] = false;
                 if ("string" === typeof state[state.build.root].opt["name-delimiter"]) {
@@ -5961,7 +6206,9 @@ CSL.Node.group = {
                     state.tmp.group_context.value()[1] = true;
                 }
                 if (flag[2] || (flag[0] && !flag[1])) {
-                    state.tmp.group_context.value()[2] = true;
+                    if (!this.isJurisLocatorLabel) {
+                        state.tmp.group_context.value()[2] = true;
+                    }
                     var blobs = state.output.current.value().blobs;
                     var pos = state.output.current.value().blobs.length - 1;
                     if (!state.tmp.just_looking && "undefined" !== typeof flag[6]) {
@@ -5983,9 +6230,17 @@ CSL.Node.group = {
                 }
             };
             this.execs.push(func);
+            if (this.juris) {
+                var else_end = new CSL.Token("else", CSL.END);
+                CSL.Node.else.build.call(else_end, state, target);
+                var choose_end = new CSL.Token("choose", CSL.END);
+                CSL.Node.choose.build.call(choose_end, state, target);
+            }
         }
-        target.push(this);
         if (this.tokentype === CSL.END) {
+            if (!this.juris) {
+                target.push(this);
+            }
             if (state.build.substitute_level.value()) {
                 state.build.substitute_level.replace((state.build.substitute_level.value() - 1));
             }
@@ -6180,6 +6435,7 @@ CSL.Node["institution-part"] = {
 };
 CSL.Node.key = {
     build: function (state, target) {
+        target = state[state.build.root + "_sort"].tokens;
         var func, i, ilen;
         var debug = false;
         var start_key = new CSL.Token("key", CSL.START);
@@ -6293,7 +6549,7 @@ CSL.Node.key = {
         } else { // macro
             var token = new CSL.Token("text", CSL.SINGLETON);
             token.postponed_macro = this.postponed_macro;
-            CSL.expandMacro.call(state, token);
+            CSL.expandMacro.call(state, token, target);
         }
         var end_key = new CSL.Token("key", CSL.END);
         func = function (state, Item) {
@@ -6308,7 +6564,7 @@ CSL.Node.key = {
                 keystring = undefined;
                 state.tmp.empty_date = false;
             }
-            state[state.tmp.area].keys.push(keystring);
+            state[state[state.tmp.area].root + "_sort"].keys.push(keystring);
             state.tmp.value = [];
         };
         end_key.execs.push(func);
@@ -6352,6 +6608,11 @@ CSL.Node.label = {
                     state.parallel.AppendToVariable(item.label);
                     item.section_form_override = this.strings.form;
                 }
+                if (termtxt) {
+                    flag = state.tmp.group_context.value();
+                    flag[0] = true;
+                    state.tmp.group_context.replace(flag);
+                }
                 state.output.append(termtxt, this);
                 if (item && this.strings.term === "locator") {
                     state.parallel.CloseVariable();
@@ -6385,6 +6646,11 @@ CSL.Node.layout = {
     build: function (state, target) {
         var func, prefix_token, suffix_token, tok;
         if (this.tokentype === CSL.START) {
+            if (this.locale_raw) {
+                state.build.current_default_locale = this.locale_raw;
+            } else {
+                state.build.current_default_locale = state.opt["default-locale"];
+            }
             func = function (state, Item, item) {
                 if (state.opt.development_extensions.apply_citation_wrapper
                     && state.sys.wrapCitationEntry
@@ -6454,7 +6720,7 @@ CSL.Node.layout = {
                             sp = " ";
                         }
                         var ignorePredecessor = false;
-                        if (CSL.TERMINAL_PUNCTUATION.slice(0,-1).indexOf(test_char) > -1) {
+                        if (CSL.TERMINAL_PUNCTUATION.slice(0,-1).indexOf(test_char) > -1 && item.prefix.trim().indexOf(" ") > -1) {
                             state.tmp.term_predecessor = false;
                             ignorePredecessor = true;
                         }
@@ -6687,19 +6953,24 @@ CSL.NameOutput.prototype.outputNames = function () {
         var v = variables[i];
         var institution_sets = [];
         var institutions = false;
-        for (var j = 0, jlen = this.institutions[v].length; j < jlen; j += 1) {
-            institution_sets.push(this.joinPersonsAndInstitutions([this.persons[v][j], this.institutions[v][j]]));
-        }
-        if (this.institutions[v].length) {
-            var pos = this.nameset_base + this.variable_offset[v];
-            if (this.freeters[v].length) {
-                pos += 1;
+        var varblob = null;
+        if (!this.state.opt.development_extensions.spoof_institutional_affiliations) {
+            varblob = this._join([this.freeters[v]], "");
+        } else {
+            for (var j = 0, jlen = this.institutions[v].length; j < jlen; j += 1) {
+                institution_sets.push(this.joinPersonsAndInstitutions([this.persons[v][j], this.institutions[v][j]]));
+            }
+            if (this.institutions[v].length) {
+                var pos = this.nameset_base + this.variable_offset[v];
+                if (this.freeters[v].length) {
+                    pos += 1;
+                }
+                institutions = this.joinInstitutionSets(institution_sets, pos);
             }
-            institutions = this.joinInstitutionSets(institution_sets, pos);
+            var varblob = this.joinFreetersAndInstitutionSets([this.freeters[v], institutions]);
         }
-        var varblob = this.joinFreetersAndInstitutionSets([this.freeters[v], institutions]);
         if (varblob) {
-            if (this.state.tmp.area.slice(-5) !== "_sort") {
+            if (!this.state.tmp.extension) {
                 varblob = this._applyLabels(varblob, v);
             }
             blob_list.push(varblob);
@@ -6754,7 +7025,7 @@ CSL.NameOutput.prototype.outputNames = function () {
                 this.state.tmp.done_vars.push("title");
                 this.state.output.append(this.state.transform.abbrevs["default"].classic[author_title], "empty", true);
                 blob = this.state.output.pop();
-                this.state.tmp.name_node.top.blobs.pop();
+				this.state.tmp.name_node.top.blobs.pop();
                 this.state.tmp.name_node.top.blobs.push(blob);
             }
         }
@@ -6789,8 +7060,7 @@ CSL.NameOutput.prototype._applyLabels = function (blob, v) {
         this.state.output.append(blob, "literal", true);
         this.state.output.closeLevel("empty");
         blob = this.state.output.pop();
-    }
-    if (this.label[v].after) {
+    } else if (this.label[v].after) {
         if ("number" === typeof this.label[v].after.strings.plural) {
             plural = this.label[v].after.strings.plural;
         }
@@ -6922,15 +7192,15 @@ CSL.NameOutput.prototype.truncatePersonalNameLists = function () {
                     this._please_chop = chopvar;
                 }
             }
-            for (i = 0, ilen = this.persons[v].length; i < ilen; i += 1) {
-                if (this.persons[v][i].length) {
+            for (var j=0,jlen = this.persons[v].length;j<jlen;j++) {
+                if (this.persons[v][j].length) {
                     if (this._please_chop === v) {
-                        this.persons[v][i] = this.persons[v][i].slice(1);
-                        this.persons_count[v][i] += -1;
+                        this.persons[v][j] = this.persons[v][j].slice(1);
+                        this.persons_count[v][j] += -1;
                         this._please_chop = false;
                         break;
                     } else if (chopvar && !this._please_chop) {
-                        this.freeters[v] = this.persons[v][i].slice(0, 1);
+                        this.freeters[v] = this.persons[v][j].slice(0, 1);
                         this.freeters_count[v] = 1;
                         this.institutions[v] = [];
                         this.persons[v] = [];
@@ -6958,8 +7228,8 @@ CSL.NameOutput.prototype.truncatePersonalNameLists = function () {
         if (this.institutions[v].length) {
             this.nameset_offset += 1;
         }
-        for (i = 0, ilen = this.persons[v].length; i < ilen; i += 1) {
-            if (this.persons[v][i].length) {
+        for (var j=0,jlen=this.persons[v].length;j<jlen;j++) {
+            if (this.persons[v][j].length) {
                 this.nameset_offset += 1;
             }
         }
@@ -6975,7 +7245,8 @@ CSL.NameOutput.prototype._truncateNameList = function (container, variable, inde
     if (this.state[this.state[this.state.tmp.area].root].opt.max_number_of_names 
         && lst.length > 50 
         && lst.length > (this.state[this.state[this.state.tmp.area].root].opt.max_number_of_names + 2)) {
-        lst = lst.slice(0, this.state[this.state[this.state.tmp.area].root].opt.max_number_of_names + 2);
+        var limit = this.state[this.state[this.state.tmp.area].root].opt.max_number_of_names;
+        lst = lst.slice(0, limit+1).concat(lst.slice(-1));
     }
     return lst;
 };
@@ -6999,29 +7270,36 @@ CSL.NameOutput.prototype.divideAndTransliterateNames = function () {
         }
         this._getFreeters(v, values);
         this._getPersonsAndInstitutions(v, values);
-        if (this.name.strings["suppress-min"] === 0) {
-            this.freeters[v] = [];
-            for (j = 0, jlen = this.persons[v].length; j < jlen; j += 1) {
-                this.persons[v][j] = [];
-            }
-        } else if (this.institution.strings["suppress-min"] === 0) {
-            this.institutions[v] = [];
-            this.freeters[v] = this.freeters[v].concat(this.persons[v]);
-            for (j = 0, jlen = this.persons[v].length; j < jlen; j += 1) {
-                for (var k = 0, klen = this.persons[v][j].length; k < klen; k += 1) {
-                    this.freeters[v].push(this.persons[v][j][k]);
+        if (this.state.opt.development_extensions.spoof_institutional_affiliations) {
+            if (this.name.strings["suppress-min"] === 0) {
+                this.freeters[v] = [];
+                for (j = 0, jlen = this.persons[v].length; j < jlen; j += 1) {
+                    this.persons[v][j] = [];
                 }
+            } else if (this.institution.strings["suppress-min"] === 0) {
+                this.institutions[v] = [];
+                this.freeters[v] = this.freeters[v].concat(this.persons[v]);
+                for (j = 0, jlen = this.persons[v].length; j < jlen; j += 1) {
+                    for (var k = 0, klen = this.persons[v][j].length; k < klen; k += 1) {
+                        this.freeters[v].push(this.persons[v][j][k]);
+                    }
+                }
+                this.persons[v] = [];
             }
-            this.persons[v] = [];
         }
     }
 };
 CSL.NameOutput.prototype._normalizeVariableValue = function (Item, variable) {
     var names, name, i, ilen;
-    if ("string" === typeof Item[variable]) {
-        names = [{literal: Item[variable]}];
+    if ("string" === typeof Item[variable] || "number" === typeof Item[variable]) {
+        CSL.debug("name variable \"" + variable + "\" is string or number, not array. Attempting to fix.");
+        names = [{literal: Item[variable] + ""}];
     } else if (!Item[variable]) {
         names = [];
+    } else if ("number" !== typeof Item[variable].length) {
+        CSL.debug("name variable \"" + variable + "\" is object, not array. Attempting to fix.");
+        Item[variable] = [Item[variable]];
+        names = Item[variable].slice();
     } else {
         names = Item[variable].slice();
     }
@@ -7029,14 +7307,24 @@ CSL.NameOutput.prototype._normalizeVariableValue = function (Item, variable) {
 };
 CSL.NameOutput.prototype._getFreeters = function (v, values) {
     this.freeters[v] = [];
-    for (var i = values.length - 1; i > -1; i += -1) {
-        if (this.isPerson(values[i])) {
-            var value = this._checkNickname(values.pop());
-            if (value) {
-                this.freeters[v].push(value);
+    if (this.state.opt.development_extensions.spoof_institutional_affiliations) {
+        for (var i=values.length-1;i>-1;i--) {
+            if (this.isPerson(values[i])) {
+                var value = this._checkNickname(values.pop());
+                if (value) {
+                    this.freeters[v].push(value);
+                }
+            } else {
+                break;
             }
-        } else {
-            break;
+        }
+    } else {
+        for (var i=values.length-1;i>-1;i--) {
+            var value = values.pop();
+            if (this.isPerson(value)) {
+                var value = this._checkNickname(value);
+            }
+            this.freeters[v].push(value);
         }
     }
     this.freeters[v].reverse();
@@ -7047,6 +7335,7 @@ CSL.NameOutput.prototype._getFreeters = function (v, values) {
 CSL.NameOutput.prototype._getPersonsAndInstitutions = function (v, values) {
     this.persons[v] = [];
     this.institutions[v] = [];
+    if (!this.state.opt.development_extensions.spoof_institutional_affiliations) return;
     var persons = [];
     var has_affiliates = false;
     var first = true;
@@ -7097,25 +7386,28 @@ CSL.NameOutput.prototype._checkNickname = function (name) {
     }
     return name;
 };
-CSL.NameOutput.prototype.joinPersons = function (blobs, pos, j) {
+CSL.NameOutput.prototype.joinPersons = function (blobs, pos, j, tokenname) {
     var ret;
+    if (!tokenname) {
+        tokenname = "name";
+    }
     if ("undefined" === typeof j) {
         if (this.etal_spec[pos].freeters === 1) {
-            ret = this._joinEtAl(blobs, "name");
+            ret = this._joinEtAl(blobs, tokenname);
         } else if (this.etal_spec[pos].freeters === 2) {
-            ret = this._joinEllipsis(blobs, "name");
+            ret = this._joinEllipsis(blobs, tokenname);
         } else if (!this.state.tmp.sort_key_flag) {
-            ret = this._joinAnd(blobs, "name");
+            ret = this._joinAnd(blobs, tokenname);
         } else {
             ret = this._join(blobs, " ");
         }
     } else {
         if (this.etal_spec[pos].persons[j] === 1) {
-            ret = this._joinEtAl(blobs, "name");
+            ret = this._joinEtAl(blobs, tokenname);
         } else if (this.etal_spec[pos].persons[j] === 2) {
-            ret = this._joinEllipsis(blobs, "name");
+            ret = this._joinEllipsis(blobs, tokenname);
         } else if (!this.state.tmp.sort_key_flag) {
-            ret = this._joinAnd(blobs, "name");
+            ret = this._joinAnd(blobs, tokenname);
         } else {
             ret = this._join(blobs, " ");
         }
@@ -7200,7 +7492,7 @@ CSL.NameOutput.prototype._join = function (blobs, delimiter, single, multiple, t
             blobs.push(blob);
         }
     }
-    this.state.output.openLevel(this._getToken(tokenname));
+    this.state.output.openLevel();
     if (single && multiple) {
         this.state.output.current.value().strings.delimiter = "";
     }
@@ -7529,10 +7821,10 @@ CSL.NameOutput.prototype.renderAllNames = function () {
         var v = this.variables[i];
         pos = this.nameset_base + i;
         if (this.freeters[v].length) {
-            this.freeters[v] = this._renderPersonalNames(this.freeters[v], pos);
+            this.freeters[v] = this._renderNames(v, this.freeters[v], pos);
         }
         for (var j = 0, jlen = this.institutions[v].length; j < jlen; j += 1) {
-            this.persons[v][j] = this._renderPersonalNames(this.persons[v][j], pos, j);
+            this.persons[v][j] = this._renderNames(v, this.persons[v][j], pos, j);
         }
     }
     this.renderInstitutionNames();
@@ -7552,83 +7844,87 @@ CSL.NameOutput.prototype.renderInstitutionNames = function () {
                 localesets = this.state.opt['cite-lang-prefs'].persons;
             }
             slot = {primary:'locale-orig',secondary:false,tertiary:false};
-            if (localesets) {
-                var slotnames = ["primary", "secondary", "tertiary"];
-                for (var k = 0, klen = slotnames.length; k < klen; k += 1) {
-                    if (localesets.length - 1 <  k) {
-                        break;
-                    }
+	        if (localesets) {
+		        var slotnames = ["primary", "secondary", "tertiary"];
+		        for (var k = 0, klen = slotnames.length; k < klen; k += 1) {
+			        if (localesets.length - 1 <  k) {
+				        break;
+			        }
                     if (localesets[k]) {
-                        slot[slotnames[k]] = 'locale-' + localesets[k];
-                    }
-                }
-            } else {
-                slot.primary = 'locale-translat';
-            }
-            if (this.state.tmp.area !== "bibliography"
-                && !(this.state.tmp.area === "citation"
-                     && this.state.opt.xclass === "note"
-                     && this.item && !this.item.position)) {
-                slot.secondary = false;
-                slot.tertiary = false;
-            }
+			            slot[slotnames[k]] = 'locale-' + localesets[k];
+                    }
+		        }
+	        } else {
+		        slot.primary = 'locale-translat';
+	        }
+	        if (this.state.tmp.area !== "bibliography"
+		        && !(this.state.tmp.area === "citation"
+			         && this.state.opt.xclass === "note"
+			         && this.item && !this.item.position)) {
+		        slot.secondary = false;
+		        slot.tertiary = false;
+	        }
             var res;
             this.setRenderedName(name);
-            res = this.getName(name, slot.primary, true);
-            var primary = res.name;
-            var usedOrig = res.usedOrig;
-            if (primary) {
-                primary = this.fixupInstitution(primary, v, j);
-            }
-            secondary = false;
-            if (slot.secondary) {
-                res = this.getName(name, slot.secondary, false, usedOrig);
-                secondary = res.name;
-                usedOrig = res.usedOrig;
-                if (secondary) {
-                    secondary = this.fixupInstitution(secondary, v, j);
-                }
-            }
-            tertiary = false;
-            if (slot.tertiary) {
-                res = this.getName(name, slot.tertiary, false, usedOrig);
-                tertiary = res.name;
-                if (tertiary) {
-                    tertiary = this.fixupInstitution(tertiary, v, j);
-                }
-            }
-            switch (this.institution.strings["institution-parts"]) {
-            case "short":
-                if (primary["short"].length) {
-                    short_style = this._getShortStyle();
-                    institution = [this._renderOneInstitutionPart(primary["short"], short_style)];
-                } else {
-                    long_style = this._getLongStyle(primary, v, j);
-                    institution = [this._renderOneInstitutionPart(primary["long"], long_style)];
-                }
-                break;
-            case "short-long":
-                long_style = this._getLongStyle(primary, v, j);
-                short_style = this._getShortStyle();
-                institution_short = this._renderOneInstitutionPart(primary["short"], short_style);
-                institution_long = this._composeOneInstitutionPart([primary, secondary, tertiary], slot, long_style);
-                institution = [institution_short, institution_long];
-                break;
-            case "long-short":
-                long_style = this._getLongStyle(primary, v, j);
-                short_style = this._getShortStyle();
-                institution_short = this._renderOneInstitutionPart(primary["short"], short_style);
-                institution_long = this._composeOneInstitutionPart([primary, secondary, tertiary], slot, long_style, true);
-                institution = [institution_long, institution_short];
-                break;
-            default:
-                long_style = this._getLongStyle(primary, v, j);
-                institution = [this._composeOneInstitutionPart([primary, secondary, tertiary], slot, long_style)];
-                break;
-            }
-            this.institutions[v][j] = this._join(institution, "");
+            var institution = this._renderInstitutionName(v, name, slot, j);
+            this.institutions[v][j] = institution;
         }
     }
+}
+CSL.NameOutput.prototype._renderInstitutionName = function (v, name, slot, j) {
+    res = this.getName(name, slot.primary, true);
+    var primary = res.name;
+    var usedOrig = res.usedOrig;
+    if (primary) {
+        primary = this.fixupInstitution(primary, v, j);
+    }
+	secondary = false;
+	if (slot.secondary) {
+        res = this.getName(name, slot.secondary, false, usedOrig);
+        secondary = res.name;
+        usedOrig = res.usedOrig;
+        if (secondary) {
+			secondary = this.fixupInstitution(secondary, v, j);
+        }
+	}
+	tertiary = false;
+	if (slot.tertiary) {
+        res = this.getName(name, slot.tertiary, false, usedOrig);
+        tertiary = res.name;
+        if (tertiary) {
+			tertiary = this.fixupInstitution(tertiary, v, j);
+        }
+	}
+    switch (this.institution.strings["institution-parts"]) {
+    case "short":
+        if (primary["short"].length) {
+            short_style = this._getShortStyle();
+            institution = [this._renderOneInstitutionPart(primary["short"], short_style)];
+        } else {
+            long_style = this._getLongStyle(primary, v, j);
+            institution = [this._renderOneInstitutionPart(primary["long"], long_style)];
+        }
+        break;
+    case "short-long":
+        long_style = this._getLongStyle(primary, v, j);
+        short_style = this._getShortStyle();
+        institution_short = this._renderOneInstitutionPart(primary["short"], short_style);
+        institution_long = this._composeOneInstitutionPart([primary, secondary, tertiary], slot, long_style);
+        institution = [institution_short, institution_long];
+        break;
+    case "long-short":
+        long_style = this._getLongStyle(primary, v, j);
+        short_style = this._getShortStyle();
+        institution_short = this._renderOneInstitutionPart(primary["short"], short_style);
+        institution_long = this._composeOneInstitutionPart([primary, secondary, tertiary], slot, long_style, true);
+        institution = [institution_long, institution_short];
+        break;
+    default:
+        long_style = this._getLongStyle(primary, v, j);
+        institution = [this._composeOneInstitutionPart([primary, secondary, tertiary], slot, long_style)];
+        break;
+    }
+    return this._join(institution, " ");
 };
 CSL.NameOutput.prototype._composeOneInstitutionPart = function (names, slot, style) {
     var primary = false, secondary = false, tertiary = false;
@@ -7699,7 +7995,7 @@ CSL.NameOutput.prototype._renderOneInstitutionPart = function (blobs, style) {
     }
     return this._join(blobs, this.institution.strings["part-separator"]);
 };
-CSL.NameOutput.prototype._renderPersonalNames = function (values, pos, j) {
+CSL.NameOutput.prototype._renderNames = function (v, values, pos, j) {
     var ret = false;
     if (values.length) {
         var names = [];
@@ -7714,73 +8010,82 @@ CSL.NameOutput.prototype._renderPersonalNames = function (values, pos, j) {
                 localesets = this.state.opt['cite-lang-prefs'].persons;
             }
             slot = {primary:'locale-orig',secondary:false,tertiary:false};
-            if (localesets) {
-                var slotnames = ["primary", "secondary", "tertiary"];
-                for (var k = 0, klen = slotnames.length; k < klen; k += 1) {
-                    if (localesets.length - 1 <  k) {
-                        break;
-                    }
-                    slot[slotnames[k]] = 'locale-' + localesets[k];
-                }
-            } else {
-                slot.primary = 'locale-translat';
-            }
-            if (this.state.tmp.sort_key_flag || (this.state.tmp.area !== "bibliography"
-                && !(this.state.tmp.area === "citation"
-                     && this.state.opt.xclass === "note"
-                     && this.item && !this.item.position))) {
-                slot.secondary = false;
-                slot.tertiary = false;
-            }
+	        if (localesets) {
+		        var slotnames = ["primary", "secondary", "tertiary"];
+		        for (var k = 0, klen = slotnames.length; k < klen; k += 1) {
+			        if (localesets.length - 1 <  k) {
+				        break;
+			        }
+			        slot[slotnames[k]] = 'locale-' + localesets[k];
+		        }
+	        } else {
+		        slot.primary = 'locale-translat';
+	        }
+	        if (this.state.tmp.sort_key_flag || (this.state.tmp.area !== "bibliography"
+		        && !(this.state.tmp.area === "citation"
+			         && this.state.opt.xclass === "note"
+			         && this.item && !this.item.position))) {
+		        slot.secondary = false;
+		        slot.tertiary = false;
+	        }
             this.setRenderedName(name);
-            var res = this.getName(name, slot.primary, true);
-            var primary = this._renderOnePersonalName(res.name, pos, i, j);
-            secondary = false;
-            if (slot.secondary) {
-                res = this.getName(name, slot.secondary, false, res.usedOrig);
-                if (res.name) {
-                    secondary = this._renderOnePersonalName(res.name, pos, i, j);
-                }
-            }
-            tertiary = false;
-            if (slot.tertiary) {
-                res = this.getName(name, slot.tertiary, false, res.usedOrig);
-                if (res.name) {
-                    tertiary = this._renderOnePersonalName(res.name, pos, i, j);
-                }
-            }
-            var personblob;
-            if (secondary || tertiary) {
-                this.state.output.openLevel("empty");
-                this.state.output.append(primary);
-                secondary_tok = new CSL.Token();
-                if (slot.secondary) {
-                    secondary_tok.strings.prefix = this.state.opt.citeAffixes.persons[slot.secondary].prefix;
-                    secondary_tok.strings.suffix = this.state.opt.citeAffixes.persons[slot.secondary].suffix;
-                    if (!secondary_tok.strings.prefix) {
-                        secondary_tok.strings.prefix = " ";
-                    }
-                }
-                this.state.output.append(secondary, secondary_tok);
-                tertiary_tok = new CSL.Token();
-                if (slot.tertiary) {
-                    tertiary_tok.strings.prefix = this.state.opt.citeAffixes.persons[slot.tertiary].prefix;
-                    tertiary_tok.strings.suffix = this.state.opt.citeAffixes.persons[slot.tertiary].suffix;
-                    if (!tertiary_tok.strings.prefix) {
-                        tertiary_tok.strings.prefix = " ";
-                    }
-                }
-                this.state.output.append(tertiary, tertiary_tok);
-                this.state.output.closeLevel();
-                personblob = this.state.output.pop();
+            if (!name.literal && !name.isInstitution) {
+                var nameBlob = this._renderPersonalName(v, name, slot, pos, i, j);
+                this.state.output.append(nameBlob, this.name, true);
+                names.push(this.state.output.pop());
             } else {
-                personblob = primary;
+                names.push(this._renderInstitutionName(v, name, slot, j));
             }
-            names.push(personblob);
         }
         ret = this.joinPersons(names, pos, j);
     }
-    return ret;
+    return ret
+}
+CSL.NameOutput.prototype._renderPersonalName = function (v, name, slot, pos, i, j) {
+    var res = this.getName(name, slot.primary, true);
+    var primary = this._renderOnePersonalName(res.name, pos, i, j);
+	secondary = false;
+	if (slot.secondary) {
+        res = this.getName(name, slot.secondary, false, res.usedOrig);
+        if (res.name) {
+			secondary = this._renderOnePersonalName(res.name, pos, i, j);
+        }
+	}
+	tertiary = false;
+	if (slot.tertiary) {
+        res = this.getName(name, slot.tertiary, false, res.usedOrig);
+        if (res.name) {
+			tertiary = this._renderOnePersonalName(res.name, pos, i, j);
+        }
+	}
+    var personblob;
+    if (secondary || tertiary) {
+        this.state.output.openLevel("empty");
+        this.state.output.append(primary);
+        secondary_tok = new CSL.Token();
+        if (slot.secondary) {
+            secondary_tok.strings.prefix = this.state.opt.citeAffixes.persons[slot.secondary].prefix;
+            secondary_tok.strings.suffix = this.state.opt.citeAffixes.persons[slot.secondary].suffix;
+            if (!secondary_tok.strings.prefix) {
+                secondary_tok.strings.prefix = " ";
+            }
+        }
+        this.state.output.append(secondary, secondary_tok);
+        tertiary_tok = new CSL.Token();
+        if (slot.tertiary) {
+            tertiary_tok.strings.prefix = this.state.opt.citeAffixes.persons[slot.tertiary].prefix;
+            tertiary_tok.strings.suffix = this.state.opt.citeAffixes.persons[slot.tertiary].suffix;
+            if (!tertiary_tok.strings.prefix) {
+                tertiary_tok.strings.prefix = " ";
+            }
+        }
+        this.state.output.append(tertiary, tertiary_tok);
+        this.state.output.closeLevel();
+        personblob = this.state.output.pop();
+    } else {
+        personblob = primary;
+    }
+    return personblob;
 };
 CSL.NameOutput.prototype._isRomanesque = function (name) {
     var ret = 2;
@@ -7825,7 +8130,7 @@ CSL.NameOutput.prototype._renderOnePersonalName = function (value, pos, i, j) {
         suffix_sep = " ";
     }
     var romanesque = this._isRomanesque(name);
-    var has_hyphenated_non_dropping_particle = non_dropping_particle && non_dropping_particle.blobs.slice(-1) === "-";
+    var has_hyphenated_non_dropping_particle = (non_dropping_particle && ["\u2019", "\'", "-"].indexOf(non_dropping_particle.blobs.slice(-1)) > -1);
     var blob, merged, first, second;
     if (romanesque === 0) {
         blob = this._join([non_dropping_particle, family, given], "");
@@ -7885,7 +8190,7 @@ CSL.NameOutput.prototype._renderOnePersonalName = function (value, pos, i, j) {
         }
     } else { // plain vanilla
         if (name["dropping-particle"] && name.family && !name["non-dropping-particle"]) {
-            if (["'","\u02bc","\u2019"].indexOf(name["dropping-particle"].slice(-1)) > -1) {
+            if (["'","\u02bc","\u2019","-"].indexOf(name["dropping-particle"].slice(-1)) > -1) {
                 family = this._join([dropping_particle, family], "");
                 dropping_particle = false;
             }
@@ -7945,6 +8250,7 @@ CSL.NameOutput.prototype._normalizeNameInput = function (value) {
         "non-dropping-particle":value["non-dropping-particle"],
         "dropping-particle":value["dropping-particle"],
         "static-ordering":value["static-ordering"],
+        "static-particles":value["static-particles"],
         "reverse-ordering":value["reverse-ordering"],
         "full-form-always": value["full-form-always"],
         "parse-names":value["parse-names"],
@@ -8030,8 +8336,10 @@ CSL.NameOutput.prototype._givenName = function (name, pos, i) {
         }
     }
     var str = this._stripPeriods("given", name.given);
-    if (this.state.output.append(str, this.given_decor, true)) {
-        return this.state.output.pop();
+    var rendered = this.state.output.append(str, this.given_decor, true);
+    if (rendered) {
+        ret = this.state.output.pop();
+	    return ret;
     }
     return false;
 };
@@ -8041,8 +8349,16 @@ CSL.NameOutput.prototype._nameSuffix = function (name) {
         str = CSL.Util.Names.initializeWith(this.state, name.suffix, this.name.strings["initialize-with"], true);
     }
     str = this._stripPeriods("family", str);
-    if (this.state.output.append(str, "empty", true)) {
-        return this.state.output.pop();
+    var toSuffix = '';
+    if (str && str.slice(-1) === '.') {
+	str = str.slice(0, -1);
+	toSuffix = '.';
+    }
+    var rendered = this.state.output.append(str, "empty", true);
+    if (rendered) {
+        ret = this.state.output.pop();
+	ret.strings.suffix = toSuffix + ret.strings.suffix;
+	return ret;
     }
     return false;
 };
@@ -8092,10 +8408,8 @@ CSL.NameOutput.prototype._parseName = function (name) {
         noparse = false;
     }
     if (!name["non-dropping-particle"] && name.family && !noparse && name.given) {
-        m = name.family.match(/^((?:[\'\u2019a-z][ \'\u2019a-z]*[-\s\'\u2019]+|[ABDVL][^ ][-\s]+[a-z]*\s*|[ABDVL][^ ][^ ][-\s]+[a-z]*\s*))/);
-        if (m) {
-            name.family = name.family.slice(m[1].length);
-            name["non-dropping-particle"] = m[1].replace(/\s+$/, "").replace("'", "\u2019");
+        if (!name["static-particles"]) {
+            CSL.parseParticles(name, true);
         }
     }
     if (!name.suffix && name.given) {
@@ -8180,6 +8494,7 @@ CSL.NameOutput.prototype.getName = function (name, slotLocaleset, fallback, stop
         "dropping-particle":name["dropping-particle"],
         suffix:name.suffix,
         "static-ordering":name_params["static-ordering"],
+        "static-particles":name["static-particles"],
         "reverse-ordering":name_params["reverse-ordering"],
         "full-form-always": name_params["full-form-always"],
         "parse-names":name["parse-names"],
@@ -8243,6 +8558,9 @@ CSL.NameOutput.prototype.setRenderedName = function (name) {
     }
 }
 CSL.NameOutput.prototype.fixupInstitution = function (name, varname, listpos) {
+    if (this.state.sys.getHumanForm && "legal_case" === this.Item.type && "authority" === varname) {
+        name.literal = this.state.sys.getHumanForm(this.Item.jurisdiction, name.literal);
+    }
     name = this._splitInstitution(name, varname, listpos);
     if (this.institution.strings["reverse-order"]) {
         name["long"].reverse();
@@ -8305,6 +8623,7 @@ CSL.NameOutput.prototype._splitInstitution = function (value, v, i) {
                 }
                 splitLst = splitLst.replace(/\s*\|\s*/g, "|");
                 splitInstitution = [splitLst];
+                break;
             }
         }
     }
@@ -8315,19 +8634,32 @@ CSL.NameOutput.prototype._splitInstitution = function (value, v, i) {
 CSL.NameOutput.prototype._trimInstitution = function (subunits, v, i) {
     var use_first = false;
     var append_last = false;
-    var stop_last = false;
     var s = subunits.slice();
+    var stop_last = false;
     if (this.institution) {
         if ("undefined" !== typeof this.institution.strings["use-first"]) {
             use_first = this.institution.strings["use-first"];
         }
         if ("undefined" !== typeof this.institution.strings["stop-last"]) {
-            s = s.slice(0, this.institution.strings["stop-last"]);
-            subunits = subunits.slice(0, this.institution.strings["stop-last"]);
+            stop_last = this.institution.strings["stop-last"];
+        } else if ("authority" === v && this.state.tmp.authority_stop_last) {
+            stop_last = this.state.tmp.authority_stop_last;
+        }
+        if (stop_last) {
+            s = s.slice(0, stop_last);
+            subunits = subunits.slice(0, stop_last);
         }
         if ("undefined" !== typeof this.institution.strings["use-last"]) {
             append_last = this.institution.strings["use-last"];
         }
+        if ("authority" === v) {
+            if (stop_last) {
+                this.state.tmp.authority_stop_last = stop_last;
+            }
+            if (append_last)  {
+                this.state.tmp.authority_stop_last += (append_last * -1);
+            }
+        }
     }
     if (false === use_first) {
         if (this.persons[v].length === 0) {
@@ -8347,9 +8679,6 @@ CSL.NameOutput.prototype._trimInstitution = function (subunits, v, i) {
     if (use_first > subunits.length - append_last) {
         use_first = subunits.length - append_last;
     }
-    if (stop_last) {
-        append_last = 0;
-    }
     subunits = subunits.slice(0, use_first);
     s = s.slice(use_first);
     if (append_last) {
@@ -8455,7 +8784,7 @@ CSL.evaluateLabel = function (node, state, Item, item) {
         myterm = node.strings.term;
     }
     var plural = node.strings.plural;
-    if (item && "number" === typeof item.force_pluralism) {
+    if (item && "locator" === node.strings.term && "number" === typeof item.force_pluralism) {
         plural = item.force_pluralism;
     } else if ("number" !== typeof plural) {
         if ("locator" === node.strings.term) {
@@ -8469,7 +8798,7 @@ CSL.evaluateLabel = function (node, state, Item, item) {
                     plural = CSL.evaluateStringPluralism(item.locator);
                 }
             }
-        } else if (["page", "page-first"].indexOf(node.variables[0]) > -1) {
+        } else if (["page", "page-first", "number"].indexOf(node.variables[0]) > -1) {
             state.processNumber(false, Item, myterm, Item.type);
             plural = state.tmp.shadow_numbers[myterm].plural;
             myterm = state.tmp.shadow_numbers[myterm].label;
@@ -8869,12 +9198,12 @@ CSL.Node.number = {
                 var blob;
                 var newstr = "";
                 var rangeType = "page";
-                if (["bill","gazette","legislation","legal_case","treaty"].indexOf(Item.type) > -1
+                if (["bill","gazette","legal_case","legislation","regulation","treaty"].indexOf(Item.type) > -1
                     && varname === "collection-number") {
                     rangeType = "year";
                 }
                 if (((varname === "number" 
-                      && ["bill","gazette","legislation","treaty"].indexOf(Item.type) > -1)
+                      && ["bill","gazette","legislation","regulation","treaty"].indexOf(Item.type) > -1)
                      || state.opt[rangeType + "-range-format"]) 
                     && !this.strings.prefix && !this.strings.suffix
                     && !this.strings.form) {
@@ -8884,7 +9213,7 @@ CSL.Node.number = {
                 }
                 if (newstr && !newstr.match(/^[\-.\u20130-9]+$/)) {
                     if (varname === "number" 
-                        && ["bill","gazette","legislation","treaty"].indexOf(Item.type) > -1) {
+                        && ["bill","gazette","legislation","regulation","treaty"].indexOf(Item.type) > -1) {
                         var firstword = newstr.split(/\s/)[0];
                         if (firstword) {
                             newlst = [];
@@ -8996,7 +9325,18 @@ CSL.Node.text = {
     build: function (state, target) {
         var variable, func, form, plural, id, num, number, formatter, firstoutput, specialdelimiter, label, myname, names, name, year, suffix, term, dp, len, pos, n, m, value, flag;
         if (this.postponed_macro) {
-            return CSL.expandMacro.call(state, this);
+            var group_start = CSL.Util.cloneToken(this);
+            group_start.name = "group";
+            group_start.tokentype = CSL.START;
+            CSL.Node.group.build.call(group_start, state, target);
+            CSL.expandMacro.call(state, this, target);
+            var group_end = CSL.Util.cloneToken(this);
+            group_end.name = "group";
+            group_end.tokentype = CSL.END;
+            if (this.postponed_macro === 'juris-locator-label') {
+                group_end.isJurisLocatorLabel = true;
+            }
+            CSL.Node.group.build.call(group_end, state, target);
         } else {
             CSL.Util.substituteStart.call(this, state, target);
             if (!this.variables_real) {
@@ -9172,7 +9512,7 @@ CSL.Node.text = {
                         } else {
                             transfall = true;
                             abbrfall = true;
-                        }
+						}
                         func = state.transform.getOutputFunction(this.variables, abbrevfam, abbrfall, altvar, transfall);
                     } else {
                         if (CSL.CITE_FIELDS.indexOf(this.variables_real[0]) > -1) {
@@ -9182,8 +9522,8 @@ CSL.Node.text = {
                                     value = value.replace(/([^\\])--*/g,"$1"+state.getTerm("page-range-delimiter"));
                                     value = value.replace(/\\-/g,"-");
                                     state.output.append(value, this, false, false, true);
-                                    if (this.variables[0] === "locator-revision") { 
-                                        state.tmp.done_vars.push("locator-revision");
+                                    if (this.variables[0] === "locator-extra") { 
+                                        state.tmp.done_vars.push("locator-extra");
                                     }
                                 }
                             };
@@ -9326,7 +9666,7 @@ CSL.Attributes["@is-numeric"] = function (state, arg, joiner) {
     var maketest = function(variable) {
         return function (Item, item) {
             var myitem = Item;
-            if (["locator","locator-revision"].indexOf(variable) > -1) {
+            if (["locator","locator-extra"].indexOf(variable) > -1) {
                 myitem = item;
             }
             if ("undefined" === typeof myitem) {
@@ -9339,7 +9679,7 @@ CSL.Attributes["@is-numeric"] = function (state, arg, joiner) {
                 if (myitem[variable] && state.tmp.shadow_numbers[variable].numeric) {
                     return true;
                 }
-            } else if (["title", "locator-revision","version"].indexOf(variable) > -1) {
+            } else if (["title", "locator-extra","version"].indexOf(variable) > -1) {
                 if (myitem[variable]) {
                     if (myitem[variable].slice(-1) === "" + parseInt(myitem[variable].slice(-1), 10)) {
                         return true;
@@ -9395,7 +9735,7 @@ CSL.Attributes["@locator"] = function (state, arg) {
 CSL.Attributes["@position"] = function (state, arg) {
     var tryposition;
     state.opt.update_mode = CSL.POSITION;
-    state.parallel.use_parallels = true;
+    state.parallel.use_parallels = null;
     var trypositions = arg.split(/\s+/);
     var maketest = function(tryposition) {
         return function (Item, item) {
@@ -9435,6 +9775,13 @@ CSL.Attributes["@position"] = function (state, arg) {
                 }
                 return false;
             });
+        } else if ("far-note" === tryposition) {
+            this.tests.push(function (Item, item) {
+                if (item && item.position == CSL.POSITION_SUBSEQUENT && !item["near-note"]) {
+                    return true;
+                }
+                return false;
+            });
         } else {
             this.tests.push(maketest(tryposition));
         }
@@ -9466,17 +9813,17 @@ CSL.Attributes["@variable"] = function (state, arg) {
         this.strings.term = this.variables[0];
     } else if (["names", "date", "text", "number"].indexOf(this.name) > -1) {
         func = function (state, Item, item) {
-            variables = this.variables_real.slice();
             for (var i = this.variables.length - 1; i > -1; i += -1) {
                 this.variables.pop();
             }
-            len = variables.length;
-            for (pos = 0; pos < len; pos += 1) {
-                if (state.tmp.done_vars.indexOf(variables[pos]) === -1 && !(item && Item.type === "legal_case" && item["suppress-author"] && variables[pos] === "title")) {
-                    this.variables.push(variables[pos]);
+            for (var i=0,ilen=this.variables_real.length;i<ilen;i++) {
+                if (state.tmp.done_vars.indexOf(this.variables_real[i]) === -1 
+                    && !(item && Item.type === "legal_case" && item["suppress-author"] && this.variables_real[i] === "title")
+                   ) {
+                    this.variables.push(this.variables_real[i]);
                 }
                 if (state.tmp.can_block_substitute) {
-                    state.tmp.done_vars.push(variables[pos]);
+                    state.tmp.done_vars.push(this.variables_real[i]);
                 }
             }
         };
@@ -9484,9 +9831,8 @@ CSL.Attributes["@variable"] = function (state, arg) {
         func = function (state, Item, item) {
             var mydate;
             output = false;
-            len = this.variables.length;
-            for (pos = 0; pos < len; pos += 1) {
-                variable = this.variables[pos];
+            for (var i=0,ilen=this.variables.length;i<ilen;i++) {
+                var variable = this.variables[i];
                 if (variable === "authority"
                     && "string" === typeof Item[variable]
                     && "names" === this.name) {
@@ -9542,8 +9888,8 @@ CSL.Attributes["@variable"] = function (state, arg) {
                         output = true;
                     }
                     break;
-                } else if ("locator-revision" === variable) {
-                    if (item && item["locator-revision"]) {
+                } else if ("locator-extra" === variable) {
+                    if (item && item["locator-extra"]) {
                         output = true;
                     }
                     break;
@@ -9579,27 +9925,30 @@ CSL.Attributes["@variable"] = function (state, arg) {
             }
             flag = state.tmp.group_context.value();
             if (output) {
-                if (variable !== "citation-number" || state.tmp.area !== "bibliography") {
-                    state.tmp.cite_renders_content = true;
-                }
-                flag[2] = true;
-                state.tmp.group_context.replace(flag);
-                if (state.tmp.can_substitute.value() 
-                    && state.tmp.area === "bibliography"
-                    && "string" === typeof Item[variable]) {
-                    state.tmp.rendered_name.push(Item[variable]);
+                for (var i=0,ilen=this.variables_real.length;i<ilen;i++) {
+                    var variable = this.variables_real[i];
+                    if (variable !== "citation-number" || state.tmp.area !== "bibliography") {
+                        state.tmp.cite_renders_content = true;
+                    }
+                    flag[2] = true;
+                    if (state.tmp.can_substitute.value() 
+                        && state.tmp.area === "bibliography"
+                        && "string" === typeof Item[variable]) {
+                        state.tmp.rendered_name.push(Item[variable]);
+                    }
                 }
                 state.tmp.can_substitute.replace(false,  CSL.LITERAL);
             } else {
                 flag[1] = true;
             }
+            state.tmp.group_context.replace(flag);
         };
         this.execs.push(func);
     } else if (["if",  "else-if", "condition"].indexOf(this.name) > -1) {
         var maketest = function (variable) {
             return function(Item,item){
                 var myitem = Item;
-                if (item && ["locator", "locator-revision", "first-reference-note-number", "locator-date"].indexOf(variable) > -1) {
+                if (item && ["locator", "locator-extra", "first-reference-note-number", "locator-date"].indexOf(variable) > -1) {
                     myitem = item;
                 }
                 if (variable === "hereinafter" && state.sys.getAbbreviation && myitem.id) {
@@ -9650,23 +9999,48 @@ CSL.Attributes["@page"] = function (state, arg) {
         this.tests.push(maketest(trylabels[i]));
     }
 };
+CSL.Attributes["@number"] = function (state, arg) {
+    var trylabels = arg.replace("sub verbo", "sub-verbo");
+    trylabels = trylabels.split(/\s+/);
+    var maketest = function(trylabel) {
+        return function (Item, item) {
+            var label;
+            state.processNumber(false, Item, "number", Item.type);
+            if (!state.tmp.shadow_numbers.number.label) {
+                label = "number";
+            } else if (state.tmp.shadow_numbers.number.label === "sub verbo") {
+                label = "sub-verbo";
+            } else {
+                label = state.tmp.shadow_numbers.number.label;
+            }
+            if (trylabel === label) {
+                return true;
+            } else {
+                return false;
+            }
+        }
+    }
+    for (var i=0,ilen=trylabels.length;i<ilen;i+=1) {
+        this.tests.push(maketest(trylabels[i]));
+    }
+};
 CSL.Attributes["@jurisdiction"] = function (state, arg) {
     var tryjurisdictions = arg.split(/\s+/);
     for (var i=0,ilen=tryjurisdictions.length;i<ilen;i+=1) {
-        tryjurisdictions[i] = tryjurisdictions[i].split(";");
+        tryjurisdictions[i] = tryjurisdictions[i].split(":");
     }
     var maketests = function (tryjurisdiction) {
         return function(Item,item){
             if (!Item.jurisdiction) {
                 return false;
             }
-            var jurisdictions = Item.jurisdiction.split(";");
+            var jurisdictions = Item.jurisdiction.split(":");
             for (var i=0,ilen=jurisdictions.length;i<ilen;i+=1) {
-                jurisdictions[i] = jurisdictions[i].split(";");
+                jurisdictions[i] = jurisdictions[i].split(":");
             }
             for (i=tryjurisdiction.length;i>0;i+=-1) {
-                var tryjurisdictionStr = tryjurisdiction.slice(0,i).join(";");
-                var jurisdiction = jurisdictions.slice(0,i).join(";");
+                var tryjurisdictionStr = tryjurisdiction.slice(0,i).join(":");
+                var jurisdiction = jurisdictions.slice(0,i).join(":");
                 if (tryjurisdictionStr !== jurisdiction) {
                     return false;
                 }
@@ -9681,11 +10055,11 @@ CSL.Attributes["@jurisdiction"] = function (state, arg) {
 };
 CSL.Attributes["@context"] = function (state, arg) {
     var func = function (Item, item) {
-        var area = state.tmp.area.slice(0, arg.length);
-        if (area === arg) {
-            return true;
-        }
-        return false;
+		var area = state.tmp.area.slice(0, arg.length);
+		if (area === arg) {
+			return true;
+		}
+		return false;
     };
     this.tests.push(func);
 };
@@ -9742,7 +10116,7 @@ CSL.Attributes["@subjurisdictions"] = function (state, arg) {
     var func = function (Item, item) {
         var subjurisdictions = 0;
         if (Item.jurisdiction) {
-            subjurisdictions = Item.jurisdiction.split(";").length;
+            subjurisdictions = Item.jurisdiction.split(":").length;
         }
         if (subjurisdictions) {
             subjurisdictions += -1;
@@ -9762,7 +10136,8 @@ CSL.Attributes["@is-plural"] = function (state, arg) {
             var institutions = 0;
             var last_is_person = false;
             for (var i = 0, ilen = nameList.length; i < ilen; i += 1) {
-                if (nameList[i].isInstitution && (nameList[i].literal || (nameList[i].family && !nameList[i].given))) {
+                if (state.opt.development_extensions.spoof_institutional_affiliations
+                    && (nameList[i].literal || (nameList[i].isInstitution && nameList[i].family && !nameList[i].given))) {
                     institutions += 1;
                     last_is_person = false;
                 } else {
@@ -9848,6 +10223,22 @@ CSL.Attributes["@locale"] = function (state, arg) {
         this.tests.push(maketest(locale_list,locale_default,locale_bares));
     }
 };
+CSL.Attributes["@authority-residue"] = function (state, arg) {
+    var maketest = function () {
+        var succeed = (arg === "true") ? true : false;
+        return function(Item, item) {
+            if (!Item.authority || !Item.authority[0] || !Item.authority[0].family) return !succeed;
+            var varLen = Item.authority[0].family.split("|").length;
+            var stopLast = state.tmp.authority_stop_last;
+            if ((varLen + stopLast) > 0) {
+                return succeed;
+            } else {
+                return !succeed;
+            }
+        }
+    }
+    this.tests.push(maketest());
+}
 CSL.Attributes["@locale-internal"] = function (state, arg) {
     var func, ret, len, pos, variable, myitem, langspec, lang, lst, i, ilen, fallback;
         lst = arg.split(/\s+/);
@@ -9943,6 +10334,9 @@ CSL.Attributes["@value"] = function (state, arg) {
 CSL.Attributes["@name"] = function (state, arg) {
     this.strings.name = arg;
 };
+CSL.Attributes["@alternative-macro"] = function (state, arg) {
+    this.alt_macro = arg;
+};
 CSL.Attributes["@form"] = function (state, arg) {
     this.strings.form = arg;
 };
@@ -9991,8 +10385,8 @@ CSL.Attributes["@match"] = function (state, arg) {
 };
 CSL.Attributes["@names-min"] = function (state, arg) {
     var val = parseInt(arg, 10);
-    if (state[state.tmp.area].opt.max_number_of_names < val) {
-        state[state.tmp.area].opt.max_number_of_names = val;
+    if (state[state.build.area].opt.max_number_of_names < val) {
+        state[state.build.area].opt.max_number_of_names = val;
     }
     this.strings["et-al-min"] = val;
 };
@@ -10020,34 +10414,6 @@ CSL.Attributes["@plural"] = function (state, arg) {
         this.strings.plural = false;
     }
 };
-CSL.Attributes["@number"] = function (state, arg) {
-    var func;
-    var trylabels = arg.replace("sub verbo", "sub-verbo");
-    trylabels = trylabels.split(/\s+/);
-    if (["if",  "else-if"].indexOf(this.name) > -1) {
-        func = function (state, Item, item) {
-            var ret = [];
-            var label;
-            state.processNumber(false, Item, "number", Item.type);
-            if (!state.tmp.shadow_numbers.number.label) {
-                label = "number";
-            } else if (state.tmp.shadow_numbers.number.label === "sub verbo") {
-                label = "sub-verbo";
-            } else {
-                label = state.tmp.shadow_numbers.number.label;
-            }
-            for (var i = 0, ilen = trylabels.length; i < ilen; i += 1) {
-                if (trylabels[i] === label) {
-                    ret.push(true);
-                } else {
-                    ret.push(false);
-                }
-            }
-            return ret;
-        };
-        this.tests.push(func);
-    }
-};
 CSL.Attributes["@has-publisher-and-publisher-place"] = function (state, arg) {
     this.strings["has-publisher-and-publisher-place"] = true;
 };
@@ -10094,8 +10460,8 @@ CSL.Attributes["@name-delimiter"] = function (state, arg) {
 };
 CSL.Attributes["@et-al-min"] = function (state, arg) {
     var val = parseInt(arg, 10);
-    if (state[state.tmp.area].opt.max_number_of_names < val) {
-        state[state.tmp.area].opt.max_number_of_names = val;
+    if (state[state.build.area].opt.max_number_of_names < val) {
+        state[state.build.area].opt.max_number_of_names = val;
     }
     state.setOpt(this, "et-al-min", val);
 };
@@ -10111,8 +10477,8 @@ CSL.Attributes["@et-al-use-last"] = function (state, arg) {
 };
 CSL.Attributes["@et-al-subsequent-min"] = function (state, arg) {
     var val = parseInt(arg, 10);
-    if (state[state.tmp.area].opt.max_number_of_names < val) {
-        state[state.tmp.area].opt.max_number_of_names = val;
+    if (state[state.build.area].opt.max_number_of_names < val) {
+        state[state.build.area].opt.max_number_of_names = val;
     }
     state.setOpt(this, "et-al-subsequent-min", val);
 };
@@ -10384,8 +10750,12 @@ CSL.Parallel.prototype.StartCite = function (Item, item, prevItemID) {
         var basics_ok = true;
         var last_cite = this.sets.value().slice(-1)[0];
         if (last_cite && last_cite.Item) {
+            var lastJuris = last_cite.Item.jurisdiction ? last_cite.Item.jurisdiction.split(":")[0] : "";
+            var thisJuris = Item.jurisdiction ? Item.jurisdiction.split(":")[0] : "";
             if (last_cite.Item.title !== Item.title) {
                 basics_ok = false;
+            } else if (lastJuris !== thisJuris) {
+                basics_ok = false;
             } else if (last_cite.Item.type !== Item.type) {
                 basics_ok = false;
             } else if (["article-journal","article-magazine"].indexOf(Item.type) > -1) {
@@ -10877,6 +11247,13 @@ CSL.Transform = function (state) {
         if (["archive"].indexOf(myabbrev_family) > -1) {
             myabbrev_family = "collection-title";
         }
+        if (variable === "jurisdiction" && basevalue && state.sys.getHumanForm) {
+            var jcode = basevalue;
+            basevalue = state.sys.getHumanForm(basevalue);
+            if (state.sys.suppressJurisdictions) {
+                basevalue = state.sys.suppressJurisdictions(jcode,basevalue);
+            }
+        }
         value = "";
         if (state.sys.getAbbreviation) {
             var jurisdiction = state.transform.loadAbbreviation(Item.jurisdiction, myabbrev_family, basevalue, Item.type, noHints);
@@ -10894,9 +11271,9 @@ CSL.Transform = function (state) {
         if (!value) {
             value = basevalue;
         }
-        if (value && value.slice(0, 10) === "!here>>>") {
-            if (variable === "jurisdiction" && ["treaty", "patent"].indexOf(variable) > -1) {
-                value = value.slice(10);
+        if (value && value.match(/^\!(?:[^>]+,)*here(?:,[^>]+)*>>>/)) {
+            if (variable === "jurisdiction" && ["treaty", "patent"].indexOf(Item.type) > -1) {
+                value = value.replace(/^\![^>]*>>>\s*/, "");
             } else {
                 value = false;
             }
@@ -10978,11 +11355,12 @@ CSL.Transform = function (state) {
         if (state.sys.getAbbreviation) {
             var tryList = ['default'];
             if (jurisdiction !== 'default') {
-                var workLst = jurisdiction.split(/\s*;\s*/);
+                var workLst = jurisdiction.split(":");
                 for (var i=0, ilen=workLst.length; i < ilen; i += 1) {
-                    tryList.push(workLst.slice(0,i+1).join(';'));
+                    tryList.push(workLst.slice(0,i+1).join(":"));
                 }
             }
+            var found = false;
             for (var i=tryList.length - 1; i > -1; i += -1) {
                 if (!state.transform.abbrevs[tryList[i]]) {
                     state.transform.abbrevs[tryList[i]] = new state.sys.AbbreviationSegments();
@@ -10990,11 +11368,11 @@ CSL.Transform = function (state) {
                 if (!state.transform.abbrevs[tryList[i]][category][orig]) {
                     state.sys.getAbbreviation(state.opt.styleID, state.transform.abbrevs, tryList[i], category, orig, itemType, noHints);
                 }
-                if (state.transform.abbrevs[tryList[i]][category][orig]) {
+                if (!found && state.transform.abbrevs[tryList[i]][category][orig]) {
                     if (i < tryList.length) {
                         state.transform.abbrevs[jurisdiction][category][orig] = state.transform.abbrevs[tryList[i]][category][orig];
                     }
-                    break;
+                    found = true;
                 }
             }
         }
@@ -11035,12 +11413,6 @@ CSL.Transform = function (state) {
             if (!variables[0] || (!Item[variables[0]] && !Item[alternative_varname])) {
                 return null;
             }
-            if (state.opt.suppressJurisdictions
-                && variables[0] === "jurisdiction" 
-                && state.opt.suppressJurisdictions[Item.jurisdiction]
-                && ["legal_case","gazette","regulation","legislation"].indexOf(Item.type) > -1) {
-                return null;
-            }
             var slot = {primary:false, secondary:false, tertiary:false};
             if (state.tmp.area.slice(-5) === "_sort") {
                 slot.primary = 'locale-sort';
@@ -11443,7 +11815,7 @@ CSL.dateAsSortKey = function (state, Item, isMacro) {
     var dp, elem, value, e, yr, prefix, i, ilen, num;
     var variable = this.variables[0];
     var macroFlag = "empty";
-    if (isMacro) {
+    if (isMacro && state.tmp.extension) {
         macroFlag = "macro-with-date";
     }
     dp = Item[variable];
@@ -11552,14 +11924,14 @@ CSL.Util.Names.initializeWith = function (state, name, terminator, normalizeOnly
     if (!name) {
         return "";
     }
+    if (!terminator) {
+        terminator = "";
+    }
     if (["Lord", "Lady"].indexOf(name) > -1
         || (!name.match(CSL.STARTSWITH_ROMANESQUE_REGEXP)
             && !terminator.match("%s"))) {
         return name;
     }
-    if (!terminator) {
-        terminator = "";
-    }
     var namelist = name;
     if (state.opt["initialize-with-hyphen"] === false) {
         namelist = namelist.replace(/\-/g, " ");
@@ -12328,15 +12700,15 @@ CSL.Engine.prototype.processNumber = function (node, ItemObject, variable, type)
             }
         }
         if ("locator" === variable
-            && ["bill","gazette","legislation","treaty"].indexOf(type) > -1) {
+            && ["bill","gazette","legislation","regulation","treaty"].indexOf(type) > -1) {
             num = num.split(CSL.STATUTE_SUBDIV_PLAIN_REGEX)[0];
         }
         var rangeType = "page";
-        if (["bill","gazette","legislation","legal_case","treaty"].indexOf(type) > -1
+        if (["bill","gazette","legislation","legal_case","regulation","treaty"].indexOf(type) > -1
             && variable === "collection-number") {
             rangeType = "year";
         }
-        if (["page", "page-first"].indexOf(variable) > -1) {
+        if (["page", "page-first", "number"].indexOf(variable) > -1) {
             var m = num.split(" ")[0].match(CSL.STATUTE_SUBDIV_GROUPED_REGEX);
             if (m){
                 if (this.opt.development_extensions.static_statute_locator) {
@@ -12462,7 +12834,8 @@ CSL.Util.PageRangeMangler.getFunction = function (state, rangeType) {
     listify = function (str) {
         var m, lst, ret;
         var hyphens = "\\s+\\-\\s+";
-        var delimRex = new RegExp("([^\\\\])[" + range_delimiter + "\\u2013]", "g");
+        var this_range_delimiter = range_delimiter === "-" ? "" : range_delimiter;
+        var delimRex = new RegExp("([^\\\\])[-" + this_range_delimiter + "\\u2013]", "g");
         str = str.replace(delimRex, "$1 - ").replace(/\s+-\s+/g, " - ");
         var rexm = new RegExp("([a-zA-Z]*[0-9]+" + hyphens + "[a-zA-Z]*[0-9]+)", "g");
         var rexlst = new RegExp("[a-zA-Z]*[0-9]+" + hyphens + "[a-zA-Z]*[0-9]+");
@@ -12558,8 +12931,8 @@ CSL.Util.PageRangeMangler.getFunction = function (state, rangeType) {
     };
     var sniff = function (str, func, minchars, isyear) {
         var ret;
-        str = "" + str;
-        var lst = expand(str);
+		str = "" + str;
+		var lst = expand(str);
         var ret = func(lst, minchars, isyear);
         return ret;
     }
@@ -12980,11 +13353,11 @@ CSL.Output.Formatters["capitalize-all"] = function (state, string) {
     var strings = str.string.split(" ");
     for (var i = 0, ilen = strings.length; i < ilen; i += 1) {
         if (strings[i].length > 1) {
-            if (state.opt.development_extensions.allow_force_lowercase) {
-                strings[i] = strings[i].slice(0, 1).toUpperCase() + strings[i].substr(1).toLowerCase();
-            } else {
-                strings[i] = strings[i].slice(0, 1).toUpperCase() + strings[i].substr(1);
-            }
+			if (state.opt.development_extensions.allow_force_lowercase) {
+				strings[i] = strings[i].slice(0, 1).toUpperCase() + strings[i].substr(1).toLowerCase();
+			} else {
+				strings[i] = strings[i].slice(0, 1).toUpperCase() + strings[i].substr(1);
+			}
         } else if (strings[i].length === 1) {
             strings[i] = strings[i].toUpperCase();
         }
@@ -13000,7 +13373,7 @@ CSL.Output.Formatters.title = function (state, string) {
     }
     var doppel = CSL.Output.Formatters.doppelString(string, CSL.TAG_ESCAPE);
     function capitalise (word) {
-        var m = word.match(/([:?!]+\s+|-|^)(.)(.*)/);
+        var m = word.match(/([:?!]+\s+|-|^)([a-zA-Z])(.*)/);
         if (m) {
             return m[1] + m[2].toUpperCase() + m[3];
         }
@@ -13149,7 +13522,7 @@ CSL.Output.Formats.prototype.html = {
     "@quotes/false": false,
     "@cite/entry": function (state, str) {
         return state.sys.wrapCitationEntry(str, this.item_id, this.locator_txt, this.suffix_txt);
-    },
+	},
     "@bibliography/entry": function (state, str) {
         var insert = "";
         if (state.sys.embedBibliographyEntry) {
@@ -13239,8 +13612,8 @@ CSL.Output.Formats.prototype.text = {
     },
     "@quotes/false": false,
     "@cite/entry": function (state, str) {
-        return state.sys.wrapCitationEntry(str, this.item_id, this.locator_txt, this.suffix_txt);
-    },
+		return state.sys.wrapCitationEntry(str, this.item_id, this.locator_txt, this.suffix_txt);
+	},
     "@bibliography/entry": function (state, str) {
         return str+"\n";
     },
@@ -13315,10 +13688,10 @@ CSL.Output.Formats.prototype.rtf = {
     "@display/block": "\\line{}%%STRING%%\\line\r\n",
     "@cite/entry": function (state, str) {
         return str;
-    },
+	},
     "@cite/entry": function (state, str) {
-        return state.sys.wrapCitationEntry(str, this.item_id, this.locator_txt, this.suffix_txt);
-    },
+		return state.sys.wrapCitationEntry(str, this.item_id, this.locator_txt, this.suffix_txt);
+	},
     "@bibliography/entry": function(state,str){
         return str;
     },
@@ -13326,10 +13699,10 @@ CSL.Output.Formats.prototype.rtf = {
         return str+"\\tab ";
     },
     "@display/right-inline": function (state, str) {
-        return str+"\n";
+        return str+"\\line\r\n";
     },
     "@display/indent": function (state, str) {
-        return "\n\\tab "+str;
+        return "\n\\tab "+str+"\\line\r\n";
     },
     "@showid/true": function (state, str, cslid) {
         if (!state.tmp.just_looking && ! state.tmp.suppress_decorations) {
@@ -13710,12 +14083,11 @@ CSL.getSortKeys = function (Item, key_type) {
     this.tmp.extension = "_sort";
     this.tmp.disambig_override = true;
     this.tmp.disambig_request = false;
-    use_parallels = this.parallel.use_parallels;
-    this.parallel.use_parallels = false;
+    this.parallel.use_parallels = (this.parallel.use_parallels === true || this.parallel.use_parallels === null) ? null : false;
     this.tmp.suppress_decorations = true;
     CSL.getCite.call(this, Item);
     this.tmp.suppress_decorations = false;
-    this.parallel.use_parallels = use_parallels;
+    this.parallel.use_parallels = this.parallel.use_parallels === null ? true : false;
     this.tmp.disambig_override = false;
     len = this[key_type].keys.length;
     for (pos = 0; pos < len; pos += 1) {
@@ -14099,16 +14471,16 @@ CSL.Disambiguation.prototype.disYears = function () {
     tokens = [];
     var base = this.lists[this.listpos][0];
     if (this.clashes[1]) {
-        for (var i = 0, ilen = this.state.registry.mylist.length; i < ilen; i += 1) {
-            var origid = this.state.registry.mylist[i];
-            for (var j = 0, jlen = this.lists[this.listpos][1].length; j < jlen; j += 1) {
-                var token = this.lists[this.listpos][1][j];
-                if (token.id == origid) {
-                    tokens.push(this.registry[token.id]);
-                    break;
-                }
-            }
-        }
+		for (var i = 0, ilen = this.state.registry.mylist.length; i < ilen; i += 1) {
+			var origid = this.state.registry.mylist[i];
+			for (var j = 0, jlen = this.lists[this.listpos][1].length; j < jlen; j += 1) {
+				var token = this.lists[this.listpos][1][j];
+				if (token.id == origid) {
+					tokens.push(this.registry[token.id]);
+					break;
+				}
+			}
+		}
     }
     tokens.sort(this.state.registry.sorter.compareKeys);
     for (pos = 0, len = tokens.length; pos < len; pos += 1) {
@@ -14320,3 +14692,292 @@ CSL.Disambiguation.prototype.captureStepToBase = function() {
     }
     this.betterbase.names[this.gnameset] = this.base.names[this.gnameset];
 };
+CSL.Engine.prototype.getJurisdictionList = function (jurisdiction) {
+    var jurisdictionList = [];
+    var jurisdictionElems = jurisdiction.split(":");
+    for (var j=jurisdictionElems.length;j>0;j--) {
+        jurisdictionList.push(jurisdictionElems.slice(0,j).join(":"));
+    }
+    if (jurisdictionList.indexOf("us") === -1) {
+        jurisdictionList.push("us");
+    }
+    return jurisdictionList;
+}
+CSL.Engine.prototype.retrieveAllStyleModules = function (jurisdictionList) {
+    var ret = {};
+    var preferences = this.locale[this.opt.lang].opts["jurisdiction-preference"];
+    preferences = preferences ? preferences : [];
+    preferences = [null].concat(preferences);
+    for (var i=preferences.length-1;i>-1;i--) {
+        var preference = preferences[i];
+        for (var j=0,jlen=jurisdictionList.length;j<jlen;j++) {
+            var jurisdiction = jurisdictionList[j];
+            if (this.opt.jurisdictions_seen[jurisdiction]) continue;
+            var res = this.sys.retrieveStyleModule(jurisdiction, preference);
+            this.opt.jurisdictions_seen[jurisdiction] = true;
+            if (!res) continue;
+            ret[jurisdiction] = res;
+        }
+    }
+    return ret;
+}
+CSL.parseParticles = function(){
+    var PARTICLES = [
+        ["'s-", [[[0,1], null]]],
+        ["'t", [[[0,1], null]]],
+        ["abbé d'", [[[0,2], null]]],
+        ["af", [[[0,1], null]]],
+        ["al", [[[0,1], null]]],
+        ["al-", [[[0,1], null]],[[null,[0,1]]]],
+        ["auf den", [[[0,2], null]]],
+        ["auf der", [[[0,1], null]]],
+        ["aus der", [[[0,1], null]]],
+        ["aus'm", [[null, [0,1]]]],
+        ["ben", [[null, [0,1]]]],
+        ["bin", [[null, [0,1]]]],
+        ["d'", [[[0,1], null]],[[null,[0,1]]]],
+        ["da", [[null, [0,1]]]],
+        ["dall'", [[null, [0,1]]]],
+        ["das", [[[0,1], null]]],
+        ["de", [[null, [0,1]],[[0,1],null]]],
+        ["de la", [[[0,1], [1,2]]]],
+        ["de las", [[[0,1], [1,2]]]],
+        ["de li", [[[0,1], null]]],
+        ["de'", [[[0,1], null]]],
+        ["degli", [[[0,1], null]]],
+        ["dei", [[[0,1], null]]],
+        ["del", [[null, [0,1]]]],
+        ["dela", [[[0,1], null]]],
+        ["della", [[[0,1], null]]],
+        ["dello", [[[0,1], null]]],
+        ["den", [[[0,1], null]]],
+        ["der", [[[0,1], null]]],
+        ["des", [[null, [0,1]],[[0,1], null]]],
+        ["di", [[null, [0,1]]]],
+        ["do", [[null, [0,1]]]],
+        ["dos", [[[0,1], null]]],
+        ["du", [[[0,1], null]]],
+        ["el", [[[0,1], null]]],
+        ["il", [[[0,1], null]]],
+        ["in 't", [[[0,2], null]]],
+        ["in de", [[[0,2], null]]],
+        ["in der", [[[0,1], null]]],
+        ["in het", [[[0,2], null]]],
+        ["lo", [[[0,1], null]]],
+        ["les", [[[0,1], null]]],
+        ["l'", [[null, [0,1]]]],
+        ["la", [[null, [0,1]]]],
+        ["le", [[null, [0,1]]]],
+        ["lou", [[null, [0,1]]]],
+        ["mac", [[null, [0,1]]]],
+        ["op de", [[[0,2], null]]],
+        ["pietro", [[null, [0,1]]]],
+        ["saint", [[null, [0,1]]]],
+        ["sainte", [[null, [0,1]]]],
+        ["sen", [[[0,1], null]]],
+        ["st.", [[null, [0,1]]]],
+        ["ste.", [[null, [0,1]]]],
+        ["te", [[[0,1], null]]],
+        ["ten", [[[0,1], null]]],
+        ["ter", [[[0,1], null]]],
+        ["uit de", [[[0,2], null]]],
+        ["uit den", [[[0,2], null]]],
+        ["v.d.", [[null, [0,1]]]],
+        ["van", [[null, [0,1]]]],
+        ["van de", [[null, [0,2]]]],
+        ["van den", [[null, [0,2]]]],
+        ["van der", [[null, [0,2]]]],
+        ["van het", [[null, [0,2]]]],
+        ["vander", [[null, [0,1]]]],
+        ["vd", [[null, [0,1]]]],
+        ["ver", [[null, [0,1]]]],
+        ["von", [[[0,1], null]],[[null,[0,1]]]],
+        ["von der", [[[0,2], null]]],
+        ["von dem",[[[0,2], null]]],
+        ["von und zu", [[[0,1], null]]],
+        ["von zu", [[[0,2], null]]],
+        ["v.", [[[0,1], null]]],
+        ["v", [[[0,1], null]]],
+        ["vom", [[[0,1], null]]],
+        ["vom und zum", [[[0,1], null]]],
+        ["z", [[[0,1], null]]],
+        ["ze", [[[0,1], null]]],
+        ["zum", [[[0,1], null]]],
+        ["zur", [[[0,1], null]]]
+        ]
+    var CATEGORIZER = null;
+    function createCategorizer () {
+        CATEGORIZER = {};
+        for (var i=0,ilen=PARTICLES.length;i<ilen;i++) {
+            var tLst = PARTICLES[i][0].split(" ");
+            var pInfo = [];
+            for (var j=0,jlen=PARTICLES[i][1].length;j<jlen;j++) {
+                var pParams = PARTICLES[i][1][j];
+                var str1 = pParams[0] ? tLst.slice(pParams[0][0], pParams[0][1]).join(" ") : "";
+                var str2 = pParams[1] ? tLst.slice(pParams[1][0], pParams[1][1]).join(" ") : "";
+                pInfo.push({
+                    strings: [str1, str2],
+                    positions: [pParams[0], pParams[1]]
+                });
+            }
+            CATEGORIZER[PARTICLES[i][0]] = pInfo;
+        }
+    }
+    createCategorizer();
+    var LIST = null;
+    var REX = null;
+    function assignToList (nospaceList, spaceList, particle) {
+        if (["\'", "-"].indexOf(particle.slice(-1)) > -1) {
+            nospaceList.push(particle);
+        } else {
+            spaceList.push(particle);
+        }
+    }
+    function composeParticleLists () {
+       LIST = {
+            "family": {
+                "space": [],
+                "nospace": []
+            },
+            "given": {
+                "partial": {},
+                "full": []
+            }
+        }
+        REX = {
+            "family": null,
+            "given": {
+                "full_lower": null,
+                "full_comma": null,
+                "partial": {}
+            }
+        }
+        var FAM_SP = LIST.family.space;
+        var FAM_NSP = LIST.family.nospace;
+        var GIV_PART = LIST.given.partial;
+        var GIV_FULL = LIST.given.full;
+        for (var i=0,ilen=PARTICLES.length;i<ilen;i++) {
+            var info = PARTICLES[i];
+            var particle = info[0].split(" ");
+            if (particle.length === 1) {
+                assignToList(FAM_NSP, FAM_SP, particle[0]);
+                GIV_FULL.push(particle[0]);
+                if (!GIV_PART[particle[0]]) {
+                    GIV_PART[particle[0]] = [];
+                }
+                GIV_PART[particle[0]].push("");
+            } else if (particle.length === 2) {
+                assignToList(FAM_NSP, FAM_SP, particle[1]);
+                if (!GIV_PART[particle[1]]) {
+                    GIV_PART[particle[1]] = [];
+                }
+                GIV_PART[particle[1]].push(particle[0]);
+                particle = particle.join(" ");
+                assignToList(FAM_NSP, FAM_SP, particle);
+                GIV_FULL.push(particle);
+            }
+        }
+        FAM_SP.sort(byLength);
+        FAM_NSP.sort(byLength);
+        GIV_FULL.sort(byLength);
+        for (var key in GIV_PART) {
+            GIV_PART[key].sort(byLength);
+        }
+    }
+    function byLength(a,b) {
+        if (a.length<b.length) {
+            return 1;
+        } else if (a.length>b.length) {
+            return -1;
+        } else {
+            return 0;
+        }
+    }
+    function composeRegularExpressions () {
+        composeParticleLists();
+        REX.family = new RegExp("^((?:" + LIST.family.space.join("|") + ")(\\s+)|(?:" + LIST.family.nospace.join("|") + "([^\\s]))).*", "i");
+        REX.given.full_comma = new RegExp(".*?(,[\\s]*)(" + LIST.given.full.join("|") + ")$", "i");
+        REX.given.full_lower = new RegExp(".*?([ ]+)(" + LIST.given.full.join("|") + ")$");
+        X = "Tom du".match(REX.given.full_lower)
+        var allInTheFamily = LIST.family.space
+        for (var key in LIST.given.partial) {
+            REX.given.partial[key] = new RegExp(".*?(\\s+)(" + LIST.given.partial[key].join("|") + ")$", "i");
+        }
+    }
+    composeRegularExpressions();
+    function matchRegularExpressions (name) {
+        var m = REX.family.exec(name.family);
+        var result = {
+            family: {match:null, str:null},
+            given: {match:null, str:null}
+        }
+        if (m) {
+            result.family.match = m[2] ? m[1] : m[3] ? m[1].slice(0,-m[3].length) : m[1];
+            result.family.str = (m[2] ? m[1].slice(0,-m[2].length) : m[3] ? m[1].slice(0,-m[3].length) : m[1]);
+            if (REX.given.partial[result.family.str.toLowerCase()]) {
+                var m = REX.given.partial[result.family.str.toLowerCase()].exec(name.given);
+                if (m) {
+                    result.given.match = m[2] ? m[1] + m[2] : m[2];
+                    result.given.str = m[2];
+                }
+            }
+        } else {
+            var m = REX.given.full_comma.exec(name.given);
+            if (!m) m = REX.given.full_lower.exec(name.given);
+            if (m) {
+                result.given.match = m[1] ? m[1] + m[2] : m[2];
+                result.given.str = m[2];
+            }
+        }
+        return result;
+    }
+    function apostropheNormalizer(name, reverse) {
+        var params = ["\u2019", "\'"]
+        if (reverse) params.reverse();
+        if (name.family) {
+            name.family = name.family.replace(params[0], params[1])
+        }
+        if (name.given) {
+            name.given = name.given.replace(params[0], params[1])
+        }
+    }
+    return function (name, normalizeApostrophe) {
+        if (normalizeApostrophe) {
+            apostropheNormalizer(name);
+        }
+        var result = matchRegularExpressions(name);
+        var particles = [];
+        if (result.given.match) {
+            name.given = name.given.slice(0,-result.given.match.length);
+            particles.push(result.given.str);
+        }
+        if (result.family.match) {
+            name.family = name.family.slice(result.family.match.length);
+            particles.push(result.family.str);
+        }
+        particles = particles.join(" ").split(" ");
+        if (particles.length) {
+            var key = particles.join(" ");
+            var pInfo = CATEGORIZER[key.toLowerCase()];
+            if (pInfo) {
+                for (var i=pInfo.length-1;i>-1;i--) {
+                    var pSet = pInfo[i];
+                    if (!result.family.str) result.family.str = "";
+                    if (!result.given.str) result.given.str = "";
+                    if (result.given.str === pSet.strings[0] && result.family.str === pSet.strings[1]) {
+                        break;
+                    }
+                }
+                if (pSet.positions[0] !== null) {
+                    name["dropping-particle"] = particles.slice(pSet.positions[0][0], pSet.positions[0][1]).join(" ");
+                }
+                if (pSet.positions[1] !== null) {
+                    name["non-dropping-particle"] = particles.slice(pSet.positions[1][0], pSet.positions[1][1]).join(" ");
+                }
+            }
+        }
+        if (normalizeApostrophe) {
+            apostropheNormalizer(name, true);
+        }
+    }
+}();
