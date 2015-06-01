diff --git a/test/tests/data/translatorExportLegacy.js b/test/tests/data/translatorExportLegacy.js
index b4c670a..38291e4 100644
--- a/test/tests/data/translatorExportLegacy.js
+++ b/test/tests/data/translatorExportLegacy.js
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
@@ -32,7 +48,28 @@
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
+				},
+				"websiteTitle": {
+					"zz": "Publication titleay"
+				}
+			},
+			"main": {}
+		},
 		"notes": [],
+		"publicationTitle": "Publication title",
 		"relations": {},
 		"rights": "Rights",
 		"seeAlso": [],
@@ -51,18 +88,21 @@
 			"language": "en-US",
 			"libraryCatalog": "Library catalog",
 			"medium": "Medium",
+			"publicationTitle": "Publication title",
 			"rights": "Rights",
 			"shortTitle": "Short title",
 			"title": "Title",
 			"url": "http://www.example.com"
 		},
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/URG4NG9K",
-		"url": "http://www.example.com"
+		"url": "http://www.example.com",
+		"websiteTitle": "Publication title"
 	},
 	"audioRecording": {
 		"ISBN": "978-1-234-56789-7",
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
+		"album": "Publication title",
 		"archive": "Archive",
 		"archiveLocation": "Archive location",
 		"attachments": [],
@@ -73,27 +113,60 @@
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
 		"dateAdded": "2015-04-26 06:40:48",
 		"dateModified": "2015-04-26 06:40:48",
+		"edition": "8",
 		"extra": "Extra",
 		"itemID": 72,
 		"itemType": "audioRecording",
@@ -103,11 +176,47 @@
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
 		"medium": "Medium",
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
+		"publicationTitle": "Publication title",
 		"publisher": "Publisher",
 		"relations": {},
+		"release": "8",
 		"rights": "Rights",
 		"runningTime": "1:22:33",
 		"seeAlso": [],
@@ -123,12 +232,16 @@
 			"archiveLocation": "Archive location",
 			"callNumber": "Call number",
 			"date": "1999-12-31",
+			"edition": "8",
 			"extra": "Extra",
 			"language": "en-US",
 			"libraryCatalog": "Library catalog",
 			"medium": "Medium",
 			"numberOfVolumes": "7",
+			"opus": "Opus",
+			"originalDate": "0000-00-00 Original date",
 			"place": "Place",
+			"publicationTitle": "Publication title",
 			"publisher": "Publisher",
 			"rights": "Rights",
 			"runningTime": "1:22:33",
@@ -145,6 +258,8 @@
 	"bill": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
+		"archiveLocation": "Archive location",
+		"assemblyNumber": "9",
 		"attachments": [],
 		"billNumber": "3",
 		"code": "Code",
@@ -155,17 +270,41 @@
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
@@ -175,37 +314,73 @@
 		"history": "History",
 		"itemID": 73,
 		"itemType": "bill",
+		"jurisdiction": "Jurisdiction",
 		"key": "XHEAETDQ",
 		"language": "en-US",
 		"legislativeBody": "Legislative body",
 		"libraryID": null,
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
 		"number": "3",
 		"pages": "1-10",
 		"relations": {},
+		"resolutionLabel": "Resolution label",
 		"rights": "Rights",
 		"section": "Section",
 		"seeAlso": [],
+		"seriesNumber": "9",
 		"session": "Session",
+		"sessionType": "Type",
 		"shortTitle": "Short title",
 		"tags": [],
 		"title": "Title",
+		"type": "Type",
 		"uniqueFields": {
 			"abstractNote": "Abstract note",
 			"accessDate": "1997-06-13 23:59:58",
+			"archiveLocation": "Archive location",
 			"code": "Code",
 			"date": "1999-12-31",
 			"extra": "Extra",
 			"history": "History",
+			"jurisdiction": "Jurisdiction",
 			"language": "en-US",
 			"legislativeBody": "Legislative body",
 			"number": "3",
 			"pages": "1-10",
+			"resolutionLabel": "Resolution label",
 			"rights": "Rights",
 			"section": "Section",
+			"seriesNumber": "9",
 			"session": "Session",
 			"shortTitle": "Short title",
 			"title": "Title",
+			"type": "Type",
 			"url": "http://www.example.com",
 			"volume": "6"
 		},
@@ -223,17 +398,41 @@
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
@@ -245,6 +444,23 @@
 		"key": "P5CEI9PJ",
 		"language": "en-US",
 		"libraryID": null,
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
 		"publicationTitle": "Publication title",
 		"relations": {},
@@ -284,27 +500,80 @@
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
@@ -318,6 +587,36 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -343,6 +642,7 @@
 			"extra": "Extra",
 			"language": "en-US",
 			"libraryCatalog": "Library catalog",
+			"medium": "Medium",
 			"numPages": "4",
 			"numberOfVolumes": "7",
 			"place": "Place",
@@ -353,11 +653,13 @@
 			"shortTitle": "Short title",
 			"title": "Title",
 			"url": "http://www.example.com",
-			"volume": "6"
+			"volume": "6",
+			"volumeTitle": "Volume title"
 		},
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/SQW3USEX",
 		"url": "http://www.example.com",
