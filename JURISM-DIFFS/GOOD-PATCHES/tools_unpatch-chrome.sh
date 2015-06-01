diff --git a/tools/unpatch-chrome.sh b/tools/unpatch-chrome.sh
new file mode 100755
index 0000000..2f17d18
--- /dev/null
+++ b/tools/unpatch-chrome.sh
@@ -0,0 +1,17 @@
+#!/bin/bash
+
+PATCH="s/\(chrome\|resource\):\/\/jurism/\\1:\/\/zotero/g"
+
+find chrome -type f | xargs sed -si "$PATCH"
+find components -type f | xargs sed -si "$PATCH"
+find resource -type f | xargs sed -si "$PATCH"
+find defaults -type f | xargs sed -si "$PATCH"
+
+sed -si "$PATCH" install.rdf
+#sed -si "$PATCH" update.rdf
+sed -si "$PATCH" chrome.manifest
+
+sed -si "s/^content[ 	]\+jurism/content	zotero/" chrome.manifest
+sed -si "s/^resource[ 	]\+jurism/resource	zotero/" chrome.manifest
+sed -si "s/^locale[ 	]\+jurism/locale	zotero/" chrome.manifest
+sed -si "s/^skin[ 	]\+jurism/skin	zotero/" chrome.manifest
