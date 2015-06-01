diff --git a/sh-lib/errors.sh b/sh-lib/errors.sh
new file mode 100644
index 0000000..b5f5061
--- /dev/null
+++ b/sh-lib/errors.sh
@@ -0,0 +1,4 @@
+function booboo () {
+    trap "" ERR
+    echo "Git whinged a little about something. See the log file for details."
+}
