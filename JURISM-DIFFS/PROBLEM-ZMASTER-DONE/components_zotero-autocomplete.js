diff --git a/components/zotero-autocomplete.js b/components/zotero-autocomplete.js
index 05978b0..be7a10b 100644
--- a/components/zotero-autocomplete.js
+++ b/components/zotero-autocomplete.js
@@ -25,7 +25,7 @@
 
 const ZOTERO_AC_CONTRACTID = '@mozilla.org/autocomplete/search;1?name=zotero';
 const ZOTERO_AC_CLASSNAME = 'Zotero AutoComplete';
-const ZOTERO_AC_CID = Components.ID('{06a2ed11-d0a4-4ff0-a56f-a44545eee6ea}');
+const ZOTERO_AC_CID = Components.ID('{8f90026f-17f9-4164-b81e-3475a771ae88}');
 
 const Cc = Components.classes;
 const Ci = Components.interfaces;
@@ -56,13 +56,14 @@ ZoteroAutoComplete.prototype.startSearch = function(searchString, searchParams,
 	
 	this._zotero.debug("Starting autocomplete search with data '"
 		+ searchParams + "'" + " and string '" + searchString + "'");
-	
+
 	searchParams = JSON.parse(searchParams);
 	if (!searchParams) {
 		throw new Error("Invalid JSON passed to autocomplete");
 	}
+
 	var [fieldName, , subField] = searchParams.fieldName.split("-");
-	
+
 	this.stopSearch();
 	
 	var self = this;
@@ -72,6 +73,60 @@ ZoteroAutoComplete.prototype.startSearch = function(searchString, searchParams,
 		case '':
 			break;
 		
+		case 'zlsPrimary':
+			var sql = 'SELECT D.value AS val,TA.value AS comment FROM zlsSubtags S '
+				+ 'LEFT JOIN zlsSubtagData TA ON S.subtag=TA.id '
+				+ 'LEFT JOIN zlsSubtagData D ON S.description=D.id '
+				+ 'LEFT JOIN zlsSubtagData TY ON S.type=TY.id '
+				+ 'LEFT JOIN zlsSubtagData SC ON S.scope=SC.id '
+				+ 'WHERE D.value LIKE ? '
+				+ 'AND S.deprecated IS NULL '
+				+ 'AND TY.value=? '
+				+ 'AND ('
+					+ 'S.scope IS NULL '
+					+ 'OR NOT SC.value=?'
+				+ ') ORDER BY D.value';
+			var sqlParams = ['%' + searchString + '%', 'language', 'collection'];
+			statement = this._zotero.DB.getStatement(sql, sqlParams);
+			break;
+		
+		case 'jurisdictions':
+			var sql = 'SELECT '
+			+ 'CASE instr(jurisdictionName,"|") > 0 AND instr(substr(jurisdictionName,instr(jurisdictionName,"|")+1),"|") > 0 '
+			+   'WHEN 1 '
+			+   'THEN substr(jurisdictionName,instr(jurisdictionName,"|")+1) '
+			+   'ELSE jurisdictionName '
+			+ 'END as val,'
+			+ 'jurisdictionID as comment '
+			+ 'FROM jurisdictions '
+			+ 'WHERE jurisdictionName LIKE ? ORDER BY segmentCount,jurisdictionIdx '
+			+ 'LIMIT 100;';
+			var sqlParams = ['%' + searchString + '%'];
+			statement = this._zotero.DB.getStatement(sql, sqlParams);
+			break;
+		
+		case 'courts':
+			var paramSegs = searchParams.jurisdictionName.split("|").length;
+			var paramChop = (searchParams.jurisdictionName.length+2);
+			var sql = 'SELECT '
+				+ 'CASE ?=JU.segmentCount '
+				+ 'WHEN 1 '
+				+ 'THEN courtName '
+				+ 'ELSE substr(JU.jurisdictionName,?) || ": " || courtName '
+				+ 'END as val,'
+				+ 'courtID as comment FROM jurisdictions JU '
+				+ 'JOIN courtJurisdictionLinks CJL USING(jurisdictionIdx) '
+				+ 'JOIN courts USING(courtIdx) '
+				+ 'JOIN countryCourtLinks CCL USING (countryCourtLinkIdx) '
+				+ 'JOIN courtNames CN USING (courtNameIdx) '
+				+ 'JOIN jurisdictions CO ON CO.jurisdictionIdx=CCL.countryIdx '
+	 	 		+ 'WHERE JU.jurisdictionName LIKE ? AND CO.jurisdictionID=? AND courtName LIKE ? '
+				+ 'ORDER BY JU.segmentCount,CJL.jurisdictionIdx ';
+				+ 'LIMIT 100;';
+ 		var sqlParams = [paramSegs,paramChop,searchParams.jurisdictionName + '%', searchParams.countryID, '%' + searchString + '%'];
+			statement = this._zotero.DB.getStatement(sql, sqlParams);
+			break;
+		
 		case 'tag':
 			var sql = "SELECT DISTINCT name AS val, NULL AS comment FROM tags WHERE name LIKE ?";
 			var sqlParams = [searchString + '%'];