-		"volume": "6"
+		"volume": "6",
+		"volumeTitle": "Volume title"
 	},
 	"bookSection": {
 		"ISBN": "978-1-234-56789-7",
@@ -373,32 +675,93 @@
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
@@ -412,6 +775,38 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -449,16 +844,21 @@
 			"shortTitle": "Short title",
 			"title": "Title",
 			"url": "http://www.example.com",
-			"volume": "6"
+			"volume": "6",
+			"volumeTitle": "Volume title"
 		},
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/I3R2EZA4",
 		"url": "http://www.example.com",
-		"volume": "6"
+		"volume": "6",
+		"volumeTitle": "Volume title"
 	},
 	"case": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
+		"archive": "Archive",
+		"archiveLocation": "Archive location",
 		"attachments": [],
+		"callNumber": "Call number",
 		"caseName": "Title",
 		"collections": [],
 		"court": "Court",
@@ -466,17 +866,54 @@
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
@@ -484,44 +921,219 @@
 		"dateDecided": "1999-12-31",
 		"dateModified": "2015-04-26 06:40:48",
 		"docketNumber": "3",
+		"documentName": "Document name",
 		"extra": "Extra",
+		"filingDate": "2000-01-02 2000-01-02",
 		"firstPage": "1-10",
 		"history": "History",
+		"issue": "5",
 		"itemID": 77,
 		"itemType": "case",
+		"jurisdiction": "Jurisdiction",
 		"key": "27FBK7IW",
 		"language": "en-US",
 		"libraryID": null,
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
 		"number": "3",
 		"pages": "1-10",
+		"place": "Place",
+		"publicationDate": "0000-00-00 Publication date",
+		"publicationTitle": "Publication title",
+		"publisher": "Publisher",
+		"reign": "Reign",
 		"relations": {},
-		"reporter": "Reporter",
+		"reporter": "Publication title",
 		"reporterVolume": "6",
 		"rights": "Rights",
 		"seeAlso": [],
 		"shortTitle": "Short title",
