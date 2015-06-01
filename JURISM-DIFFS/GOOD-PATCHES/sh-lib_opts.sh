diff --git a/sh-lib/opts.sh b/sh-lib/opts.sh
new file mode 100644
index 0000000..71e6366
--- /dev/null
+++ b/sh-lib/opts.sh
@@ -0,0 +1,45 @@
+# Defaults
+RELEASE=0
+
+# Parse and set options
+OPTERR=0
+while getopts ":RAB" opt; do
+    case $opt in
+        R)
+            RELEASE=3 >&2
+            ;;
+        B)
+            RELEASE=2 >&2
+            ;;
+        A)
+            RELEASE=1 >&2
+            ;;
+        \?)
+            echo "ERROR: -$OPTARG is not a valid option" >&2
+            ;;
+    esac
+done
+
+# Validate arguments
+shift $((OPTIND-1))
+if [ "$#" -gt 0 ]; then
+    echo "ERROR: the script accepts no arguments, only valid options"
+    exit 1
+fi
+
+# Validate options
+case $RELEASE in
+    0)
+        echo "ERROR: must specify one of -A -B or -R"
+        exit 1
+        ;;
+    1)
+        echo "** Running in ALPHA mode"
+        ;;
+    2)
+        echo "** Running in BETA mode"
+        ;;
+    3)
+        echo "** Running in RELEASE mode"
+        ;;
+esac
