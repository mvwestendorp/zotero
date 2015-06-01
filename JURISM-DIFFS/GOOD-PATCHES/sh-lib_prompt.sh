diff --git a/sh-lib/prompt.sh b/sh-lib/prompt.sh
new file mode 100644
index 0000000..3aaf3aa
--- /dev/null
+++ b/sh-lib/prompt.sh
@@ -0,0 +1,48 @@
+# Prompt for option
+
+echo "This works fine, but isn't used"
+echo
+echo "Command line options are less error-prone"
+echo "than a one-key menu prompt"
+
+exit 1
+
+function prompter () {
+    HELLO=$(cat <<'EOF'
+Choose a release mode (choices are case sensitive)
+  A) Alpha
+  B) Beta
+  R) Release
+Choice? 
+EOF
+)
+    
+    echo -n "$HELLO"
+    read -n 1 x; while read -n 1 -t .1 y; do x="$x$y"; done
+    echo
+    case $x in
+        R)
+            RELEASE=3 >&2
+            echo
+            echo "** Running in RELEASE mode"
+            ;;
+        B)
+            RELEASE=2 >&2
+            echo
+            echo "** Running in BETA mode"
+            ;;
+        A)
+            RELEASE=1 >&2
+            echo
+            echo "** Running in ALPHA mode"
+            ;;
+        *)
+            echo "Sorry, Dave, I can't do \"$x\""
+            echo
+            prompter
+            ;;
+    esac
+}
+prompter
+
+exit 0