+		"supplementName": "Supplement name",
 		"tags": [],
 		"title": "Title",
 		"uniqueFields": {
 			"abstractNote": "Abstract note",
 			"accessDate": "1997-06-13 23:59:58",
+			"archive": "Archive",
+			"archiveLocation": "Archive location",
+			"callNumber": "Call number",
 			"court": "Court",
 			"date": "1999-12-31",
+			"documentName": "Document name",
 			"extra": "Extra",
+			"filingDate": "2000-01-02 2000-01-02",
 			"history": "History",
+			"issue": "5",
+			"jurisdiction": "Jurisdiction",
 			"language": "en-US",
 			"number": "3",
 			"pages": "1-10",
-			"reporter": "Reporter",
+			"place": "Place",
+			"publicationDate": "0000-00-00 Publication date",
+			"publicationTitle": "Publication title",
+			"publisher": "Publisher",
+			"reign": "Reign",
 			"rights": "Rights",
 			"shortTitle": "Short title",
+			"supplementName": "Supplement name",
 			"title": "Title",
 			"url": "http://www.example.com",
-			"volume": "6"
+			"volume": "6",
+			"yearAsVolume": "Year as volume"
 		},
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/27FBK7IW",
 		"url": "http://www.example.com",
+		"volume": "6",
+		"yearAsVolume": "Year as volume"
+	},
+	"classic": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
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
+		"dateAdded": "2015-05-30 21:56:30",
+		"dateModified": "2015-05-30 21:56:30",
+		"extra": "Extra",
+		"itemID": 88,
+		"itemType": "classic",
+		"key": "EBDQSSAQ",
+		"language": "en-US",
+		"libraryCatalog": "Library catalog",
+		"libraryID": null,
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
+		"seeAlso": [],
+		"shortTitle": "Short title",
+		"tags": [],
+		"title": "Title",
+		"type": "Type",
+		"uniqueFields": {
+			"abstractNote": "Abstract note",
+			"accessDate": "1997-06-13 23:59:58",
+			"archive": "Archive",
+			"archiveLocation": "Archive location",
+			"callNumber": "Call number",
+			"date": "1999-12-31",
+			"extra": "Extra",
+			"language": "en-US",
+			"libraryCatalog": "Library catalog",
+			"numPages": "4",
+			"place": "Place",
+			"rights": "Rights",
+			"shortTitle": "Short title",
+			"title": "Title",
+			"type": "Type",
+			"url": "http://www.example.com",
+			"volume": "6"
+		},
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/EBDQSSAQ",
+		"url": "http://www.example.com",
 		"volume": "6"
 	},
 	"computerProgram": {
@@ -538,12 +1150,28 @@
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
@@ -555,6 +1183,32 @@
 		"key": "ZVFQ59AJ",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -602,44 +1256,119 @@
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
 		"dateAdded": "2015-04-26 06:40:48",
 		"dateModified": "2015-04-26 06:40:48",
 		"extra": "Extra",
+		"institution": "Institution",
+		"issue": "5",
 		"itemID": 79,
 		"itemType": "conferencePaper",
 		"key": "4X4JGKAA",
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -661,9 +1390,12 @@
 			"archive": "Archive",
 			"archiveLocation": "Archive location",
 			"callNumber": "Call number",
+			"conferenceDate": "0000-00-00 Conference date",
 			"conferenceName": "Conference name",
 			"date": "1999-12-31",
 			"extra": "Extra",
+			"institution": "Institution",
+			"issue": "5",
 			"language": "en-US",
 			"libraryCatalog": "Library catalog",
 			"pages": "1-10",
@@ -694,27 +1426,67 @@
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
@@ -729,6 +1501,38 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -784,27 +1588,67 @@
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
@@ -817,6 +1661,26 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -839,10 +1703,12 @@
 			"rights": "Rights",
 			"shortTitle": "Short title",
 			"title": "Title",
-			"url": "http://www.example.com"
+			"url": "http://www.example.com",
+			"version": "Version"
 		},
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/TRVQD4MU",
-		"url": "http://www.example.com"
+		"url": "http://www.example.com",
+		"version": "Version"
 	},
 	"email": {
 		"abstractNote": "Abstract note",
@@ -853,17 +1719,41 @@
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
@@ -875,6 +1765,17 @@
 		"key": "B972FZG7",
 		"language": "en-US",
 		"libraryID": null,
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
@@ -910,27 +1811,67 @@
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
@@ -945,6 +1886,38 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -1000,22 +1973,54 @@
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
@@ -1031,6 +2036,29 @@
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
 		"medium": "Medium",
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
 		"publisher": "Publisher",
 		"relations": {},
@@ -1073,12 +2101,28 @@
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
@@ -1091,6 +2135,23 @@
 		"key": "4HQTXH7A",
 		"language": "en-US",
 		"libraryID": null,
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
 		"publicationTitle": "Publication title",
@@ -1117,17 +2178,147 @@
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/4HQTXH7A",
 		"url": "http://www.example.com"
 	},
