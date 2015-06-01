diff --git a/chrome/content/zotero/xpcom/data/itemFields.js b/chrome/content/zotero/xpcom/data/itemFields.js
index e322be8..a947f49 100644
--- a/chrome/content/zotero/xpcom/data/itemFields.js
+++ b/chrome/content/zotero/xpcom/data/itemFields.js
@@ -81,6 +81,7 @@ Zotero.ItemFields = new function() {
 	
 	
 	function getLocalizedString(itemType, field) {
+
 		// unused currently
 		//var typeName = Zotero.ItemTypes.getName(itemType);
 		var fieldName = Zotero.ItemFields.getName(field);
@@ -93,6 +94,31 @@ Zotero.ItemFields = new function() {
 				return Zotero.getString("itemFields." + field);
 		}
 		
+		// Hack in alternate field labels for spoofed types
+		if (itemType == '1262' && fieldName === 'date') {
+			// treaty
+			return Zotero.getString("itemFields.effectiveDate");
+		} else if (itemType == '1263' || itemType == '1261') {
+			// regulation or gazette
+			if (fieldName === 'code') {
+				return Zotero.getString("itemFields.reporter");
+			} else if (fieldName === 'codeNumber') {
+				return Zotero.getString("itemFields.volume");
+			}
+		} else if (itemType == '16') {
+			if (fieldName === 'code') {
+				return Zotero.getString("itemFields.reporter");
+			} else if (fieldName === 'codeVolume') {
+				return Zotero.getString("itemFields.volume");
+			} else if (fieldName === 'codePages') {
+				return Zotero.getString("itemFields.pages");
+			}
+		} else if (itemType == '18') {
+			if (fieldName === 'documentNumber') {
+				return Zotero.getString("itemFields.billOrDocumentNumber");
+			}
+		}
+
 		// TODO: different labels for different item types
 		
 		try {
@@ -109,8 +135,11 @@ Zotero.ItemFields = new function() {
 			Zotero.debug(e);
 			throw (e);
 		}
-		
+
 		if (_fields[field].label) {
+			// NOTE: if a field label is missing from the locale, the item
+			// panel will skip this block and crash on getBaseIDFromTypeAndField()
+			// in the block below, with a null itemType.
 			return _fields[field].label;
 		}
 		else {
@@ -120,6 +149,7 @@ Zotero.ItemFields = new function() {
 			// If localized string not found, try base field
 			catch (e) {
 				Zotero.debug("Localized string not found for field '" + fieldName + "' -- trying base field");
+
 				var baseFieldID = this.getBaseIDFromTypeAndField(itemType, field);
 				fieldName = this.getName(baseFieldID);
 				var loc = Zotero.getString("itemFields." + fieldName);
@@ -149,14 +179,6 @@ Zotero.ItemFields = new function() {
 	}
 	
 	
-	this.isMultiline = function (fieldID) {
-		_fieldCheck(fieldID, 'isMultiline');
-		
-		// TEMP: extra and abstractNote
-		return 22 || 90;
-	}
-	
-	
 	this.isCustom = function (fieldID) {
 		_fieldCheck(fieldID, 'isCustom');
 		
@@ -202,7 +224,7 @@ Zotero.ItemFields = new function() {
 		
 		var baseFieldID = this.getID(baseField);
 		if (!baseFieldID) {
-			throw ("Invalid field '" + baseField + '" for base field in ItemFields.getFieldIDFromTypeAndBase()');
+			throw ("Invalid field '" + baseField + '" for base field in ItemFields.isFieldOfBase()');
 		}
 		
 		if (fieldID == baseFieldID) {
@@ -360,14 +382,17 @@ Zotero.ItemFields = new function() {
 		var fields = [
 			'abstractNote',
 			'extra',
-			
+			'caseName',
+			'title',
+			'nameOfAct',
+			'publicationTitle',
 			// TEMP - NSF
 			'address'
 		];
 		return fields.indexOf(field) != -1;
 	}
 	
-	
+
 	this.reload = function () {
 		_fieldsLoaded = false;
 	}
