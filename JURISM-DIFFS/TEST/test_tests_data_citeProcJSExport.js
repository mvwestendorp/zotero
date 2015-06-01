diff --git a/test/tests/data/citeProcJSExport.js b/test/tests/data/citeProcJSExport.js
index eb24bc7..271c2c4 100644
--- a/test/tests/data/citeProcJSExport.js
+++ b/test/tests/data/citeProcJSExport.js
@@ -16,12 +16,35 @@
 		"author": [
 			{
 				"family": "artistLast",
-				"given": "artistFirst"
+				"given": "artistFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "artistLastay",
+							"given": "artistFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
+		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"dimensions": "Artwork size",
-		"id": 37,
+		"id": 42,
 		"issued": {
 			"date-parts": [
 				[
@@ -33,9 +56,30 @@
 		},
 		"language": "en-US",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"container-title": {
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
 		"note": "Extra",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "graphic"
 	},
@@ -53,11 +97,20 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "performerLast",
-				"given": "performerFirst"
+				"given": "performerFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "performerLastay",
+							"given": "performerFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
@@ -65,12 +118,36 @@
 		"composer": [
 			{
 				"family": "composerLast",
-				"given": "composerFirst"
+				"given": "composerFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "composerLastay",
+							"given": "composerFirstay"
+						}
+					}
+				}
+			}
+		],
+		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"dimensions": "1:22:33",
+		"edition": "8",
 		"event-place": "Place",
-		"id": 38,
+		"id": 43,
 		"issued": {
 			"date-parts": [
 				[
@@ -82,12 +159,61 @@
 		},
 		"language": "en-US",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Series titleay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number-of-volumes": "7",
+		"original-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Original date"
+		},
 		"publisher": "Publisher",
 		"publisher-place": "Place",
+		"section": "Opus",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "song",
 		"volume": "6"
@@ -104,16 +230,57 @@
 				]
 			]
 		},
+		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "sponsorLast",
-				"given": "sponsorFirst"
+				"given": "sponsorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "sponsorLastay",
+							"given": "sponsorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"authority": [
+			{
+				"family": "Legislative body",
+				"given": "",
+				"isInstitution": 1,
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "Legislative bodyay",
+							"given": "",
+							"isInstitution": 1
+						}
+					}
+				}
 			}
 		],
-		"authority": "Legislative body",
 		"chapter-number": "Session",
+		"collection-number": "9",
 		"container-title": "Code",