+	"gazette": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
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
+		"date": "1999-12-31",
+		"dateAdded": "2015-05-30 21:56:30",
+		"dateEnacted": "1999-12-31",
+		"dateModified": "2015-05-30 21:56:30",
+		"extra": "Extra",
+		"history": "History",
+		"itemID": 97,
+		"itemType": "gazette",
+		"jurisdiction": "Jurisdiction",
+		"key": "S87K9VKS",
+		"language": "en-US",
+		"libraryID": null,
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
+		"number": "3",
+		"pages": "1-10",
+		"publicLawNumber": "3",
+		"publicationDate": "0000-00-00 Publication date",
+		"publisher": "Publisher",
+		"regnalYear": "Regnal year",
+		"reign": "Reign",
+		"relations": {},
+		"rights": "Rights",
+		"section": "Section",
+		"seeAlso": [],
+		"session": "Session",
+		"shortTitle": "Short title",
+		"tags": [],
+		"title": "Title",
+		"uniqueFields": {
+			"abstractNote": "Abstract note",
+			"accessDate": "1997-06-13 23:59:58",
+			"code": "Code",
+			"codeNumber": "Code number",
+			"date": "1999-12-31",
+			"extra": "Extra",
+			"history": "History",
+			"jurisdiction": "Jurisdiction",
+			"language": "en-US",
+			"number": "3",
+			"pages": "1-10",
+			"publicationDate": "0000-00-00 Publication date",
+			"publisher": "Publisher",
+			"regnalYear": "Regnal year",
+			"reign": "Reign",
+			"rights": "Rights",
+			"section": "Section",
+			"session": "Session",
+			"shortTitle": "Short title",
+			"title": "Title",
+			"url": "http://www.example.com"
+		},
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/S87K9VKS",
+		"url": "http://www.example.com"
+	},
 	"hearing": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
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
@@ -1138,45 +2329,99 @@
 		"history": "History",
 		"itemID": 86,
 		"itemType": "hearing",
+		"jurisdiction": "Jurisdiction",
 		"key": "ZFDSUNIK",
 		"language": "en-US",
 		"legislativeBody": "Legislative body",
 		"libraryID": null,
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
 		"number": "3",
 		"numberOfVolumes": "7",
 		"pages": "1-10",
 		"place": "Place",
+		"publicationTitle": "Publication title",
 		"publisher": "Publisher",
 		"relations": {},
+		"reporter": "Publication title",
+		"resolutionLabel": "Resolution label",
 		"rights": "Rights",
 		"seeAlso": [],
 		"session": "Session",
+		"sessionType": "Type",
 		"shortTitle": "Short title",
 		"tags": [],
 		"title": "Title",
