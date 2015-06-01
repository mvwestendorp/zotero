diff --git a/test/tests/data/allTypesAndFields.js b/test/tests/data/allTypesAndFields.js
index c7db02e..f81dfcd 100644
--- a/test/tests/data/allTypesAndFields.js
+++ b/test/tests/data/allTypesAndFields.js
@@ -10,12 +10,28 @@
 			{
 				"creatorType": "artist",
 				"firstName": "artistFirst",
-				"lastName": "artistLast"
+				"lastName": "artistLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "artistFirstay",
+							"lastName": "artistLastay"
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
 			}
 		],
 		"date": "1999-12-31",
@@ -24,6 +40,27 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
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
+		"publicationTitle": "Publication title",
 		"rights": "Rights",
 		"shortTitle": "Short title",
 		"title": "Title",
@@ -40,32 +77,100 @@
 			{
 				"creatorType": "performer",
 				"firstName": "performerFirst",
-				"lastName": "performerLast"
+				"lastName": "performerLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "performerFirstay",
+							"lastName": "performerLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "composer",
 				"firstName": "composerFirst",
-				"lastName": "composerLast"
+				"lastName": "composerLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "composerFirstay",
+							"lastName": "composerLastay"
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
 				"creatorType": "wordsBy",
 				"firstName": "wordsByFirst",
-				"lastName": "wordsByLast"
+				"lastName": "wordsByLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "wordsByFirstay",
+							"lastName": "wordsByLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
+		"edition": 8,
 		"extra": "Extra",
 		"itemType": "audioRecording",
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
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
 		"numberOfVolumes": 7,
+		"opus": "Opus",
+		"originalDate": "Original date",
 		"place": "Place",
+		"publicationTitle": "Publication title",
 		"publisher": "Publisher",
 		"rights": "Rights",
 		"runningTime": "1:22:33",
@@ -78,37 +183,92 @@
 	"bill": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
+		"archiveLocation": "Archive location",
 		"code": "Code",
 		"creators": [
 			{
 				"creatorType": "sponsor",
 				"firstName": "sponsorFirst",
-				"lastName": "sponsorLast"
+				"lastName": "sponsorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "sponsorFirstay",
+							"lastName": "sponsorLastay"
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
 				"creatorType": "cosponsor",
 				"firstName": "cosponsorFirst",
-				"lastName": "cosponsorLast"
+				"lastName": "cosponsorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "cosponsorFirstay",
+							"lastName": "cosponsorLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
 		"extra": "Extra",
 		"history": "History",
 		"itemType": "bill",
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
 		"legislativeBody": "Legislative body",
+		"multi": {
+			"_keys": {
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"legislativeBody": {
+					"zz": "Legislative bodyay"
+				},
+				"resolutionLabel": {
+					"zz": "Resolution labelay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"number": 3,
 		"pages": "1-10",
+		"resolutionLabel": "Resolution label",
 		"rights": "Rights",
 		"section": "Section",
+		"seriesNumber": 9,
 		"session": "Session",
 		"shortTitle": "Short title",
 		"title": "Title",
+		"type": "Type",
 		"url": "http://www.example.com",
 		"volume": 6
 	},
@@ -119,23 +279,64 @@
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
 				"creatorType": "commenter",
 				"firstName": "commenterFirst",
-				"lastName": "commenterLast"
+				"lastName": "commenterLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "commenterFirstay",
+							"lastName": "commenterLastay"
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
 			}
 		],
 		"date": "1999-12-31",
 		"extra": "Extra",
 		"itemType": "blogPost",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"publicationTitle": "Publication title",
 		"rights": "Rights",
 		"shortTitle": "Short title",
@@ -154,27 +355,80 @@
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
+			},
+			{
+				"creatorType": "recipient",
+				"firstName": "recipientFirst",
+				"lastName": "recipientLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "recipientFirstay",
+							"lastName": "recipientLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "seriesEditor",
 				"firstName": "seriesEditorFirst",
-				"lastName": "seriesEditorLast"
+				"lastName": "seriesEditorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "seriesEditorFirstay",
+							"lastName": "seriesEditorLastay"
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
@@ -183,6 +437,36 @@
 		"itemType": "book",
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
+		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"series": {
+					"zz": "Seriesay"
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
 		"numPages": 4,
 		"numberOfVolumes": 7,
 		"place": "Place",
@@ -193,7 +477,8 @@
 		"shortTitle": "Short title",
 		"title": "Title",
 		"url": "http://www.example.com",
-		"volume": 6
+		"volume": 6,
+		"volumeTitle": "Volume title"
 	},
 	"bookSection": {
 		"ISBN": "978-1-234-56789-7",
@@ -206,32 +491,93 @@
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
 				"creatorType": "bookAuthor",
 				"firstName": "bookAuthorFirst",
-				"lastName": "bookAuthorLast"
+				"lastName": "bookAuthorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "bookAuthorFirstay",
+							"lastName": "bookAuthorLastay"
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
+			},
+			{
+				"creatorType": "recipient",
+				"firstName": "recipientFirst",
+				"lastName": "recipientLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "recipientFirstay",
+							"lastName": "recipientLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "seriesEditor",
 				"firstName": "seriesEditorFirst",
-				"lastName": "seriesEditorLast"
+				"lastName": "seriesEditorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "seriesEditorFirstay",
+							"lastName": "seriesEditorLastay"
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
@@ -240,6 +586,38 @@
 		"itemType": "bookSection",
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
+				"edition": {
+					"zz": "8ay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"series": {
+					"zz": "Seriesay"
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
 		"numberOfVolumes": 7,
 		"pages": "1-10",
 		"place": "Place",
@@ -251,40 +629,210 @@
 		"shortTitle": "Short title",
 		"title": "Title",
 		"url": "http://www.example.com",
-		"volume": 6
+		"volume": 6,
+		"volumeTitle": "Volume title"
 	},
 	"case": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
+		"callNumber": "Call number",
 		"court": "Court",
 		"creators": [
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
+			},
+			{
+				"creatorType": "commenter",
+				"firstName": "commenterFirst",
+				"lastName": "commenterLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "commenterFirstay",
+							"lastName": "commenterLastay"
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
 				"creatorType": "counsel",
 				"firstName": "counselFirst",
-				"lastName": "counselLast"
+				"lastName": "counselLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "counselFirstay",
+							"lastName": "counselLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
+		"documentName": "Document name",
 		"extra": "Extra",
+		"filingDate": "2000-01-02",
 		"history": "History",
+		"issue": 5,
 		"itemType": "case",
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"court": {
+					"zz": "Courtay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"supplementName": {
+					"zz": "Supplement nameay"
+				},
+				"title": {
+					"zz": "Titleay"
+				}
+			},
+			"main": {}
+		},
 		"number": 3,
 		"pages": "1-10",
-		"reporter": "Reporter",
+		"place": "Place",
+		"publicationDate": "Publication date",
+		"publicationTitle": "Publication title",
+		"publisher": "Publisher",
+		"reign": "Reign",
+		"rights": "Rights",
+		"shortTitle": "Short title",
+		"supplementName": "Supplement name",
+		"title": "Title",
+		"url": "http://www.example.com",
+		"volume": 6,
+		"yearAsVolume": "Year as volume"
+	},
+	"classic": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
+		"callNumber": "Call number",
+		"creators": [
+			{
+				"creatorType": "author",
+				"firstName": "authorFirst",
+				"lastName": "authorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "authorFirstay",
+							"lastName": "authorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "contributor",
+				"firstName": "contributorFirst",
+				"lastName": "contributorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "contributorFirstay",
+							"lastName": "contributorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "translator",
+				"firstName": "translatorFirst",
+				"lastName": "translatorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "translatorFirstay",
+							"lastName": "translatorLastay"
+						}
+					}
+				}
+			}
+		],
+		"date": "1999-12-31",
+		"extra": "Extra",
+		"itemType": "classic",
+		"language": "en-US",
+		"libraryCatalog": "Library catalog",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
+		"numPages": 4,
+		"place": "Place",
 		"rights": "Rights",
 		"shortTitle": "Short title",
 		"title": "Title",
