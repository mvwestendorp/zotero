diff --git a/test/tests/data/itemJSON.js b/test/tests/data/itemJSON.js
index b2cedf2..2c3d1bb 100644
--- a/test/tests/data/itemJSON.js
+++ b/test/tests/data/itemJSON.js
@@ -12,12 +12,28 @@
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
@@ -28,18 +44,40 @@
 		"key": "C2U6JHJ5",
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
 		"relations": {},
 		"rights": "Rights",
 		"shortTitle": "Short title",
 		"tags": [],
 		"title": "Title",
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
 		"audioRecordingFormat": "Medium",
@@ -49,22 +87,54 @@
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
@@ -76,9 +146,44 @@
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
 		"numberOfVolumes": "7",
+		"opus": "Opus",
+		"originalDate": "0000-00-00 Original date",
 		"place": "Place",
 		"relations": {},
+		"release": "8",
 		"rights": "Rights",
 		"runningTime": "1:22:33",
 		"seriesTitle": "Series title",
@@ -92,6 +197,8 @@
 	"bill": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
+		"archiveLocation": "Archive location",
+		"assemblyNumber": "9",
 		"billNumber": "3",
 		"code": "Code",
 		"codePages": "1-10",
@@ -101,17 +208,41 @@
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
@@ -120,13 +251,42 @@
 		"extra": "Extra",
 		"history": "History",
 		"itemType": "bill",
+		"jurisdiction": "Jurisdiction",
 		"key": "6V75C9MH",
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
 		"relations": {},
+		"resolutionLabel": "Resolution label",
 		"rights": "Rights",
 		"section": "Section",
 		"session": "Session",
+		"sessionType": "Type",
 		"shortTitle": "Short title",
 		"tags": [],
 		"title": "Title",
@@ -142,17 +302,41 @@
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
@@ -162,6 +346,23 @@
 		"itemType": "blogPost",
 		"key": "BN2VE2RW",
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
 		"relations": {},
 		"rights": "Rights",
 		"shortTitle": "Short title",
@@ -183,27 +384,80 @@
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
@@ -215,6 +469,36 @@
 		"key": "A4HMTK44",
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
 		"numPages": "4",
 		"numberOfVolumes": "7",
 		"place": "Place",
@@ -228,7 +512,8 @@
 		"title": "Title",
 		"url": "http://www.example.com",
 		"version": 1,
-		"volume": "6"
+		"volume": "6",
+		"volumeTitle": "Volume title"
 	},
 	"bookSection": {
 		"ISBN": "978-1-234-56789-7",
@@ -243,32 +528,93 @@
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
@@ -280,6 +626,38 @@
 		"key": "DSEABJVM",
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
 		"numberOfVolumes": "7",
 		"pages": "1-10",
 		"place": "Place",
@@ -293,11 +671,15 @@
 		"title": "Title",
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
+		"callNumber": "Call number",
 		"caseName": "Title",
 		"collections": [],
 		"court": "Court",
@@ -305,37 +687,210 @@
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
 		"dateAdded": "2015-04-12T09:00:22Z",
 		"dateDecided": "1999-12-31",
 		"dateModified": "2015-04-12T09:00:22Z",
 		"docketNumber": "3",
+		"documentName": "Document name",
 		"extra": "Extra",
+		"filingDate": "2000-01-02 2000-01-02",
 		"firstPage": "1-10",
 		"history": "History",
+		"issue": "5",
 		"itemType": "case",
+		"jurisdiction": "Jurisdiction",
 		"key": "9A2VVWGX",
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
+		"dateAdded": "2015-05-30T13:14:20Z",
+		"dateModified": "2015-05-30T13:14:20Z",
+		"extra": "Extra",
+		"itemType": "classic",
+		"key": "Z2N5QBP2",
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
+		"numPages": "4",
+		"place": "Place",
+		"relations": {},
+		"rights": "Rights",
+		"shortTitle": "Short title",
+		"tags": [],
+		"title": "Title",
+		"url": "http://www.example.com",
+		"version": 1,
+		"volume": "6"
 	},
 	"computerProgram": {
 		"ISBN": "978-1-234-56789-7",
@@ -350,12 +905,28 @@
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
@@ -365,6 +936,32 @@
 		"itemType": "computerProgram",
 		"key": "8GM9MDIU",
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
 		"place": "Place",
 		"programmingLanguage": "Programming language",
 		"relations": {},
@@ -387,42 +984,117 @@
 		"archiveLocation": "Archive location",
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
 		"dateAdded": "2015-04-12T09:00:22Z",
 		"dateModified": "2015-04-12T09:00:22Z",
 		"extra": "Extra",
+		"institution": "Institution",
+		"issue": "5",
 		"itemType": "conferencePaper",
 		"key": "CEPUN4W5",
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
 		"pages": "1-10",
 		"place": "Place",
 		"proceedingsTitle": "Publication title",
@@ -449,27 +1121,67 @@
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
@@ -482,6 +1194,38 @@
 		"key": "E2P29JGR",
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
 		"numberOfVolumes": "7",
 		"pages": "1-10",
 		"place": "Place",
@@ -508,27 +1252,67 @@
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
@@ -539,6 +1323,26 @@
 		"key": "NGFWI347",
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
 		"relations": {},
 		"rights": "Rights",
@@ -546,7 +1350,8 @@
 		"tags": [],
 		"title": "Title",
 		"url": "http://www.example.com",
-		"version": 1
+		"version": 1,
+		"versionNumber": "Version"
 	},
 	"email": {
 		"abstractNote": "Abstract note",
@@ -556,17 +1361,41 @@
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
@@ -576,6 +1405,17 @@
 		"itemType": "email",
 		"key": "BMVVSV67",
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
 		"relations": {},
 		"rights": "Rights",
 		"shortTitle": "Short title",
@@ -596,27 +1436,67 @@
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
@@ -629,6 +1509,38 @@
 		"key": "J35AAWKK",
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
 		"numberOfVolumes": "7",
 		"pages": "1-10",
 		"place": "Place",
@@ -655,22 +1567,54 @@
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
@@ -683,6 +1627,29 @@
 		"key": "AETM84WQ",
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
 		"relations": {},
 		"rights": "Rights",
 		"runningTime": "1:22:33",
@@ -701,12 +1668,28 @@
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
@@ -717,6 +1700,23 @@
 		"itemType": "forumPost",
 		"key": "53KM42VR",
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
 		"postType": "Type",
 		"relations": {},
 		"rights": "Rights",
@@ -726,16 +1726,115 @@
 		"url": "http://www.example.com",
 		"version": 1
 	},