+		"type": "Type",
 		"uniqueFields": {
 			"abstractNote": "Abstract note",
 			"accessDate": "1997-06-13 23:59:58",
+			"archiveLocation": "Archive location",
+			"assemblyNumber": "Assembly number",
 			"committee": "Committee",
 			"date": "1999-12-31",
 			"extra": "Extra",
 			"history": "History",
+			"jurisdiction": "Jurisdiction",
 			"language": "en-US",
 			"legislativeBody": "Legislative body",
+			"meetingNumber": "Meeting number",
 			"number": "3",
 			"numberOfVolumes": "7",
 			"pages": "1-10",
 			"place": "Place",
+			"publicationTitle": "Publication title",
 			"publisher": "Publisher",
+			"resolutionLabel": "Resolution label",
 			"rights": "Rights",
 			"session": "Session",
 			"shortTitle": "Short title",
 			"title": "Title",
-			"url": "http://www.example.com"
+			"type": "Type",
+			"url": "http://www.example.com",
+			"volume": "6"
 		},
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/ZFDSUNIK",
-		"url": "http://www.example.com"
+		"url": "http://www.example.com",
+		"volume": "6"
 	},
 	"instantMessage": {
 		"abstractNote": "Abstract note",
@@ -1187,17 +2432,41 @@
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
@@ -1209,6 +2478,17 @@
 		"key": "XJ3877Z8",
 		"language": "en-US",
 		"libraryID": null,
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
@@ -1242,22 +2522,54 @@
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
@@ -1272,6 +2584,23 @@
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
 		"notes": [],
 		"relations": {},
 		"rights": "Rights",
@@ -1312,27 +2641,67 @@
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
@@ -1343,10 +2712,43 @@
 		"itemID": 89,
 		"itemType": "journalArticle",
 		"journalAbbreviation": "Journal abbreviation",
+		"jurisdiction": "Jurisdiction",
 		"key": "B4GITB3Z",
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -1357,6 +2759,7 @@
 		"seriesText": "Series text",
 		"seriesTitle": "Series title",
 		"shortTitle": "Short title",
+		"status": "Status",
 		"tags": [],
 		"title": "Title",
 		"uniqueFields": {
@@ -1371,6 +2774,7 @@
 			"extra": "Extra",
 			"issue": "5",
 			"journalAbbreviation": "Journal abbreviation",
+			"jurisdiction": "Jurisdiction",
 			"language": "en-US",
 			"libraryCatalog": "Library catalog",
 			"pages": "1-10",
@@ -1380,6 +2784,7 @@
 			"seriesText": "Series text",
 			"seriesTitle": "Series title",
 			"shortTitle": "Short title",
+			"status": "Status",
 			"title": "Title",
 			"url": "http://www.example.com",
 			"volume": "6"
@@ -1400,17 +2805,41 @@
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
@@ -1424,6 +2853,26 @@
 		"letterType": "Type",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -1464,22 +2913,54 @@
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
@@ -1493,6 +2974,26 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -1538,17 +3039,41 @@
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
@@ -1562,6 +3087,29 @@
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -1606,17 +3154,41 @@
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
@@ -1631,6 +3203,38 @@
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -1677,26 +3281,59 @@
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
@@ -1706,10 +3343,44 @@
 		"extra": "Extra",
 		"itemID": 94,
 		"itemType": "newspaperArticle",
+		"jurisdiction": "Jurisdiction",
 		"key": "4PHE8AXE",
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -1728,11 +3399,14 @@
 			"archive": "Archive",
 			"archiveLocation": "Archive location",
 			"callNumber": "Call number",
+			"court": "Court",
 			"date": "1999-12-31",
 			"edition": "8",
 			"extra": "Extra",
+			"jurisdiction": "Jurisdiction",
 			"language": "en-US",
 			"libraryCatalog": "Library catalog",
+			"newsCaseDate": "0000-00-00 News case date",
 			"pages": "1-10",
 			"place": "Place",
 			"publicationTitle": "Publication title",
@@ -1757,17 +3431,54 @@
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
@@ -1779,16 +3490,37 @@
 		"issuingAuthority": "Issuing authority",
 		"itemID": 95,
 		"itemType": "patent",
+		"jurisdiction": "Jurisdiction",
 		"key": "URAE2N3M",
 		"language": "en-US",
 		"legalStatus": "Legal status",
 		"libraryID": null,
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
 		"number": "3",
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
@@ -1806,12 +3538,16 @@
 			"extra": "Extra",
 			"filingDate": "2000-01-02 2000-01-02",
 			"issuingAuthority": "Issuing authority",
+			"jurisdiction": "Jurisdiction",
 			"language": "en-US",
 			"legalStatus": "Legal status",
 			"number": "3",
 			"pages": "1-10",
 			"place": "Place",
+			"priorityDate": "0000-00-00 Priority date",
 			"priorityNumbers": "Priority numbers",
+			"publicationDate": "0000-00-00 Publication date",
+			"publicationNumber": "Publication number",
 			"references": "References",
 			"rights": "Rights",
 			"shortTitle": "Short title",
@@ -1831,19 +3567,44 @@
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
 		"dateAdded": "2015-04-26 06:40:48",
 		"dateModified": "2015-04-26 06:40:48",
 		"episodeNumber": "3",
@@ -1854,8 +3615,26 @@
 		"language": "en-US",
 		"libraryID": null,
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
 		"notes": [],
 		"number": "3",
+		"publisher": "Publisher",
 		"relations": {},
 		"rights": "Rights",
 		"runningTime": "1:22:33",
@@ -1867,10 +3646,12 @@
 		"uniqueFields": {
 			"abstractNote": "Abstract note",
 			"accessDate": "1997-06-13 23:59:58",
+			"date": "1999-12-31",
 			"extra": "Extra",
 			"language": "en-US",
 			"medium": "Medium",
 			"number": "3",
+			"publisher": "Publisher",
 			"rights": "Rights",
 			"runningTime": "1:22:33",
 			"seriesTitle": "Series title",
@@ -1890,12 +3671,28 @@
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
@@ -1908,6 +3705,23 @@
 		"language": "en-US",
 		"libraryID": null,
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
@@ -1948,32 +3762,80 @@
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
@@ -1988,6 +3850,32 @@
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
 		"medium": "Medium",
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
 		"number": "3",
@@ -2026,51 +3914,247 @@
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/IANDVIRR",
 		"url": "http://www.example.com"
 	},
+	"regulation": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
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
+		"date": "1999-12-31",
+		"dateAdded": "2015-05-30 21:56:30",
+		"dateEnacted": "1999-12-31",
+		"dateModified": "2015-05-30 21:56:30",
+		"extra": "Extra",
+		"gazetteFlag": "Gazette flag",
+		"history": "History",
+		"itemID": 111,
+		"itemType": "regulation",
+		"jurisdiction": "Jurisdiction",
+		"key": "TATTRC8M",
+		"language": "en-US",
+		"legislativeBody": "Legislative body",
+		"libraryID": null,
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
+		"number": "3",
+		"pages": "1-10",
+		"publicLawNumber": "3",
+		"publicationDate": "0000-00-00 Publication date",
+		"publisher": "Publisher",
+		"regulationType": "Type",
+		"regulatoryBody": "Legislative body",
+		"relations": {},
+		"rights": "Rights",
+		"section": "Section",
+		"seeAlso": [],
+		"session": "Session",
+		"shortTitle": "Short title",
+		"tags": [],
+		"title": "Title",
+		"type": "Type",
+		"uniqueFields": {
+			"abstractNote": "Abstract note",
+			"accessDate": "1997-06-13 23:59:58",
+			"code": "Code",
+			"codeNumber": "Code number",
+			"date": "1999-12-31",
+			"extra": "Extra",
+			"gazetteFlag": "Gazette flag",
+			"history": "History",
+			"jurisdiction": "Jurisdiction",
+			"language": "en-US",
+			"legislativeBody": "Legislative body",
+			"number": "3",
+			"pages": "1-10",
+			"publicationDate": "0000-00-00 Publication date",
+			"publisher": "Publisher",
+			"rights": "Rights",
+			"section": "Section",
+			"session": "Session",
+			"shortTitle": "Short title",
+			"title": "Title",
+			"type": "Type",
+			"url": "http://www.example.com"
+		},
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/TATTRC8M",
+		"url": "http://www.example.com"
+	},
 	"report": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
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
 		"dateAdded": "2015-04-26 06:40:48",
 		"dateModified": "2015-04-26 06:40:48",
 		"extra": "Extra",
-		"institution": "Publisher",
+		"institution": "Institution",
 		"itemID": 99,
 		"itemType": "report",
+		"jurisdiction": "Jurisdiction",
 		"key": "2MBIEXX8",
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
 		"number": "3",
 		"pages": "1-10",
 		"place": "Place",
+		"publicationTitle": "Publication title",
 		"publisher": "Publisher",
 		"relations": {},
 		"reportNumber": "3",
@@ -2079,6 +4163,7 @@
 		"seeAlso": [],
 		"seriesTitle": "Series title",
 		"shortTitle": "Short title",
+		"status": "Status",
 		"tags": [],
 		"title": "Title",
 		"type": "Type",
@@ -2087,18 +4172,25 @@
 			"accessDate": "1997-06-13 23:59:58",
 			"archive": "Archive",
 			"archiveLocation": "Archive location",
+			"assemblyNumber": "Assembly number",
 			"callNumber": "Call number",
+			"committee": "Committee",
 			"date": "1999-12-31",
 			"extra": "Extra",
+			"institution": "Institution",
+			"jurisdiction": "Jurisdiction",
 			"language": "en-US",
 			"libraryCatalog": "Library catalog",
+			"medium": "Medium",
 			"number": "3",
 			"pages": "1-10",
 			"place": "Place",
+			"publicationTitle": "Publication title",
 			"publisher": "Publisher",
 			"rights": "Rights",
 			"seriesTitle": "Series title",
 			"shortTitle": "Short title",
+			"status": "Status",
 			"title": "Title",
 			"type": "Type",
 			"url": "http://www.example.com"
@@ -2106,6 +4198,142 @@
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/2MBIEXX8",
 		"url": "http://www.example.com"
 	},