+		"type": "Type",
 		"url": "http://www.example.com",
 		"volume": 6
 	},
@@ -299,18 +847,60 @@
 			{
 				"creatorType": "programmer",
 				"firstName": "programmerFirst",
-				"lastName": "programmerLast"
+				"lastName": "programmerLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "programmerFirstay",
+							"lastName": "programmerLastay"
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
 			}
 		],
 		"date": "1999-12-31",
 		"extra": "Extra",
 		"itemType": "computerProgram",
 		"libraryCatalog": "Library catalog",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
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
 		"place": "Place",
 		"programmingLanguage": "Programming language",
 		"publisher": "Publisher",
@@ -330,39 +920,114 @@
 		"archive": "Archive",
 		"archiveLocation": "Archive location",
 		"callNumber": "Call number",
+		"conferenceDate": "Conference date",
 		"conferenceName": "Conference name",
 		"creators": [
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
 				"creatorType": "seriesEditor",
 				"firstName": "seriesEditorFirst",
-				"lastName": "seriesEditorLast"
+				"lastName": "seriesEditorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "seriesEditorFirstay",
+							"lastName": "seriesEditorLastay"
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
 		"extra": "Extra",
+		"institution": "Institution",
+		"issue": 5,
 		"itemType": "conferencePaper",
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
+				"institution": {
+					"zz": "Institutionay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"series": {
+					"zz": "Seriesay"
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
 		"place": "Place",
 		"publicationTitle": "Publication title",
@@ -385,27 +1050,67 @@
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
 				"creatorType": "seriesEditor",
 				"firstName": "seriesEditorFirst",
-				"lastName": "seriesEditorLast"
+				"lastName": "seriesEditorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "seriesEditorFirstay",
+							"lastName": "seriesEditorLastay"
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
@@ -414,6 +1119,38 @@
 		"itemType": "dictionaryEntry",
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
+				"edition": {
+					"zz": "8ay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"series": {
+					"zz": "Seriesay"
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
 		"numberOfVolumes": 7,
 		"pages": "1-10",
 		"place": "Place",
@@ -437,27 +1174,67 @@
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
@@ -465,11 +1242,32 @@
 		"itemType": "document",
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
+				"publisher": {
+					"zz": "Publisheray"
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
 		"publisher": "Publisher",
 		"rights": "Rights",
 		"shortTitle": "Short title",
 		"title": "Title",
-		"url": "http://www.example.com"
+		"url": "http://www.example.com",
+		"version": "Version"
 	},
 	"email": {
 		"abstractNote": "Abstract note",
@@ -478,23 +1276,58 @@
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
 				"creatorType": "recipient",
 				"firstName": "recipientFirst",
-				"lastName": "recipientLast"
+				"lastName": "recipientLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "recipientFirstay",
+							"lastName": "recipientLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
 		"extra": "Extra",
 		"itemType": "email",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				}
+			},
+			"main": {}
+		},
 		"rights": "Rights",
 		"shortTitle": "Short title",
 		"title": "Title",
@@ -511,27 +1344,67 @@
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
 				"creatorType": "seriesEditor",
 				"firstName": "seriesEditorFirst",
-				"lastName": "seriesEditorLast"
+				"lastName": "seriesEditorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "seriesEditorFirstay",
+							"lastName": "seriesEditorLastay"
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
@@ -540,6 +1413,38 @@
 		"itemType": "encyclopediaArticle",
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
+				"edition": {
+					"zz": "8ay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"series": {
+					"zz": "Seriesay"
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
 		"numberOfVolumes": 7,
 		"pages": "1-10",
 		"place": "Place",
@@ -563,22 +1468,54 @@
 			{
 				"creatorType": "director",
 				"firstName": "directorFirst",
-				"lastName": "directorLast"
+				"lastName": "directorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "directorFirstay",
+							"lastName": "directorLastay"
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
 				"creatorType": "producer",
 				"firstName": "producerFirst",
-				"lastName": "producerLast"
+				"lastName": "producerLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "producerFirstay",
+							"lastName": "producerLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "scriptwriter",
 				"firstName": "scriptwriterFirst",
-				"lastName": "scriptwriterLast"
+				"lastName": "scriptwriterLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "scriptwriterFirstay",
+							"lastName": "scriptwriterLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
@@ -587,6 +1524,29 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"publisher": "Publisher",
 		"rights": "Rights",
 		"runningTime": "1:22:33",
@@ -602,18 +1562,51 @@
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
 			}
 		],
 		"date": "1999-12-31",
 		"extra": "Extra",
 		"itemType": "forumPost",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"publicationTitle": "Publication title",
 		"rights": "Rights",
 		"shortTitle": "Short title",
@@ -621,33 +1614,169 @@
 		"type": "Type",
 		"url": "http://www.example.com"
 	},
