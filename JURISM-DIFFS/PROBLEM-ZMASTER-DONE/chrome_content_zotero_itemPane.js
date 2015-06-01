diff --git a/chrome/content/zotero/itemPane.js b/chrome/content/zotero/itemPane.js
index 0e824b0..00df869 100644
--- a/chrome/content/zotero/itemPane.js
+++ b/chrome/content/zotero/itemPane.js
@@ -40,6 +40,7 @@ var ZoteroItemPane = new function() {
 		}
 		
 		_itemBox = document.getElementById('zotero-editpane-item-box');
+		_notesBox = document.getElementById('zotero-editpane-notes-box');
 		_notesLabel = document.getElementById('zotero-editpane-notes-label');
 		_notesButton = document.getElementById('zotero-editpane-notes-add');
 		_notesList = document.getElementById('zotero-editpane-dynamic-notes');
@@ -48,11 +49,19 @@ var ZoteroItemPane = new function() {
 	}
 	
 	
+	function updateItemTab (itemTab, count) {
+		if (count) {
+			itemTab.setAttribute('has-content', 'true');
+		} else {
+			itemTab.setAttribute('has-content', 'false');
+		}
+	}
+		
 	/*
 	 * Load a top-level item
 	 */
 	this.viewItem = function (item, mode, index) {
-		if (!index) {
+		if (!index || index < 0 || index > 3) {
 			index = 0;
 		}
 		
@@ -63,6 +72,10 @@ var ZoteroItemPane = new function() {
 				var box = _itemBox;
 				break;
 			
+			case 1:
+				var box = _notesBox;
+				break;
+			
 			case 2:
 				var box = _tagsBox;
 				break;
@@ -134,18 +147,56 @@ var ZoteroItemPane = new function() {
 					_notesList.appendChild(row);
 				}
 			}
-			
 			_updateNoteCount();
-			return;
-		}
-		
-		if (mode) {
-			box.mode = mode;
-		}
-		else {
-			box.mode = 'edit';
+		} else {
+			
+			if (mode) {
+				box.mode = mode;
+			}
+			else {
+				box.mode = 'edit';
+			}
 		}
-		box.item = item;
+
+		if (item && (!box.item || box.getAttribute('_lastItemId') != item.id)) {
+			box.setAttribute("_lastItemId",item.id);
+			box.item = item;
+			// Update the related items count on the tab when any panel is opened or modified.
+			var relatedTab = document.getElementById('zotero-tab-related');
+			var deletedItems = Zotero.Items.getDeleted(item.libraryID, true);
+			var related = 0;
+			for (var i = 0, ilen = item.relatedItemsBidirectional.length; i < ilen; i += 1) {
+				if (deletedItems.indexOf(item.relatedItemsBidirectional[i]) > -1) {
+					continue;
+				}
+				related += 1;
+			}
+			updateItemTab(relatedTab, related);
+			if (box.getAttribute('id') == "zotero-editpane-related") {
+				box.relatedTab = relatedTab;
+				box.updateRelatedTab = updateItemTab;
+			}
+
+		    // TAGS: Update the tags items count on the tab when any panel is opened or modified.
+		    var tagsTab = document.getElementById('zotero-tab-tags');
+		    var tags = item.getTags() ? item.getTags().length : 0;
+		    updateItemTab(tagsTab, tags);
+		    if (box.getAttribute('id') == "zotero-editpane-tags") {
+			    box.tagsTab = tagsTab;
+			    box.updateTagsTab = updateItemTab;
+		    }
+		    
+ 		    // NOTES: Update the notes items count on the tab when any panel is opened or modified.
+		    var notesTab = document.getElementById('zotero-tab-notes');
+		    var notes = item.getNotes() ? item.getNotes().length : 0;
+		    updateItemTab(notesTab, notes);
+		    if (box.getAttribute('id') == "zotero-editpane-notes") {
+			    box.notesTab = notesTab;
+			    box.updateNotesTab = updateItemTab;
+		    }
+		} else if (index == 0) {
+		    box.item = item;
+        }
 	}
 	
 	
@@ -180,6 +231,10 @@ var ZoteroItemPane = new function() {
 		}
 		
 		_notesLabel.value = Zotero.getString(str, [c]);
+		//Actualise l'affichage qd une note est ajoutée
+		if (this.updateNotesTab) {
+			this.updateNotesTab(this.notesTab, c);
+		}
 	}
 }   
 