+	"standard": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
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
+		"dateAdded": "2015-05-30 21:56:30",
+		"dateModified": "2015-05-30 21:56:30",
+		"extra": "Extra",
+		"itemID": 113,
+		"itemType": "standard",
+		"key": "TPPCMF4A",
+		"language": "en-US",
+		"libraryCatalog": "Library catalog",
+		"libraryID": null,
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
+		"seeAlso": [],
+		"shortTitle": "Short title",
+		"tags": [],
+		"title": "Title",
+		"uniqueFields": {
+			"abstractNote": "Abstract note",
+			"accessDate": "1997-06-13 23:59:58",
+			"archive": "Archive",
+			"archiveLocation": "Archive location",
+			"callNumber": "Call number",
+			"date": "1999-12-31",
+			"extra": "Extra",
+			"language": "en-US",
+			"libraryCatalog": "Library catalog",
+			"number": "3",
+			"publisher": "Publisher",
+			"rights": "Rights",
+			"shortTitle": "Short title",
+			"title": "Title",
+			"url": "http://www.example.com",
+			"version": "Version"
+		},
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/TPPCMF4A",
+		"url": "http://www.example.com",
+		"version": "Version"
+	},
 	"statute": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
@@ -2117,30 +4345,71 @@
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
 		"dateAdded": "2015-04-26 06:40:48",