-		"id": 39,
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"event": "Resolution label",
+		"genre": "Type",
+		"id": 44,
 		"issued": {
 			"date-parts": [
 				[
@@ -123,13 +290,38 @@
 				]
 			]
 		},
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"event": {
+					"zz": "Resolution labelay"
+				},
+				"genre": {
+					"zz": "Typeay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
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
 		"note": "Extra",
 		"number": "3",
 		"page": "1-10",
 		"references": "History",
 		"section": "Section",
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "bill",
 		"volume": "6"
@@ -149,12 +341,48 @@
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"commenter": [
+			{
+				"family": "commenterLast",
+				"given": "commenterFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "commenterLastay",
+							"given": "commenterFirstay"
+						}
+					}
+				}
 			}
 		],
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"genre": "Type",
-		"id": 40,
+		"id": 45,
 		"issued": {
 			"date-parts": [
 				[
@@ -165,8 +393,26 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"container-title": {
+					"zz": "Publication titleay"
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
 		"note": "Extra",
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "post-weblog"
 	},
@@ -184,31 +430,70 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-editor": [
 			{
 				"family": "seriesEditorLast",
-				"given": "seriesEditorFirst"
+				"given": "seriesEditorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "seriesEditorLastay",
+							"given": "seriesEditorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"collection-number": "9",
 		"collection-title": "Series",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"edition": "8",
 		"editor": [
 			{
 				"family": "editorLast",
-				"given": "editorFirst"
+				"given": "editorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "editorLastay",
+							"given": "editorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"event-place": "Place",
-		"id": 41,
+		"id": 46,
 		"issued": {
 			"date-parts": [
 				[
@@ -219,22 +504,82 @@
 			]
 		},
 		"language": "en-US",
+		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Seriesay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number-of-pages": "4",
 		"number-of-volumes": "7",
 		"publisher": "Publisher",
 		"publisher-place": "Place",
+		"recipient": [
+			{
+				"family": "recipientLast",
+				"given": "recipientFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "recipientLastay",
+							"given": "recipientFirstay"
+						}
+					}
+				}
+			}
+		],
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "book",
-		"volume": "6"
+		"volume": "6",
+		"volume-title": "Volume title"
 	},
 	"bookSection": {
 		"ISBN": "978-1-234-56789-7",
@@ -250,18 +595,35 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-editor": [
 			{
 				"family": "seriesEditorLast",
-				"given": "seriesEditorFirst"
+				"given": "seriesEditorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "seriesEditorLastay",
+							"given": "seriesEditorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"collection-number": "9",
@@ -269,19 +631,49 @@
 		"container-author": [
 			{
 				"family": "bookAuthorLast",
-				"given": "bookAuthorFirst"
+				"given": "bookAuthorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "bookAuthorLastay",
+							"given": "bookAuthorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"edition": "8",
 		"editor": [
 			{
 				"family": "editorLast",
-				"given": "editorFirst"
+				"given": "editorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "editorLastay",
+							"given": "editorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"event-place": "Place",
-		"id": 42,
+		"id": 47,
 		"issued": {
 			"date-parts": [
 				[
@@ -292,22 +684,84 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Seriesay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number-of-volumes": "7",
 		"page": "1-10",
 		"publisher": "Publisher",
 		"publisher-place": "Place",
+		"recipient": [
+			{
+				"family": "recipientLast",
+				"given": "recipientFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "recipientLastay",
+							"given": "recipientFirstay"
+						}
+					}
+				}
+			}
+		],
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "chapter",
-		"volume": "6"
+		"volume": "6",
+		"volume-title": "Volume title"
 	},
 	"case": {
 		"URL": "http://www.example.com",
@@ -321,15 +775,75 @@
 				]
 			]
 		},
+		"archive": "Archive",
+		"archive-place": "Place",
+		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
-		"authority": "Court",
-		"container-title": "Reporter",
-		"id": 43,
+		"authority": [
+			{
+				"family": "Court",
+				"given": "",
+				"isInstitution": 1,
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "Courtay",
+							"given": "",
+							"isInstitution": 1
+						}
+					}
+				}
+			}
+		],
+		"call-number": "Call number",
+		"collection-number": "Year as volume",
+		"commenter": [
+			{
+				"family": "commenterLast",
+				"given": "commenterFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "commenterLastay",
+							"given": "commenterFirstay"
+						}
+					}
+				}
+			}
+		],
+		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"document-name": "Document name",
+		"event-place": "Place",
+		"genre": "Reign",
+		"id": 48,
+		"issue": "5",
 		"issued": {
 			"date-parts": [
 				[
@@ -339,16 +853,184 @@
 				]
 			]
 		},
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number": "3",
 		"page": "1-10",
+		"publication-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Publication date"
+		},
+		"publisher": "Publisher",
+		"publisher-place": "Place",
 		"references": "History",
 		"shortTitle": "Short title",
+		"submitted": {
+			"date-parts": [
+				[
+					"2000",
+					1,
+					2
+				]
+			],
+			"season": "2000-01-02"
+		},
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "legal_case",
 		"volume": "6"
 	},
