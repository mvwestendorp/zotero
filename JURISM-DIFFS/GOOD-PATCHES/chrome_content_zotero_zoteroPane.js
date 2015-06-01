diff --git a/chrome/content/zotero/zoteroPane.js b/chrome/content/zotero/zoteroPane.js
index 14edc70..e016db2 100644
--- a/chrome/content/zotero/zoteroPane.js
+++ b/chrome/content/zotero/zoteroPane.js
@@ -4194,6 +4194,13 @@ var ZoteroPane = new function()
 		window.openDialog('chrome://zotero/content/about.xul', 'about', 'chrome');
 	}
 	
+ 	/**
+	 * Opens the MLZ Welcome dialog
+	 */
+	this.openMlzWelcomeDialog = function() {
+		window.openDialog('chrome://zotero/content/mlzwelcome.xul', 'mlzwelcome', 'chrome');
+	}
+	
 	/**
 	 * Adds or removes a function to be called when Zotero is reloaded by switching into or out of
 	 * the connector
