diff --git a/chrome/content/zotero/xpcom/rdf/identity.js b/chrome/content/zotero/xpcom/rdf/identity.js
index 454ffdd..31804b9 100644
--- a/chrome/content/zotero/xpcom/rdf/identity.js
+++ b/chrome/content/zotero/xpcom/rdf/identity.js
@@ -242,10 +242,10 @@ We replace the bigger with the smaller.
 
   // On input parameters, convert constants to terms
   // 
-  function RDFMakeTerm(formula, val, canonicalize) {
+  function RDFMakeTerm(formula, val, canonicalize, lang) {
     if(typeof val != 'object') {
       if(typeof val == 'string')
-        return new $rdf.Literal(val);
+          return new $rdf.Literal(val, lang);
       if(typeof val == 'number')
         return new $rdf.Literal(val); // @@ differet types
       if(typeof val == 'boolean')
@@ -263,13 +263,13 @@ We replace the bigger with the smaller.
   //  Returns the statement added
   // (would it be better to return the original formula for chaining?)
   //
-  $rdf.IndexedFormula.prototype.add = function (subj, pred, obj, why) {
+  $rdf.IndexedFormula.prototype.add = function (subj, pred, obj, why, lang) {
     var actions, st;
     if(why == undefined) why = this.fetcher ? this.fetcher.appNode : this.sym("chrome:theSession"); //system generated
     //defined in source.js, is this OK with identity.js only user?
     subj = RDFMakeTerm(this, subj);
     pred = RDFMakeTerm(this, pred);
-    obj = RDFMakeTerm(this, obj);
+	obj = RDFMakeTerm(this, obj, true, lang);
     why = RDFMakeTerm(this, why);
 
     if(this.predicateCallback != undefined)
@@ -492,4 +492,4 @@ We replace the bigger with the smaller.
   return $rdf.IndexedFormula;
 
 }();
-// ends
\ No newline at end of file
+// ends
