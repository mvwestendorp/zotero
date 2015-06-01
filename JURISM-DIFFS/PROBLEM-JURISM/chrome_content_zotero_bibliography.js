diff --git a/chrome/content/zotero/bibliography.js b/chrome/content/zotero/bibliography.js
index c61be77..7d72030 100644
--- a/chrome/content/zotero/bibliography.js
+++ b/chrome/content/zotero/bibliography.js
@@ -38,17 +38,32 @@ var Zotero_File_Interface_Bibliography = new function() {
 	this.init = init;
 	this.styleChanged = styleChanged;
 	this.acceptSelection = acceptSelection;
-	
+	this.setLangPref = setLangPref;
+	this.citationPrimary = citationPrimary;
+	this.citationSecondary = citationSecondary;
+	this.citationSetAffixes = citationSetAffixes;
+	this.setLanguageRoleHighlight = setLanguageRoleHighlight;
+	this.openProjectName = openProjectName;
+	this.closeProjectName = closeProjectName;
+	this.toggleGroupNameSafetyCatch = toggleGroupNameSafetyCatch;
+	this.setGroupName = setGroupName;
+	this.toggleTitleLinks = toggleTitleLinks;
+
 	/*
 	 * Initialize some variables and prepare event listeners for when chrome is done
 	 * loading
 	 */
 	function init() {
+		//Zotero.debug("XXX == init() ==");
 		// Set font size from pref
 		// Affects bibliography.xul and integrationDocPrefs.xul
-		var bibContainer = document.getElementById("zotero-bibliography-container");
-		if(bibContainer) {
-			Zotero.setFontSize(document.getElementById("zotero-bibliography-container"));
+		var bibContainerMain = document.getElementById("zotero-bibliography-container-main");
+		if(bibContainerMain) {
+			Zotero.setFontSize(bibContainerMain);
+		}
+		var bibContainerInternal = document.getElementById("zotero-bibliography-container-internal");
+		if(bibContainerInternal) {
+			Zotero.setFontSize(bibContainerInternal);
 		}
 		
 		if(window.arguments && window.arguments.length) {
@@ -65,6 +80,10 @@ var Zotero_File_Interface_Bibliography = new function() {
 		if(!_io.style) {
 			_io.style = Zotero.Prefs.get("export.lastStyle");
 			_saveStyle = true;
+
+			// if language params not set, get from SQL prefs
+			// and Firefox preferences
+			Zotero.setCitationLanguages(_io);
 		}
 		
 		// add styles to list
@@ -82,6 +101,15 @@ var Zotero_File_Interface_Bibliography = new function() {
 			}
 			index++;
 		}
+
+		var linkTitlesToggle = document.getElementById('zotero-bibliography-title-links');
+		if (linkTitlesToggle) {
+			if (Zotero.Prefs.get('linkTitles')) {
+				linkTitlesToggle.setAttribute('checked', true);
+			} else {
+				linkTitlesToggle.setAttribute('checked', false);
+			}
+		}
 		
 		if (selectIndex < 1) {
 			selectIndex = 0;
@@ -140,21 +168,87 @@ var Zotero_File_Interface_Bibliography = new function() {
 				document.getElementById("automaticJournalAbbreviations-checkbox").checked = true;
 			}
 		}
+		if(document.getElementById("suppressTrailingPunctuation-checkbox")) {
+			if(_io.suppressTrailingPunctuation === undefined) {
+				_io.suppressTrailingPunctuation = Zotero.Prefs.get("export.citeSuppressTrailingPunctuation");
+			}
+			if (_io.suppressTrailingPunctuation) {
+				document.getElementById("suppressTrailingPunctuation-checkbox").checked = true;
+			}
+		}
 		if(document.getElementById("storeReferences")) {
 			if(_io.storeReferences || _io.storeReferences === undefined) {
 				document.getElementById("storeReferences").checked = true;
 				if(_io.requireStoreReferences) document.getElementById("storeReferences").disabled = true;
 			}
 		}
+
+		// Set project and group name (integrationDocPrefs.xul only)
+
+		displayProjectName();
+		displayGroupName();
+
+
+		// Also ONLY for integrationDocPrefs.xul: update language selections
+		
+		// initialize options display from provided params
+
+		var citationPrefNames = ['Persons', 'Institutions', 'Titles', 'Journals', 'Publishers', 'Places'];
+		for (var i = 0, ilen = citationPrefNames.length; i < ilen; i += 1) {
+			var prefname = citationPrefNames[i].toLowerCase();
+			var citationRoleNames = ["orig","translit","translat"];
+			citationLangSet(citationPrefNames[i], true);
+			for (var j = 0, jlen = citationRoleNames.length; j < jlen; j += 1) {
+				var rolename = citationRoleNames[j];
+				var citationPrefNode = document.getElementById(prefname + '-radio-orig');
+				if (citationPrefNode) {
+					if (_io['citationLangPrefs'+citationPrefNames[i]] && _io['citationLangPrefs'+citationPrefNames[i]].length) {
+						var selectedCitationPrefNode = document.getElementById(prefname + "-radio-" + _io['citationLangPrefs'+citationPrefNames[i]][0]);
+						selectedCitationPrefNode.checked = true;
+					}
+				}
+			}
+		}
+
+		var langPrefs = document.getElementById('lang-prefs');
+		if (langPrefs){
+			for (var i = langPrefs.childNodes.length -1; i > 0; i += -1) {
+				langPrefs.removeChild(langPrefs.childNodes.item(i));
+			}
+			var tags = Zotero.DB.query("SELECT * FROM zlsTags ORDER BY tag");
+			for (var i = 0, ilen = tags.length; i < ilen; i += 1) {
+				var langSelectors = [];
+				var langSelectorTypes = [
+					'citationTransliteration',
+					'citationTranslation',
+					'citationSort'
+				];
+				for (var j = 0, jlen = langSelectorTypes.length; j < jlen; j += 1) {
+					var newselector = buildSelector('default',tags[i],langSelectorTypes[j]);
+					if ((j % 3) == 0) {
+						newselector.setAttribute("class", "translit");
+						newselector.setAttribute("onmouseover", "Zotero_File_Interface_Bibliography.setLanguageRoleHighlight(['translit-primary', 'translit-secondary', 'translit'],true);");
+						newselector.setAttribute("onmouseout", "Zotero_File_Interface_Bibliography.setLanguageRoleHighlight(['translit-primary', 'translit-secondary', 'translit'],false);");
+					} else if ((j % 3) == 1) {
+						newselector.setAttribute("class", "translat");
+						newselector.setAttribute("onmouseover", "Zotero_File_Interface_Bibliography.setLanguageRoleHighlight(['translat-primary', 'translat-secondary', 'translat'],true);");
+						newselector.setAttribute("onmouseout", "Zotero_File_Interface_Bibliography.setLanguageRoleHighlight(['translat-primary', 'translat-secondary', 'translat'],false);");
+					}
+					langSelectors.push(newselector);
+				}
+				addSelectorRow(langPrefs,langSelectors);
+			}
+		}
 		
 		// set style to false, in case this is cancelled
 		_io.style = false;
 	}
-	
+
 	/*
 	 * Called when style is changed
 	 */
 	function styleChanged(index) {
+		//Zotero.debug("XXX == styleChanged() ==");
 		// When called from init(), selectedItem isn't yet set
 		if (index != undefined) {
 			var selectedItem = document.getElementById("style-listbox").getItemAtIndex(index);
@@ -207,6 +301,7 @@ var Zotero_File_Interface_Bibliography = new function() {
 	}
 
 	function acceptSelection() {
+		//Zotero.debug("XXX == acceptSelection() ==");
 		// collect code
 		_io.style = document.getElementById("style-listbox").selectedItem.value;
 		if(document.getElementById("output-method-radio")) {
@@ -225,6 +320,8 @@ var Zotero_File_Interface_Bibliography = new function() {
 			if(!automaticJournalAbbreviationsEl.hidden && _saveStyle) {
 				Zotero.Prefs.set("cite.automaticJournalAbbreviations", _io.automaticJournalAbbreviations);
 			}
+			var suppressTrailingPunctuationEl = document.getElementById("suppressTrailingPunctuation-checkbox");
+			_io.suppressTrailingPunctuation = suppressTrailingPunctuationEl.checked;
 			_io.useEndnotes = document.getElementById("displayAs").selectedIndex;
 			_io.fieldType = (document.getElementById("formatUsing").selectedIndex == 0 ? _io.primaryFieldType : _io.secondaryFieldType);
 			_io.storeReferences = document.getElementById("storeReferences").checked;
@@ -236,4 +333,485 @@ var Zotero_File_Interface_Bibliography = new function() {
 			Zotero.Prefs.set("export.lastStyle", _io.style);
 		}
 	}
-}
\ No newline at end of file
+	/*
+	 * ONLY FOR integrationDocPrefs.xul: language selection utility functions
+	 */
+	function addSelectorRow(target,selectors) {
+		//Zotero.debug("XXX == addSelectorRow() ==");
+		var row = document.createElement('row');
+		row.setAttribute("class", "compact");
+		for (var i = 0, ilen = selectors.length; i < ilen; i += 1) {
+			row.appendChild(selectors[i]);
+		}
+		target.appendChild(row);
+	}
+		
+	function setLanguageRoleHighlight(classes, mode) {
+		for (var i = 0, ilen = classes.length; i < ilen; i += 1) {
+			var nodes = document.getElementsByClassName(classes[i]);
+			for (var j = 0, jlen = nodes.length; j < jlen; j += 1) {
+				var lst;
+				var str = nodes[j].getAttribute("class");
+				if (str) {
+					lst = str.split(/\s+/);
+				} else {
+					lst = [];
+				}
+				if (mode) {
+					lst.push("language-role-highlight");
+					nodes[j].setAttribute("class", lst.join(" "));
+				} else {
+					for (var k = lst.length - 1; k > -1; k += -1) {
+						if (lst[k] === "language-role-highlight") {
+							lst = lst.slice(0, k).concat(lst.slice(k + 1));
+						}
+					}
+					nodes[j].setAttribute("class", lst.join(" "));
+				}
+			}
+		}
+	};
+
+	function buildSelector (profile,tagdata,param) {
+		//Zotero.debug("XXX == buildSelector() ==");
+		var checkbox = document.createElement('checkbox');
+		if (_io[param] && _io[param].indexOf(tagdata.tag) > -1) {
+			checkbox.setAttribute('checked',true);
+		}
+		checkbox.setAttribute('profile', profile);
+		checkbox.setAttribute('param', param);
+		checkbox.setAttribute('oncommand', 'Zotero_File_Interface_Bibliography.setLangPref(this);');
+		checkbox.setAttribute('value',tagdata.tag);
+
+		checkbox.setAttribute('label',tagdata.nickname);
+		checkbox.setAttribute('type','checkbox');
+		var hbox = document.createElement('hbox');
+		hbox.setAttribute("style", "overflow:hidden;margin-top:0px;margin-bottom:0px;");
+		hbox.setAttribute('flex','1');
+		hbox.appendChild(checkbox);
+		var hboxfil = document.createElement('hbox');
+		hboxfil.setAttribute('flex','1');
+		hbox.appendChild(hboxfil);
+		return hbox;
+	}
+		
+	function setLangPref(target) {
+		//Zotero.debug("XXX == setLangPref() ==");
+		var profile = target.getAttribute('profile');
+		var param = target.getAttribute('param');
+		var tag = target.getAttribute('value');
+		var enable = target.hasAttribute('checked');
+		if (enable) {
+			if (_io[param].indexOf(tag) === -1) {
+				if (!_io[param]) {
+					_io[param] = [];
+				}
+				_io[param].push(tag);
+			}
+		} else {
+			for (var i = _io[param].length - 1; i > -1; i += -1) {
+				if (_io[param][i] === tag) {
+					_io[param] = _io[param].slice(0,i).concat(_io[param].slice(i + 1));
+				}
+			}
+		}
+	}
+
+	function capFirst(str) {
+		return str[0].toUpperCase() + str.slice(1);
+	}
+
+	function citationPrimary(node) {
+		var lst = node.getAttribute("id").split('-');
+		var base = lst[0];
+		var primarySetting = lst[2];
+		var settings = _io['citationLangPrefs'+capFirst(base)];
+		if (!settings) {
+			settings = ['orig'];
+		}
+		_io['citationLangPrefs'+capFirst(base)] = [primarySetting].concat(settings.slice(1));
+		// Second true is for a radio click
+		citationLangSet(capFirst(base), true, true);
+	}
+
+	function citationSecondary(node) {
+		//Zotero.debug("XXX == citationSecondary() ==");
+		var lst = node.getAttribute("id").split('-');
+		var lowerBase = lst[0];
+		var upperBase = lst[0][0].toUpperCase() + lst[0].slice(1);
+		var addme = false;
+		var cullme = false;
+		var secondarySetting = lst[2];
+		var forms = ['orig', 'translit', 'translat'];
+		// Check-box has not yet changed when this executes.
+		if (!node.checked) {
+			addme = secondarySetting;
+		} else {
+			cullme = secondarySetting;
+			// Also unset configured affixes.
+			citationSetAffixes(node);
+		}
+		var settings = _io['citationLangPrefs'+upperBase];
+		var primarySetting = settings[0];
+		var secondaries = settings.slice(1);
+		for (var i = 0, ilen = secondaries.length; i < ilen; i += 1) {
+			if (forms.indexOf(secondaries[i]) === -1) {
+				secondaries = secondaries.slice(0, i).concat(secondaries.slice(i + 1));
+			}
+		}
+		if (addme && secondaries.indexOf(secondarySetting) === -1) {
+			secondaries.push(secondarySetting);
+		}
+		if (cullme) {
+			var cullidx = secondaries.indexOf(secondarySetting);
+			if (cullidx > -1) {
+				secondaries = secondaries.slice(0, cullidx).concat(secondaries.slice(cullidx + 1));
+			}
+		}
+		_io['citationLangPrefs'+upperBase] = [primarySetting].concat(secondaries);
+		if (addme || cullme) {
+			citationLangSet(upperBase);
+		}
+	};
+
+	function citationLangSet (name, init, radioClick) {
+		var settings = _io['citationLangPrefs'+name];
+		if (!settings || !settings[0]) {
+			settings = ['orig'];
+		}
+		var nodes = [];
+		var forms = ['orig', 'translit', 'translat'];
+		var base = name.toLowerCase();
+		// get node
+		// set node from pref
+		if (init) {
+			citationGetAffixes();
+			var currentPrimaryID = base + "-radio-" + settings[0];
+			var node = document.getElementById(currentPrimaryID);
+			var control = node.control;
+			control.selectedItem = node;
+			
+			var translitID = base + "-radio-translit";
+			var translitNode = document.getElementById(translitID);
+			nodes.push(translitNode);
+			
+			for (var i = 0, ilen = forms.length; i < ilen; i += 1) {
+				nodes.push(document.getElementById(base + "-checkbox-" + forms[i]));
+			}
+			for (var i = 0, ilen = nodes.length; i < ilen; i += 1) {
+				nodes[i].checked = false;
+				for (var j = 1, jlen = settings.length; j < jlen; j += 1) {
+					if (nodes[i].id === base + '-checkbox-' + settings[j]) {
+						nodes[i].checked = true;
+					}
+				}
+				if (nodes[i].id === base + "-checkbox-" + settings[0]) {
+					nodes[i].checked = false;
+					var idx = settings.slice(1).indexOf(settings[0]);
+					if (idx > -1) {
+						// +1 and +2 b/c first-position item (primary) is sliced off for this check
+						settings = settings.slice(0,idx + 1).concat(settings.slice(idx + 2));
+						_io['citationLangPrefs'+name] = settings;
+					}
+					citationSetAffixes(nodes[i]);
+					nodes[i].disabled = true;
+				} else if (radioClick && nodes[i].id === translitID) {
+					// true invokes a quash of the affixes
+					if (currentPrimaryID === translitID) {
+						citationSetAffixes(nodes[i]);
+					} else {
+						citationSetAffixes(nodes[i], null, true);
+					}
+				} else {
+					nodes[i].disabled = false;
+				}
+			}
+		}
+	}
+
+	function citationSetAffixes (node, affixNode, quashPrimaryAffixes) {
+		if (!node) {
+			node = document.popupNode;
+		}
+		var currentId = node.id;
+		var prefixNode = document.getElementById(node.id + '-prefix');
+		var suffixNode = document.getElementById(node.id + '-suffix');
+		if (!affixNode || quashPrimaryAffixes) {
+			prefixNode.value = "";
+			suffixNode.value = "";
+		} else {
+			var prefix = affixNode.value.split("|")[0];
+			if (!prefix) {
+				prefix = "";
+			}
+			var suffix = affixNode.value.split("|")[1];
+			if (!suffix) {
+				suffix = "";
+			}
+			prefixNode.value = prefix;
+			suffixNode.value = suffix;
+		}
+		// Do something to store this data in Prefs
+		var types = ['persons', 'institutions', 'titles', 'journals', 'publishers', 'places'];
+		var forms = ['orig', 'translit', 'translat'];
+		var affixList = [];
+		for (var i = 0, ilen = types.length; i < ilen; i += 1) {
+			affixListPush(types[i], "radio", "translit", affixList, "prefix");
+			affixListPush(types[i], "radio", "translit", affixList, "suffix");
+			for (var j = 0, jlen = forms.length; j < jlen; j += 1) {
+				affixListPush(types[i], "checkbox", forms[j], affixList, "prefix");
+				affixListPush(types[i], "checkbox", forms[j], affixList, "suffix");
+			}
+		}
+		_io['citationAffixes'] = affixList;
+	}
+
+	function affixListPush(type, boxtype, form, lst, affix) {
+		var elem = document.getElementById(type + "-" + boxtype + "-" + form + "-" +affix);
+		if (!elem.value) {
+			elem.value = "";
+		}
+		lst.push(elem.value);
+	};
+
+	function citationGetAffixes () {
+		var affixList = null;
+		if (_io['citationAffixes']) {
+			if (_io['citationAffixes'].length === 48) {
+				affixList = _io['citationAffixes'];
+			}
+		}
+		if (!affixList) {
+			affixList = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,];
+		}
+		var types = ['persons', 'institutions', 'titles', 'journals', 'publishers', 'places'];
+		var forms = ['orig', 'translit', 'translat'];
+		var count = 0;
+		for (var i = 0, ilen = types.length; i < ilen; i += 1) {
+			count =  citationGetAffixesAction(types[i], "radio", "translit", affixList, count);
+			
+			for (var j = 0, jlen = forms.length; j < jlen; j += 1) {
+				count = citationGetAffixesAction(types[i], "checkbox", forms[j], affixList, count);
+			}
+		}
+	}
+
+	function citationGetAffixesAction(type, boxtype, form, affixList, count) {
+		var affixPos = ['prefix', 'suffix']
+		for (var k = 0, klen = affixPos.length; k < klen; k += 1) {
+			var id = type + '-' + boxtype + '-' + form + '-' + affixPos[k];
+			var node = document.getElementById(id);
+			if (affixList[count]) {
+				node.value = affixList[count];
+		}
+			count += 1;
+		}
+		return count;
+	}
+
+	var keyCodeMap = {
+		13:'Enter',
+		9:'Tab',
+		27:'Esc',
+		38:'Up',
+		40:'Down'
+	}
+
+	function displayProjectName () {
+		var projectName = document.getElementById('project-name');
+		if (projectName) {
+			projectName.value = _io.projectName ? _io.projectName : '';
+		}
+	}
+
+	function openProjectName (event) {
+		var node = event.target;
+		var projectName = node.value;
+		var parent = node.parentNode;
+		parent.removeChild(node);
+		var newNode = document.createElement('textbox');
+		newNode.setAttribute('id', 'project-name');
+		newNode.setAttribute('flex','1');
+		newNode.setAttribute('onkeydown','Zotero_File_Interface_Bibliography.closeProjectName(event);');
+		newNode.setAttribute('value',projectName);
+		parent.appendChild(newNode);
+		newNode.focus();
+	}
+
+	function closeProjectName (event) {
+		if (keyCodeMap[event.keyCode] === 'Enter') {
+			event.preventDefault();
+			var node = event.target;
+			var projectName = node.value;
+			_io['projectName'] = projectName;
+			var parent = node.parentNode;
+			parent.removeChild(node);
+			var newNode = document.createElement('label');
+			newNode.setAttribute('id', 'project-name');
+			newNode.setAttribute('flex','1');
+			newNode.setAttribute('onclick','Zotero_File_Interface_Bibliography.openProjectName(event);');
+			newNode.setAttribute('value',projectName);
+			newNode.classList.add('zotero-clicky');
+			newNode.classList.add('thin-border');
+			parent.appendChild(newNode);
+		}
+	}
+
+	var allGroups = Zotero.Groups.getAll();
+
+	function displayGroupName () {
+		// Zotero.debug("MLZ: == displayGroupName() ==");
+		// Check if we have access to the target group at all (change message if not)
+		// Check if we have write access to it as well (disable if not)
+		// If both of the above check out, set the target group as the list selection.
+
+		var groupIdSetting = _io.groupID ? _io.groupID : 0;
+		var groupNameSetting = _io.groupName ? _io.groupName : '';
+
+		var groupName = document.getElementById('group-name');
+		var groupNamePopup = document.getElementById('group-name-popup');
+		for (var i=1,ilen=groupNamePopup.childNodes.length;i<ilen;i+=1) {
+			groupNamePopup.removeChild(groupNamePopup.childNodes[1]);
+		}
+		// Set top list item as default
+		var selectedNode = null;
+
+		// Get a list of groups to which user has write access
+		var groups = allGroups;
+		for (var i=0,ilen=groups.length;i<ilen;i+=1) {
+			var group = groups[i];
+			var groupID = group.id;
+			var name = group.name;
+			if (!group.editable) {
+				var menuItem = document.createElement('label');
+				menuItem.setAttribute('style','font-weight:bold;color:#999999;');
+				menuItem.setAttribute('value','[' + name + ']');
+				if (groupIdSetting == groupID) {
+					groupName.setAttribute('label',name);
+					selectedNode = false;
+				}
+			} else {
+				var menuItem = document.createElement('menuitem');
+				menuItem.setAttribute('value',groupID);
+				menuItem.setAttribute('label',name);
+				if (groupIdSetting == groupID) {
+					selectedNode = menuItem;
+				}
+			}
+			groupNamePopup.appendChild(menuItem);
+		}
+		if (selectedNode === null) {
+			// No setting, or setting is not a known group
+			if (_io['groupName']) {
+				groupName.setAttribute('label',_io['groupName']);
+				toggleGroupNameSafetyCatch(true);
+				setErrorNode(groupName,3);
+			} else {
+				groupName.selectedItem = groupNamePopup.childNodes[0];
+				toggleGroupNameSafetyCatch(false,true);
+				setErrorNode(groupName,1);
+			}
+		} else if (selectedNode === false) {
+			// Setting is a group to which we do not have write access
+			toggleGroupNameSafetyCatch(true);
+			setErrorNode(groupName,2)
+		} else {
+			// Setting is a known group to which we have write access. Yay.
+			groupName.selectedItem = selectedNode;
+			toggleGroupNameSafetyCatch(true);
+			setErrorNode(groupName,0)
+		}
+		groupName.addEventListener("select",setGroupName);
+	}
+
+	function setErrorNode(groupName,pos) {
+		var errorNodes = [];
+		errorNodes[0] = document.getElementById('group-no-error');
+		errorNodes[1] = document.getElementById('group-unselected-error');
+		errorNodes[2] = document.getElementById('group-readonly-error');
+		errorNodes[3] = document.getElementById('group-nonexistent-error');
+		function setOne (pos) {
+			for (var i=0,ilen=errorNodes.length;i<ilen;i+=1) {
+				if (i === pos) {
+					errorNodes[i].hidden = false;
+				} else {
+					errorNodes[i].hidden = true;
+				}
+			}
+		};
+		
+		setOne(pos);
+		switch (pos) {
+		case 0:
+			groupName.style['font-weight'] = 'bold';
+			groupName.style.color = 'blue';
+			groupName.style.opacity = '1.0';
+			break;
+			;;
+		case 1:
+			groupName.style['font-weight'] = 'normal';
+			groupName.style.color = 'black';
+			groupName.style.opacity = '1.0';
+			break;
+			;;
+		case 2:
+			groupName.style['font-weight'] = 'bold';
+			groupName.style.color = 'red';
+			groupName.style.opacity = '0.6';
+			break;
+			;;
+		case 3:
+			groupName.style['font-weight'] = 'bold';
+			groupName.style.color = 'red';
+			groupName.style.opacity = '1.0';
+			break;
+			;;
+		}
+	}
+
+	function toggleGroupNameSafetyCatch (forceCheck, disableToggle) {
+		var groupName = document.getElementById('group-name');
+		var groupNameSafetyCatch = document.getElementById('group-name-safety-catch');
+			groupNameSafetyCatch.disabled = false;
+		if (forceCheck === true) {
+			groupNameSafetyCatch.checked = false;
+		} else if (forceCheck === false) {
+			groupNameSafetyCatch.checked = true;
+			groupNameSafetyCatch.disabled = true;
+		}
+		if (groupNameSafetyCatch.checked) {
+			groupName.disabled = false;
+			groupNameSafetyCatch.checked = true;
+		} else {
+			groupName.disabled = true;
+			groupNameSafetyCatch.checked = false;
+		}
+	}
+
+	function setGroupName (event) {
+		var groupName = document.getElementById('group-name');
+		var groupNamePopup = document.getElementById('group-name-popup');
+		if (groupName.value == 0) {
+			toggleGroupNameSafetyCatch(false);
+		} else {
+			toggleGroupNameSafetyCatch(true);
+		}
+		if (groupName.value == 0) {
+			_io['groupID'] = '';
+			_io['groupName'] = '';
+		} else {
+			_io['groupID'] = groupName.value;
+			_io['groupName'] = groupName.label;
+		}
+		displayGroupName();
+	}
+
+	function toggleTitleLinks (event) {
+		if (event.target.checked) {
+			Zotero.Prefs.set('linkTitles', true);
+		} else {
+			Zotero.Prefs.set('linkTitles', false);
+		}
+	}
+}
+