+	"gazette": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
+		"code": "Code",
+		"codeNumber": "Code number",
+		"creators": [
+			{
+				"creatorType": "author",
+				"firstName": "authorFirst",
+				"lastName": "authorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "authorFirstay",
+							"lastName": "authorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "contributor",
+				"firstName": "contributorFirst",
+				"lastName": "contributorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "contributorFirstay",
+							"lastName": "contributorLastay"
+						}
+					}
+				}
+			}
+		],
+		"date": "1999-12-31",
+		"extra": "Extra",
+		"history": "History",
+		"itemType": "gazette",
+		"jurisdiction": "Jurisdiction",
+		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
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
+		"number": 3,
+		"pages": "1-10",
+		"publicationDate": "Publication date",
+		"publisher": "Publisher",
+		"regnalYear": "Regnal year",
+		"reign": "Reign",
+		"rights": "Rights",
+		"section": "Section",
+		"session": "Session",
+		"shortTitle": "Short title",
+		"title": "Title",
+		"url": "http://www.example.com"
+	},
 	"hearing": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
+		"archiveLocation": "Archive location",
+		"assemblyNumber": "Assembly number",
 		"committee": "Committee",
 		"creators": [
 			{
+				"creatorType": "testimonyBy",
+				"firstName": "testimonyByFirst",
+				"lastName": "testimonyByLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "testimonyByFirstay",
+							"lastName": "testimonyByLastay"
+						}
+					}
+				}
+			},
+			{
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
 			}
 		],
 		"date": "1999-12-31",
 		"extra": "Extra",
 		"history": "History",
 		"itemType": "hearing",
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
 		"legislativeBody": "Legislative body",
