diff --git a/chrome/content/zotero/xpcom/translation/translate.js b/chrome/content/zotero/xpcom/translation/translate.js
index 920a2b5..e5ad592 100644
--- a/chrome/content/zotero/xpcom/translation/translate.js
+++ b/chrome/content/zotero/xpcom/translation/translate.js
@@ -88,7 +88,7 @@ Zotero.Translate.Sandbox = {
 				Zotero.debug("Translate: WARNING: Zotero.Item#complete() called after Zotero.done(); please fix your code", 2);
 			}
 				
-			const allowedObjects = ["complete", "attachments", "seeAlso", "creators", "tags", "notes"];
+			const allowedObjects = ["complete", "attachments", "seeAlso", "creators", "tags", "notes", "multi"];
 			
 			delete item.complete;
 			for(var i in item) {
@@ -586,13 +586,13 @@ Zotero.Translate.Sandbox = {
 				var altTitle = Zotero.ItemFields.getName(Zotero.ItemFields.getFieldIDFromTypeAndBase(item.itemType, 'title'));
 				if(altTitle && item[altTitle]) item.title = item[altTitle];
 				
-				if(!item.title) {
-					translate.complete(false, new Error("No title specified for item"));
+				if(!item.title && ["case", "statute", "regulation", "bill", "gazette", "hearing"].indexOf(item.itemType) === -1) {
+					translate.complete(false, new Error("Item is not case, statute, bill, order or gazette, and has no title"));
 					return;
 				}
 				
 				// create short title
-				if(item.shortTitle === undefined && Zotero.Utilities.fieldIsValidForType("shortTitle", item.itemType)) {		
+				if(item.title && item.shortTitle === undefined && Zotero.Utilities.fieldIsValidForType("shortTitle", item.itemType)) {		
 					// only set if changes have been made
 					var setShortTitle = false;
 					var title = item.title;
@@ -1514,6 +1514,7 @@ Zotero.Translate.Base.prototype = {
 		} else {
 			Zotero.debug("\tNo suitable translators found");
 		}
+        Zotero.debug("XXXX COLLECTED");
 		this._runHandler("translators", this._foundTranslators);
 	},
 	
@@ -1564,12 +1565,14 @@ Zotero.Translate.Base.prototype = {
 		}
 		const createArrays = "['creators', 'notes', 'tags', 'seeAlso', 'attachments']";
 		var src = "var Zotero = {};"+
+		"Zotero.isMLZ = true;"+
 		"Zotero.Item = function (itemType) {"+
 				"const createArrays = "+createArrays+";"+
 				"this.itemType = itemType;"+
 				"for(var i=0, n=createArrays.length; i<n; i++) {"+
 					"this[createArrays[i]] = [];"+
-				"}"+
+				"};"+
+                "this.multi = {main:{},_lsts:{},_keys:{}}"+
 		"};";
 		
 		if(this instanceof Zotero.Translate.Export || this instanceof Zotero.Translate.Import) {
@@ -2007,6 +2010,7 @@ Zotero.Translate.Import.prototype._loadTranslator = function(translator, callbac
 	// call super
 	var me = this;
 	Zotero.Translate.Base.prototype._loadTranslator.call(this, translator, function() {
+        Zotero.debug("XXXX translator: " + translator.label);
 		me._loadTranslatorPrepareIO(translator, callback);
 	});
 }
@@ -2610,7 +2614,7 @@ Zotero.Translate.IO._RDFSandbox.prototype = {
 	 * @param {Boolean} literal Whether value should be treated as a literal (true) or a resource
 	 *     (false)
 	 */
-	"addStatement":function(about, relation, value, literal) {
+	"addStatement":function(about, relation, value, literal, lang) {
 		if(about === null || about === undefined) {
 			throw new Error("about must be defined in Zotero.RDF.addStatement");
 		}
@@ -2628,7 +2632,7 @@ Zotero.Translate.IO._RDFSandbox.prototype = {
 			value = this._getResource(value);
 		}
 		
-		this._dataStore.add(this._getResource(about), this._getResource(relation), value);
+		this._dataStore.add(this._getResource(about), this._getResource(relation), value, false, lang);
 	},
 	
 	/**
@@ -2800,17 +2804,46 @@ Zotero.Translate.IO._RDFSandbox.prototype = {
 	 * @return {Zotero.RDF.AJAW.Symbol[]}
 	 * @deprecated Since 2.1. Use {@link Zotero.Translate.IO["rdf"]._RDFBase#getStatementsMatching}
 	 */
-	"getTargets":function(resource, property) {
+	"getTargets":function(resource, property, preserveObject) {
 		var statements = this._dataStore.statementsMatching(this._getResource(resource), this._getResource(property));
 		if(!statements.length) return false;
-		
+
 		var returnArray = [];
-		for(var i=0; i<statements.length; i++) {
-			returnArray.push(statements[i].object.termType == "literal" ? statements[i].object.toString() : statements[i].object);
+		if (preserveObject) {
+			for(var i=0; i<statements.length; i++) {
+				// The object will evaporate if pushed through literally.
+				//
+				// Plan A: Figure out why values are disappearing, fix it,
+				// and use the native object.
+				//
+				// Plan B: Reduce to elements, key on an object, and
+				// then push as a set.
+                //
+                // Plan B works in the short term. Worth asking whether
+                // it is the Right Way.
+				//
+				var obj = {};
+				for (var k in statements[i].object) {
+					obj[k] = statements[i].object[k];
+				}
+				returnArray.push(obj);
+			}
+		} else {
+			for(var i=0; i<statements.length; i++) {
+				if (statements[i].object.termType == "literal") {
+					returnArray.push(statements[i].object.toString())
+				} else {
+					var obj = {};
+					for (var k in statements[i].object) {
+						obj[k] = statements[i].object[k];
+					}
+					returnArray.push(obj);
+				}
+			}
 		}
 		return returnArray;
 	},
-	
+
 	/**
 	 * Gets statements matching a certain pattern
 	 *
@@ -2833,7 +2866,7 @@ Zotero.Translate.IO._RDFSandbox.prototype = {
 		
 		var returnArray = [];
 		for(var i=0; i<statements.length; i++) {
-			returnArray.push([statements[i].subject, statements[i].predicate, (statements[i].object.termType == "literal" ? statements[i].object.toString() : statements[i].object)]);
+			returnArray.push([statements[i].subject, statements[i].predicate, (statements[i].object.termType == "literal" ? statements[i].object.toString() : statements[i].object), statements[i].object.lang]);
 		}
 		return returnArray;
 	}
