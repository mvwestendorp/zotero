diff --git a/chrome/content/zotero/preferences/preferences_export.js b/chrome/content/zotero/preferences/preferences_export.js
index 1f134e8..897cb9c 100644
--- a/chrome/content/zotero/preferences/preferences_export.js
+++ b/chrome/content/zotero/preferences/preferences_export.js
@@ -132,17 +132,28 @@ Zotero_Preferences.Export = {
 		return popup;
 	},
 	
-	
+
 	updateQuickCopyHTMLCheckbox: function () {
-		var format = document.getElementById('zotero-quickCopy-menu').value;
-		var mode, contentType;
-		
-		var checkbox = document.getElementById('zotero-quickCopy-copyAsHTML');
-		[mode, format] = format.split('=');
-		[mode, contentType] = mode.split('/');
+ 		var format = document.getElementById('zotero-quickCopy-menu').value;
+ 		var mode, contentType;
+ 		
+ 		var linkCheckbox = document.getElementById('zotero-quickCopy-linkWrapOption');
+ 		var linkModeCheckbox = document.getElementById('zotero-quickCopy-linkWrapCitationFormReverse');
 		
-		checkbox.checked = contentType == 'html';
-		checkbox.disabled = mode != 'bibliography';
+ 		var checkbox = document.getElementById('zotero-quickCopy-copyAsHTML');
+ 		[mode, format] = format.split('=');
+ 		[mode, contentType] = mode.split('/');
+ 		
+ 		checkbox.checked = contentType === 'html';
+ 		if (!(mode === 'bibliography')) {
+ 			linkCheckbox.checked = false;
+ 		}
+ 		checkbox.disabled = mode !== 'bibliography';
+ 		linkCheckbox.disabled = mode !== 'bibliography';
+ 		linkModeCheckbox.disabled = mode !== 'bibliography';
+ 		if (!linkCheckbox.checked) {
+ 			linkModeCheckbox.disabled = true;
+ 		}
 	},
 	
 	/**
