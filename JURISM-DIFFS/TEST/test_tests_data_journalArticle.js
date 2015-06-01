diff --git a/test/tests/data/journalArticle.js b/test/tests/data/journalArticle.js
index 7af20cb..1d8796c 100644
--- a/test/tests/data/journalArticle.js
+++ b/test/tests/data/journalArticle.js
@@ -11,27 +11,67 @@
 			{
 				"creatorType": "author",
 				"firstName": "authorFirst",
-				"lastName": "authorLast"
+				"lastName": "authorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "authorFirstay",
+							"lastName": "authorLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "contributor",
 				"firstName": "contributorFirst",
-				"lastName": "contributorLast"
+				"lastName": "contributorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "contributorFirstay",
+							"lastName": "contributorLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "editor",
 				"firstName": "editorFirst",
-				"lastName": "editorLast"
+				"lastName": "editorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "editorFirstay",
+							"lastName": "editorLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "reviewedAuthor",
 				"firstName": "reviewedAuthorFirst",
-				"lastName": "reviewedAuthorLast"
+				"lastName": "reviewedAuthorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "reviewedAuthorFirstay",
+							"lastName": "reviewedAuthorLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "translator",
 				"firstName": "translatorFirst",
-				"lastName": "translatorLast"
+				"lastName": "translatorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "translatorFirstay",
+							"lastName": "translatorLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
@@ -39,8 +79,41 @@
 		"issue": 5,
 		"itemType": "journalArticle",
 		"journalAbbreviation": "Journal abbreviation",
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"series": {
+					"zz": "Seriesay"
+				},
+				"seriesText": {
+					"zz": "Series textay"
+				},
+				"seriesTitle": {
+					"zz": "Series titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				}
+			},
+			"main": {}
+		},
 		"pages": "1-10",
 		"publicationTitle": "Publication title",
 		"rights": "Rights",
@@ -48,8 +121,9 @@
 		"seriesText": "Series text",
 		"seriesTitle": "Series title",
 		"shortTitle": "Short title",
+		"status": "Status",
 		"title": "Title",
 		"url": "http://www.example.com",
 		"volume": 6
 	}
-}
\ No newline at end of file
+}