+	"classic": {
+		"URL": "http://www.example.com",
+		"abstract": "Abstract note",
+		"accessed": {
+			"date-parts": [
+				[
+					"1997",
+					6,
+					13
+				]
+			]
+		},
+		"archive": "Archive",
+		"archive-place": "Place",
+		"archive_location": "Archive location",
+		"author": [
+			{
+				"family": "authorLast",
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"call-number": "Call number",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"event-place": "Place",
+		"genre": "Type",
+		"id": 49,
+		"issued": {
+			"date-parts": [
+				[
+					"1999",
+					12,
+					31
+				]
+			]
+		},
+		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"genre": {
+					"zz": "Typeay"
+				},
+				"publisher-place": {
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
+		"note": "Extra",
+		"number-of-pages": "4",
+		"publisher-place": "Place",
+		"shortTitle": "Short title",
+		"source": "Library catalog",
+		"system_id": "0_undefined",
+		"title": "Title",
+		"translator": [
+			{
+				"family": "translatorLast",
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"type": "classic",
+		"volume": "6"
+	},
 	"computerProgram": {
 		"ISBN": "978-1-234-56789-7",
 		"URL": "http://www.example.com",
@@ -363,18 +1045,41 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "programmerLast",
-				"given": "programmerFirst"
+				"given": "programmerFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "programmerLastay",
+							"given": "programmerFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-title": "Series title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"event-place": "Place",
 		"genre": "Programming language",
-		"id": 44,
+		"id": 50,
 		"issued": {
 			"date-parts": [
 				[
@@ -385,11 +1090,44 @@
 			]
 		},
 		"medium": "System",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Series titleay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"publisher": "Publisher",
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "book",
 		"version": "Version"
@@ -409,31 +1147,96 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"authority": [
+			{
+				"family": "Institution",
+				"given": "",
+				"isInstitution": 1,
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "Institutionay",
+							"given": "",
+							"isInstitution": 1
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-editor": [
 			{
 				"family": "seriesEditorLast",
-				"given": "seriesEditorFirst"
+				"given": "seriesEditorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "seriesEditorLastay",
+							"given": "seriesEditorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"collection-title": "Series",
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"editor": [
 			{
 				"family": "editorLast",
-				"given": "editorFirst"
+				"given": "editorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "editorLastay",
+							"given": "editorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"event": "Conference name",
+		"event-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Conference date"
+		},
 		"event-place": "Place",
-		"id": 45,
+		"id": 51,
+		"issue": "5",
 		"issued": {
 			"date-parts": [
 				[
@@ -444,17 +1247,61 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Seriesay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"page": "1-10",
 		"publisher": "Publisher",
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "paper-conference",
@@ -474,32 +1321,71 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-editor": [
 			{
 				"family": "seriesEditorLast",
-				"given": "seriesEditorFirst"
+				"given": "seriesEditorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "seriesEditorLastay",
+							"given": "seriesEditorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"collection-number": "9",
 		"collection-title": "Series",
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"edition": "8",
 		"editor": [
 			{
 				"family": "editorLast",
-				"given": "editorFirst"
+				"given": "editorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "editorLastay",
+							"given": "editorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"event-place": "Place",
-		"id": 46,
+		"id": 52,
 		"issued": {
 			"date-parts": [
 				[
@@ -510,6 +1396,44 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Seriesay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number-of-volumes": "7",
 		"page": "1-10",
@@ -517,11 +1441,20 @@
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "entry-dictionary",
@@ -544,17 +1477,47 @@
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"editor": [
 			{
 				"family": "editorLast",
-				"given": "editorFirst"
+				"given": "editorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "editorLastay",
+							"given": "editorFirstay"
+						}
+					}
+				}
 			}
 		],
-		"id": 47,
+		"id": 53,
 		"issued": {
 			"date-parts": [
 				[
@@ -565,24 +1528,62 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive_location": {
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
 		"note": "Extra",
 		"publisher": "Publisher",
 		"reviewed-author": [
 			{
 				"family": "reviewedAuthorLast",
-				"given": "reviewedAuthorFirst"
+				"given": "reviewedAuthorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "reviewedAuthorLastay",
+							"given": "reviewedAuthorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
-		"type": "article"
+		"type": "article",
+		"version": "Version"
 	},
 	"email": {
 		"URL": "http://www.example.com",
@@ -599,10 +1600,33 @@
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
-		"id": 48,
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"genre": "email",
+		"id": 54,
 		"issued": {
 			"date-parts": [
 				[
@@ -613,14 +1637,34 @@
 			]
 		},
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
 		"note": "Extra",
 		"recipient": [
 			{
 				"family": "recipientLast",
-				"given": "recipientFirst"
+				"given": "recipientFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "recipientLastay",
+							"given": "recipientFirstay"
+						}
+					}
+				}
 			}
 		],
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "personal_communication"
 	},
@@ -638,32 +1682,71 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-editor": [
 			{
 				"family": "seriesEditorLast",
-				"given": "seriesEditorFirst"
+				"given": "seriesEditorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "seriesEditorLastay",
+							"given": "seriesEditorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"collection-number": "9",
 		"collection-title": "Series",
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"edition": "8",
 		"editor": [
 			{
 				"family": "editorLast",
-				"given": "editorFirst"
+				"given": "editorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "editorLastay",
+							"given": "editorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"event-place": "Place",
-		"id": 49,
+		"id": 55,
 		"issued": {
 			"date-parts": [
 				[
@@ -674,6 +1757,44 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Seriesay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number-of-volumes": "7",
 		"page": "1-10",
@@ -681,11 +1802,20 @@
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "entry-encyclopedia",
@@ -708,13 +1838,35 @@
 		"author": [
 			{
 				"family": "directorLast",
-				"given": "directorFirst"
+				"given": "directorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "directorLastay",
+							"given": "directorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"dimensions": "1:22:33",
 		"genre": "Type",
-		"id": 50,
+		"id": 56,
 		"issued": {
 			"date-parts": [
 				[
@@ -726,10 +1878,34 @@
 		},
 		"language": "en-US",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"genre": {
+					"zz": "Typeay"
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
 		"note": "Extra",
 		"publisher": "Publisher",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "motion_picture"
 	},
@@ -748,12 +1924,34 @@
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"genre": "Type",
-		"id": 51,
+		"id": 57,
 		"issued": {
 			"date-parts": [
 				[
@@ -764,12 +1962,30 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"container-title": {
+					"zz": "Publication titleay"
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
 		"note": "Extra",
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "post"
 	},
-	"hearing": {
+	"gazette": {
 		"URL": "http://www.example.com",
 		"abstract": "Abstract note",
 		"accessed": {
@@ -783,14 +1999,37 @@
 		},
 		"author": [
 			{
-				"family": "contributorLast",
-				"given": "contributorFirst"
+				"family": "authorLast",
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
-		"authority": "Legislative body",
 		"chapter-number": "Session",
-		"event-place": "Place",
-		"id": 52,
+		"collection-number": "Regnal year",
+		"container-title": "Code",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"genre": "Reign",
+		"id": 58,
 		"issued": {
 			"date-parts": [
 				[
@@ -800,20 +2039,47 @@
 				]
 			]
 		},
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
 		"note": "Extra",
 		"number": "3",
-		"number-of-volumes": "7",
 		"page": "1-10",
+		"publication-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Publication date"
+		},
 		"publisher": "Publisher",
-		"publisher-place": "Place",
 		"references": "History",
-		"section": "Committee",
+		"section": "Section",
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
-		"type": "bill"
+		"type": "gazette",
+		"volume": "Code number"
 	},
-	"instantMessage": {
+	"hearing": {
 		"URL": "http://www.example.com",
 		"abstract": "Abstract note",
 		"accessed": {
@@ -825,31 +2091,204 @@
 				]
 			]
 		},
+		"archive-place": "Place",
+		"archive_location": "Archive location",
 		"author": [
 			{
-				"family": "authorLast",
-				"given": "authorFirst"
+				"family": "testimonyByLast",
+				"given": "testimonyByFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "testimonyByLastay",
+							"given": "testimonyByFirstay"
+						}
+					}
+				}
 			}
 		],
-		"id": 53,
-		"issued": {
-			"date-parts": [
-				[
-					"1999",
-					12,
-					31
-				]
-			]
-		},
-		"language": "en-US",
+		"authority": [
+			{
+				"family": "Legislative body|Committee",
+				"given": "",
+				"isInstitution": 1,
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "Legislative bodyay",
+							"given": "",
+							"isInstitution": 1
+						}
+					}
+				}
+			}
+		],
+		"chapter-number": "Session",
+		"collection-number": "Assembly number",
+		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"event": "Resolution label",
+		"event-place": "Place",
+		"genre": "Type",
+		"id": 59,
+		"issued": {
+			"date-parts": [
+				[
+					"1999",
+					12,
+					31
+				]
+			]
+		},
+		"jurisdiction": "Jurisdiction",
+		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"committee": {
+					"zz": "Committeeay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"event": {
+					"zz": "Resolution labelay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"genre": {
+					"zz": "Typeay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
+		"note": "Extra",
+		"number": "3",
+		"number-of-volumes": "7",
+		"page": "1-10",
+		"publisher": "Publisher",
+		"publisher-place": "Place",
+		"references": "History",
+		"shortTitle": "Short title",
+		"system_id": "0_undefined",
+		"title": "Title",
+		"type": "hearing",
+		"volume": "6"
+	},
+	"instantMessage": {
+		"URL": "http://www.example.com",
+		"abstract": "Abstract note",
+		"accessed": {
+			"date-parts": [
+				[
+					"1997",
+					6,
+					13
+				]
+			]
+		},
+		"author": [
+			{
+				"family": "authorLast",
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"genre": "instant message",
+		"id": 60,
+		"issued": {
+			"date-parts": [
+				[
+					"1999",
+					12,
+					31
+				]
+			]
+		},
+		"language": "en-US",
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
 		"note": "Extra",
 		"recipient": [
 			{
 				"family": "recipientLast",
-				"given": "recipientFirst"
+				"given": "recipientFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "recipientLastay",
+							"given": "recipientFirstay"
+						}
+					}
+				}
 			}
 		],
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "personal_communication"
 	},
@@ -870,15 +2309,45 @@
 		"author": [
 			{
 				"family": "intervieweeLast",
-				"given": "intervieweeFirst"
+				"given": "intervieweeFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "intervieweeLastay",
+							"given": "intervieweeFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
-		"id": 54,
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"id": 61,
 		"interviewer": [
 			{
 				"family": "interviewerLast",
-				"given": "interviewerFirst"
+				"given": "interviewerFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "interviewerLastay",
+							"given": "interviewerFirstay"
+						}
+					}
+				}
 			}
 		],
 		"issued": {
@@ -892,14 +2361,40 @@
 		},
 		"language": "en-US",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive_location": {
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
 		"note": "Extra",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "interview"
@@ -923,19 +2418,49 @@
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-title": "Series title",
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"editor": [
 			{
 				"family": "editorLast",
-				"given": "editorFirst"
+				"given": "editorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "editorLastay",
+							"given": "editorFirstay"
+						}
+					}
+				}
 			}
 		],
-		"id": 55,
+		"id": 62,
 		"issue": "5",
 		"issued": {
 			"date-parts": [
@@ -947,22 +2472,67 @@
 			]
 		},
 		"journalAbbreviation": "Journal abbreviation",
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Series titleay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
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
 		"note": "Extra",
 		"page": "1-10",
 		"reviewed-author": [
 			{
 				"family": "reviewedAuthorLast",
-				"given": "reviewedAuthorFirst"
+				"given": "reviewedAuthorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "reviewedAuthorLastay",
+							"given": "reviewedAuthorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"status": "Status",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "article-journal",
@@ -985,12 +2555,34 @@
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"genre": "Type",
-		"id": 56,
+		"id": 63,
 		"issued": {
 			"date-parts": [
 				[
@@ -1001,15 +2593,44 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
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
 		"note": "Extra",
 		"recipient": [
 			{
 				"family": "recipientLast",
-				"given": "recipientFirst"
+				"given": "recipientFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "recipientLastay",
+							"given": "recipientFirstay"
+						}
+					}
+				}
 			}
 		],
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "personal_communication"
 	},
@@ -1031,12 +2652,34 @@
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"container-title": "Publication title",
-		"id": 57,
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"id": 64,
 		"issue": "5",
 		"issued": {
 			"date-parts": [
@@ -1048,21 +2691,58 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"container-title": {
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
 		"note": "Extra",
 		"page": "1-10",
 		"reviewed-author": [
 			{
 				"family": "reviewedAuthorLast",
-				"given": "reviewedAuthorFirst"
+				"given": "reviewedAuthorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "reviewedAuthorLastay",
+							"given": "reviewedAuthorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "article-magazine",
@@ -1081,17 +2761,40 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"event-place": "Place",
 		"genre": "Type",
-		"id": 58,
+		"id": 65,
 		"issued": {
 			"date-parts": [
 				[
@@ -1102,16 +2805,54 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"genre": {
+					"zz": "Typeay"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number-of-pages": "4",
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "manuscript"
@@ -1130,25 +2871,56 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "cartographerLast",
-				"given": "cartographerFirst"
+				"given": "cartographerFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "cartographerLastay",
+							"given": "cartographerFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-editor": [
 			{
 				"family": "seriesEditorLast",
-				"given": "seriesEditorFirst"
+				"given": "seriesEditorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "seriesEditorLastay",
+							"given": "seriesEditorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"collection-title": "Series title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"edition": "8",
 		"event-place": "Place",
 		"genre": "Type",
-		"id": 59,
+		"id": 66,
 		"issued": {
 			"date-parts": [
 				[
@@ -1159,12 +2931,51 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Series titleay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"genre": {
+					"zz": "Typeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"publisher": "Publisher",
 		"publisher-place": "Place",
 		"scale": "Scale",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "map"
 	},
@@ -1182,18 +2993,57 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"authority": [
+			{
+				"family": "Court",
+				"given": "",
+				"isInstitution": 1,
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "Courtay",
+							"given": "",
+							"isInstitution": 1
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"edition": "8",
 		"event-place": "Place",
-		"id": 60,
+		"id": 67,
 		"issued": {
 			"date-parts": [
 				[
@@ -1203,24 +3053,86 @@
 				]
 			]
 		},
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"edition": {
+					"zz": "8ay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
+		"original-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "News case date"
+		},
 		"page": "1-10",
 		"publisher-place": "Place",
 		"reviewed-author": [
 			{
 				"family": "reviewedAuthorLast",
-				"given": "reviewedAuthorFirst"
+				"given": "reviewedAuthorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "reviewedAuthorLastay",
+							"given": "reviewedAuthorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"section": "Section",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "article-newspaper"
@@ -1237,16 +3149,48 @@
 				]
 			]
 		},
+		"archive-place": "Place",
 		"author": [
 			{
 				"family": "inventorLast",
-				"given": "inventorFirst"
+				"given": "inventorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "inventorLastay",
+							"given": "inventorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"authority": [
+			{
+				"family": "Issuing authority",
+				"given": "",
+				"isInstitution": 1,
+				"multi": {
+					"_key": {}
+				}
 			}
 		],
-		"authority": "Issuing authority",
 		"call-number": "Application number",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"event-place": "Place",
-		"id": 61,
+		"id": 68,
 		"issue": "Priority numbers",
 		"issued": {
 			"date-parts": [
@@ -1257,12 +3201,69 @@
 				]
 			]
 		},
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number": "3",
+		"original-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Priority date"
+		},
 		"page": "1-10",
+		"pending-number": "Application number",
+		"publication-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Publication date"
+		},
+		"publication-number": "Publication number",
 		"publisher-place": "Place",
-		"references": "References",
+		"recipient": [
+			{
+				"family": "recipientLast",
+				"given": "recipientFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "recipientLastay",
+							"given": "recipientFirstay"
+						}
+					}
+				}
+			}
+		],
 		"shortTitle": "Short title",
 		"status": "Legal status",
 		"submitted": {
@@ -1275,6 +3276,7 @@
 			],
 			"season": "2000-01-02"
 		},
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "patent"
 	},
@@ -1293,17 +3295,68 @@
 		"author": [
 			{
 				"family": "podcasterLast",
-				"given": "podcasterFirst"
+				"given": "podcasterFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "podcasterLastay",
+							"given": "podcasterFirstay"
+						}
+					}
+				}
 			}
 		],
 		"collection-title": "Series title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"dimensions": "1:22:33",
-		"id": 62,
+		"genre": "podcast",
+		"id": 69,
+		"issued": {
+			"date-parts": [
+				[
+					"1999",
+					12,
+					31
+				]
+			]
+		},
 		"language": "en-US",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"collection-title": {
+					"zz": "Series titleay"
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
 		"note": "Extra",
 		"number": "3",
+		"publisher": "Publisher",
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "song"
 	},
@@ -1319,16 +3372,39 @@
 				]
 			]
 		},
+		"archive-place": "Place",
 		"author": [
 			{
 				"family": "presenterLast",
-				"given": "presenterFirst"
+				"given": "presenterFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "presenterLastay",
+							"given": "presenterFirstay"
+						}
+					}
+				}
+			}
+		],
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"event": "Meeting name",
 		"event-place": "Place",
 		"genre": "Type",
-		"id": 63,
+		"id": 70,
 		"issued": {
 			"date-parts": [
 				[
@@ -1339,9 +3415,33 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"genre": {
+					"zz": "Typeay"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "speech"
 	},
@@ -1358,18 +3458,42 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "directorLast",
-				"given": "directorFirst"
+				"given": "directorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "directorLastay",
+							"given": "directorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"dimensions": "1:22:33",
 		"event-place": "Place",
-		"id": 64,
+		"genre": "radio broadcast",
+		"id": 71,
 		"issued": {
 			"date-parts": [
 				[
@@ -1381,15 +3505,161 @@
 		},
 		"language": "en-US",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number": "3",
 		"publisher": "Publisher",
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "broadcast"
 	},
+	"regulation": {
+		"URL": "http://www.example.com",
+		"abstract": "Abstract note",
+		"accessed": {
+			"date-parts": [
+				[
+					"1997",
+					6,
+					13
+				]
+			]
+		},
+		"author": [
+			{
+				"family": "authorLast",
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"authority": [
+			{
+				"family": "Legislative body",
+				"given": "",
+				"isInstitution": 1,
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "Legislative bodyay",
+							"given": "",
+							"isInstitution": 1
+						}
+					}
+				}
+			}
+		],
+		"chapter-number": "Session",
+		"container-title": "Code",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"gazette-flag": "Gazette flag",
+		"genre": "Type",
+		"id": 72,
+		"issued": {
+			"date-parts": [
+				[
+					"1999",
+					12,
+					31
+				]
+			]
+		},
+		"jurisdiction": "Jurisdiction",
+		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"genre": {
+					"zz": "Typeay"
+				},
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
+		"note": "Extra",
+		"number": "3",
+		"page": "1-10",
+		"publication-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Publication date"
+		},
+		"publisher": "Publisher",
+		"references": "History",
+		"section": "Section",
+		"shortTitle": "Short title",
+		"system_id": "0_undefined",
+		"title": "Title",
+		"type": "regulation",
+		"volume": "Code number"
+	},
 	"report": {
 		"URL": "http://www.example.com",
 		"abstract": "Abstract note",
@@ -1403,24 +3673,73 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"authority": [
+			{
+				"family": "Institution|Committee",
+				"given": "",
+				"isInstitution": 1,
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "Institutionay",
+							"given": "",
+							"isInstitution": 1
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-editor": [
 			{
 				"family": "seriesEditorLast",
-				"given": "seriesEditorFirst"
+				"given": "seriesEditorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "seriesEditorLastay",
+							"given": "seriesEditorFirstay"
+						}
+					}
+				}
 			}
 		],
+		"collection-number": "Assembly number",
 		"collection-title": "Series title",
+		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"event-place": "Place",
 		"genre": "Type",
-		"id": 65,
+		"id": 73,
 		"issued": {
 			"date-parts": [
 				[
@@ -1430,7 +3749,53 @@
 				]
 			]
 		},
+		"jurisdiction": "Jurisdiction",
 		"language": "en-US",
+		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Series titleay"
+				},
+				"committee": {
+					"zz": "Committeeay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"genre": {
+					"zz": "Typeay"
+				},
+				"jurisdiction": {
+					"zz": "Jurisdictionay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number": "3",
 		"page": "1-10",
@@ -1438,15 +3803,151 @@
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"status": "Status",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "report"
 	},
+	"standard": {
+		"URL": "http://www.example.com",
+		"abstract": "Abstract note",
+		"accessed": {
+			"date-parts": [
+				[
+					"1997",
+					6,
+					13
+				]
+			]
+		},
+		"archive": "Archive",
+		"archive_location": "Archive location",
+		"author": [
+			{
+				"family": "authorLast",
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"call-number": "Call number",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"editor": [
+			{
+				"family": "editorLast",
+				"given": "editorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "editorLastay",
+							"given": "editorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"id": 74,
+		"issued": {
+			"date-parts": [
+				[
+					"1999",
+					12,
+					31
+				]
+			]
+		},
+		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive_location": {
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
+		"note": "Extra",
+		"number": "3",
+		"publisher": "Publisher",
+		"reviewed-author": [
+			{
+				"family": "reviewedAuthorLast",
+				"given": "reviewedAuthorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "reviewedAuthorLastay",
+							"given": "reviewedAuthorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"shortTitle": "Short title",
+		"source": "Library catalog",
+		"system_id": "0_undefined",
+		"title": "Title",
+		"translator": [
+			{
+				"family": "translatorLast",
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"type": "standard",
+		"version": "Version"
+	},
 	"statute": {
 		"URL": "http://www.example.com",
 		"abstract": "Abstract note",
@@ -1462,12 +3963,46 @@
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"chapter-number": "Session",
+		"collection-number": "Regnal year",
 		"container-title": "Code",
-		"id": 66,
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"event-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Date amended"
+		},
+		"gazette-flag": "Gazette flag",
+		"genre": "Reign",
+		"id": 75,
 		"issued": {
 			"date-parts": [
 				[
@@ -1477,13 +4012,51 @@
 				]
 			]
 		},
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
 		"note": "Extra",
 		"number": "3",
+		"original-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Original date"
+		},
 		"page": "1-10",
+		"publication-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Publication date"
+		},
+		"publisher": "Publisher",
 		"references": "History",
 		"section": "Section",
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "legislation",
 		"volume": "Code number"
@@ -1501,17 +4074,40 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"event-place": "Place",
 		"genre": "Type",
-		"id": 67,
+		"id": 76,
 		"issued": {
 			"date-parts": [
 				[
@@ -1522,15 +4118,206 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"genre": {
+					"zz": "Typeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number-of-pages": "4",
 		"publisher": "Publisher",
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "thesis"
 	},
+	"treaty": {
+		"URL": "http://www.example.com",
+		"abstract": "Abstract note",
+		"accessed": {
+			"date-parts": [
+				[
+					"1997",
+					6,
+					13
+				]
+			]
+		},
+		"archive": "Archive",
+		"archive_location": "Archive location",
+		"author": [
+			{
+				"family": "authorLast",
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"available-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Opening date"
+		},
+		"call-number": "Call number",
+		"container-title": "Reporter",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"editor": [
+			{
+				"family": "editorLast",
+				"given": "editorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "editorLastay",
+							"given": "editorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"event-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Signing date"
+		},
+		"id": 77,
+		"issued": {
+			"date-parts": [
+				[
+					"1999",
+					12,
+					31
+				]
+			]
+		},
+		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"container-title": {
+					"zz": "Reporteray"
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
+		"note": "Extra",
+		"original-date": {
+			"date-parts": [
+				[
+					"0",
+					1
+				]
+			],
+			"season": "Adoption date"
+		},
+		"page": "1-10",
+		"publisher": "Publisher",
+		"reviewed-author": [
+			{
+				"family": "reviewedAuthorLast",
+				"given": "reviewedAuthorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "reviewedAuthorLastay",
+							"given": "reviewedAuthorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"section": "Section",
+		"shortTitle": "Short title",
+		"source": "Library catalog",
+		"system_id": "0_undefined",
+		"title": "Title",
+		"translator": [
+			{
+				"family": "translatorLast",
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
+			}
+		],
+		"type": "treaty",
+		"volume": "6"
+	},
 	"tvBroadcast": {
 		"URL": "http://www.example.com",
 		"abstract": "Abstract note",
@@ -1544,18 +4331,42 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "directorLast",
-				"given": "directorFirst"
+				"given": "directorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "directorLastay",
+							"given": "directorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"dimensions": "1:22:33",
 		"event-place": "Place",
-		"id": 68,
+		"genre": "television broadcast",
+		"id": 78,
 		"issued": {
 			"date-parts": [
 				[
@@ -1567,12 +4378,45 @@
 		},
 		"language": "en-US",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"container-title": {
+					"zz": "Publication titleay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number": "3",
 		"publisher": "Publisher",
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"type": "broadcast"
 	},
@@ -1590,18 +4434,42 @@
 			]
 		},
 		"archive": "Archive",
+		"archive-place": "Place",
 		"archive_location": "Archive location",
 		"author": [
 			{
 				"family": "directorLast",
-				"given": "directorFirst"
+				"given": "directorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "directorLastay",
+							"given": "directorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"call-number": "Call number",
 		"collection-title": "Series title",
+		"container-title": "Website title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"dimensions": "1:22:33",
 		"event-place": "Place",
-		"id": 69,
+		"id": 79,
 		"issued": {
 			"date-parts": [
 				[
@@ -1613,14 +4481,50 @@
 		},
 		"language": "en-US",
 		"medium": "Medium",
+		"multi": {
+			"_keys": {
+				"archive": {
+					"zz": "Archiveay"
+				},
+				"archive-place": {
+					"zz": "Placeay"
+				},
+				"archive_location": {
+					"zz": "Archive locationay"
+				},
+				"collection-title": {
+					"zz": "Series titleay"
+				},
+				"container-title": {
+					"zz": "Website titleay"
+				},
+				"event-place": {
+					"zz": "Placeay"
+				},
+				"publisher": {
+					"zz": "Publisheray"
+				},
+				"publisher-place": {
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
 		"note": "Extra",
 		"number-of-volumes": "7",
 		"publisher": "Publisher",
 		"publisher-place": "Place",
 		"shortTitle": "Short title",
 		"source": "Library catalog",
+		"system_id": "0_undefined",
 		"title": "Title",
-		"type": "motion_picture",
+		"type": "video",
 		"volume": "6"
 	},
 	"webpage": {
@@ -1638,12 +4542,34 @@
 		"author": [
 			{
 				"family": "authorLast",
-				"given": "authorFirst"
+				"given": "authorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "authorLastay",
+							"given": "authorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"container-title": "Publication title",
+		"contributor": [
+			{
+				"family": "contributorLast",
+				"given": "contributorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "contributorLastay",
+							"given": "contributorFirstay"
+						}
+					}
+				}
+			}
+		],
 		"genre": "Type",
-		"id": 70,
+		"id": 80,
 		"issued": {
 			"date-parts": [
 				[
@@ -1654,13 +4580,39 @@
 			]
 		},
 		"language": "en-US",
+		"multi": {
+			"_keys": {
+				"container-title": {
+					"zz": "Publication titleay"
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
 		"note": "Extra",
 		"shortTitle": "Short title",
+		"system_id": "0_undefined",
 		"title": "Title",
 		"translator": [
 			{
 				"family": "translatorLast",
-				"given": "translatorFirst"
+				"given": "translatorFirst",
+				"multi": {
+					"_key": {
+						"zz": {
+							"family": "translatorLastay",
+							"given": "translatorFirstay"
+						}
+					}
+				}
 			}
 		],
 		"type": "webpage"