+		"meetingNumber": "Meeting number",
+		"multi": {
+			"_keys": {
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"committee": {
+					"zz": "Committeeay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"legislativeBody": {
+					"zz": "Legislative bodyay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"resolutionLabel": {
+					"zz": "Resolution labelay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"number": 3,
 		"numberOfVolumes": 7,
 		"pages": "1-10",
 		"place": "Place",
+		"publicationTitle": "Publication title",
 		"publisher": "Publisher",
+		"resolutionLabel": "Resolution label",
 		"rights": "Rights",
 		"session": "Session",
 		"shortTitle": "Short title",
 		"title": "Title",
-		"url": "http://www.example.com"
+		"type": "Type",
+		"url": "http://www.example.com",
+		"volume": 6
 	},
 	"instantMessage": {
 		"abstractNote": "Abstract note",
@@ -656,23 +1785,58 @@
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
 				"creatorType": "recipient",
 				"firstName": "recipientFirst",
-				"lastName": "recipientLast"
+				"lastName": "recipientLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "recipientFirstay",
+							"lastName": "recipientLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
 		"extra": "Extra",
 		"itemType": "instantMessage",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				}
+			},
+			"main": {}
+		},
 		"rights": "Rights",
 		"shortTitle": "Short title",
 		"title": "Title",
