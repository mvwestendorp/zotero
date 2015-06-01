diff --git a/chrome/content/zotero/integration/addCitationDialog.js b/chrome/content/zotero/integration/addCitationDialog.js
index 17ee4ef..594856d 100644
--- a/chrome/content/zotero/integration/addCitationDialog.js
+++ b/chrome/content/zotero/integration/addCitationDialog.js
@@ -31,7 +31,8 @@ var Zotero_Citation_Dialog = new function () {
 		"suffix":["value", ""],
 		"label":["selectedIndex", 0],
 		"locator":["value", ""],
-		"suppress-author":["checked", false]
+		"suppress-author":["checked", false],
+		"suppress-trailing-punctuation":["checked", false]
 	};
 	
 	var _accepted = false;
@@ -156,7 +157,11 @@ var Zotero_Citation_Dialog = new function () {
 				
 				for(var box in _preserveData) {
 					var property = _preserveData[box][0];
-					if(io.citation.citationItems[0][box]) {
+					if (box == "suppress-trailing-punctuation") {
+						if (io.citation.properties[box]) {
+							document.getElementById(box).checked = io.citation.properties[box];
+						}
+					} else if (io.citation.citationItems[0][box]) {
 						if(box === "label") {
 							document.getElementById(box)[property] = _locatorIndexArray[io.citation.citationItems[0][box]];
 						} else {
@@ -181,7 +186,14 @@ var Zotero_Citation_Dialog = new function () {
 						for(var box in _preserveData) {
 							var domBox = document.getElementById(box);
 							var property = _preserveData[box][0];
-							if("undefined" !== typeof io.citation.citationItems[i][box]) {
+
+							if (box === "suppress-trailing-punctuation") {
+								if ("undefined" !== typeof io.citation.properties[box]) {
+									domBox[property] = io.citation.properties[box];
+								} else {
+									domBox[property] = _preserveData[box][1];
+								}
+							} else if ("undefined" !== typeof io.citation.citationItems[i][box]) {
 								if(box === "label") {
 									domBox[property] = _locatorIndexArray[io.citation.citationItems[i][box]];
 								} else {
@@ -691,7 +703,13 @@ var Zotero_Citation_Dialog = new function () {
 			
 			// save property
 			if(_lastSelected) {
-				if(property == "label") {
+				if (box == "suppress-trailing-punctuation") {
+					for (var key in _itemData) {
+						if (_itemData[key]) {
+							_itemData[key][box] = domBox[property];
+						}
+					}
+				} else if(property == "label") {
 					_itemData[_lastSelected][box] = _locatorNameArray[domBox.selectedIndex];
 				} else {
 					_itemData[_lastSelected][box] = domBox[property];
@@ -700,7 +718,7 @@ var Zotero_Citation_Dialog = new function () {
 			// restore previous property
 			if(itemDataID) {
 				domBox.disabled = false;
-				if(_itemData[itemDataID] && _itemData[itemDataID][box] !== undefined) {
+				if (_itemData[itemDataID] && _itemData[itemDataID][box] !== undefined) {
 					if(property == "label") {
 						domBox[property] = _locatorIndexArray[_itemData[itemDataID][box]];
 					} else {
@@ -734,6 +752,8 @@ var Zotero_Citation_Dialog = new function () {
 						// label is special everywhere
 						if (key === "label") {
 							citationItem.label = _locatorNameArray[_itemData[itemDataID].label];
+						} else if (key === "suppress-trailing-punctuation") {
+							io.citation.properties["suppress-trailing-punctuation"] = _itemData[itemDataID][key];
 						} else if (_itemData[itemDataID][key]) {
 							citationItem[key] = _itemData[itemDataID][key];
 						}
@@ -754,6 +774,8 @@ var Zotero_Citation_Dialog = new function () {
 					var property = _preserveData[box][0];
 					if(box == "label") {
 						citationItem[box] = _locatorNameArray[document.getElementById(box).selectedIndex];
+					} else if (box == "suppress-trailing-punctuation") {
+						io.citation.properties[box] = !!document.getElementById(box)[property];
 					} else {
 						var prop = document.getElementById(box)[property];
 						if(prop !== "" && prop !== false) citationItem[box] = prop;
@@ -789,6 +811,7 @@ var Zotero_Citation_Dialog = new function () {
 		itemNode.setAttribute("value", itemDataID);
 		itemNode.setAttribute("label", item.getDisplayTitle());
 		itemNode.setAttribute("class", "listitem-iconic");
+		itemNode.setAttribute("crop", "center");
 		itemNode.setAttribute("image", item.getImageSrc());
 		_citationList.appendChild(itemNode);
 		return itemNode;
