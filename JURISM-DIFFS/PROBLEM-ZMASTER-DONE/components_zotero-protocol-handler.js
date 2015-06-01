diff --git a/components/zotero-protocol-handler.js b/components/zotero-protocol-handler.js
index 95bf637..7a51fd9 100644
--- a/components/zotero-protocol-handler.js
+++ b/components/zotero-protocol-handler.js
@@ -28,7 +28,7 @@
 */
 
 const ZOTERO_SCHEME = "zotero";
-const ZOTERO_PROTOCOL_CID = Components.ID("{9BC3D762-9038-486A-9D70-C997AF848A7C}");
+const ZOTERO_PROTOCOL_CID = Components.ID("{25154cf8-9bb0-4a36-aff9-8674233da3f6}");
 const ZOTERO_PROTOCOL_CONTRACTID = "@mozilla.org/network/protocol;1?name=" + ZOTERO_SCHEME;
 const ZOTERO_PROTOCOL_NAME = "Zotero Chrome Extension Protocol";
 
@@ -39,6 +39,8 @@ Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");
 // for any other well known chrome URL in the browser installation
 const DUMMY_CHROME_URL = "chrome://mozapps/content/xpinstall/xpinstallConfirm.xul";
 
+// A page that closes itself immediately
+const CLOSE_CHROME_URL = "chrome://zotero/content/tools/closeWindow.xul";
 
 function ChromeExtensionHandler() {
 	this.wrappedJSObject = this;
@@ -861,10 +863,14 @@ function ChromeExtensionHandler() {
 					win.restore();
 				}
 				
-				// open Zotero pane
-				win.ZoteroPane.show();
-				
-				if(!id) return;
+				if (win.ZoteroPane) {
+					win.ZoteroPane.show();
+				}
+                
+				if(!id) {
+					Zotero.debug("XXX return no id");
+					return;
+				}
 				
 				var lkh = Zotero.Items.parseLibraryKeyHash(id);
 				if (lkh) {
@@ -877,12 +883,23 @@ function ChromeExtensionHandler() {
 					var msg = "Item " + id + " not found in zotero://select";
 					Zotero.debug(msg, 2);
 					Components.utils.reportError(msg);
+					Zotero.debug("XXX return zotero://select not found");
 					return;
 				}
 				
-				win.ZoteroPane.selectItem(item.id);
+				// open Zotero tab or pane
+				if (win.ZoteroPane) {
+					if (win.ZoteroPane.itemsView && win.ZoteroPane.collectionsView) {
+						win.ZoteroPane.selectItem(item.id);
+					}
+					Zotero.debug("XXX return closeWindow");
+					return "closeWindow";
+                }
+                return;
 			}
 			catch (e){
+				// Could maybe deliver an error page to the
+				// browser rather than throwing an error in JS.
 				Zotero.debug(e);
 				throw (e);
 			}
@@ -1101,6 +1118,10 @@ ChromeExtensionHandler.prototype = {
 		var chromeService = Components.classes["@mozilla.org/network/protocol;1?name=chrome"]
 			.getService(Components.interfaces.nsIProtocolHandler);
 		
+		var Zotero = Components.classes["@zotero.org/Zotero;1"]
+			.getService(Components.interfaces.nsISupports)
+			.wrappedJSObject;
+			
 		var newChannel = null;
 		
 		try {
@@ -1123,8 +1144,14 @@ ChromeExtensionHandler.prototype = {
 					}
 					
 					var extChannel = ext.newChannel(uri);
-					// Extension returned null, so cancel request
-					if (!extChannel) {
+					
+					if (extChannel === "closeWindow") {
+						// Extension does not want to show a page, use one that closes immediately
+						var chromeURI = chromeService.newURI(CLOSE_CHROME_URL, null, null);
+						var extChannel = chromeService.newChannel(chromeURI);
+						var chromeRequest = extChannel.QueryInterface(Components.interfaces.nsIRequest);
+					} else if (!extChannel) {
+						// Extension returned null, so cancel request
 						var chromeURI = chromeService.newURI(DUMMY_CHROME_URL, null, null);
 						var extChannel = chromeService.newChannel(chromeURI);
 						var chromeRequest = extChannel.QueryInterface(Components.interfaces.nsIRequest);
