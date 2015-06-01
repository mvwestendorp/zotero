diff --git a/chrome/content/zotero/tools/csledit.js b/chrome/content/zotero/tools/csledit.js
index 1bcbc6a..6d39073 100644
--- a/chrome/content/zotero/tools/csledit.js
+++ b/chrome/content/zotero/tools/csledit.js
@@ -43,15 +43,32 @@ var Zotero_CSL_Editor = new function() {
 		var defaultStyle = Zotero.QuickCopy.stripContentType(rawDefaultStyle);
 		
 		var styles = Zotero.Styles.getAll();
-		var currentStyle = null;
-		var listPos = 0;
+		var stylesInfo = [];
 		for each(var style in styles) {
 			if (style.source) {
 				continue;
 			}
-			var item = cslList.appendItem(style.title, style.styleID);
-			if (!currentStyle || defaultStyle == ('bibliography=' + style.styleID)) {
-				currentStyle = style.styleID;
+			stylesInfo.push({
+				styleID: style.styleID,
+				title: style.title
+			});
+		}
+		stylesInfo.sort(function(a,b){
+			if (a.title > b.title) {
+				return 1;
+			} else if (a.title < b.title) {
+				return -1;
+			} else {
+				return 0;
+			}
+		});
+		var currentStyle = null;
+		var listPos = 0;
+		for (var i=0,ilen=stylesInfo.length;i<ilen;i++) {
+			var styleInfo = stylesInfo[i];
+			var item = cslList.appendItem(styleInfo.title, styleInfo.styleID);
+			if (!currentStyle || defaultStyle == ('bibliography=' + styleInfo.styleID)) {
+				currentStyle = styleInfo.styleID;
 				cslList.selectedIndex = listPos;
 			}
 			listPos += 1;
@@ -191,6 +208,7 @@ var Zotero_CSL_Editor = new function() {
 				iframe.contentDocument.documentElement.innerHTML = '<div>' + Zotero.getString('styles.editor.warning.renderError') + '</div><div>'+e+'</div>';
 				throw e;
 		}
+		editor.styleEngine = styleEngine;
 	}
 	
 	
