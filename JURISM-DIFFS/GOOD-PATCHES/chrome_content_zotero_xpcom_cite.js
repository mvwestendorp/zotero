diff --git a/chrome/content/zotero/xpcom/cite.js b/chrome/content/zotero/xpcom/cite.js
index fd8adbc..73f4005 100644
--- a/chrome/content/zotero/xpcom/cite.js
+++ b/chrome/content/zotero/xpcom/cite.js
@@ -478,6 +478,20 @@ Zotero.Cite.getAbbreviation = new function() {
 };
 
 /**
+ * An initial version of retrieveStyleModule().
+ * (may be replaced by plugin version)
+ */
+Zotero.Cite.retrieveStyleModule = function(jurisdiction, preference) {
+	var id = preference ? "juris-" + jurisdiction + "-" + preference : "juris-" + jurisdiction;
+	var module = Zotero.Styles.get("http://juris-m.github.io/modules/" + id);
+	var ret = false;
+	if (module) {
+		ret = module.getXML();
+	}
+	return ret;
+}
+
+/**
  * citeproc-js system object
  * @class
  */
@@ -485,6 +499,7 @@ Zotero.Cite.System = function(automaticJournalAbbreviations) {
 	if(automaticJournalAbbreviations) {
 		this.getAbbreviation = Zotero.Cite.getAbbreviation;
 	}
+    this.retrieveStyleModule = Zotero.Cite.retrieveStyleModule;
 }
 
 Zotero.Cite.System.prototype = {
@@ -565,5 +580,154 @@ Zotero.Cite.System.prototype = {
 		converterStream.readString(channel.contentLength, str);
 		converterStream.close();
 		return str.value;
+	},
+
+	"wrapCitationEntryHtml":function (str, item_id, locator_txt, suffix_txt) {
+		if (!locator_txt) {
+			locator_txt = "";
+		}
+		if (!suffix_txt) {
+			suffix_txt = "";
+		}
+		return Zotero.Prefs.get("export.quickCopy.citationWrapperHtml")
+			.replace("%%STRING%%", str)
+			.replace("%%LOCATOR%%", locator_txt)
+			.replace("%%SUFFIX%%", suffix_txt)
+			.replace("%%ITEM_ID%%", item_id);
+	},
+
+	"wrapCitationEntryText":function (str, item_id, locator_txt, suffix_txt) {
+		if (!locator_txt) {
+			locator_txt = "";
+		}
+		if (!suffix_txt) {
+			suffix_txt = "";
+		}
+		return Zotero.Prefs.get("export.quickCopy.citationWrapperText")
+			.replace("%%STRING%%", str)
+			.replace("%%LOCATOR%%", locator_txt)
+			.replace("%%SUFFIX%%", suffix_txt)
+			.replace("%%ITEM_ID%%", item_id);
+	},
+
+	/**
+	 * citeproc-js system function for getting abbreviations
+	 * See http://gsl-nagoya-u.net/http/pub/citeproc-doc.html#getabbreviations
+	 * Not currently used because it doesn't scale well to large lists
+	 */
+	"getAbbreviations":function getAbbreviations() {
+		return {};
+	},
+
+	"normalizeUnicode":function(str) {
+		var buf = {};
+		var unicodeNormalizer = Components.classes["@mozilla.org/intl/unicodenormalizer;1"]
+			.createInstance(Components.interfaces.nsIUnicodeNormalizer);
+		unicodeNormalizer.NormalizeUnicodeNFKC(str, buf);
+		return buf.value;
+	},
+	
+	"setVariableWrapper":function(setValue) {
+		if ("boolean" !== typeof setValue) {
+			setValue = Zotero.Prefs.get('linkTitles');
+		}
+		if (setValue) {
+			this.variableWrapper = function(params, prePunct, str, postPunct) {
+				if (params.variableNames[0] === 'title' 
+					&& (params.itemData.URL || params.itemData.URL_REAL || params.itemData.DOI)
+					&& params.context === "bibliography") {
+					
+					var URL = null;
+					var DOI = params.itemData.DOI;
+					if (DOI) {
+						URL = 'http://dx.doi.org/' + Zotero.Utilities.cleanDOI(DOI)
+					}
+					if (!URL) {
+						URL = params.itemData.URL ? params.itemData.URL : params.itemData.URL_REAL;
+					}
+					if (URL) {
+						if (params.mode === 'rtf') {
+							return prePunct + '{\\field{\\*\\fldinst HYPERLINK "' + URL + '"}{\\fldrslt ' + str + '}}' + postPunct;
+						} else {
+							return prePunct + '<a href="' + URL + '">' + str + '</a>' + postPunct;
+						}
+					} else {
+						return (prePunct + str + postPunct);
+					}
+				} else {
+					return (prePunct + str + postPunct);
+				}
+			}
+		} else {
+			this.variableWrapper = null;
+		}
+	},
+
+	"getHumanForm":function(jurisdictionKey, courtKey) {
+		var ret;
+		var res;
+		if (jurisdictionKey && courtKey) {
+		    ret = Zotero.Utilities.getCourtName(jurisdictionKey, courtKey, true);
+		} else if (jurisdictionKey) {
+		    res = Zotero.Utilities.getJurisdictionName(jurisdictionKey);
+		    if (res) {
+			    res = res.split("|");
+			    if (res.length > 2) {
+			        ret = res.slice(1).join("|");
+			    } else {
+			        ret = res.join("|");
+			    }
+		    } else {
+			    ret = res;
+		    }
+		}
+		return ret ? "" + ret : "";
 	}
-};
\ No newline at end of file
+}
+
+Zotero.Cite._monthStrings = false;
+Zotero.Cite.getMonthStrings = function(form, locale) {
+	if(Zotero.Cite._monthStrings){
+		return Zotero.Cite._monthStrings[form];
+	} else {
+		Zotero.Cite._monthStrings = {"long":[], "short":[]};
+
+		var sys = {'xml':new Zotero.CiteProc.CSL.System.Xml.Parsing()};
+		if(!locale) locale = Zotero.locale;
+
+		var cslLocale = Zotero.CiteProc.CSL.localeResolve(Zotero.locale);
+		if(!Zotero.CiteProc.CSL.locale[cslLocale.best]) {
+			let localexml = sys.xml.makeXml(Zotero.Cite.System.retrieveLocale(cslLocale.best));
+			if(!localexml) {
+				if(localexml == "en-US") {
+					throw "No locales.xml file could be found for the preferred locale or for en-US. "+
+						  "Please ensure that the locales directory exists and is properly populated";
+				} else {
+					let localexml = sys.xml.makeXml(Zotero.Cite.System.retrieveLocale(cslLocale.bare));
+					if(!localexml) {
+						Zotero.log("No locale "+cslLocale.best+"; using en-US", "warning");
+						return Zotero.Cite.getMonthStrings(form, "en-US");
+					}
+				}
+			}
+			Zotero.CiteProc.CSL.localeSet.call(Zotero.CiteProc.CSL, sys, localexml, cslLocale.best, cslLocale.best);
+		}
+
+		var locale = Zotero.CiteProc.CSL.locale[cslLocale.best];
+		if(!locale) {
+			Zotero.log("No locale "+cslLocale.best+"; using en-US", "warning");
+			return Zotero.Cite.getMonthStrings(form, "en-US");
+		}
+
+		for(let i=1; i<=12; i++) {
+			let term = locale.terms["month-"+(i<10 ? "0" : "")+i];
+			if(term) {
+				Zotero.Cite._monthStrings["long"][i-1] = term["long"];
+				Zotero.Cite._monthStrings["short"][i-1] = (term["short"] ? term["short"].replace(".", "", "g") : term["long"]);
+			} else {
+				Zotero.log("No month "+i+" specified for locale "+cslLocale.best, "warning");
+			}
+		}
+		return Zotero.Cite._monthStrings[form];
+	}
+};
