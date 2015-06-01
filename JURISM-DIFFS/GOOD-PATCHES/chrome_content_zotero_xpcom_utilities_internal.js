diff --git a/chrome/content/zotero/xpcom/utilities_internal.js b/chrome/content/zotero/xpcom/utilities_internal.js
index fcbdfdc..5243dc1 100644
--- a/chrome/content/zotero/xpcom/utilities_internal.js
+++ b/chrome/content/zotero/xpcom/utilities_internal.js
@@ -410,6 +410,8 @@ Zotero.Utilities.Internal = {
 			
 			if (legacy) addCompatibilityMappings(item, zoteroItem);
 			
+            addMultilingualMappings(item, zoteroItem);
+
 			return item;
 		}
 		
@@ -500,6 +502,11 @@ Zotero.Utilities.Internal = {
 			
 			return item;
 		}
+		
+        function addMultilingualMappings(item, zoteroItem) {
+            
+        }
+		
 	},
 	
 	/**
