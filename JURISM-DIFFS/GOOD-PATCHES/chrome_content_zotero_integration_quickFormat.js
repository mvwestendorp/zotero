diff --git a/chrome/content/zotero/integration/quickFormat.js b/chrome/content/zotero/integration/quickFormat.js
index 9d87ea7..a43b9d7 100644
--- a/chrome/content/zotero/integration/quickFormat.js
+++ b/chrome/content/zotero/integration/quickFormat.js
@@ -38,7 +38,7 @@ var Zotero_QuickFormat = new function () {
 		separatorHeight = 0, currentLocator, currentLocatorLabel, currentSearchTime, dragging,
 		panel, panelPrefix, panelSuffix, panelSuppressAuthor, panelLocatorLabel, panelLocator,
 		panelLibraryLink, panelInfo, panelRefersToBubble, panelFrameHeight = 0, accepted = false,
-		searchTimeout;
+		searchTimeout, panelSuppressTrailingPunctuation;
 	
 	const SHOWN_REFERENCES = 7;
 	
@@ -103,6 +103,7 @@ var Zotero_QuickFormat = new function () {
 			panelPrefix = document.getElementById("prefix");
 			panelSuffix = document.getElementById("suffix");
 			panelSuppressAuthor = document.getElementById("suppress-author");
+			panelSuppressTrailingPunctuation = document.getElementById("suppress-trailing-punctuation");
 			panelLocatorLabel = document.getElementById("locator-label");
 			panelLocator = document.getElementById("locator");
 			panelInfo = document.getElementById("citation-properties-info");
@@ -927,6 +928,7 @@ var Zotero_QuickFormat = new function () {
 		}
 		panelLocator.value = target.citationItem["locator"] ? target.citationItem["locator"] : "";
 		panelSuppressAuthor.checked = !!target.citationItem["suppress-author"];
+		panelSuppressTrailingPunctuation.checked = !!io.citation.properties["suppress-trailing-punctuation"];
 		
 		Zotero.Cite.getItem(panelRefersToBubble.citationItem.id).key;
 
@@ -1235,6 +1237,11 @@ var Zotero_QuickFormat = new function () {
 		} else {
 			delete panelRefersToBubble.citationItem["suppress-author"];
 		}
+		if(panelSuppressTrailingPunctuation.checked) {
+			io.citation.properties["suppress-trailing-punctuation"] = true;
+		} else {
+			delete io.citation.properties["suppress-trailing-punctuation"];
+		}
 		panelRefersToBubble.value = _buildBubbleString(panelRefersToBubble.citationItem);
 	};
 	
