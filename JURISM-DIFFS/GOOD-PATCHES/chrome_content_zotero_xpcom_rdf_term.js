diff --git a/chrome/content/zotero/xpcom/rdf/term.js b/chrome/content/zotero/xpcom/rdf/term.js
index 8a3d669..189125a 100644
--- a/chrome/content/zotero/xpcom/rdf/term.js
+++ b/chrome/content/zotero/xpcom/rdf/term.js
@@ -129,7 +129,7 @@ $rdf.Collection.prototype.close = function () {
 
 //      Convert Javascript representation to RDF term object
 //
-$rdf.term = function (val) {
+$rdf.term = function (val, lang) {
   if(typeof val == 'object')
     if(val instanceof Date) {
       var d2 = function (x) {
@@ -149,7 +149,7 @@ $rdf.term = function (val) {
     } else
       return val;
   if(typeof val == 'string')
-    return new $rdf.Literal(val);
+      return new $rdf.Literal(val, lang);
   if(typeof val == 'number') {
     var dt;
     if(('' + val).indexOf('e') >= 0) dt = $rdf.Symbol.prototype.XSDfloat;
@@ -170,10 +170,10 @@ $rdf.term = function (val) {
 //
 //   The reason can point to provenece or inference
 //
-$rdf.Statement = function (subject, predicate, object, why) {
+$rdf.Statement = function (subject, predicate, object, why, lang) {
   this.subject = $rdf.term(subject)
   this.predicate = $rdf.term(predicate)
-  this.object = $rdf.term(object)
+	this.object = $rdf.term(object, lang)
   if(typeof why != 'undefined') {
     this.why = why;
   }
@@ -208,8 +208,8 @@ $rdf.Formula.prototype.toNT = function () {
 };
 $rdf.Formula.prototype.toString = $rdf.Formula.prototype.toNT;
 
-$rdf.Formula.prototype.add = function (subj, pred, obj, why) {
-  this.statements.push(new $rdf.Statement(subj, pred, obj, why))
+$rdf.Formula.prototype.add = function (subj, pred, obj, why, lang) {
+	this.statements.push(new $rdf.Statement(subj, pred, obj, why, lang))
 }
 
 // Convenience methods on a formula allow the creation of new RDF terms:
@@ -343,4 +343,4 @@ $rdf.graph = function () {
   return new $rdf.IndexedFormula();
 };
 
-// ends
\ No newline at end of file
+// ends
