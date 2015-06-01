diff --git a/chrome/content/zotero/xpcom/zotero.js b/chrome/content/zotero/xpcom/zotero.js
index 94a4bc8..6ca8725 100644
--- a/chrome/content/zotero/xpcom/zotero.js
+++ b/chrome/content/zotero/xpcom/zotero.js
@@ -68,6 +68,8 @@ Components.utils.import("resource://gre/modules/Services.jsm");
 	this.isMac;
 	this.isWin;
 	this.initialURL; // used by Schema to show the changelog on upgrades
+	this.multiFieldIds;   // key object
+	this.multiFieldNames; // key object
 	
 	
 	this.__defineGetter__('userID', function () {
@@ -200,6 +202,7 @@ Components.utils.import("resource://gre/modules/Services.jsm");
 	 * Initialize the extension
 	 */
 	function init(options) {
+		var i, ilen, res, sql;
 		if (this.initialized || this.skipLoading) {
 			return false;
 		}
@@ -406,7 +409,12 @@ Components.utils.import("resource://gre/modules/Services.jsm");
 				return false;
 			}
 		}
-		
+
+		/*
+		 * Copy former Zotero database if appropriate
+		 */
+		this.copyZoteroDatabaseToJurism();
+
 		// Register shutdown handler to call Zotero.shutdown()
 		var _shutdownObserver = {observe:function() { Zotero.shutdown().done() }};
 		Services.obs.addObserver(_shutdownObserver, "quit-application", false);
@@ -471,6 +479,21 @@ Components.utils.import("resource://gre/modules/Services.jsm");
 		
 		return true;
 	}
+	 
+	this.copyZoteroDatabaseToJurism = function () {
+		var extensions = ["sqlite", "sqlite-journal"];
+		for (var i=0,ilen=extensions.length;i<ilen;i++) {
+			var ext = extensions[i];
+			var oldFile = Zotero.getZoteroDirectory();
+			oldFile.append("zotero." + ext);
+			var newFile = Zotero.getZoteroDirectory();
+			newFile.append("jurism." + ext);
+			if (oldFile.exists() && !newFile.exists()) {
+				oldFile.copyTo(null, "jurism." + ext);
+			}
+		}
+	}
+	 
 	
 	/**
 	 * Triggers events when initialization finishes
@@ -699,6 +724,34 @@ Components.utils.import("resource://gre/modules/Services.jsm");
 			Zotero.Schema.updateCustomTables();
 		}
 		
+		// XXXZ Load quick-service key sets for identifying multilingualized fields
+		// XXXZ ... _after_ creating the database.
+		// This should really all be done with a call to Zotero.Multi module.
+		var multiBaseFields = ['title', 'shortTitle','publicationTitle', 'series', 'seriesTitle', 'seriesText','publisher', 'reporter', 'court','place','edition','archive','archiveLocation','committee','type','legislativeBody','resolutionLabel','supplementName','institution','jurisdiction'];
+		Zotero.multiFieldIds = {};
+		Zotero.multiFieldNames = {};
+		var sql = "SELECT fieldID FROM fields " +
+					  "WHERE fieldName in ('" + multiBaseFields.join("','") + "')";
+		var res = Zotero.DB.query(sql);
+		for (let i = 0, ilen = res.length; i < ilen; i += 1) {
+			Zotero.multiFieldIds[parseInt(res[i].fieldID)] = true;
+		}
+
+		var sql = "SELECT fieldID from baseFieldMappings " +
+				  "WHERE baseFieldID in ('" + [key for (key in Zotero.multiFieldIds)].join("','") + "')";
+		var res = Zotero.DB.query(sql);
+		for (let i = 0, ilen = res.length; i < ilen; i += 1) {
+			Zotero.multiFieldIds[parseInt(res[i].fieldID)] = true;
+		}
+
+		var sql = "SELECT fieldName from fields " +
+				  "WHERE fieldID in (" + [key for (key in Zotero.multiFieldIds)].join(",") + ")";
+		var res = Zotero.DB.query(sql);
+
+		for (let i = 0, ilen = res.length; i < ilen; i += 1) {
+			Zotero.multiFieldNames[res[i].fieldName] = true;
+		}
+
 		// Initialize various services
 		Zotero.Styles.preinit();
 		Zotero.Integration.init();
@@ -721,6 +774,9 @@ Components.utils.import("resource://gre/modules/Services.jsm");
 		// Initialize Locate Manager
 		Zotero.LocateManager.init();
 		
+		// Initialize Jurisdictions mapper
+		Zotero.Jurisdiction.init();
+		
 		Zotero.Items.startEmptyTrashTimer();
 		
 		return true;
@@ -1039,7 +1095,7 @@ Components.utils.import("resource://gre/modules/Services.jsm");
 	}
 	
 	function getZoteroDatabase(name, ext){
-		name = name ? name + '.sqlite' : 'zotero.sqlite';
+		name = name ? name + '.sqlite' : 'jurism.sqlite';
 		ext = ext ? '.' + ext : '';
 		
 		var file = Zotero.getZoteroDirectory();
@@ -1110,7 +1166,7 @@ Components.utils.import("resource://gre/modules/Services.jsm");
 					
 					if (file.directoryEntries.hasMoreElements()) {
 						var dbfile = file.clone();
-						dbfile.append('zotero.sqlite');
+						dbfile.append('jurism.sqlite');
 						
 						// Warn if non-empty and no zotero.sqlite
 						if (!dbfile.exists()) {
