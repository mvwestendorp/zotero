diff --git a/test/tests/data/translatorExport.js b/test/tests/data/translatorExport.js
index 9e1bdc3..0e0d460 100644
--- a/test/tests/data/translatorExport.js
+++ b/test/tests/data/translatorExport.js
@@ -13,12 +13,28 @@
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
@@ -28,6 +44,26 @@
 		"itemType": "artwork",
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
+				"websiteTitle": {
+					"zz": "Publication titleay"
+				}
+			},
+			"main": {}
+		},
 		"notes": [],
 		"relations": {},
 		"rights": "Rights",
@@ -36,12 +72,14 @@
 		"title": "Title",
 		"uri": "http://zotero.org/users/local/riiZoBgm/items/VXDHRHNP",
 		"url": "http://www.example.com",
-		"version": 1
+		"version": 1,
+		"websiteTitle": "Publication title"
 	},
 	"audioRecording": {
 		"ISBN": "978-1-234-56789-7",
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
+		"album": "Publication title",
 		"archive": "Archive",
 		"archiveLocation": "Archive location",
 		"attachments": [],
@@ -52,22 +90,54 @@
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
@@ -78,10 +148,45 @@
 		"label": "Publisher",
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
+		"multi": {
+			"_keys": {
+				"album": {
+					"zz": "Publication titleay"
+				},
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"label": {
+					"zz": "Publisheray"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"release": {
+					"zz": "8ay"
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
 		"notes": [],
 		"numberOfVolumes": "7",
+		"opus": "Opus",
+		"originalDate": "0000-00-00 Original date",
 		"place": "Place",
 		"relations": {},
+		"release": "8",
 		"rights": "Rights",
 		"runningTime": "1:22:33",
 		"seriesTitle": "Series title",
@@ -96,6 +201,8 @@
 	"bill": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
+		"archiveLocation": "Archive location",
+		"assemblyNumber": "9",
 		"attachments": [],
 		"billNumber": "3",
 		"code": "Code",
@@ -106,17 +213,41 @@
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
@@ -125,13 +256,42 @@
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
+				"sessionType": {
+					"zz": "Typeay"
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
 		"notes": [],
 		"relations": {},
+		"resolutionLabel": "Resolution label",
 		"rights": "Rights",
 		"section": "Section",
 		"session": "Session",
+		"sessionType": "Type",
 		"shortTitle": "Short title",
 		"tags": [],
 		"title": "Title",
@@ -149,17 +309,41 @@
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
@@ -168,6 +352,23 @@
 		"extra": "Extra",
 		"itemType": "blogPost",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"blogTitle": {
+					"zz": "Publication titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"websiteType": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"notes": [],
 		"relations": {},
 		"rights": "Rights",
@@ -192,27 +393,80 @@
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
@@ -223,6 +477,36 @@
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
 		"notes": [],
 		"numPages": "4",
 		"numberOfVolumes": "7",
@@ -238,7 +522,8 @@
 		"uri": "http://zotero.org/users/local/riiZoBgm/items/GW3SAWW6",
 		"url": "http://www.example.com",
 		"version": 1,
-		"volume": "6"
+		"volume": "6",
+		"volumeTitle": "Volume title"
 	},
 	"bookSection": {
 		"ISBN": "978-1-234-56789-7",
@@ -254,32 +539,93 @@
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
@@ -290,6 +636,38 @@
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
+				"bookTitle": {
+					"zz": "Publication titleay"
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
 		"notes": [],
 		"numberOfVolumes": "7",
 		"pages": "1-10",
@@ -305,12 +683,16 @@
 		"uri": "http://zotero.org/users/local/riiZoBgm/items/RIPPV55H",
 		"url": "http://www.example.com",
 		"version": 1,
-		"volume": "6"
+		"volume": "6",
+		"volumeTitle": "Volume title"
 	},
 	"case": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
 		"attachments": [],
+		"callNumber": "Call number",
 		"caseName": "Title",
 		"collections": [],
 		"court": "Court",
@@ -318,38 +700,213 @@
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
 		"dateAdded": "2015-04-12T05:45:15Z",
 		"dateDecided": "1999-12-31",
 		"dateModified": "2015-04-12T05:45:15Z",
 		"docketNumber": "3",
+		"documentName": "Document name",
 		"extra": "Extra",
+		"filingDate": "2000-01-02 2000-01-02",
 		"firstPage": "1-10",
 		"history": "History",
+		"issue": "5",
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
+				"caseName": {
+					"zz": "Titleay"
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
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"reporter": {
+					"zz": "Publication titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"supplementName": {
+					"zz": "Supplement nameay"
+				}
+			},
+			"main": {}
+		},
 		"notes": [],
+		"place": "Place",
+		"publicationDate": "0000-00-00 Publication date",
+		"publisher": "Publisher",
+		"reign": "Reign",
 		"relations": {},
-		"reporter": "Reporter",
+		"reporter": "Publication title",
 		"reporterVolume": "6",
 		"rights": "Rights",
 		"shortTitle": "Short title",
+		"supplementName": "Supplement name",
 		"tags": [],
 		"uri": "http://zotero.org/users/local/riiZoBgm/items/QHZWSBCZ",
 		"url": "http://www.example.com",
-		"version": 1
+		"version": 1,
+		"yearAsVolume": "Year as volume"
+	},
+	"classic": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13T23:59:58Z",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
+		"attachments": [],
+		"callNumber": "Call number",
+		"collections": [],
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
+		"dateAdded": "2015-05-30T21:56:31Z",
+		"dateModified": "2015-05-30T21:56:31Z",
+		"extra": "Extra",
+		"itemType": "classic",
+		"language": "en-US",
+		"libraryCatalog": "Library catalog",
+		"manuscriptType": "Type",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"manuscriptType": {
+					"zz": "Typeay"
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
+		"notes": [],
+		"numPages": "4",
+		"place": "Place",
+		"relations": {},
+		"rights": "Rights",
+		"shortTitle": "Short title",
+		"tags": [],
+		"title": "Title",
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/EE8J55J8",
+		"url": "http://www.example.com",
+		"version": 1,
+		"volume": "6"
 	},
 	"computerProgram": {
 		"ISBN": "978-1-234-56789-7",
@@ -365,12 +922,28 @@
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
@@ -379,6 +952,32 @@
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
+				"company": {
+					"zz": "Publisheray"
+				},
+				"place": {
+					"zz": "Placeay"
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
 		"notes": [],
 		"place": "Place",
 		"programmingLanguage": "Programming language",
@@ -404,41 +1003,116 @@
 		"attachments": [],
 		"callNumber": "Call number",
 		"collections": [],
+		"conferenceDate": "0000-00-00 Conference date",
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
 		"dateAdded": "2015-04-12T05:45:15Z",
 		"dateModified": "2015-04-12T05:45:15Z",
 		"extra": "Extra",
+		"institution": "Institution",
+		"issue": "5",
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
+				"proceedingsTitle": {
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
 		"notes": [],
 		"pages": "1-10",
 		"place": "Place",
@@ -468,27 +1142,67 @@
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
@@ -500,6 +1214,38 @@
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
+				"dictionaryTitle": {
+					"zz": "Publication titleay"
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
 		"notes": [],
 		"numberOfVolumes": "7",
 		"pages": "1-10",
@@ -529,27 +1275,67 @@
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
@@ -559,6 +1345,26 @@
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
 		"notes": [],
 		"publisher": "Publisher",
 		"relations": {},
@@ -568,7 +1374,8 @@
 		"title": "Title",
 		"uri": "http://zotero.org/users/local/riiZoBgm/items/JC3ZJTHP",
 		"url": "http://www.example.com",
-		"version": 1
+		"version": 1,
+		"versionNumber": "Version"
 	},
 	"email": {
 		"abstractNote": "Abstract note",
@@ -579,17 +1386,41 @@
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
@@ -598,6 +1429,17 @@
 		"extra": "Extra",
 		"itemType": "email",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"subject": {
+					"zz": "Titleay"
+				}
+			},
+			"main": {}
+		},
 		"notes": [],
 		"relations": {},
 		"rights": "Rights",
@@ -621,27 +1463,67 @@
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
@@ -653,6 +1535,38 @@
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
+				"encyclopediaTitle": {
+					"zz": "Publication titleay"
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
 		"notes": [],
 		"numberOfVolumes": "7",
 		"pages": "1-10",
@@ -682,22 +1596,54 @@
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
@@ -709,6 +1655,29 @@
 		"itemType": "film",
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
+				"distributor": {
+					"zz": "Publisheray"
+				},
+				"genre": {
+					"zz": "Typeay"
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
 		"notes": [],
 		"relations": {},
 		"rights": "Rights",
@@ -730,12 +1699,28 @@
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
@@ -745,6 +1730,23 @@
 		"forumTitle": "Publication title",
 		"itemType": "forumPost",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"forumTitle": {
+					"zz": "Publication titleay"
+				},
+				"postType": {
+					"zz": "Typeay"
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
 		"notes": [],
 		"postType": "Type",
 		"relations": {},
@@ -756,17 +1758,118 @@
 		"url": "http://www.example.com",
 		"version": 1
 	},
+	"gazette": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13T23:59:58Z",
+		"attachments": [],
+		"code": "Code",
+		"codeNumber": "Code number",
+		"collections": [],
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
+		"dateAdded": "2015-05-30T21:56:31Z",
+		"dateEnacted": "1999-12-31",
+		"dateModified": "2015-05-30T21:56:31Z",
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
+				"nameOfAct": {
+					"zz": "Titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				}
+			},
+			"main": {}
+		},
+		"nameOfAct": "Title",
+		"notes": [],
+		"pages": "1-10",
+		"publicLawNumber": "3",
+		"publicationDate": "0000-00-00 Publication date",
+		"publisher": "Publisher",
+		"regnalYear": "Regnal year",
+		"reign": "Reign",
+		"relations": {},
+		"rights": "Rights",
+		"section": "Section",
+		"session": "Session",
+		"shortTitle": "Short title",
+		"tags": [],
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/IEATPBRZ",
+		"url": "http://www.example.com",
+		"version": 1
+	},
 	"hearing": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
+		"archiveLocation": "Archive location",
+		"assemblyNumber": "Assembly number",
 		"attachments": [],
 		"collections": [],
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
@@ -776,22 +1879,66 @@
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
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"reporter": {
+					"zz": "Publication titleay"
+				},
+				"resolutionLabel": {
+					"zz": "Resolution labelay"
+				},
+				"sessionType": {
+					"zz": "Typeay"
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
 		"notes": [],
 		"numberOfVolumes": "7",
 		"pages": "1-10",
 		"place": "Place",
 		"publisher": "Publisher",
 		"relations": {},
+		"reporter": "Publication title",
+		"resolutionLabel": "Resolution label",
 		"rights": "Rights",
 		"session": "Session",
+		"sessionType": "Type",
 		"shortTitle": "Short title",
 		"tags": [],
 		"title": "Title",
 		"uri": "http://zotero.org/users/local/riiZoBgm/items/3XQMN9Q5",
 		"url": "http://www.example.com",
-		"version": 1
+		"version": 1,
+		"volume": "6"
 	},
 	"instantMessage": {
 		"abstractNote": "Abstract note",
@@ -802,17 +1949,41 @@
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
@@ -821,6 +1992,17 @@
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
 		"notes": [],
 		"relations": {},
 		"rights": "Rights",
@@ -843,22 +2025,54 @@
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
@@ -869,6 +2083,23 @@
 		"itemType": "interview",
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
+				}
+			},
+			"main": {}
+		},
 		"notes": [],
 		"relations": {},
 		"rights": "Rights",
@@ -893,27 +2124,67 @@
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
@@ -923,8 +2194,41 @@
 		"issue": "5",
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
 		"notes": [],
 		"pages": "1-10",
 		"publicationTitle": "Publication title",
@@ -934,6 +2238,7 @@
 		"seriesText": "Series text",
 		"seriesTitle": "Series title",
 		"shortTitle": "Short title",
+		"status": "Status",
 		"tags": [],
 		"title": "Title",
 		"uri": "http://zotero.org/users/local/riiZoBgm/items/SWW5XKNW",
@@ -953,17 +2258,41 @@
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
@@ -974,6 +2303,26 @@
 		"language": "en-US",
 		"letterType": "Type",
 		"libraryCatalog": "Library catalog",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"letterType": {
+					"zz": "Typeay"
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
 		"notes": [],
 		"relations": {},
 		"rights": "Rights",
@@ -997,22 +2346,54 @@
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
@@ -1023,6 +2404,26 @@
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
 		"notes": [],
 		"pages": "1-10",
 		"publicationTitle": "Publication title",
@@ -1048,17 +2449,41 @@
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
@@ -1069,6 +2494,29 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"manuscriptType": "Type",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archiveLocation": {
+					"zz": "Archive locationay"
+				},
+				"manuscriptType": {
+					"zz": "Typeay"
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
 		"notes": [],
 		"numPages": "4",
 		"place": "Place",
@@ -1094,17 +2542,41 @@
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
@@ -1116,6 +2588,38 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"mapType": "Type",
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
+				"mapType": {
+					"zz": "Typeay"
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
 		"notes": [],
 		"place": "Place",
 		"publisher": "Publisher",
@@ -1139,26 +2643,59 @@
 		"attachments": [],
 		"callNumber": "Call number",
 		"collections": [],
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
@@ -1167,8 +2704,42 @@
 		"edition": "8",
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
+		"newsCaseDate": "0000-00-00 News case date",
 		"notes": [],
 		"pages": "1-10",
 		"place": "Place",
@@ -1195,17 +2766,54 @@
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
 		"dateAdded": "2015-04-12T05:45:15Z",
@@ -1215,13 +2823,34 @@
 		"issueDate": "1999-12-31",
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
 		"notes": [],
 		"pages": "1-10",
 		"patentNumber": "3",
 		"place": "Place",
+		"priorityDate": "0000-00-00 Priority date",
 		"priorityNumbers": "Priority numbers",
+		"publicationDate": "0000-00-00 Publication date",
+		"publicationNumber": "Publication number",
 		"references": "References",
 		"relations": {},
 		"rights": "Rights",
@@ -1242,26 +2871,69 @@
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
 		"dateAdded": "2015-04-12T05:45:15Z",
 		"dateModified": "2015-04-12T05:45:15Z",
 		"episodeNumber": "3",
 		"extra": "Extra",
 		"itemType": "podcast",
 		"language": "en-US",
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
 		"notes": [],
+		"publisher": "Publisher",
 		"relations": {},
 		"rights": "Rights",
 		"runningTime": "1:22:33",
@@ -1282,12 +2954,28 @@
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
@@ -1297,6 +2985,23 @@
 		"itemType": "presentation",
 		"language": "en-US",
 		"meetingName": "Meeting name",
+		"multi": {
+			"_keys": {
+				"place": {
+					"zz": "Placeay"
+				},
+				"presentationType": {
+					"zz": "Typeay"
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
 		"notes": [],
 		"place": "Place",
 		"presentationType": "Type",
@@ -1322,32 +3027,80 @@
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
@@ -1358,6 +3111,32 @@
 		"itemType": "radioBroadcast",
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
+				"network": {
+					"zz": "Publisheray"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"programTitle": {
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
 		"network": "Publisher",
 		"notes": [],
 		"place": "Place",
@@ -1372,59 +3151,339 @@
 		"url": "http://www.example.com",
 		"version": 1
 	},
+	"regulation": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13T23:59:58Z",
+		"attachments": [],
+		"code": "Code",
+		"codeNumber": "Code number",
+		"collections": [],
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
+		"dateAdded": "2015-05-30T21:56:31Z",
+		"dateEnacted": "1999-12-31",
+		"dateModified": "2015-05-30T21:56:31Z",
+		"extra": "Extra",
+		"gazetteFlag": "Gazette flag",
+		"history": "History",
+		"itemType": "regulation",
+		"jurisdiction": "Jurisdiction",
+		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"nameOfAct": {
+					"zz": "Titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"regulationType": {
+					"zz": "Typeay"
+				},
+				"regulatoryBody": {
+					"zz": "Legislative bodyay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				}
+			},
+			"main": {}
+		},
+		"nameOfAct": "Title",
+		"notes": [],
+		"pages": "1-10",
+		"publicLawNumber": "3",
+		"publicationDate": "0000-00-00 Publication date",
+		"publisher": "Publisher",
+		"regulationType": "Type",
+		"regulatoryBody": "Legislative body",
+		"relations": {},
+		"rights": "Rights",
+		"section": "Section",
+		"session": "Session",
+		"shortTitle": "Short title",
+		"tags": [],
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/NRP4RSCH",
+		"url": "http://www.example.com",
+		"version": 1
+	},
 	"report": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
 		"archive": "Archive",
 		"archiveLocation": "Archive location",
+		"assemblyNumber": "Assembly number",
 		"attachments": [],
+		"bookTitle": "Publication title",
 		"callNumber": "Call number",
 		"collections": [],
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
 		"dateAdded": "2015-04-12T05:45:15Z",
 		"dateModified": "2015-04-12T05:45:15Z",
 		"extra": "Extra",
-		"institution": "Publisher",
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
+				"bookTitle": {
+					"zz": "Publication titleay"
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
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"reportType": {
+					"zz": "Typeay"
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
 		"notes": [],
 		"pages": "1-10",
 		"place": "Place",
+		"publisher": "Publisher",
 		"relations": {},
 		"reportNumber": "3",
 		"reportType": "Type",
 		"rights": "Rights",
 		"seriesTitle": "Series title",
 		"shortTitle": "Short title",
+		"status": "Status",
 		"tags": [],
 		"title": "Title",
 		"uri": "http://zotero.org/users/local/riiZoBgm/items/Z2IZ9JEP",
 		"url": "http://www.example.com",
 		"version": 1
 	},
+	"standard": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13T23:59:58Z",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
+		"attachments": [],
+		"callNumber": "Call number",
+		"collections": [],
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
+		"dateAdded": "2015-05-30T21:56:31Z",
+		"dateModified": "2015-05-30T21:56:31Z",
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
+		"notes": [],
+		"number": "3",
+		"publisher": "Publisher",
+		"relations": {},
+		"rights": "Rights",
+		"shortTitle": "Short title",
+		"tags": [],
+		"title": "Title",
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/XH67EWD9",
+		"url": "http://www.example.com",
+		"version": 1,
+		"versionNumber": "Version"
+	},
 	"statute": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
@@ -1436,25 +3495,66 @@
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
 		"dateAdded": "2015-04-12T05:45:15Z",
+		"dateAmended": "0000-00-00 Date amended",
 		"dateEnacted": "1999-12-31",
 		"dateModified": "2015-04-12T05:45:15Z",
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
+				"nameOfAct": {
+					"zz": "Titleay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				}
+			},
+			"main": {}
+		},
 		"nameOfAct": "Title",
 		"notes": [],
+		"originalDate": "0000-00-00 Original date",
 		"pages": "1-10",
 		"publicLawNumber": "3",
+		"publicationDate": "0000-00-00 Publication date",
+		"publisher": "Publisher",
+		"regnalYear": "Regnal year",
+		"reign": "Reign",
 		"relations": {},
 		"rights": "Rights",
 		"section": "Section",
@@ -1477,12 +3577,28 @@
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
@@ -1492,6 +3608,32 @@
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
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"thesisType": {
+					"zz": "Typeay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"university": {
+					"zz": "Publisheray"
+				}
+			},
+			"main": {}
+		},
 		"notes": [],
 		"numPages": "4",
 		"place": "Place",
@@ -1506,6 +3648,129 @@
 		"url": "http://www.example.com",
 		"version": 1
 	},
+	"treaty": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13T23:59:58Z",
+		"adoptionDate": "0000-00-00 Adoption date",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
+		"attachments": [],
+		"callNumber": "Call number",
+		"collections": [],
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
+		"dateAdded": "2015-05-30T21:56:31Z",
+		"dateModified": "2015-05-30T21:56:31Z",
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
+		"notes": [],
+		"openingDate": "0000-00-00 Opening date",
+		"pages": "1-10",
+		"publisher": "Publisher",
+		"relations": {},
+		"reporter": "Reporter",
+		"rights": "Rights",
+		"section": "Section",
+		"shortTitle": "Short title",
+		"signingDate": "0000-00-00 Signing date",
+		"tags": [],
+		"title": "Title",
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/SXPVQM3D",
+		"url": "http://www.example.com",
+		"version": 1,
+		"volume": "6"
+	},
 	"tvBroadcast": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
@@ -1518,32 +3783,80 @@
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
@@ -1554,6 +3867,32 @@
 		"itemType": "tvBroadcast",
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
+				"network": {
+					"zz": "Publisheray"
+				},
+				"place": {
+					"zz": "Placeay"
+				},
+				"programTitle": {
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
 		"network": "Publisher",
 		"notes": [],
 		"place": "Place",
@@ -1582,27 +3921,67 @@
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
@@ -1612,6 +3991,35 @@
 		"itemType": "videoRecording",
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
+				"seriesTitle": {
+					"zz": "Series titleay"
+				},
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"studio": {
+					"zz": "Publisheray"
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
 		"notes": [],
 		"numberOfVolumes": "7",
 		"place": "Place",
@@ -1627,7 +4035,8 @@
 		"url": "http://www.example.com",
 		"version": 1,
 		"videoRecordingFormat": "Medium",
-		"volume": "6"
+		"volume": "6",
+		"websiteTitle": "Website title"
 	},
 	"webpage": {
 		"abstractNote": "Abstract note",
@@ -1638,17 +4047,41 @@
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
@@ -1657,6 +4090,23 @@
 		"extra": "Extra",
 		"itemType": "webpage",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"shortTitle": {
+					"zz": "Short titleay"
+				},
+				"title": {
+					"zz": "Titleay"
+				},
+				"websiteTitle": {
+					"zz": "Publication titleay"
+				},
+				"websiteType": {
+					"zz": "Typeay"
+				}
+			},
+			"main": {}
+		},
 		"notes": [],
 		"relations": {},
 		"rights": "Rights",