+		"dateAmended": "0000-00-00 Date amended",
 		"dateEnacted": "1999-12-31",
 		"dateModified": "2015-04-26 06:40:48",
 		"extra": "Extra",
+		"gazetteFlag": "Gazette flag",
 		"history": "History",
 		"itemID": 100,
 		"itemType": "statute",
+		"jurisdiction": "Jurisdiction",
 		"key": "ZZWC5DCZ",
 		"language": "en-US",
 		"libraryID": null,
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
 		"number": "3",
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
@@ -2155,11 +4424,19 @@
 			"code": "Code",
 			"codeNumber": "Code number",
 			"date": "1999-12-31",
+			"dateAmended": "0000-00-00 Date amended",
 			"extra": "Extra",
+			"gazetteFlag": "Gazette flag",
 			"history": "History",
+			"jurisdiction": "Jurisdiction",
 			"language": "en-US",
 			"number": "3",
+			"originalDate": "0000-00-00 Original date",
 			"pages": "1-10",
+			"publicationDate": "0000-00-00 Publication date",
+			"publisher": "Publisher",
+			"regnalYear": "Regnal year",
+			"reign": "Reign",
 			"rights": "Rights",
 			"section": "Section",
 			"session": "Session",
@@ -2182,12 +4459,28 @@
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
@@ -2200,6 +4493,32 @@
 		"language": "en-US",
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -2235,6 +4554,155 @@
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/IZIFIQ9N",
 		"url": "http://www.example.com"
 	},
