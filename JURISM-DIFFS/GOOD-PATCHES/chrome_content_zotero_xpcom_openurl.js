diff --git a/chrome/content/zotero/xpcom/openurl.js b/chrome/content/zotero/xpcom/openurl.js
index 73210e5..04e9695 100644
--- a/chrome/content/zotero/xpcom/openurl.js
+++ b/chrome/content/zotero/xpcom/openurl.js
@@ -183,6 +183,14 @@ Zotero.OpenURL = new function() {
 			if(item.issueDate) {
 				_mapTag(Zotero.Date.strToISO(item.issueDate), "date");
 			}
+		} else if (item.itemType == "case" && version == "1.0") {
+			_mapTag("info:ofi/fmt:kev:mtx:journal", "rft_val_fmt", true);
+
+			if(item.caseName) _mapTag(item.caseName, "caseName");
+			
+			if(item.dateDecided) {
+				_mapTag(Zotero.Date.strToISO(item.dateDecided), "date");
+			}
 		} else {
 			//we map as much as possible to DC for all other types. This will export some info
 			//and work very nicely on roundtrip. All of these fields legal for mtx:dc according to
