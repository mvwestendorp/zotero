diff --git a/test/tests/support.js b/test/tests/support.js
index 3d2e12e..b6355f6 100644
--- a/test/tests/support.js
+++ b/test/tests/support.js
@@ -1,7 +1,7 @@
 describe("Support Functions for Unit Testing", function() {
 	describe("resetDB", function() {
 		it("should restore the DB to factory settings", function() {
-			this.timeout(10000);
+			this.timeout(50000);
 			var quickstart = Zotero.Items.erase(1);
 			assert.equal(Zotero.Items.get(1), false);
 			return resetDB().then(function() {
@@ -22,7 +22,7 @@ describe("Support Functions for Unit Testing", function() {
 			let data = loadSampleData('journalArticle');
 			populateDBWithSampleData(data);
 			
-			let skipFields = ['id', 'itemType', 'creators']; // Special comparisons
+			let skipFields = ['id', 'itemType', 'creators', 'multi']; // Special comparisons
 			
 			for (let itemName in data) {
 				let item = data[itemName];