@@ -688,22 +1852,54 @@
 			{
 				"creatorType": "interviewee",
 				"firstName": "intervieweeFirst",
-				"lastName": "intervieweeLast"
+				"lastName": "intervieweeLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "intervieweeFirstay",
+							"lastName": "intervieweeLastay"
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
 				"creatorType": "interviewer",
 				"firstName": "interviewerFirst",
-				"lastName": "interviewerLast"
+				"lastName": "interviewerLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "interviewerFirstay",
+							"lastName": "interviewerLastay"
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
@@ -712,6 +1908,23 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
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
 		"rights": "Rights",
 		"shortTitle": "Short title",
 		"title": "Title",
@@ -729,27 +1942,67 @@
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
@@ -757,8 +2010,41 @@
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
@@ -766,6 +2052,7 @@
 		"seriesText": "Series text",
 		"seriesTitle": "Series title",
 		"shortTitle": "Short title",
+		"status": "Status",
 		"title": "Title",
 		"url": "http://www.example.com",
 		"volume": 6
@@ -780,17 +2067,41 @@
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
 				"creatorType": "recipient",
 				"firstName": "recipientFirst",
-				"lastName": "recipientLast"
+				"lastName": "recipientLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "recipientFirstay",
+							"lastName": "recipientLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
@@ -798,6 +2109,26 @@
 		"itemType": "letter",
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
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"rights": "Rights",
 		"shortTitle": "Short title",
 		"title": "Title",
@@ -815,22 +2146,54 @@
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
@@ -839,6 +2202,26 @@
 		"itemType": "magazineArticle",
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
+				"publicationTitle": {
+					"zz": "Publication titleay"
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
@@ -857,17 +2240,41 @@
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
@@ -875,6 +2282,29 @@
 		"itemType": "manuscript",
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
+				"place": {
+					"zz": "Placeay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"numPages": 4,
 		"place": "Place",
 		"rights": "Rights",
@@ -894,17 +2324,41 @@
 			{
 				"creatorType": "cartographer",
 				"firstName": "cartographerFirst",
-				"lastName": "cartographerLast"
+				"lastName": "cartographerLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "cartographerFirstay",
+							"lastName": "cartographerLastay"
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
 				"creatorType": "seriesEditor",
 				"firstName": "seriesEditorFirst",
-				"lastName": "seriesEditorLast"
+				"lastName": "seriesEditorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "seriesEditorFirstay",
+							"lastName": "seriesEditorLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
@@ -913,6 +2367,38 @@
 		"itemType": "map",
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
+				"edition": {
+					"zz": "8ay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"seriesTitle": {
+					"zz": "Series titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"place": "Place",
 		"publisher": "Publisher",
 		"rights": "Rights",
@@ -930,34 +2416,101 @@
 		"archive": "Archive",
 		"archiveLocation": "Archive location",
 		"callNumber": "Call number",
+		"court": "Court",
 		"creators": [
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
 		"edition": 8,
 		"extra": "Extra",
 		"itemType": "newspaperArticle",
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
+				"court": {
+					"zz": "Courtay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
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
+		"newsCaseDate": "News case date",
 		"pages": "1-10",
 		"place": "Place",
 		"publicationTitle": "Publication title",
@@ -977,17 +2530,54 @@
 			{
 				"creatorType": "inventor",
 				"firstName": "inventorFirst",
-				"lastName": "inventorLast"
+				"lastName": "inventorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "inventorFirstay",
+							"lastName": "inventorLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "attorneyAgent",
 				"firstName": "attorneyAgentFirst",
-				"lastName": "attorneyAgentLast"
+				"lastName": "attorneyAgentLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "attorneyAgentFirstay",
+							"lastName": "attorneyAgentLastay"
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
+			},
+			{
+				"creatorType": "recipient",
+				"firstName": "recipientFirst",
+				"lastName": "recipientLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "recipientFirstay",
+							"lastName": "recipientLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
@@ -995,12 +2585,33 @@
 		"filingDate": "2000-01-02",
 		"issuingAuthority": "Issuing authority",
 		"itemType": "patent",
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
 		"legalStatus": "Legal status",
+		"multi": {
+			"_keys": {
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"place": {
+					"zz": "Placeay"
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
 		"number": 3,
 		"pages": "1-10",
 		"place": "Place",
+		"priorityDate": "Priority date",
 		"priorityNumbers": "Priority numbers",
+		"publicationDate": "Publication date",
+		"publicationNumber": "Publication number",
 		"references": "References",
 		"rights": "Rights",
 		"shortTitle": "Short title",
@@ -1014,24 +2625,67 @@
 			{
 				"creatorType": "podcaster",
 				"firstName": "podcasterFirst",
-				"lastName": "podcasterLast"
+				"lastName": "podcasterLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "podcasterFirstay",
+							"lastName": "podcasterLastay"
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
 				"creatorType": "guest",
 				"firstName": "guestFirst",
-				"lastName": "guestLast"
+				"lastName": "guestLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "guestFirstay",
+							"lastName": "guestLastay"
+						}
+					}
+				}
 			}
 		],
+		"date": "1999-12-31",
 		"extra": "Extra",
 		"itemType": "podcast",
 		"language": "en-US",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"publisher": {
+					"zz": "Publisheray"
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
 		"number": 3,
+		"publisher": "Publisher",
 		"rights": "Rights",
 		"runningTime": "1:22:33",
 		"seriesTitle": "Series title",
@@ -1046,12 +2700,28 @@
 			{
 				"creatorType": "presenter",
 				"firstName": "presenterFirst",
-				"lastName": "presenterLast"
+				"lastName": "presenterLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "presenterFirstay",
+							"lastName": "presenterLastay"
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
 			}
 		],
 		"date": "1999-12-31",
@@ -1059,6 +2729,23 @@
 		"itemType": "presentation",
 		"language": "en-US",
 		"meetingName": "Meeting name",
+		"multi": {
+			"_keys": {
+				"place": {
+					"zz": "Placeay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"place": "Place",
 		"rights": "Rights",
 		"shortTitle": "Short title",
@@ -1076,32 +2763,80 @@
 			{
 				"creatorType": "director",
 				"firstName": "directorFirst",
-				"lastName": "directorLast"
+				"lastName": "directorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "directorFirstay",
+							"lastName": "directorLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "castMember",
 				"firstName": "castMemberFirst",
-				"lastName": "castMemberLast"
+				"lastName": "castMemberLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "castMemberFirstay",
+							"lastName": "castMemberLastay"
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
 				"creatorType": "guest",
 				"firstName": "guestFirst",
-				"lastName": "guestLast"
+				"lastName": "guestLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "guestFirstay",
+							"lastName": "guestLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "producer",
 				"firstName": "producerFirst",
-				"lastName": "producerLast"
+				"lastName": "producerLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "producerFirstay",
+							"lastName": "producerLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "scriptwriter",
 				"firstName": "scriptwriterFirst",
-				"lastName": "scriptwriterLast"
+				"lastName": "scriptwriterLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "scriptwriterFirstay",
+							"lastName": "scriptwriterLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
@@ -1110,6 +2845,32 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
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
 		"number": 3,
 		"place": "Place",
 		"publicationTitle": "Publication title",
@@ -1120,50 +2881,312 @@
 		"title": "Title",
 		"url": "http://www.example.com"
 	},
+	"regulation": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
+		"code": "Code",
+		"codeNumber": "Code number",
+		"creators": [
+			{
+				"creatorType": "author",
+				"firstName": "authorFirst",
+				"lastName": "authorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "authorFirstay",
+							"lastName": "authorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "contributor",
+				"firstName": "contributorFirst",
+				"lastName": "contributorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "contributorFirstay",
+							"lastName": "contributorLastay"
+						}
+					}
+				}
+			}
+		],
+		"date": "1999-12-31",
+		"extra": "Extra",
+		"gazetteFlag": "Gazette flag",
+		"history": "History",
+		"itemType": "regulation",
+		"jurisdiction": "Jurisdiction",
+		"language": "en-US",
+		"legislativeBody": "Legislative body",
+		"multi": {
+			"_keys": {
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"legislativeBody": {
+					"zz": "Legislative bodyay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
+		"number": 3,
+		"pages": "1-10",
+		"publicationDate": "Publication date",
+		"publisher": "Publisher",
+		"rights": "Rights",
+		"section": "Section",
+		"session": "Session",
+		"shortTitle": "Short title",
+		"title": "Title",
+		"type": "Type",
+		"url": "http://www.example.com"
+	},
 	"report": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
 		"archive": "Archive",
 		"archiveLocation": "Archive location",
+		"assemblyNumber": "Assembly number",
 		"callNumber": "Call number",
+		"committee": "Committee",
 		"creators": [
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
 				"creatorType": "seriesEditor",
 				"firstName": "seriesEditorFirst",
-				"lastName": "seriesEditorLast"
+				"lastName": "seriesEditorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "seriesEditorFirstay",
+							"lastName": "seriesEditorLastay"
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
 		"extra": "Extra",
+		"institution": "Institution",
 		"itemType": "report",
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
+		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"committee": {
+					"zz": "Committeeay"
+				},
+				"institution": {
+					"zz": "Institutionay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"seriesTitle": {
+					"zz": "Series titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"number": 3,
 		"pages": "1-10",
 		"place": "Place",
+		"publicationTitle": "Publication title",
 		"publisher": "Publisher",
 		"rights": "Rights",
 		"seriesTitle": "Series title",
 		"shortTitle": "Short title",
+		"status": "Status",
 		"title": "Title",
 		"type": "Type",
 		"url": "http://www.example.com"
 	},
+	"standard": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
+		"callNumber": "Call number",
+		"creators": [
+			{
+				"creatorType": "author",
+				"firstName": "authorFirst",
+				"lastName": "authorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "authorFirstay",
+							"lastName": "authorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "contributor",
+				"firstName": "contributorFirst",
+				"lastName": "contributorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "contributorFirstay",
+							"lastName": "contributorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "editor",
+				"firstName": "editorFirst",
+				"lastName": "editorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "editorFirstay",
+							"lastName": "editorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "reviewedAuthor",
+				"firstName": "reviewedAuthorFirst",
+				"lastName": "reviewedAuthorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "reviewedAuthorFirstay",
+							"lastName": "reviewedAuthorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "translator",
+				"firstName": "translatorFirst",
+				"lastName": "translatorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "translatorFirstay",
+							"lastName": "translatorLastay"
+						}
+					}
+				}
+			}
+		],
+		"date": "1999-12-31",
+		"extra": "Extra",
+		"itemType": "standard",
+		"language": "en-US",
+		"libraryCatalog": "Library catalog",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
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
+		"number": 3,
+		"publisher": "Publisher",
+		"rights": "Rights",
+		"shortTitle": "Short title",
+		"title": "Title",
+		"url": "http://www.example.com",
+		"version": "Version"
+	},
 	"statute": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
@@ -1173,21 +3196,62 @@
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
 			}
 		],
 		"date": "1999-12-31",
+		"dateAmended": "Date amended",
 		"extra": "Extra",
+		"gazetteFlag": "Gazette flag",
 		"history": "History",
 		"itemType": "statute",
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
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
 		"number": 3,
+		"originalDate": "Original date",
 		"pages": "1-10",
+		"publicationDate": "Publication date",
+		"publisher": "Publisher",
+		"regnalYear": "Regnal year",
+		"reign": "Reign",
 		"rights": "Rights",
 		"section": "Section",
 		"session": "Session",
@@ -1205,12 +3269,28 @@
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
 			}
 		],
 		"date": "1999-12-31",
@@ -1218,6 +3298,32 @@
 		"itemType": "thesis",
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
+				"place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"numPages": 4,
 		"place": "Place",
 		"publisher": "Publisher",
@@ -1227,6 +3333,120 @@
 		"type": "Type",
 		"url": "http://www.example.com"
 	},
+	"treaty": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
+		"adoptionDate": "Adoption date",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
+		"callNumber": "Call number",
+		"creators": [
+			{
+				"creatorType": "author",
+				"firstName": "authorFirst",
+				"lastName": "authorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "authorFirstay",
+							"lastName": "authorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "contributor",
+				"firstName": "contributorFirst",
+				"lastName": "contributorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "contributorFirstay",
+							"lastName": "contributorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "editor",
+				"firstName": "editorFirst",
+				"lastName": "editorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "editorFirstay",
+							"lastName": "editorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "reviewedAuthor",
+				"firstName": "reviewedAuthorFirst",
+				"lastName": "reviewedAuthorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "reviewedAuthorFirstay",
+							"lastName": "reviewedAuthorLastay"
+						}
+					}
+				}
+			},
+			{
+				"creatorType": "translator",
+				"firstName": "translatorFirst",
+				"lastName": "translatorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "translatorFirstay",
+							"lastName": "translatorLastay"
+						}
+					}
+				}
+			}
+		],
+		"date": "1999-12-31",
+		"extra": "Extra",
+		"itemType": "treaty",
+		"language": "en-US",
+		"libraryCatalog": "Library catalog",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"reporter": {
+					"zz": "Reporteray"
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
+		"openingDate": "Opening date",
+		"pages": "1-10",
+		"publisher": "Publisher",
+		"reporter": "Reporter",
+		"rights": "Rights",
+		"section": "Section",
+		"shortTitle": "Short title",
+		"signingDate": "Signing date",
+		"title": "Title",
+		"url": "http://www.example.com",
+		"volume": 6
+	},
 	"tvBroadcast": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