+	"gazette": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13T23:59:58Z",
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
+		"dateAdded": "2015-05-30T13:14:20Z",
+		"dateEnacted": "1999-12-31",
+		"dateModified": "2015-05-30T13:14:20Z",
+		"extra": "Extra",
+		"history": "History",
+		"itemType": "gazette",
+		"jurisdiction": "Jurisdiction",
+		"key": "69Z3F6D2",
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
+		"url": "http://www.example.com",
+		"version": 1
+	},
 	"hearing": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
+		"archiveLocation": "Archive location",
+		"assemblyNumber": "Assembly number",
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
@@ -745,21 +1844,65 @@
 		"extra": "Extra",
 		"history": "History",
 		"itemType": "hearing",
+		"jurisdiction": "Jurisdiction",
 		"key": "G2NRUQUQ",
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
 		"url": "http://www.example.com",
-		"version": 1
+		"version": 1,
+		"volume": "6"
 	},
 	"instantMessage": {
 		"abstractNote": "Abstract note",
@@ -769,17 +1912,41 @@
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
@@ -789,6 +1956,17 @@
 		"itemType": "instantMessage",
 		"key": "373CN2R3",
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
 		"relations": {},
 		"rights": "Rights",
 		"shortTitle": "Short title",
@@ -808,22 +1986,54 @@
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
@@ -835,6 +2045,23 @@
 		"key": "Q99SF7NK",
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
 		"relations": {},
 		"rights": "Rights",
 		"shortTitle": "Short title",
@@ -856,27 +2083,67 @@
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
@@ -886,9 +2153,42 @@
 		"issue": "5",
 		"itemType": "journalArticle",
 		"journalAbbreviation": "Journal abbreviation",
+		"jurisdiction": "Jurisdiction",
 		"key": "UXSSZ972",
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
 		"relations": {},
@@ -897,6 +2197,7 @@
 		"seriesText": "Series text",
 		"seriesTitle": "Series title",
 		"shortTitle": "Short title",
+		"status": "Status",
 		"tags": [],
 		"title": "Title",
 		"url": "http://www.example.com",
@@ -914,17 +2215,41 @@
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
@@ -936,6 +2261,26 @@
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
 		"relations": {},
 		"rights": "Rights",
 		"shortTitle": "Short title",
@@ -956,22 +2301,54 @@
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
@@ -983,6 +2360,26 @@
 		"key": "7GR89G56",
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
 		"relations": {},
@@ -1005,17 +2402,41 @@
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
@@ -1027,6 +2448,29 @@
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
 		"numPages": "4",
 		"place": "Place",
 		"relations": {},
@@ -1049,17 +2493,41 @@
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
@@ -1072,6 +2540,38 @@
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
 		"place": "Place",
 		"publisher": "Publisher",
 		"relations": {},
@@ -1092,26 +2592,59 @@
 		"archiveLocation": "Archive location",
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
@@ -1120,9 +2653,43 @@
 		"edition": "8",
 		"extra": "Extra",
 		"itemType": "newspaperArticle",
+		"jurisdiction": "Jurisdiction",
 		"key": "DEDZ6I2G",
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
 		"pages": "1-10",
 		"place": "Place",
 		"publicationTitle": "Publication title",
@@ -1146,17 +2713,54 @@
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
 		"dateAdded": "2015-04-12T09:00:22Z",
@@ -1166,13 +2770,34 @@
 		"issueDate": "1999-12-31",
 		"issuingAuthority": "Issuing authority",
 		"itemType": "patent",
+		"jurisdiction": "Jurisdiction",
 		"key": "MTZVXTRG",
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
@@ -1191,19 +2816,44 @@
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
 		"dateAdded": "2015-04-12T09:00:22Z",
 		"dateModified": "2015-04-12T09:00:22Z",
 		"episodeNumber": "3",
@@ -1211,6 +2861,24 @@
 		"itemType": "podcast",
 		"key": "6N3TDNFS",
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
+		"publisher": "Publisher",
 		"relations": {},
 		"rights": "Rights",
 		"runningTime": "1:22:33",
@@ -1229,12 +2897,28 @@
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
@@ -1245,6 +2929,23 @@
 		"key": "2JTV9A3T",
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
 		"place": "Place",
 		"presentationType": "Type",
 		"relations": {},
@@ -1267,32 +2968,80 @@
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
@@ -1304,6 +3053,32 @@
 		"key": "KH7HSUMX",
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
 		"place": "Place",
 		"programTitle": "Publication title",
@@ -1316,57 +3091,333 @@
 		"url": "http://www.example.com",
 		"version": 1
 	},
