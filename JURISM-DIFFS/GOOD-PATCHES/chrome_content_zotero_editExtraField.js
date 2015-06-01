diff --git a/chrome/content/zotero/editExtraField.js b/chrome/content/zotero/editExtraField.js
new file mode 100644
index 0000000..85e2e87
--- /dev/null
+++ b/chrome/content/zotero/editExtraField.js
@@ -0,0 +1,14 @@
+function init(window, document) {
+	var io = window.arguments[0];
+	var label = document.getElementById("mlz-extra-field-label");
+	var textbox = document.getElementById("mlz-extra-field-content");
+	label.value = io.label;
+	textbox.value = io.value;
+}
+
+function saveContent(window,document) {
+	var io = window.arguments[0];
+	var label = document.getElementById("mlz-extra-field-content");
+	var textbox = document.getElementById("mlz-extra-field-content");
+	io.value = textbox.value;
+}
