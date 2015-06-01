diff --git a/chrome/content/zotero/xpcom/data/creator.js b/chrome/content/zotero/xpcom/data/creator.js
index cea69f6..31af8a7 100644
--- a/chrome/content/zotero/xpcom/data/creator.js
+++ b/chrome/content/zotero/xpcom/data/creator.js
@@ -201,37 +202,53 @@ Zotero.Creator.prototype.save = function () {
 		
 		var key = this.key ? this.key : this._generateKey();
 		
-		// If this was the only creator with the previous data,
-		// see if we can reuse or remove the old data row
-		if (this.creatorDataID) {
-			var count = Zotero.Creators.countCreatorsWithData(this.creatorDataID);
-			if (count == 1) {
-				var newCreatorDataID = Zotero.Creators.getDataID(this);
-				// Data hasn't changed
-				if (this.creatorDataID == newCreatorDataID) {
-					var creatorDataID = this.creatorDataID;
+		var res = this.checkinCreatorData(this);
+
+		var creatorDataID = res.dataID;
+		var deleteDataID = res.deleteDataID;
+
+		this.checkinCreator(creatorID, creatorDataID, key, isNew);
+
+		if (deleteDataID) {
+			Zotero.Creators.deleteData(deleteDataID);
 				}
-				// Existing data row with the new data -- switch to that
-				// and flag old row for deletion below
-				else if (newCreatorDataID) {
-					var deleteDataID = this.creatorDataID;
-					var creatorDataID = newCreatorDataID;
+
+		if (this.id) {
+			Zotero.debug("Updating linked items");
+			this.updateLinkedItems();
 				}
-				// Update current data row with new data
-				else {
-					Zotero.Creators.updateData(this.creatorDataID, this);
-					var creatorDataID = this.creatorDataID;
+		
+		Zotero.DB.commitTransaction();
+	}
+	catch (e) {
+		Zotero.DB.rollbackTransaction();
+		throw (e);
 				}
+	// If successful, set values in object
+	if (!this.id) {
+		this._id = creatorID;
 			}
+	if (!this.key) {
+		this._key = key;
 		}
-		
-		if (!creatorDataID) {
-			var creatorDataID = Zotero.Creators.getDataID(this, true);
-			if (creatorDataID != this.creatorDataID) {
+	if (!this.creatorDataID) {
 				this._creatorDataID = creatorDataID;
 			}
+
+	Zotero.Creators.reload(this.id);
+
+	if (isNew) {
+		Zotero.Notifier.trigger('add', 'creator', this.id);
+	}
+	else {
+		Zotero.Notifier.trigger('modify', 'creator', this.id, this._previousData);
 		}
 		
+	return this.id;
+};
+
+
+Zotero.Creator.prototype.checkinCreator = function (creatorID, creatorDataID, key, isNew) {
 		var columns = [
 			'creatorID',
 			'creatorDataID',
@@ -248,15 +265,16 @@ Zotero.Creator.prototype.save = function () {
 			// If date added isn't set, use current timestamp
 			this.dateAdded ? this.dateAdded : Zotero.DB.transactionDateTime,
 			// If date modified hasn't changed, use current timestamp
-			this._changed.dateModified ?
-				this.dateModified : Zotero.DB.transactionDateTime,
+			this._changed.dateModified ? this.dateModified : Zotero.DB.transactionDateTime,
 			Zotero.DB.transactionDateTime,
 			this.libraryID ? this.libraryID : null,
 			key
 		];
 		
 		if (isNew) {
-			var sql = "INSERT INTO creators (" + columns.join(', ') + ") VALUES ("
+
+		var sql = "INSERT INTO creators (";
+		sql = sql + columns.join(', ') + ") VALUES ("
 						+ placeholders.join(', ') + ")";
 			var insertID = Zotero.DB.query(sql, sqlValues);
 			if (!creatorID) {
@@ -269,49 +287,57 @@ Zotero.Creator.prototype.save = function () {
 			sqlValues.shift();
 			sqlValues.push(creatorID);
 			
-			var sql = "UPDATE creators SET " + columns.join("=?, ") + "=?"
-				+ " WHERE creatorID=?";
+		var sql = "UPDATE creators SET ";
+		sql = sql + columns.join("=?, ") + "=?"
+		sql = sql + " WHERE creatorID=?";
 			Zotero.DB.query(sql, sqlValues);
 		}
+};
 		
-		if (deleteDataID) {
-			Zotero.Creators.deleteData(deleteDataID);
-		}
 		
-		if (this.id) {
-			Zotero.debug("Updating linked items");
-			this.updateLinkedItems();
-		}
+Zotero.Creator.prototype.checkinCreatorData = function (fields) {
+	// If this was the only creator with the previous data,
+	// see if we can reuse or remove the old data row
+	var ret = {};
 		
-		Zotero.DB.commitTransaction();
+	var dataID = fields.creatorDataID;
+
+	if (dataID) {
+
+		var count = Zotero.Creators.countCreatorsWithData(fields.creatorDataID);
+
+		if (count == 1) {
+			var newDataID = Zotero.Creators.getDataID(fields);
+			// Data hasn't changed
+			if (dataID == newDataID) {
+				ret.dataID = dataID;
 	}
-	catch (e) {
-		Zotero.DB.rollbackTransaction();
-		throw (e);
+			// Existing data row with the new data -- switch to that
+			// and flag old row for deletion below
+			else if (newDataID) {
+				ret.deleteDataID = dataID;
+				ret.dataID = newDataID;
 	}
-	
-	// If successful, set values in object
-	if (!this.id) {
-		this._id = creatorID;
+			// Update current data row with new data
+			else {
+				// XXXX The actual database save happens in the function
+				// called here, so need to pass through the child IDs
+				// or parent ID + lang
+				Zotero.Creators.updateData(dataID, fields);
+				ret.dataID = dataID;
 	}
-	if (!this.key) {
-		this._key = key;
 	}
-	if (!this.creatorDataID) {
-		this._creatorDataID = creatorDataID;
 	}
 	
-	Zotero.Creators.reload(this.id);
-	
-	if (isNew) {
-		Zotero.Notifier.trigger('add', 'creator', this.id);
+	if (!ret.dataID) {
+		ret.dataID = Zotero.Creators.getDataID(fields, true);
+		// Adapted from Zotero 3.0 branch, 28 Feb 2012 (commit: cb19ac18f7f0817e814ffea3ce05769a1c6b289d)
+		if (ret.dataID != dataID) {
+			fields._creatorDataID = ret.dataID;
 	}
-	else {
-		Zotero.Notifier.trigger('modify', 'creator', this.id, this._previousData);
 	}
-	
-	return this.id;
-}
+	return ret;
+};
 
 
 Zotero.Creator.prototype.countLinkedItems = function() {
