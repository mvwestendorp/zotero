diff --git a/chrome/content/zotero/xpcom/utilities.js b/chrome/content/zotero/xpcom/utilities.js
index 3204930..277452d 100644
--- a/chrome/content/zotero/xpcom/utilities.js
+++ b/chrome/content/zotero/xpcom/utilities.js
@@ -32,6 +32,7 @@
  * and it makes the code cleaner
  */
 const CSL_NAMES_MAPPINGS = {
+	"artist":"author",
 	"author":"author",
 	"editor":"editor",
 	"bookAuthor":"container-author",
@@ -41,37 +42,47 @@ const CSL_NAMES_MAPPINGS = {
 	"recipient":"recipient",
 	"reviewedAuthor":"reviewed-author",
 	"seriesEditor":"collection-editor",
-	"translator":"translator"
+	"translator":"translator",
+	"contributor":"contributor",
+	"authority":"authority",
+	"commenter":"commenter"
 }
 
 /*
  * Mappings for text variables
+ * (system_id to key mapping is actually hard-wired in cite.js)
  */
 const CSL_TEXT_MAPPINGS = {
 	"title":["title"],
-	"container-title":["publicationTitle",  "reporter", "code"], /* reporter and code should move to SQL mapping tables */
+	"container-title":["publicationTitle",  "reporter", "code", "album", "websiteTitle"], /* reporter and code should move to SQL mapping tables */
 	"collection-title":["seriesTitle", "series"],
-	"collection-number":["seriesNumber"],
+	"collection-number":["seriesNumber","assemblyNumber","regnalYear","yearAsVolume"],
 	"publisher":["publisher", "distributor"], /* distributor should move to SQL mapping tables */
 	"publisher-place":["place"],
-	"authority":["court","legislativeBody", "issuingAuthority"],
+	"authority":["court", "legislativeBody", "issuingAuthority","institution"],
+	"committee":["committee"],
+	"gazette-flag":["gazetteFlag"],
+	"document-name":["documentName"],
 	"page":["pages"],
-	"volume":["volume", "codeNumber"],
+	"volume":["volume","codeNumber"],
+	"volume-title":["volumeTitle"],
 	"issue":["issue", "priorityNumbers"],
 	"number-of-volumes":["numberOfVolumes"],
 	"number-of-pages":["numPages"],	
 	"edition":["edition"],
 	"version":["versionNumber"],
-	"section":["section", "committee"],
-	"genre":["type", "programmingLanguage"],
+	"section":["section","opus"],
+	"genre":["type","reign","supplementName","sessionType", "programmingLanguage"],
+	"chapter-number":["session","meetingNumber"],
 	"source":["libraryCatalog"],
 	"dimensions": ["artworkSize", "runningTime"],
 	"medium":["medium", "system"],
 	"scale":["scale"],
 	"archive":["archive"],
 	"archive_location":["archiveLocation"],
-	"event":["meetingName", "conferenceName"], /* these should be mapped to the same base field in SQL mapping tables */
+	"event":["meetingName", "conferenceName", "resolutionLabel"], /* these should be mapped to the same base field in SQL mapping tables */
 	"event-place":["place"],
+	"archive-place":["place"],
 	"abstract":["abstractNote"],
 	"URL":["url"],
 	"DOI":["DOI"],
@@ -80,21 +91,27 @@ const CSL_TEXT_MAPPINGS = {
 	"call-number":["callNumber", "applicationNumber"],
 	"note":["extra"],
 	"number":["number"],
-	"chapter-number":["session"],
-	"references":["history", "references"],
+	"pending-number":["applicationNumber"],
+	"references":["history"],
 	"shortTitle":["shortTitle"],
 	"journalAbbreviation":["journalAbbreviation"],
-	"status":["legalStatus"],
-	"language":["language"]
+	"language":["language"],
+	"jurisdiction":["jurisdiction"],
+	"status":["status", "legalStatus"],
+	"publication-number": ["publicationNumber"]
 }
 
 /*
  * Mappings for dates
- */
+*/
 const CSL_DATE_MAPPINGS = {
-	"issued":"date",
-	"accessed":"accessDate",
-	"submitted":"filingDate"
+	"issued":["date"],
+	"original-date":["newsCaseDate","priorityDate","originalDate","adoptionDate"],
+	"submitted":["filingDate"],
+	"accessed":["accessDate"],
+	"available-date":["openingDate"],
+	"event-date":["signingDate","conferenceDate","dateAmended"],
+	"publication-date":["publicationDate"]
 }
 
 /*
@@ -119,7 +136,7 @@ const CSL_TYPE_MAPPINGS = {
 	'report':"report",
 	'bill':"bill",
 	'case':"legal_case",
-	'hearing':"bill",				// ??
+	'hearing':"hearing",				// ??
 	'patent':"patent",
 	'statute':"legislation",		// ??
 	'email':"personal_communication",
@@ -129,20 +146,57 @@ const CSL_TYPE_MAPPINGS = {
 	'forumPost':"post",
 	'audioRecording':"song",		// ??
 	'presentation':"speech",
-	'videoRecording':"motion_picture",
+	'videoRecording':"video",
 	'tvBroadcast':"broadcast",
 	'radioBroadcast':"broadcast",
 	'podcast':"song",			// ??
 	'computerProgram':"book",		// ??
+	'gazette':'gazette', // deprecated
+	'regulation':'regulation',
+	'classic':'classic',
+	'treaty':'treaty',
+	'standard':'standard',
 	'document':"article",
 	'note':"article",
 	'attachment':"article"
 };
 
 /**
+ * Force Fields
+*/
+const CSL_FORCE_FIELD_CONTENT = {
+	"tvBroadcast":{
+		"genre":"television broadcast"
+	},
+	"radioBroadcast":{
+		"genre":"radio broadcast"
+	},
+	"instantMessage":{
+		"genre":"instant message"
+	},
+	"email":{
+		"genre":"email"
+	},
+	"podcast":{
+		"genre":"podcast"
+	}
+}
+
+const CSL_FORCE_REMAP = {
+	"periodical":{
+		"title":"container-title"
+	}
+}
+
+
+/**
  * @class Functions for text manipulation and other miscellaneous purposes
  */
 Zotero.Utilities = {
+
+	"getCslTypeFromItemType":function(itemType) {
+		return CSL_TYPE_MAPPINGS[itemType];
+	},
 	/**
 	 * Cleans extraneous punctuation off a creator name and parse into first and last name
 	 *
@@ -212,7 +266,290 @@ Zotero.Utilities = {
 
 		return {firstName:firstName, lastName:lastName, creatorType:type};
 	},
+
+	/**
+	 * Sets a multilingual field value
+	 * Used in translators.
+	 *
+	 * @param {Object} obj Item object
+	 * @param {String} field Field name
+	 * @param {String} val Field value
+	 * @param {String} languageTag RFC 5646 language tag
+	 */
+	"setMultiField":function (obj, field, val, languageTag, defaultLanguage) {
+		// Validate parameters
+		if ("string" !== typeof val) {
+			throw "Invalid value for multilingual field";
+		}
+		if (!field) {
+			throw "No field value given to setMultiField";
+		}
+		// Initialize if required
+		if (languageTag) {
+			if (!obj.multi) {
+				obj.multi = {};
+			}
+			if (!obj.multi.main) {
+				obj.multi.main = {};
+			}
+			if (!obj.multi._lsts) {
+				obj.multi._lsts = {};
+			}
+			if (!obj.multi._keys) {
+				obj.multi._keys = {};
+			}
+		}
+		// Set field value
+		if (!obj[field]) {
+			obj[field] = val;
+			if (languageTag && languageTag !== defaultLanguage) {
+				obj.multi.main[field] = languageTag;
+			}
+		} else if (languageTag) {
+			if (!obj.multi._lsts[field]) {
+				obj.multi._lsts[field] = [];
+				obj.multi._keys[field] = {};
+			}
+			obj.multi._keys[field][languageTag] = val;
+			if (obj.multi._lsts[field].indexOf(languageTag) === -1) {
+				obj.multi._lsts[field].push(languageTag);
+			}
+		}
+	},
+
+	/**
+	 * Sets a multilingual creator
+	 * Used in translators.
+	 *
+	 * @param {Object} obj Parent creator object (may be empty)
+	 * @param {String} child Child creator object to be added
+	 * @param {String} languageTag RFC 5646 language tag
+	 */
+	"setMultiCreator":function (obj, child, languageTag, creatorType, defaultLanguage) {
+		// Validate parameters
+		if ("object" !== typeof obj) {
+			throw "Multilingual creator parent must be an object";
+		}
+		if ("object" !== typeof child) {
+			throw "Multilingual creator child must be an object";
+		}
+		if (obj.itemID) {
+			throw "Must give creator as multilingual creator parent, not item";
+		}
+		// Initialize if required
+		if (languageTag) {
+			if (!obj.multi) {
+				obj.multi = {};
+			}
+			if (!obj.multi._lst) {
+				obj.multi._lst = [];
+			}
+			if (!obj.multi._key) {
+				obj.multi._key = {};
+			}
+		}
+		// Set field value
+		if (!obj.lastName) {
+			obj.lastName = child.lastName;
+			obj.firstName = child.firstName;
+			obj.creatorType = creatorType;
+			if (languageTag && languageTag !== defaultLanguage) {
+				obj.multi.main = languageTag;
+			}
+		} else  if (languageTag) {
+			obj.multi._key[languageTag] = child;
+			if (obj.multi._lst.indexOf(languageTag) === -1) {
+				obj.multi._lst.push(languageTag);
+			}
+		}
+	},
+
+	"getMultiCreator":function(obj, fieldName, langTag) {
+		if (!langTag) {
+			return obj[fieldName];
+		} else {
+			return obj.multi._key[langTag][fieldName]
+		}
+	},
+
+	"extractCreatorFields":function(creator, langTag) {
+		if (creator.fieldMode && creator.fieldMode == 1) {
+			// Single-field mode
+			var fields = {
+				lastName: Zotero.Utilities.getMultiCreator(creator, 'lastName', langTag),
+				fieldMode: 1
+			};
+		} else {
+			// Two-field mode
+			var fields = {
+				firstName: Zotero.Utilities.getMultiCreator(creator, 'firstName', langTag),
+				lastName: Zotero.Utilities.getMultiCreator(creator, 'lastName', langTag)
+			};
+		}
+		return fields;
+	},
 	
+	"composeDoc":function(doc, titleOrHead, object, suppressURL) {
+		var o;
+		var content = false;
+		// (object) is either a single DOM element, a DOM
+		// collection, or an array of DOM elements or DOM 
+		// collections. Only the first element of a DOM collection 
+		// is used in the constructed document.
+
+		// Punch out early if there is nothing here.
+		if (!object || !(object.length || object.tagName)) {
+			return false;
+		} else if (!object.tagName) {
+			var fail = true;
+			for (var i = 0, ilen = object.length; i < ilen; i += 1) {
+				if (object[i] && (object[i].tagName || object[i].length)) {
+					fail = false;
+					break;
+				}
+			}
+			if (fail) {
+				return false;
+			}
+		}
+
+		// Cast a namespace object
+		// var myns = doc.documentElement.namespaceURI;
+		var myns = "http://www.w3.org/1999/xhtml"
+
+		// Cast a document type for a new custom-spun HTML document
+		//var newDocType = doc.implementation.createDocumentType("html:html", "-//W3C//DTD HTML 4.01 Transitional//EN", "http://www.w3.org/TR/html4/loose.dtd");
+
+		var newDocType = doc.implementation.createDocumentType('html', '', '');
+
+		// Create an empty HTML document
+		var newDoc = doc.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', newDocType);
+
+		var getHeaderFooter = function (title, footer) {
+			// Cast a headerfooter div for use in the document,
+			// with a horizontal rule at the top
+			var ret = newDoc.createElementNS(myns, "div");
+			var hr = newDoc.createElementNS(myns, "hr");
+			
+			// Cast a div for the title, populate it with the title
+			// text, and insert the unit into the headerfooter object
+			var text = newDoc.createElementNS(myns, "div");
+			text.appendChild(newDoc.createTextNode(title));
+			
+			// Cast a source div, populate it with a simple
+			// label and the URL of the document from which
+			// the text is extracted, bundle the unit up
+			// and insert it into the document HTML node.
+			var source = newDoc.createElementNS(myns, "div");
+			if (!suppressURL) {
+				source.setAttribute("class","mlz-link-button");
+				var source_anchor = newDoc.createElementNS(myns, "a");
+				source_anchor.setAttribute("href", doc.location.href);
+				var source_anchor_text = newDoc.createTextNode("View text online");
+				source_anchor.appendChild(source_anchor_text);
+				source.appendChild(source_anchor);
+			}
+			
+
+
+			if (footer) {
+				ret.appendChild(hr);
+				ret.appendChild(text);
+				ret.appendChild(source);
+			} else {
+				ret.appendChild(text);
+				ret.appendChild(source);
+				ret.appendChild(hr);
+			}
+			return ret;
+		}
+
+
+		// Get the HTML section of the document, into which we will insert things.
+		var html = newDoc.getElementsByTagName("html")[0];
+
+		// Cast a header and a title element,
+		// fill in some details in both; create a base
+		// element and give in a URL ending in html.
+		// merge the two, and insert into the html element
+		var head, title;
+		if ("string" === typeof titleOrHead) {
+			head = newDoc.createElementNS(myns, "head");
+			title = titleOrHead
+		} else if ("object" === typeof titleOrHead) {
+			head = titleOrHead.cloneNode(true);
+			title = titleOrHead.getElementsByTagName("title")[0].textContent;
+		}
+		var base = newDoc.createElementNS(myns, "base");
+		var header_title = newDoc.createElementNS(myns, "title");
+		header_title_text = newDoc.createTextNode(title);
+		header_title.appendChild(header_title_text);
+		head.appendChild(header_title);
+		base.setAttribute("target", "_blank");
+		base.setAttribute("href", doc.location.href);
+		// base.setAttribute("href", 'http://example.com/eg.html');
+		head.appendChild(base);
+		html.appendChild(head);
+
+		// Cast a body element, insert an overall wrapper
+		// div into it, insert the content node
+		// into that, and insert the body into the document.
+		var body = newDoc.createElementNS(myns, "body");
+
+		contentNode = newDoc.createElementNS(myns, "div");
+		contentNode.setAttribute("class","mlz-outer");
+		body.appendChild(contentNode);
+
+		contentNode.appendChild(getHeaderFooter(title));
+
+		if (object.tagName) {
+			// Object is a DOM node. Clone and wrap.
+			content = object.cloneNode(true);
+			contentNode.appendChild(content);
+		} else if (object.length) {
+			for (var i = 0, ilen = object.length; i < ilen; i += 1) {
+				o = object[i];
+				if (o.tagName || o.nodeName === '#text') {
+					// Object is a DOM node. Clone and wrap.
+					content = o.cloneNode(true);
+					contentNode.appendChild(content);
+				} else {
+					// Object is a DOM-list consisting of elements.
+					// If non-zero, clone the first and wrap.
+					if (o.length) {
+						content = o[0].cloneNode(true);
+						contentNode.appendChild(content);
+					}
+				}
+			}
+		}
+
+		contentNode.appendChild(getHeaderFooter(title, true));
+
+		// Insert the body into the document HTML node
+		html.appendChild(body);
+		return newDoc;
+	},
+
+	"getTextContent":function(node) {
+		// Multi-browser fun.
+		// See http://ecmanaut.blogspot.com/2007/02/domnodetextcontent-and-nodeinnertext.html
+		var text = false;	
+		if (node) {
+		// W3C conformant browsers
+			text = node.textContent;
+		}
+		if (!text) {
+			// Opera, IE 6 & 7
+			text = node.innerText;
+		}
+		if (!text) {
+			// Safari
+			text = node.innerHTML;
+		}
+		return text;
+},
+
 	/**
 	 * Removes leading and trailing whitespace from a string
 	 * @type String
@@ -774,6 +1111,7 @@ Zotero.Utilities = {
 		const skipWords = ["but", "or", "yet", "so", "for", "and", "nor", "a", "an",
 			"the", "at", "by", "from", "in", "into", "of", "on", "to", "with", "up",
 			"down", "as"];
+		const alwaysLowerCase = ["plc", "v"];
 		
 		// this may only match a single character
 		const delimiterRegexp = /([ \/\u002D\u00AD\u2010-\u2015\u2212\u2E3A\u2E3B])/;
@@ -785,8 +1123,9 @@ Zotero.Utilities = {
 		
 		// split words
 		var words = string.split(delimiterRegexp);
-		var isUpperCase = string.toUpperCase() == string;
-		
+		var stringWithoutV = string.replace(/([^A-Za-z])v([^A-Za-z])/, "$1$2");
+		var isUpperCase = stringWithoutV.toUpperCase() == stringWithoutV;
+	
 		var newString = "";
 		var delimiterOffset = words[0].length;
 		var lastWordIndex = words.length-1;
@@ -800,12 +1139,15 @@ Zotero.Utilities = {
 				// only use if word does not already possess some capitalization
 				if(isUpperCase || words[i] == lowerCaseVariant) {
 					if(
-						// a skip word
-						skipWords.indexOf(lowerCaseVariant.replace(/[^a-zA-Z]+/, "")) != -1
-						// not first or last word
-						&& i != 0 && i != lastWordIndex
-						// does not follow a colon
-						&& (previousWordIndex == -1 || words[previousWordIndex][words[previousWordIndex].length-1].search(/[:\?!]/)==-1)
+						alwaysLowerCase.indexOf(lowerCaseVariant.replace(/[^a-zA-Z]+/, "")) != -1
+						|| (
+							// a skip word
+							skipWords.indexOf(lowerCaseVariant.replace(/[^a-zA-Z]+/, "")) != -1
+							// not first word, or last word if not #2 forcing for case names
+								&& i != 0 && i != lastWordIndex
+							// does not follow a colon
+						        && (previousWordIndex == -1 || words[previousWordIndex][words[previousWordIndex].length-1].search(/[:\?!]/)==-1)
+						)
 					) {
 						words[i] = lowerCaseVariant;
 					} else {
@@ -824,7 +1166,7 @@ Zotero.Utilities = {
 			
 			newString += words[i];
 		}
-		
+
 		return newString;
 	},
 	
@@ -1361,7 +1703,6 @@ Zotero.Utilities = {
 		
 		var typeID = Zotero.ItemTypes.getID(item.itemType);
 		if(!typeID) {
-			Zotero.debug("itemToServerJSON: Invalid itemType "+item.itemType+"; using webpage");
 			item.itemType = "webpage";
 			typeID = Zotero.ItemTypes.getID(item.itemType);
 		}
@@ -1479,35 +1820,62 @@ Zotero.Utilities = {
 		
 		return newItems;
 	},
-	
+
 	/**
 	 * Converts an item from toArray() format to citeproc-js JSON
 	 * @param {Zotero.Item} zoteroItem
 	 * @return {Object} The CSL item
 	 */
-	"itemToCSLJSON":function(zoteroItem) {
+	"itemToCSLJSON":function(zoteroItem, ignoreURL, portableJSON, stopAuthority) {
 		if (zoteroItem instanceof Zotero.Item) {
 			zoteroItem = Zotero.Utilities.Internal.itemToExportFormat(zoteroItem);
 		}
 		
+		if (portableJSON) {
+			Zotero.Sync.Server.Data.mlzEncodeFieldsAndCreators(zoteroItem);
+		}
+
 		var cslType = CSL_TYPE_MAPPINGS[zoteroItem.itemType];
 		if (!cslType) throw new Error('Unexpected Zotero Item type "' + zoteroItem.itemType + '"');
 		
 		var itemTypeID = Zotero.ItemTypes.getID(zoteroItem.itemType);
 		
+		// Juris-M: used in FORCE FIELDS below
+		var itemType = zoteroItem.itemType;
+
 		var cslItem = {
 			'id':zoteroItem.uri,
 			'type':cslType
+		}
+		if (!portableJSON) {
+			cslItem.multi = {
+				'main':{},
+				'_keys':{}
+			}
 		};
 		
+		if (!portableJSON) {
+			if (!zoteroItem.libraryID) {
+				cslItem.system_id = "0_" + zoteroItem.key;
+			} else {
+				cslItem.system_id = zoteroItem.libraryID + "_" + zoteroItem.key;
+			}
+		}
+		
+		cslItem.id = zoteroItem.itemID;
+
 		// get all text variables (there must be a better way)
 		for(var variable in CSL_TEXT_MAPPINGS) {
 			var fields = CSL_TEXT_MAPPINGS[variable];
+			// Not in Zotero
+			if(variable == "URL" && ignoreURL) continue;
 			for(var i=0, n=fields.length; i<n; i++) {
 				var field = fields[i],
+					baseFieldName,
 					value = null;
 				
 				if(field in zoteroItem) {
+					baseFieldName = field;
 					value = zoteroItem[field];
 				} else {
 					if (field == 'versionNumber') field = 'version'; // Until https://github.com/zotero/zotero/issues/670
@@ -1516,7 +1884,8 @@ Zotero.Utilities = {
 					if(fieldID
 						&& (typeFieldID = Zotero.ItemFields.getFieldIDFromTypeAndBase(itemTypeID, fieldID))
 					) {
-						value = zoteroItem[Zotero.ItemFields.getName(typeFieldID)];
+						baseFieldName = Zotero.ItemFields.getName(typeFieldID);
+						value = zoteroItem[baseFieldName];
 					}
 				}
 				
@@ -1534,14 +1903,64 @@ Zotero.Utilities = {
 						value = value.substring(1, value.length-1);
 					}
 					cslItem[variable] = value;
+
+					if (!portableJSON) {
+						if (zoteroItem.multi && zoteroItem.multi.main[baseFieldName]) {
+							cslItem.multi.main[variable] = zoteroItem.multi.main[baseFieldName]
+						}
+						if (zoteroItem.multi && zoteroItem.multi._keys[baseFieldName]) {
+							cslItem.multi._keys[variable] = {};
+							for (var langTag in zoteroItem.multi._keys[baseFieldName]) {
+								cslItem.multi._keys[variable][langTag] = zoteroItem.multi._keys[baseFieldName][langTag];
+							}
+						}
+					}
+
 					break;
 				}
 			}
 		}
 		
+		// Clean up committee/legislativeBody
+		// XXX This could use some attention on reverse conversion
+		// XXX Actually, this should really be happening inside the processor
+		if (cslItem.committee && cslItem.authority) {
+			cslItem.authority = [cslItem.authority,cslItem.committee].join("|");
+			delete cslItem.committee;
+		}
+
 		// separate name variables
 		var author = Zotero.CreatorTypes.getName(Zotero.CreatorTypes.getPrimaryIDForType(itemTypeID));
 		var creators = zoteroItem.creators;
+
+		if (!portableJSON && !stopAuthority) {
+			if (!creators) creators = [];
+			if (cslItem.authority) {
+				var nameObj = {
+					'creatorType':'authority',
+					'lastName':cslItem.authority,
+					'firstName':'',
+					'fieldMode': 1,
+					'multi':{
+						'_key': {}
+					}
+				}
+				// _lsts not used in cslItem. Arguably it could be, to fix priorities. One day.
+				for (var langTag in cslItem.multi._keys.authority) {
+					nameObj.multi._key[langTag] = {
+						'lastName':cslItem.multi._keys.authority[langTag],
+						'firstName':''
+					}
+				}
+				if (cslItem.multi._keys.authority) {
+					delete cslItem.multi._keys.authority;
+				}
+				nameObj.multi.main = cslItem.multi.main.authority;
+				creators.push(nameObj);
+				delete cslItem.authority;
+			}
+		}
+		
 		for(var i=0; creators && i<creators.length; i++) {
 			var creator = creators[i];
 			var creatorType = creator.creatorType;
@@ -1552,8 +1971,47 @@ Zotero.Utilities = {
 			creatorType = CSL_NAMES_MAPPINGS[creatorType];
 			if(!creatorType) continue;
 			
-			var nameObj = {'family':creator.lastName, 'given':creator.firstName};
-			
+			if (Zotero.Prefs.get('csl.enableInstitutionFormatting')) {
+				var nameObj = {
+					'family':creator.lastName, 
+					'given':creator.firstName
+				}
+				if (creator.fieldMode) {
+					nameObj.isInstitution = creator.fieldMode;
+				}
+			} else {
+				var nameObj = {
+					'family':creator.lastName, 
+					'given':creator.firstName
+				}
+			}
+		
+			if (!portableJSON) {
+				if (!nameObj.multi) {
+					nameObj.multi = {};
+					nameObj.multi._key = {};
+					if (creator.multi.main) {
+						nameObj.multi.main = creator.multi.main;
+					}
+				}
+				for (var langTag in creator.multi._key) {
+					if (Zotero.Prefs.get('csl.enableInstitutionFormatting')) {
+						nameObj.multi._key[langTag] = {
+							'family':creator.multi._key[langTag].lastName,
+							'given':creator.multi._key[langTag].firstName
+						};
+						if (creator.fieldMode) {
+							nameObj.multi._key[langTag].isInstitution = creator.fieldMode;
+						}
+					} else {
+						nameObj.multi._key[langTag] = {
+							'family':creator.multi._key[langTag].lastName,
+							'given':creator.multi._key[langTag].firstName
+						};
+					}
+				}
+			}
+
 			if(cslItem[creatorType]) {
 				cslItem[creatorType].push(nameObj);
 			} else {
@@ -1563,40 +2021,65 @@ Zotero.Utilities = {
 		
 		// get date variables
 		for(var variable in CSL_DATE_MAPPINGS) {
-			var date = zoteroItem[CSL_DATE_MAPPINGS[variable]];
-			if (!date) {
-				var typeSpecificFieldID = Zotero.ItemFields.getFieldIDFromTypeAndBase(itemTypeID, CSL_DATE_MAPPINGS[variable]);
-				if (typeSpecificFieldID) {
-					date = zoteroItem[Zotero.ItemFields.getName(typeSpecificFieldID)];
+			for (var i=0,ilen=CSL_DATE_MAPPINGS[variable].length;i<ilen;i++) {
+				var zVar = CSL_DATE_MAPPINGS[variable][i];
+				var date = zoteroItem[zVar];
+				if (!date) {
+					var typeSpecificFieldID = Zotero.ItemFields.getFieldIDFromTypeAndBase(itemTypeID, zVar);
+					if (typeSpecificFieldID) {
+						date = zoteroItem[Zotero.ItemFields.getName(typeSpecificFieldID)];
+						if (date) break;
+					}
 				}
+				if (date) break;
 			}
-			
 			if(date) {
-				var dateObj = Zotero.Date.strToDate(date);
-				// otherwise, use date-parts
-				var dateParts = [];
-				if(dateObj.year) {
-					// add year, month, and day, if they exist
-					dateParts.push(dateObj.year);
-					if(dateObj.month !== undefined) {
-						dateParts.push(dateObj.month+1);
-						if(dateObj.day) {
-							dateParts.push(dateObj.day);
+				if (Zotero.Prefs.get('hackUseCiteprocJsDateParser')) {
+					var raw = Zotero.Date.multipartToStr(date);
+					// cslItem[variable] = {raw: raw, "date-parts":[dateParts]};
+					cslItem[variable] = {raw: raw};
+				} else {
+					var dateObj = Zotero.Date.strToDate(date);
+					// otherwise, use date-parts
+					var dateParts = [];
+					if(dateObj.year) {
+						// add year, month, and day, if they exist
+						dateParts.push(dateObj.year);
+						if("number" === typeof dateObj.month) {
+							dateParts.push(dateObj.month+1);
+							if(dateObj.day) {
+								dateParts.push(dateObj.day);
+							}
 						}
-					}
-					cslItem[variable] = {"date-parts":[dateParts]};
+						cslItem[variable] = {"date-parts":[dateParts]};
 					
-					// if no month, use season as month
-					if(dateObj.part && !dateObj.month) {
-						cslItem[variable].season = dateObj.part;
+						// if no month, use season as month
+						if(dateObj.part && !dateObj.month) {
+							cslItem[variable].season = dateObj.part;
+						}
+					} else {
+						// if no year, pass date literally
+						cslItem[variable] = {"literal":date};
 					}
-				} else {
-					// if no year, pass date literally
-					cslItem[variable] = {"literal":date};
 				}
 			}
 		}
+
+		// Force Fields
+		if (CSL_FORCE_FIELD_CONTENT[itemType]) {
+			for (var variable in CSL_FORCE_FIELD_CONTENT[itemType]) {
+				cslItem[variable] = CSL_FORCE_FIELD_CONTENT[itemType][variable];
+			}
+		}
 		
+		// Force remap
+		if (CSL_FORCE_REMAP[itemType]) {
+			for (var variable in CSL_FORCE_REMAP[itemType]) {
+				cslItem[CSL_FORCE_REMAP[itemType][variable]] = cslItem[variable];
+				delete cslItem[variable];
+			}
+		}
+
 		// Special mapping for note title
 		if (zoteroItem.itemType == 'note' && zoteroItem.note) {
 			cslItem.title = Zotero.Notes.noteToTitle(zoteroItem.note);
@@ -1620,9 +2103,9 @@ Zotero.Utilities = {
 	 * @param {Zotero.Item} item
 	 * @param {Object} cslItem
 	 */
-	"itemFromCSLJSON":function(item, cslItem) {
+	"itemFromCSLJSON":function(item, cslItem, libraryID, portableJSON) {
 		var isZoteroItem = item instanceof Zotero.Item, zoteroType;
-		
+
 		for(var type in CSL_TYPE_MAPPINGS) {
 			if(CSL_TYPE_MAPPINGS[type] == cslItem.type) {
 				zoteroType = type;
@@ -1634,14 +2117,18 @@ Zotero.Utilities = {
 		var itemTypeID = Zotero.ItemTypes.getID(zoteroType);
 		if(isZoteroItem) {
 			item.setType(itemTypeID);
+			item.setField('libraryID',libraryID);
 		} else {
 			item.itemID = cslItem.id;
 			item.itemType = zoteroType;
 		}
-		
+
 		// map text fields
 		for(var variable in CSL_TEXT_MAPPINGS) {
 			if(variable in cslItem) {
+				if ("string" !== typeof cslItem[variable]) {
+					continue;
+				}
 				var textMappings = CSL_TEXT_MAPPINGS[variable];
 				for(var i in textMappings) {
 					var field = textMappings[i],
@@ -1653,9 +2140,26 @@ Zotero.Utilities = {
 					
 					if(Zotero.ItemFields.isValidForType(fieldID, itemTypeID)) {
 						if(isZoteroItem) {
-							item.setField(fieldID, cslItem[variable], true);
+							var mainLang = null;
+							if (cslItem.multi) {
+								mainLang = cslItem.multi.main[variable];
+							}
+							item.setField(fieldID, cslItem[variable], false, mainLang, true);
+							if (cslItem.multi && cslItem.multi._keys[variable]) {
+								for (var lang in cslItem.multi._keys[variable]) {
+									item.setField(fieldID, cslItem.multi._keys[variable][lang], false, lang);
+								}
+							}
 						} else {
 							item[field] = cslItem[variable];
+							if (cslItem.multi) {
+								item.multi.main = cslItem.multi.main[variable];
+								if (cslItem.multi._keys[variable]) {
+									for (var lang in cslItem.multi._keys[variable]) {
+										item.multi._keys[field][lang] = cslItem.multi._keys[variable][lang]
+									}
+								}
+							}
 						}
 					}
 				}
@@ -1663,17 +2167,26 @@ Zotero.Utilities = {
 		}
 		
 		// separate name variables
+		var doneNames = {};
 		for(var field in CSL_NAMES_MAPPINGS) {
 			if(CSL_NAMES_MAPPINGS[field] in cslItem) {
 				var creatorTypeID = Zotero.CreatorTypes.getID(field);
 				if(!Zotero.CreatorTypes.isValidForItemType(creatorTypeID, itemTypeID)) {
 					creatorTypeID = Zotero.CreatorTypes.getPrimaryIDForType(itemTypeID);
 				}
+				if (!doneNames[creatorTypeID]) {
+					doneNames[creatorTypeID] = {};
+				}
 				
 				var nameMappings = cslItem[CSL_NAMES_MAPPINGS[field]];
 				for(var i in nameMappings) {
-					var cslAuthor = nameMappings[i],
-						creator = isZoteroItem ? new Zotero.Creator() : {};
+					var cslAuthor = nameMappings[i];
+					var creator = isZoteroItem ? new Zotero.Creator() : {multi:{_key:{}}};
+					if (isZoteroItem) {
+						creator.libraryID = libraryID;
+					}
+					if (doneNames[creatorTypeID][cslAuthor.family + '/' + cslAuthor.given]) continue;
+					doneNames[creatorTypeID][cslAuthor.family + '/' + cslAuthor.given] = true;
 					if(cslAuthor.family || cslAuthor.given) {
 						if(cslAuthor.family) creator.lastName = cslAuthor.family;
 						if(cslAuthor.given) creator.firstName = cslAuthor.given;
@@ -1683,11 +2196,47 @@ Zotero.Utilities = {
 					} else {
 						continue;
 					}
-					
+
 					if(isZoteroItem) {
-						item.setCreator(item.getCreators().length, creator, creatorTypeID);
+						var orderIndex = item.getCreators().length;
+						var mainLang = null;
+						if (cslAuthor.multi) {
+							mainLang = cslAuthor.multi.main;
+						}
+						item.setCreator(orderIndex, creator, creatorTypeID, mainLang, true, true);
+						// Compose multilingual creators and add to object
+						if (cslAuthor.multi) {
+							for (var lang in cslAuthor.multi._key) {
+								var creatorVariant = new Zotero.Creator();
+								creatorVariant.libraryID = libraryID;
+								var cslVariant = cslAuthor.multi._key[lang];
+								if (creator.fieldMode === 1) {
+									creatorVariant.lastName = cslVariant.literal ? cslVariant.literal : cslVariant.family;
+								} else {
+									creatorVariant.lastName = cslVariant.family;
+									creatorVariant.firstName = cslVariant.given;
+								}
+								item.setCreator(orderIndex, creatorVariant, creatorTypeID, lang);
+							}
+						}
 					} else {
 						creator.creatorType = Zotero.CreatorTypes.getName(creatorTypeID);
+						if (cslAuthor.multi) {
+							for (var lang in cslAuthor.multi._key) {
+								var creatorVariant = {};
+								var segmentMap = {
+									family:'lastName',
+									given:'firstName',
+									literal:'lastName'
+								};
+								for (var segment in segmentMap) {
+									if (cslAuthor.multi._key[lang][segment]) {
+										creatorVariant[segmentMap[segment]] = cslAuthor.multi._key[lang][segment];
+									}
+								}
+								creator.multi._key[lang] = creatorVariant;
+							}
+						}
 						if(Zotero.isFx && !Zotero.isBookmarklet && Zotero.platformMajorVersion >= 32) {
 							creator = Components.utils.cloneInto(creator, item);
 						}
@@ -1755,6 +2304,24 @@ Zotero.Utilities = {
 				}
 			}
 		}
+
+		if (portableJSON) {
+			// For decoding
+			// item in this case is always a Zotero item
+			var data = {};
+			data.libraryID = libraryID;
+			data.itemTypeID = Zotero.ItemTypes.getID(zoteroType);
+			var extra = cslItem.note ? cslItem.note : "";
+			var changedFields = {};
+			var pos = item.getCreators().length;
+			// Decoding ops
+			var obj = Zotero.Sync.Server.Data.decodeMlzFields(item,data,extra,changedFields);
+			Zotero.Sync.Server.Data.removeMlzFieldDeletes(item,data,obj);
+			if (pos) {
+				Zotero.Sync.Server.Data.decodeMlzCreators(item,obj,pos);
+				Zotero.Sync.Server.Data.removeMlzCreatorDeletes(item,obj);
+			}
+		}
 	},
 	
 	/**
@@ -1857,5 +2424,70 @@ Zotero.Utilities = {
 	 * Provides unicode support and other additional features for regular expressions
 	 * See https://github.com/slevithan/xregexp for usage
 	 */
-	 "XRegExp": XRegExp
+	"XRegExp": XRegExp,
+
+	"getCourtName":function(jurisdictionID, courtID, fallback) {
+		var countryID = jurisdictionID.split(":")[0];
+		var sql = "SELECT courtName FROM jurisdictions JU "
+			+ "JOIN courtJurisdictionLinks CJL USING(jurisdictionIdx) "
+			+ "JOIN courts USING(courtIdx) "
+			+ "JOIN countryCourtLinks CCL USING(countryCourtLinkIdx) "
+			+ "JOIN courtNames CN USING(courtNameIdx) "
+			+ "JOIN jurisdictions CO ON CO.jurisdictionIdx=CCL.countryIdx "
+			+ "WHERE courtID=? AND JU.jurisdictionID=? AND CO.jurisdictionID=?";
+		var res = Zotero.DB.valueQuery(sql,[courtID,jurisdictionID,countryID]);
+		return res || !fallback ? res : courtID;
+	},
+
+	"getCourtID":function(jurisdictionID, courtName, fallback) {
+		var countryID = jurisdictionID.split(":")[0];
+		var sql = "SELECT courtID FROM jurisdictions JU "
+			+ "JOIN courtJurisdictionLinks CJL USING(jurisdictionIdx) "
+			+ "JOIN courts USING(courtIdx) "
+			+ "JOIN countryCourtLinks CCL USING(countryCourtLinkIdx) "
+			+ "JOIN courtNames CN USING(courtNameIdx) "
+			+ "JOIN jurisdictions CO ON CO.jurisdictionIdx=CCL.countryIdx "
+			+ "WHERE courtName=? AND JU.jurisdictionID=? AND CO.jurisdictionID=?";
+		var res = Zotero.DB.valueQuery(sql,[courtName,jurisdictionID,countryID]);
+		return res || !fallback ? res : courtName;
+	},
+
+	"getJurisdictionName":function(jurisdictionID, fallback) {
+		var sql = "SELECT jurisdictionName FROM jurisdictions "
+			+ "WHERE jurisdictionID=?;";
+		var res = Zotero.DB.valueQuery(sql, [jurisdictionID]);
+		return res || !fallback ? res : jurisdictionID;
+	},
+
+	"getJurisdictionID":function(jurisdictionName, fallback) {
+		var sql = "SELECT jurisdictionID FROM jurisdictions "
+			+ "WHERE jurisdictionName=? OR jurisdictionName LIKE ?;";
+		var res = Zotero.DB.valueQuery(sql, [jurisdictionName, '%|' + jurisdictionName]);
+		return res || !fallback ? res : jurisdictionName;
+	},
+
+	"remapCourtName":function(oldJurisdictionID,newJurisdictionID,courtIdOrName) {
+		if (!courtIdOrName) {
+			return "";
+		}
+		// Do we have an ID or a name
+		var isId = false;
+		if (courtIdOrName.match(/^[.a-z0-9]$/)) {
+			isId = true;
+		}
+		var newValue = courtIdOrName;
+		if (isId) {
+			// Try for a name in the new jurisdiction
+			var courtName = Zotero.Utilities.getCourtName(newJurisdictionID, courtIdOrName);
+			if (!courtName) {
+				// No luck, so try in the old jurisdiction, falling back to the bare ID
+				newValue = Zotero.Utilities.getCourtName(oldJurisdictionID, courtIdOrName, true);
+			}
+			// If found in the new jurisdiction, reuse the ID
+		} else {
+			// Try to map to an ID in the new jurisdiction, falling back to the name
+			newValue = Zotero.Utilities.getCourtID(newJurisdictionID, courtIdOrName, true);
+		}
+		return newValue;
+	}
 }
