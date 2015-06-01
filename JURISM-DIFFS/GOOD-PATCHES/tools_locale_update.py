diff --git a/tools/locale_update.py b/tools/locale_update.py
new file mode 100755
index 0000000..21332b8
--- /dev/null
+++ b/tools/locale_update.py
@@ -0,0 +1,9 @@
+#!/usr/bin/python2.7
+
+from ZoteroLocaleMerge import ZoteroLocaleMerge
+import os
+merger = ZoteroLocaleMerge()
+
+print "Merging locales ..."
+merger.merge()
+print "  done"
