diff --git a/test/runtests.sh b/test/runtests.sh
index ea83684..b634e03 100755
--- a/test/runtests.sh
+++ b/test/runtests.sh
@@ -76,7 +76,7 @@ makePath ZOTERO_UNIT_PATH "$CWD"
 echo "$ZOTERO_UNIT_PATH" > "$PROFILE/extensions/zotero-unit@zotero.org"
 
 makePath ZOTERO_PATH "`dirname "$CWD"`"
-echo "$ZOTERO_PATH" > "$PROFILE/extensions/zotero@chnm.gmu.edu"
+echo "$ZOTERO_PATH" > "$PROFILE/extensions/juris-m@juris-m.github.io"
 
 # Create data directory
 mkdir "$PROFILE/zotero"