+	"treaty": {
+		"abstractNote": "Abstract note",
+		"accessDate": "1997-06-13 23:59:58",
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
+		"dateAdded": "2015-05-30 21:56:30",
+		"dateModified": "2015-05-30 21:56:30",
+		"extra": "Extra",
+		"itemID": 116,
+		"itemType": "treaty",
+		"key": "GIIVQTJE",
+		"language": "en-US",
+		"libraryCatalog": "Library catalog",
+		"libraryID": null,
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
+		"seeAlso": [],
+		"shortTitle": "Short title",
+		"signingDate": "0000-00-00 Signing date",
+		"tags": [],
+		"title": "Title",
+		"uniqueFields": {
+			"abstractNote": "Abstract note",
+			"accessDate": "1997-06-13 23:59:58",
+			"adoptionDate": "0000-00-00 Adoption date",
+			"archive": "Archive",
+			"archiveLocation": "Archive location",
+			"callNumber": "Call number",
+			"date": "1999-12-31",
+			"extra": "Extra",
+			"language": "en-US",
+			"libraryCatalog": "Library catalog",
+			"openingDate": "0000-00-00 Opening date",
+			"pages": "1-10",
+			"publisher": "Publisher",
+			"reporter": "Reporter",
+			"rights": "Rights",
+			"section": "Section",
+			"shortTitle": "Short title",
+			"signingDate": "0000-00-00 Signing date",
+			"title": "Title",
+			"url": "http://www.example.com",
+			"volume": "6"
+		},
+		"uri": "http://zotero.org/users/local/jygmAWOE/items/GIIVQTJE",
+		"url": "http://www.example.com",
+		"volume": "6"
+	},
 	"tvBroadcast": {
 		"abstractNote": "Abstract note",
 		"accessDate": "1997-06-13 23:59:58",
@@ -2247,32 +4715,80 @@
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
@@ -2287,6 +4803,32 @@
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
 		"medium": "Medium",
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
 		"number": "3",
@@ -2339,27 +4881,67 @@
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
@@ -2373,6 +4955,35 @@
 		"libraryCatalog": "Library catalog",
 		"libraryID": null,
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
@@ -2407,12 +5018,14 @@
 			"shortTitle": "Short title",
 			"title": "Title",
 			"url": "http://www.example.com",
-			"volume": "6"
+			"volume": "6",
+			"websiteTitle": "Website title"
 		},
 		"uri": "http://zotero.org/users/local/GtG6GoZj/items/6VRTBPRB",
 		"url": "http://www.example.com",
 		"videoRecordingFormat": "Medium",
-		"volume": "6"
+		"volume": "6",
+		"websiteTitle": "Website title"
 	},
 	"webpage": {
 		"abstractNote": "Abstract note",
@@ -2423,17 +5036,41 @@
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
@@ -2445,6 +5082,23 @@
 		"key": "CTAR75NZ",
 		"language": "en-US",
 		"libraryID": null,
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
 		"publicationTitle": "Publication title",
 		"relations": {},