+	"regulation": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13T23:59:58Z",
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
+		"dateAdded": "2015-05-30T13:14:20Z",
+		"dateEnacted": "1999-12-31",
+		"dateModified": "2015-05-30T13:14:20Z",
+		"extra": "Extra",
+		"gazetteFlag": "Gazette flag",
+		"history": "History",
+		"itemType": "regulation",
+		"jurisdiction": "Jurisdiction",
+		"key": "4J7J6AQA",
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
+		"url": "http://www.example.com",
+		"version": 1
+	},
 	"report": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
 		"archive": "Archive",
 		"archiveLocation": "Archive location",
+		"assemblyNumber": "Assembly number",
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
 		"dateAdded": "2015-04-12T09:00:22Z",
 		"dateModified": "2015-04-12T09:00:22Z",
 		"extra": "Extra",
-		"institution": "Publisher",
+		"institution": "Institution",
 		"itemType": "report",
+		"jurisdiction": "Jurisdiction",
 		"key": "V3MJGNVJ",
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
 		"url": "http://www.example.com",
 		"version": 1
 	},
+	"standard": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13T23:59:58Z",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
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
+		"dateAdded": "2015-05-30T13:14:20Z",
+		"dateModified": "2015-05-30T13:14:20Z",
+		"extra": "Extra",
+		"itemType": "standard",
+		"key": "5I4B2DCX",
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
+		"number": "3",
+		"publisher": "Publisher",
+		"relations": {},
+		"rights": "Rights",
+		"shortTitle": "Short title",
+		"tags": [],
+		"title": "Title",
+		"url": "http://www.example.com",
+		"version": 1,
+		"versionNumber": "Version"
+	},
 	"statute": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
@@ -1377,25 +3428,66 @@
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
 		"dateAdded": "2015-04-12T09:00:22Z",
+		"dateAmended": "0000-00-00 Date amended",
 		"dateEnacted": "1999-12-31",
 		"dateModified": "2015-04-12T09:00:22Z",
 		"extra": "Extra",
+		"gazetteFlag": "Gazette flag",
 		"history": "History",
 		"itemType": "statute",
+		"jurisdiction": "Jurisdiction",
 		"key": "89B8MRBX",
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
@@ -1416,12 +3508,28 @@
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
@@ -1432,6 +3540,32 @@
 		"key": "NCHRWGKP",
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
 		"numPages": "4",
 		"place": "Place",
 		"relations": {},
@@ -1444,6 +3578,127 @@
 		"url": "http://www.example.com",
 		"version": 1
 	},
+	"treaty": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13T23:59:58Z",
+		"adoptionDate": "0000-00-00 Adoption date",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
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
+		"dateAdded": "2015-05-30T13:14:20Z",
+		"dateModified": "2015-05-30T13:14:20Z",
+		"extra": "Extra",
+		"itemType": "treaty",
+		"key": "JK2FZVB7",
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
+		"url": "http://www.example.com",
+		"version": 1,
+		"volume": "6"
+	},
 	"tvBroadcast": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13T23:59:58Z",
@@ -1455,32 +3710,80 @@
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
@@ -1492,6 +3795,32 @@
 		"key": "RJE8KPDJ",
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
 		"place": "Place",
 		"programTitle": "Publication title",
@@ -1517,27 +3846,67 @@
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
@@ -1548,6 +3917,35 @@
 		"key": "QP98PAM5",
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
 		"numberOfVolumes": "7",
 		"place": "Place",
 		"relations": {},
@@ -1561,7 +3959,8 @@
 		"url": "http://www.example.com",
 		"version": 1,
 		"videoRecordingFormat": "Medium",
-		"volume": "6"
+		"volume": "6",
+		"websiteTitle": "Website title"
 	},
 	"webpage": {
 		"abstractNote": "Abstract note",
@@ -1571,17 +3970,41 @@
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
@@ -1591,6 +4014,23 @@
 		"itemType": "webpage",
 		"key": "MDFARNFI",
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
 		"relations": {},
 		"rights": "Rights",
 		"shortTitle": "Short title",