@@ -1237,32 +3457,80 @@
 			{
 				"creatorType": "director",
 				"firstName": "directorFirst",
-				"lastName": "directorLast"
+				"lastName": "directorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "directorFirstay",
+							"lastName": "directorLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "castMember",
 				"firstName": "castMemberFirst",
-				"lastName": "castMemberLast"
+				"lastName": "castMemberLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "castMemberFirstay",
+							"lastName": "castMemberLastay"
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
 				"creatorType": "guest",
 				"firstName": "guestFirst",
-				"lastName": "guestLast"
+				"lastName": "guestLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "guestFirstay",
+							"lastName": "guestLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "producer",
 				"firstName": "producerFirst",
-				"lastName": "producerLast"
+				"lastName": "producerLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "producerFirstay",
+							"lastName": "producerLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "scriptwriter",
 				"firstName": "scriptwriterFirst",
-				"lastName": "scriptwriterLast"
+				"lastName": "scriptwriterLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "scriptwriterFirstay",
+							"lastName": "scriptwriterLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
@@ -1271,6 +3539,32 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
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
 		"number": 3,
 		"place": "Place",
 		"publicationTitle": "Publication title",
@@ -1292,27 +3586,67 @@
 			{
 				"creatorType": "director",
 				"firstName": "directorFirst",
-				"lastName": "directorLast"
+				"lastName": "directorLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "directorFirstay",
+							"lastName": "directorLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "castMember",
 				"firstName": "castMemberFirst",
-				"lastName": "castMemberLast"
+				"lastName": "castMemberLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "castMemberFirstay",
+							"lastName": "castMemberLastay"
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
 				"creatorType": "producer",
 				"firstName": "producerFirst",
-				"lastName": "producerLast"
+				"lastName": "producerLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "producerFirstay",
+							"lastName": "producerLastay"
+						}
+					}
+				}
 			},
 			{
 				"creatorType": "scriptwriter",
 				"firstName": "scriptwriterFirst",
-				"lastName": "scriptwriterLast"
+				"lastName": "scriptwriterLast",
+				"multi": {
+					"_key": {
+						"zz": {
+							"firstName": "scriptwriterFirstay",
+							"lastName": "scriptwriterLastay"
+						}
+					}
+				}
 			}
 		],
 		"date": "1999-12-31",
@@ -1321,6 +3655,35 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"seriesTitle": {
+					"zz": "Series titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"websiteTitle": {
+					"zz": "Website titleay"
+				}
+			},
+			"main": {}
+		},
 		"numberOfVolumes": 7,
 		"place": "Place",
 		"publisher": "Publisher",
@@ -1330,7 +3693,8 @@
 		"shortTitle": "Short title",
 		"title": "Title",
 		"url": "http://www.example.com",
-		"volume": 6
+		"volume": 6,
+		"websiteTitle": "Website title"
 	},
 	"webpage": {
 		"abstractNote": "Abstract note",
@@ -1339,23 +3703,64 @@
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
 		"extra": "Extra",
 		"itemType": "webpage",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"publicationTitle": {
+					"zz": "Publication titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"type": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"publicationTitle": "Publication title",
 		"rights": "Rights",
 		"shortTitle": "Short title",
