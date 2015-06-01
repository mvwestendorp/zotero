diff --git a/tools/check_translators.sh b/tools/check_translators.sh
new file mode 100755
index 0000000..b50a605
--- /dev/null
+++ b/tools/check_translators.sh
@@ -0,0 +1,13 @@
+#!/bin/bash
+
+CLIENT=$(ls /media/storage/zotero-data/translators/*.js)
+
+OLDIFS="$IFS"
+IFS="
+"
+for i in $CLIENT; do
+  FN=$(echo $i | sed -e "s/.*\///")
+  cat $i | sed -e "/{/,/}/d" > TEMP1
+  cat "./translators/$FN" | sed -e "/^{/,/^}/d" > TEMP2
+  diff --brief ./TEMP1 ./TEMP2
+done
