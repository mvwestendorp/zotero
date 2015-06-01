diff --git a/components/zotero-service.js b/components/zotero-service.js
index 6671661..758db51 100644
--- a/components/zotero-service.js
+++ b/components/zotero-service.js
@@ -27,6 +27,32 @@
     ***** END LICENSE BLOCK *****
 */
 
+Components.utils.import("resource://gre/modules/AddonManager.jsm");  
+AddonManager.getAddonByID("zotero@chnm.gmu.edu", function(zoteroAddon) {
+    if (zoteroAddon && !zoteroAddon.userDisabled) {
+        AddonManager.getAddonByID("juris-m@juris-m.github.io", function (jurismAddon) {
+            // Send the user a message
+            var msg = "The Juris-M reference manager has been installed,\n"
+                + "but will be disabled because Zotero or MLZ are also\n"
+                + "installed and enabled in this browser.\n\n"
+                + "To run Juris-M, you must manually re-enable it\n"
+                + "after disabling or removing the Zotero or MLZ\n"
+                + "extension.\n\n"
+                + "Firefox will restart when you click \"Okay\".";
+		    Cc["@mozilla.org/embedcomp/prompt-service;1"]
+			    .getService(Ci.nsIPromptService)
+			    .alert(null, "Juris-M", msg);
+            
+            jurismAddon.userDisabled = true;
+            Services.prefs.setBoolPref("browser.sessionstore.resume_session_once", true);
+            const nsIAppStartup = Components.interfaces.nsIAppStartup;
+            Components.classes["@mozilla.org/toolkit/app-startup;1"]
+                .getService(nsIAppStartup)
+                .quit(nsIAppStartup.eRestart | nsIAppStartup.eAttemptQuit);
+        });
+    }
+});
+
 const Cc = Components.classes;
 const Ci = Components.interfaces;
 
@@ -34,6 +60,7 @@ const Ci = Components.interfaces;
 const xpcomFilesAll = [
 	'zotero',
 	'date',
+	'dateparser',
 	'debug',
 	'error',
 	'file',
@@ -62,6 +89,7 @@ const xpcomFilesLocal = [
 	'data_access',
 	'data/dataObjects',
 	'data/cachedTypes',
+	'data/cachedLanguages',
 	'data/item',
 	'data/items',
 	'data/collection',
@@ -85,6 +113,12 @@ const xpcomFilesLocal = [
 	'itemTreeView',
 	'locateManager',
 	'mime',
+	'multilingual/validate',
+	'multilingual/convert',
+	'multilingual/field',
+	'multilingual/creator',
+	'multilingual/ui',
+	'multilingual/jurisdiction',
 	'notifier',
 	'proxy',
 	'quickCopy',
@@ -340,7 +374,7 @@ function ZoteroService() {
 ZoteroService.prototype = {
 	contractID: '@zotero.org/Zotero;1',
 	classDescription: 'Zotero',
-	classID: Components.ID('{e4c61080-ec2d-11da-8ad9-0800200c9a66}'),
+	classID: Components.ID('{8949be43-db0e-4c1b-b00b-13650b56a1f1}'),
 	QueryInterface: XPCOMUtils.generateQI([Components.interfaces.nsISupports,
 			Components.interfaces.nsIProtocolHandler])
 }
@@ -457,7 +491,7 @@ ZoteroCommandLineHandler.prototype = {
 	
 	contractID: "@mozilla.org/commandlinehandler/general-startup;1?type=zotero",
 	classDescription: "Zotero Command Line Handler",
-	classID: Components.ID("{531828f8-a16c-46be-b9aa-14845c3b010f}"),
+	classID: Components.ID("{6ea73a15-2a20-47b5-8fb4-059f9e4aa44b}"),
 	service: true,
 	_xpcom_categories: [{category:"command-line-handler", entry:"m-zotero"}],
 	QueryInterface: XPCOMUtils.generateQI([Components.interfaces.nsICommandLineHandler,
