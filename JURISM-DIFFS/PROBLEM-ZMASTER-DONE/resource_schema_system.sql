diff --git a/resource/schema/system.sql b/resource/schema/system.sql
index 9f4ae7f..1675f45 100644
--- a/resource/schema/system.sql
+++ b/resource/schema/system.sql
@@ -1,4 +1,4 @@
--- 31
+-- 10072
 
 -- Copyright (c) 2009 Center for History and New Media
 --                    George Mason University, Fairfax, Virginia, USA
@@ -239,6 +239,11 @@ INSERT INTO itemTypes VALUES (33,'conferencePaper',NULL,1);
 INSERT INTO itemTypes VALUES (34,'document',NULL,2);
 INSERT INTO itemTypes VALUES (35,'encyclopediaArticle',NULL,1);
 INSERT INTO itemTypes VALUES (36,'dictionaryEntry',NULL,1);
+INSERT INTO itemTypes VALUES (1261,'gazette',NULL,1);           -- [ADDED]
+INSERT INTO itemTypes VALUES (1262,'treaty',NULL,1);            -- [ADDED]
+INSERT INTO itemTypes VALUES (1263,'regulation',NULL,1);        -- [ADDED]
+INSERT INTO itemTypes VALUES (1264,'classic',NULL,1);           -- [ADDED]
+INSERT INTO itemTypes VALUES (1265,'standard',NULL,1);           -- [ADDED]
 
 INSERT INTO fields VALUES (1,'url',NULL);
 INSERT INTO fields VALUES (2,'rights',NULL);
@@ -344,52 +349,87 @@ INSERT INTO fields VALUES (120,'issuingAuthority',NULL);
 INSERT INTO fields VALUES (121,'filingDate',NULL);
 INSERT INTO fields VALUES (122,'genre',NULL);
 INSERT INTO fields VALUES (123,'archive',NULL);
+INSERT INTO fields VALUES (1261,'jurisdiction',NULL);         -- [ADDED]
+INSERT INTO fields VALUES (1262,'assemblyNumber',NULL);       -- [ADDED]
+INSERT INTO fields VALUES (1263,'resolutionLabel',NULL);      -- [ADDED]
+INSERT INTO fields VALUES (1264,'sessionType',NULL);          -- [ADDED]
+INSERT INTO fields VALUES (1265,'newsCaseDate',NULL);         -- [ADDED]
+INSERT INTO fields VALUES (1266,'priorityDate',NULL);         -- [ADDED]
+INSERT INTO fields VALUES (1267,'yearAsVolume',NULL);         -- [ADDED]
+INSERT INTO fields VALUES (1268,'publicationDate',NULL);      -- [ADDED]
+INSERT INTO fields VALUES (1269,'reign',NULL);                -- [ADDED]
+INSERT INTO fields VALUES (1270,'regnalYear',NULL);           -- [ADDED]
+INSERT INTO fields VALUES (1271,'supplementName',NULL);       -- [ADDED]
+INSERT INTO fields VALUES (1272,'originalDate',NULL);         -- [ADDED]
+INSERT INTO fields VALUES (1273,'album',NULL);                -- [ADDED]
+INSERT INTO fields VALUES (1274,'opus',NULL);                 -- [ADDED]
+INSERT INTO fields VALUES (1275,'meetingNumber',NULL);        -- [ADDED]
+INSERT INTO fields VALUES (1276,'committeeFullname',NULL);    -- [ADDED]
+INSERT INTO fields VALUES (1277,'signingDate',NULL);          -- [ADDED]
+INSERT INTO fields VALUES (1278,'openingDate',NULL);          -- [ADDED]
+INSERT INTO fields VALUES (1279,'adoptionDate',NULL);         -- [ADDED]
+INSERT INTO fields VALUES (1280,'release',NULL);              -- [ADDED]
+INSERT INTO fields VALUES (1281,'regulationType',NULL);              -- [ADDED]
+INSERT INTO fields VALUES (1282,'regulatoryBody',NULL);              -- [ADDED]
+INSERT INTO fields VALUES (1283,'conferenceDate',NULL);              -- [ADDED]
+INSERT INTO fields VALUES (1284,'status',NULL);              -- [ADDED]
+INSERT INTO fields VALUES (1285,'publicationNumber',NULL);              -- [ADDED]
+INSERT INTO fields VALUES (1286,'volumeTitle',NULL);              -- [ADDED]
+INSERT INTO fields VALUES (1287,'dateAmended',NULL);              -- [ADDED]
+INSERT INTO fields VALUES (1288,'gazetteFlag',NULL);              -- [ADDED]
+INSERT INTO fields VALUES (1289,'documentName',NULL);             -- [ADDED]
 
+-- book
 INSERT INTO itemTypeFields VALUES (2, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (2, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (2, 3, NULL, 3);
 INSERT INTO itemTypeFields VALUES (2, 30, NULL, 4);
 INSERT INTO itemTypeFields VALUES (2, 4, NULL, 5);
-INSERT INTO itemTypeFields VALUES (2, 45, NULL, 6);
-INSERT INTO itemTypeFields VALUES (2, 6, NULL, 7);
-INSERT INTO itemTypeFields VALUES (2, 7, NULL, 8);
-INSERT INTO itemTypeFields VALUES (2, 8, NULL, 9);
-INSERT INTO itemTypeFields VALUES (2, 14, NULL, 10);
-INSERT INTO itemTypeFields VALUES (2, 118, NULL, 11);
-INSERT INTO itemTypeFields VALUES (2, 87, NULL, 12);
-INSERT INTO itemTypeFields VALUES (2, 11, NULL, 13);
-INSERT INTO itemTypeFields VALUES (2, 116, NULL, 14);
-INSERT INTO itemTypeFields VALUES (2, 1, NULL, 15);
-INSERT INTO itemTypeFields VALUES (2, 27, NULL, 16);
-INSERT INTO itemTypeFields VALUES (2, 123, NULL, 17);
-INSERT INTO itemTypeFields VALUES (2, 19, NULL, 18);
-INSERT INTO itemTypeFields VALUES (2, 62, NULL, 19);
-INSERT INTO itemTypeFields VALUES (2, 18, NULL, 20);
-INSERT INTO itemTypeFields VALUES (2, 2, NULL, 21);
-INSERT INTO itemTypeFields VALUES (2, 22, NULL, 22);
+INSERT INTO itemTypeFields VALUES (2, 1286, NULL, 6); -- volumeTitle [ADDED]
+INSERT INTO itemTypeFields VALUES (2, 45, NULL, 7);
+INSERT INTO itemTypeFields VALUES (2, 6, NULL, 8);
+INSERT INTO itemTypeFields VALUES (2, 7, NULL, 9);
+INSERT INTO itemTypeFields VALUES (2, 8, NULL, 10);
+INSERT INTO itemTypeFields VALUES (2, 14, NULL, 11);
+INSERT INTO itemTypeFields VALUES (2, 118, NULL, 12);
+INSERT INTO itemTypeFields VALUES (2, 109, NULL, 13);
+INSERT INTO itemTypeFields VALUES (2, 87, NULL, 14);
+INSERT INTO itemTypeFields VALUES (2, 11, NULL, 15);
+INSERT INTO itemTypeFields VALUES (2, 116, NULL, 16);
+INSERT INTO itemTypeFields VALUES (2, 1, NULL, 17);
+INSERT INTO itemTypeFields VALUES (2, 27, NULL, 18);
+INSERT INTO itemTypeFields VALUES (2, 123, NULL, 19);
+INSERT INTO itemTypeFields VALUES (2, 19, NULL, 20);
+INSERT INTO itemTypeFields VALUES (2, 62, NULL, 21);
+INSERT INTO itemTypeFields VALUES (2, 18, NULL, 22);
+INSERT INTO itemTypeFields VALUES (2, 2, NULL, 23);
+INSERT INTO itemTypeFields VALUES (2, 22, NULL, 24);
+
 INSERT INTO itemTypeFields VALUES (3, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (3, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (3, 115, NULL, 3);
 INSERT INTO itemTypeFields VALUES (3, 3, NULL, 4);
 INSERT INTO itemTypeFields VALUES (3, 30, NULL, 5);
 INSERT INTO itemTypeFields VALUES (3, 4, NULL, 6);
-INSERT INTO itemTypeFields VALUES (3, 45, NULL, 7);
-INSERT INTO itemTypeFields VALUES (3, 6, NULL, 8);
-INSERT INTO itemTypeFields VALUES (3, 7, NULL, 9);
-INSERT INTO itemTypeFields VALUES (3, 8, NULL, 10);
-INSERT INTO itemTypeFields VALUES (3, 14, NULL, 11);
-INSERT INTO itemTypeFields VALUES (3, 10, NULL, 12);
-INSERT INTO itemTypeFields VALUES (3, 87, NULL, 13);
-INSERT INTO itemTypeFields VALUES (3, 11, NULL, 14);
-INSERT INTO itemTypeFields VALUES (3, 116, NULL, 15);
-INSERT INTO itemTypeFields VALUES (3, 1, NULL, 16);
-INSERT INTO itemTypeFields VALUES (3, 27, NULL, 17);
-INSERT INTO itemTypeFields VALUES (3, 123, NULL, 18);
-INSERT INTO itemTypeFields VALUES (3, 19, NULL, 19);
-INSERT INTO itemTypeFields VALUES (3, 62, NULL, 20);
-INSERT INTO itemTypeFields VALUES (3, 18, NULL, 21);
-INSERT INTO itemTypeFields VALUES (3, 2, NULL, 22);
-INSERT INTO itemTypeFields VALUES (3, 22, NULL, 23);
+INSERT INTO itemTypeFields VALUES (3, 1286, NULL, 7); -- volumeTitle [ADDED]
+INSERT INTO itemTypeFields VALUES (3, 45, NULL, 8);
+INSERT INTO itemTypeFields VALUES (3, 6, NULL, 9);
+INSERT INTO itemTypeFields VALUES (3, 7, NULL, 10);
+INSERT INTO itemTypeFields VALUES (3, 8, NULL, 11);
+INSERT INTO itemTypeFields VALUES (3, 14, NULL, 12);
+INSERT INTO itemTypeFields VALUES (3, 10, NULL, 13);
+INSERT INTO itemTypeFields VALUES (3, 87, NULL, 14);
+INSERT INTO itemTypeFields VALUES (3, 11, NULL, 15);
+INSERT INTO itemTypeFields VALUES (3, 116, NULL, 16);
+INSERT INTO itemTypeFields VALUES (3, 1, NULL, 17);
+INSERT INTO itemTypeFields VALUES (3, 27, NULL, 18);
+INSERT INTO itemTypeFields VALUES (3, 123, NULL, 19);
+INSERT INTO itemTypeFields VALUES (3, 19, NULL, 20);
+INSERT INTO itemTypeFields VALUES (3, 62, NULL, 21);
+INSERT INTO itemTypeFields VALUES (3, 18, NULL, 22);
+INSERT INTO itemTypeFields VALUES (3, 2, NULL, 23);
+INSERT INTO itemTypeFields VALUES (3, 22, NULL, 24);
+
 INSERT INTO itemTypeFields VALUES (4, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (4, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (4, 12, NULL, 3);
@@ -397,22 +437,25 @@ INSERT INTO itemTypeFields VALUES (4, 4, NULL, 4);
 INSERT INTO itemTypeFields VALUES (4, 5, NULL, 5);
 INSERT INTO itemTypeFields VALUES (4, 10, NULL, 6);
 INSERT INTO itemTypeFields VALUES (4, 14, NULL, 7);
-INSERT INTO itemTypeFields VALUES (4, 3, NULL, 8);
-INSERT INTO itemTypeFields VALUES (4, 28, NULL, 9);
-INSERT INTO itemTypeFields VALUES (4, 29, NULL, 10);
-INSERT INTO itemTypeFields VALUES (4, 25, NULL, 11);
-INSERT INTO itemTypeFields VALUES (4, 87, NULL, 12);
-INSERT INTO itemTypeFields VALUES (4, 26, NULL, 13);
-INSERT INTO itemTypeFields VALUES (4, 13, NULL, 14);
-INSERT INTO itemTypeFields VALUES (4, 116, NULL, 15);
-INSERT INTO itemTypeFields VALUES (4, 1, NULL, 16);
-INSERT INTO itemTypeFields VALUES (4, 27, NULL, 17);
-INSERT INTO itemTypeFields VALUES (4, 123, NULL, 18);
-INSERT INTO itemTypeFields VALUES (4, 19, NULL, 19);
-INSERT INTO itemTypeFields VALUES (4, 62, NULL, 20);
-INSERT INTO itemTypeFields VALUES (4, 18, NULL, 21);
-INSERT INTO itemTypeFields VALUES (4, 2, NULL, 22);
-INSERT INTO itemTypeFields VALUES (4, 22, NULL, 23);
+INSERT INTO itemTypeFields VALUES (4, 1284, NULL, 8);    -- status [ADDED]
+INSERT INTO itemTypeFields VALUES (4, 3, NULL, 9);
+INSERT INTO itemTypeFields VALUES (4, 28, NULL, 10);
+INSERT INTO itemTypeFields VALUES (4, 29, NULL, 11);
+INSERT INTO itemTypeFields VALUES (4, 25, NULL, 12);
+INSERT INTO itemTypeFields VALUES (4, 1261, NULL, 13);
+INSERT INTO itemTypeFields VALUES (4, 87, NULL, 14);
+INSERT INTO itemTypeFields VALUES (4, 26, NULL, 15);
+INSERT INTO itemTypeFields VALUES (4, 13, NULL, 16);
+INSERT INTO itemTypeFields VALUES (4, 116, NULL, 17);
+INSERT INTO itemTypeFields VALUES (4, 1, NULL, 18);
+INSERT INTO itemTypeFields VALUES (4, 27, NULL, 19);
+INSERT INTO itemTypeFields VALUES (4, 123, NULL, 20);
+INSERT INTO itemTypeFields VALUES (4, 19, NULL, 21);
+INSERT INTO itemTypeFields VALUES (4, 62, NULL, 22);
+INSERT INTO itemTypeFields VALUES (4, 18, NULL, 23);
+INSERT INTO itemTypeFields VALUES (4, 2, NULL, 24);
+INSERT INTO itemTypeFields VALUES (4, 22, NULL, 25);
+
 INSERT INTO itemTypeFields VALUES (5, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (5, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (5, 12, NULL, 3);
@@ -431,25 +474,31 @@ INSERT INTO itemTypeFields VALUES (5, 62, NULL, 15);
 INSERT INTO itemTypeFields VALUES (5, 18, NULL, 16);
 INSERT INTO itemTypeFields VALUES (5, 2, NULL, 17);
 INSERT INTO itemTypeFields VALUES (5, 22, NULL, 18);
-INSERT INTO itemTypeFields VALUES (6, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (6, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (6, 12, NULL, 3);
-INSERT INTO itemTypeFields VALUES (6, 7, NULL, 4);
-INSERT INTO itemTypeFields VALUES (6, 6, NULL, 5);
-INSERT INTO itemTypeFields VALUES (6, 14, NULL, 6);
-INSERT INTO itemTypeFields VALUES (6, 15, NULL, 7);
-INSERT INTO itemTypeFields VALUES (6, 10, NULL, 8);
-INSERT INTO itemTypeFields VALUES (6, 87, NULL, 9);
-INSERT INTO itemTypeFields VALUES (6, 116, NULL, 10);
-INSERT INTO itemTypeFields VALUES (6, 13, NULL, 11);
-INSERT INTO itemTypeFields VALUES (6, 1, NULL, 12);
-INSERT INTO itemTypeFields VALUES (6, 27, NULL, 13);
-INSERT INTO itemTypeFields VALUES (6, 123, NULL, 14);
-INSERT INTO itemTypeFields VALUES (6, 19, NULL, 15);
-INSERT INTO itemTypeFields VALUES (6, 62, NULL, 16);
-INSERT INTO itemTypeFields VALUES (6, 18, NULL, 17);
-INSERT INTO itemTypeFields VALUES (6, 2, NULL, 18);
-INSERT INTO itemTypeFields VALUES (6, 22, NULL, 19);
+
+-- newspaperArticle
+INSERT INTO itemTypeFields VALUES (6, 110, NULL, 1);   -- title
+INSERT INTO itemTypeFields VALUES (6, 90, NULL, 2);    -- abstract
+INSERT INTO itemTypeFields VALUES (6, 12, NULL, 3);    -- publicationTitle
+INSERT INTO itemTypeFields VALUES (6, 14, NULL, 4);    -- date (issued)
+INSERT INTO itemTypeFields VALUES (6, 7, NULL, 5);     -- place
+INSERT INTO itemTypeFields VALUES (6, 6, NULL, 6);     -- issue
+INSERT INTO itemTypeFields VALUES (6, 15, NULL, 7);    -- section
+INSERT INTO itemTypeFields VALUES (6, 10, NULL, 8);    -- pages
+INSERT INTO itemTypeFields VALUES (6, 87, NULL, 9);    -- language
+INSERT INTO itemTypeFields VALUES (6, 116, NULL, 10);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (6, 1261, NULL, 11); -- jurisdiction        [ADDED]
+INSERT INTO itemTypeFields VALUES (6, 44, NULL, 12);   -- court               [ADDED]
+INSERT INTO itemTypeFields VALUES (6, 1265, NULL, 13); -- newsCaseDate        [ADDED] (original-date)
+INSERT INTO itemTypeFields VALUES (6, 13, NULL, 14);   -- ISSN
+INSERT INTO itemTypeFields VALUES (6, 1, NULL, 15);    -- url
+INSERT INTO itemTypeFields VALUES (6, 27, NULL, 16);   -- accessed
+INSERT INTO itemTypeFields VALUES (6, 123, NULL, 17);  -- archive
+INSERT INTO itemTypeFields VALUES (6, 19, NULL, 18);   -- archive location
+INSERT INTO itemTypeFields VALUES (6, 62, NULL, 19);   -- library catalog
+INSERT INTO itemTypeFields VALUES (6, 18, NULL, 20);   -- call number
+INSERT INTO itemTypeFields VALUES (6, 2, NULL, 21);    -- rights
+INSERT INTO itemTypeFields VALUES (6, 22, NULL, 22);   -- extra
+
 INSERT INTO itemTypeFields VALUES (7, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (7, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (7, 69, NULL, 3);
@@ -467,20 +516,24 @@ INSERT INTO itemTypeFields VALUES (7, 62, NULL, 14);
 INSERT INTO itemTypeFields VALUES (7, 18, NULL, 15);
 INSERT INTO itemTypeFields VALUES (7, 2, NULL, 16);
 INSERT INTO itemTypeFields VALUES (7, 22, NULL, 17);
-INSERT INTO itemTypeFields VALUES (8, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (8, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (8, 65, NULL, 3);
-INSERT INTO itemTypeFields VALUES (8, 14, NULL, 4);
-INSERT INTO itemTypeFields VALUES (8, 87, NULL, 5);
-INSERT INTO itemTypeFields VALUES (8, 116, NULL, 6);
-INSERT INTO itemTypeFields VALUES (8, 1, NULL, 7);
-INSERT INTO itemTypeFields VALUES (8, 27, NULL, 8);
-INSERT INTO itemTypeFields VALUES (8, 123, NULL, 9);
-INSERT INTO itemTypeFields VALUES (8, 19, NULL, 10);
-INSERT INTO itemTypeFields VALUES (8, 62, NULL, 11);
-INSERT INTO itemTypeFields VALUES (8, 18, NULL, 12);
-INSERT INTO itemTypeFields VALUES (8, 2, NULL, 13);
-INSERT INTO itemTypeFields VALUES (8, 22, NULL, 14);
+
+-- letter
+INSERT INTO itemTypeFields VALUES (8, 110, NULL, 1); -- title
+INSERT INTO itemTypeFields VALUES (8, 90, NULL, 2);  -- abstractNote
+INSERT INTO itemTypeFields VALUES (8, 65, NULL, 3);  -- letterType
+INSERT INTO itemTypeFields VALUES (8, 14, NULL, 4);  -- date
+INSERT INTO itemTypeFields VALUES (8, 87, NULL, 5);  -- issue
+INSERT INTO itemTypeFields VALUES (8, 116, NULL, 6); -- shortTitle
+INSERT INTO itemTypeFields VALUES (8, 1, NULL, 7);   -- url
+INSERT INTO itemTypeFields VALUES (8, 27, NULL, 8);  -- accessDate
+INSERT INTO itemTypeFields VALUES (8, 123, NULL, 9); -- archive
+INSERT INTO itemTypeFields VALUES (8, 19, NULL, 10); -- archiveLocation
+INSERT INTO itemTypeFields VALUES (8, 62, NULL, 11); -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (8, 18, NULL, 12); -- callNumber
+INSERT INTO itemTypeFields VALUES (8, 2, NULL, 13);  -- rights
+INSERT INTO itemTypeFields VALUES (8, 22, NULL, 14); -- extra
+
+
 INSERT INTO itemTypeFields VALUES (9, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (9, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (9, 66, NULL, 3);
@@ -497,20 +550,22 @@ INSERT INTO itemTypeFields VALUES (9, 62, NULL, 13);
 INSERT INTO itemTypeFields VALUES (9, 18, NULL, 14);
 INSERT INTO itemTypeFields VALUES (9, 2, NULL, 15);
 INSERT INTO itemTypeFields VALUES (9, 22, NULL, 16);
-INSERT INTO itemTypeFields VALUES (10, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (10, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (10, 14, NULL, 3);
-INSERT INTO itemTypeFields VALUES (10, 64, NULL, 4);
-INSERT INTO itemTypeFields VALUES (10, 87, NULL, 5);
-INSERT INTO itemTypeFields VALUES (10, 116, NULL, 6);
-INSERT INTO itemTypeFields VALUES (10, 1, NULL, 7);
-INSERT INTO itemTypeFields VALUES (10, 27, NULL, 8);
-INSERT INTO itemTypeFields VALUES (10, 123, NULL, 9);
-INSERT INTO itemTypeFields VALUES (10, 19, NULL, 10);
-INSERT INTO itemTypeFields VALUES (10, 62, NULL, 11);
-INSERT INTO itemTypeFields VALUES (10, 18, NULL, 12);
-INSERT INTO itemTypeFields VALUES (10, 2, NULL, 13);
-INSERT INTO itemTypeFields VALUES (10, 22, NULL, 14);
+
+INSERT INTO itemTypeFields VALUES (10, 110, NULL, 1); -- title
+INSERT INTO itemTypeFields VALUES (10, 90, NULL, 2);  -- abstractNote
+INSERT INTO itemTypeFields VALUES (10, 14, NULL, 3);  -- date
+INSERT INTO itemTypeFields VALUES (10, 64, NULL, 4);  -- interviewMedium
+INSERT INTO itemTypeFields VALUES (10, 87, NULL, 5);  -- language
+INSERT INTO itemTypeFields VALUES (10, 116, NULL, 6); -- shortTitle
+INSERT INTO itemTypeFields VALUES (10, 1, NULL, 7);   -- url
+INSERT INTO itemTypeFields VALUES (10, 27, NULL, 8);  -- accessDate
+INSERT INTO itemTypeFields VALUES (10, 123, NULL, 9); -- archive
+INSERT INTO itemTypeFields VALUES (10, 19, NULL, 10); -- archiveLocation
+INSERT INTO itemTypeFields VALUES (10, 62, NULL, 11); -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (10, 18, NULL, 12); -- callNumber
+INSERT INTO itemTypeFields VALUES (10, 2, NULL, 13);  -- rights
+INSERT INTO itemTypeFields VALUES (10, 22, NULL, 14); -- extra
+
 INSERT INTO itemTypeFields VALUES (11, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (11, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (11, 21, NULL, 3);
@@ -528,21 +583,25 @@ INSERT INTO itemTypeFields VALUES (11, 62, NULL, 14);
 INSERT INTO itemTypeFields VALUES (11, 18, NULL, 15);
 INSERT INTO itemTypeFields VALUES (11, 2, NULL, 16);
 INSERT INTO itemTypeFields VALUES (11, 22, NULL, 17);
-INSERT INTO itemTypeFields VALUES (12, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (12, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (12, 59, NULL, 3);
-INSERT INTO itemTypeFields VALUES (12, 61, NULL, 4);
-INSERT INTO itemTypeFields VALUES (12, 14, NULL, 5);
-INSERT INTO itemTypeFields VALUES (12, 87, NULL, 6);
-INSERT INTO itemTypeFields VALUES (12, 116, NULL, 7);
-INSERT INTO itemTypeFields VALUES (12, 123, NULL, 8);
-INSERT INTO itemTypeFields VALUES (12, 19, NULL, 9);
-INSERT INTO itemTypeFields VALUES (12, 62, NULL, 10);
-INSERT INTO itemTypeFields VALUES (12, 18, NULL, 11);
-INSERT INTO itemTypeFields VALUES (12, 1, NULL, 12);
-INSERT INTO itemTypeFields VALUES (12, 27, NULL, 13);
-INSERT INTO itemTypeFields VALUES (12, 2, NULL, 14);
-INSERT INTO itemTypeFields VALUES (12, 22, NULL, 15);
+
+-- artwork
+INSERT INTO itemTypeFields VALUES (12, 110, NULL, 1); -- title
+INSERT INTO itemTypeFields VALUES (12, 90, NULL, 2);  -- abstract
+INSERT INTO itemTypeFields VALUES (12, 59, NULL, 3);  -- artworkMedium
+INSERT INTO itemTypeFields VALUES (12, 61, NULL, 4);  -- artworkSize
+INSERT INTO itemTypeFields VALUES (12, 91, NULL, 5);  -- websiteTitle    [ADDED]
+INSERT INTO itemTypeFields VALUES (12, 14, NULL, 6);  -- date
+INSERT INTO itemTypeFields VALUES (12, 87, NULL, 7);  -- language
+INSERT INTO itemTypeFields VALUES (12, 116, NULL, 8); -- shortTitle
+INSERT INTO itemTypeFields VALUES (12, 123, NULL, 9); -- archive
+INSERT INTO itemTypeFields VALUES (12, 19, NULL, 10); -- archiveLocation
+INSERT INTO itemTypeFields VALUES (12, 62, NULL, 11); -- library catalog
+INSERT INTO itemTypeFields VALUES (12, 18, NULL, 12); -- call number
+INSERT INTO itemTypeFields VALUES (12, 1, NULL, 13);  -- url
+INSERT INTO itemTypeFields VALUES (12, 27, NULL, 14); -- accessed
+INSERT INTO itemTypeFields VALUES (12, 2, NULL, 15);  -- rights 
+INSERT INTO itemTypeFields VALUES (12, 22, NULL, 16); -- extra
+
 INSERT INTO itemTypeFields VALUES (13, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (13, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (13, 91, NULL, 3);
@@ -554,143 +613,207 @@ INSERT INTO itemTypeFields VALUES (13, 27, NULL, 8);
 INSERT INTO itemTypeFields VALUES (13, 87, NULL, 9);
 INSERT INTO itemTypeFields VALUES (13, 2, NULL, 10);
 INSERT INTO itemTypeFields VALUES (13, 22, NULL, 11);
+
+
 INSERT INTO itemTypeFields VALUES (14, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (14, 27, NULL, 2);
 INSERT INTO itemTypeFields VALUES (14, 1, NULL, 3);
-INSERT INTO itemTypeFields VALUES (15, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (15, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (15, 92, NULL, 3);
-INSERT INTO itemTypeFields VALUES (15, 32, NULL, 4);
-INSERT INTO itemTypeFields VALUES (15, 28, NULL, 5);
-INSERT INTO itemTypeFields VALUES (15, 7, NULL, 6);
-INSERT INTO itemTypeFields VALUES (15, 31, NULL, 7);
-INSERT INTO itemTypeFields VALUES (15, 14, NULL, 8);
-INSERT INTO itemTypeFields VALUES (15, 10, NULL, 9);
-INSERT INTO itemTypeFields VALUES (15, 87, NULL, 10);
-INSERT INTO itemTypeFields VALUES (15, 116, NULL, 11);
-INSERT INTO itemTypeFields VALUES (15, 1, NULL, 12);
-INSERT INTO itemTypeFields VALUES (15, 27, NULL, 13);
-INSERT INTO itemTypeFields VALUES (15, 123, NULL, 14);
-INSERT INTO itemTypeFields VALUES (15, 19, NULL, 15);
-INSERT INTO itemTypeFields VALUES (15, 62, NULL, 16);
-INSERT INTO itemTypeFields VALUES (15, 18, NULL, 17);
-INSERT INTO itemTypeFields VALUES (15, 2, NULL, 18);
-INSERT INTO itemTypeFields VALUES (15, 22, NULL, 19);
-INSERT INTO itemTypeFields VALUES (16, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (16, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (16, 93, NULL, 3);
-INSERT INTO itemTypeFields VALUES (16, 36, NULL, 4);
-INSERT INTO itemTypeFields VALUES (16, 94, NULL, 5);
-INSERT INTO itemTypeFields VALUES (16, 15, NULL, 6);
-INSERT INTO itemTypeFields VALUES (16, 95, NULL, 7);
-INSERT INTO itemTypeFields VALUES (16, 41, NULL, 8);
-INSERT INTO itemTypeFields VALUES (16, 40, NULL, 9);
-INSERT INTO itemTypeFields VALUES (16, 42, NULL, 10);
-INSERT INTO itemTypeFields VALUES (16, 14, NULL, 11);
-INSERT INTO itemTypeFields VALUES (16, 87, NULL, 12);
-INSERT INTO itemTypeFields VALUES (16, 1, NULL, 13);
-INSERT INTO itemTypeFields VALUES (16, 27, NULL, 14);
-INSERT INTO itemTypeFields VALUES (16, 116, NULL, 15);
-INSERT INTO itemTypeFields VALUES (16, 2, NULL, 16);
-INSERT INTO itemTypeFields VALUES (16, 22, NULL, 17);
-INSERT INTO itemTypeFields VALUES (17, 111, NULL, 1);
-INSERT INTO itemTypeFields VALUES (17, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (17, 43, NULL, 3);
-INSERT INTO itemTypeFields VALUES (17, 97, NULL, 4);
-INSERT INTO itemTypeFields VALUES (17, 44, NULL, 5);
-INSERT INTO itemTypeFields VALUES (17, 117, NULL, 6);
-INSERT INTO itemTypeFields VALUES (17, 98, NULL, 7);
-INSERT INTO itemTypeFields VALUES (17, 42, NULL, 8);
-INSERT INTO itemTypeFields VALUES (17, 96, NULL, 9);
-INSERT INTO itemTypeFields VALUES (17, 87, NULL, 10);
-INSERT INTO itemTypeFields VALUES (17, 116, NULL, 11);
-INSERT INTO itemTypeFields VALUES (17, 1, NULL, 12);
-INSERT INTO itemTypeFields VALUES (17, 27, NULL, 13);
-INSERT INTO itemTypeFields VALUES (17, 2, NULL, 14);
-INSERT INTO itemTypeFields VALUES (17, 22, NULL, 15);
-INSERT INTO itemTypeFields VALUES (18, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (18, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (18, 46, NULL, 3);
-INSERT INTO itemTypeFields VALUES (18, 7, NULL, 4);
-INSERT INTO itemTypeFields VALUES (18, 8, NULL, 5);
-INSERT INTO itemTypeFields VALUES (18, 45, NULL, 6);
-INSERT INTO itemTypeFields VALUES (18, 99, NULL, 7);
-INSERT INTO itemTypeFields VALUES (18, 10, NULL, 8);
-INSERT INTO itemTypeFields VALUES (18, 41, NULL, 9);
-INSERT INTO itemTypeFields VALUES (18, 40, NULL, 10);
-INSERT INTO itemTypeFields VALUES (18, 42, NULL, 11);
-INSERT INTO itemTypeFields VALUES (18, 14, NULL, 12);
-INSERT INTO itemTypeFields VALUES (18, 87, NULL, 13);
-INSERT INTO itemTypeFields VALUES (18, 116, NULL, 14);
-INSERT INTO itemTypeFields VALUES (18, 1, NULL, 15);
-INSERT INTO itemTypeFields VALUES (18, 27, NULL, 16);
-INSERT INTO itemTypeFields VALUES (18, 2, NULL, 17);
-INSERT INTO itemTypeFields VALUES (18, 22, NULL, 18);
-INSERT INTO itemTypeFields VALUES (19, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (19, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (19, 7, NULL, 3);
-INSERT INTO itemTypeFields VALUES (19, 102, NULL, 4);
-INSERT INTO itemTypeFields VALUES (19, 48, NULL, 5);
-INSERT INTO itemTypeFields VALUES (19, 120, NULL, 6);
-INSERT INTO itemTypeFields VALUES (19, 50, NULL, 7);
-INSERT INTO itemTypeFields VALUES (19, 121, NULL, 8);
-INSERT INTO itemTypeFields VALUES (19, 10, NULL, 9);
-INSERT INTO itemTypeFields VALUES (19, 103, NULL, 10);
-INSERT INTO itemTypeFields VALUES (19, 51, NULL, 11);
-INSERT INTO itemTypeFields VALUES (19, 52, NULL, 12);
-INSERT INTO itemTypeFields VALUES (19, 53, NULL, 13);
-INSERT INTO itemTypeFields VALUES (19, 54, NULL, 14);
-INSERT INTO itemTypeFields VALUES (19, 87, NULL, 15);
-INSERT INTO itemTypeFields VALUES (19, 116, NULL, 16);
-INSERT INTO itemTypeFields VALUES (19, 1, NULL, 17);
-INSERT INTO itemTypeFields VALUES (19, 27, NULL, 18);
-INSERT INTO itemTypeFields VALUES (19, 2, NULL, 19);
-INSERT INTO itemTypeFields VALUES (19, 22, NULL, 20);
-INSERT INTO itemTypeFields VALUES (20, 112, NULL, 1);
-INSERT INTO itemTypeFields VALUES (20, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (20, 36, NULL, 3);
-INSERT INTO itemTypeFields VALUES (20, 55, NULL, 4);
-INSERT INTO itemTypeFields VALUES (20, 101, NULL, 5);
-INSERT INTO itemTypeFields VALUES (20, 100, NULL, 6);
-INSERT INTO itemTypeFields VALUES (20, 10, NULL, 7);
-INSERT INTO itemTypeFields VALUES (20, 15, NULL, 8);
-INSERT INTO itemTypeFields VALUES (20, 40, NULL, 9);
-INSERT INTO itemTypeFields VALUES (20, 42, NULL, 10);
-INSERT INTO itemTypeFields VALUES (20, 87, NULL, 11);
-INSERT INTO itemTypeFields VALUES (20, 116, NULL, 12);
-INSERT INTO itemTypeFields VALUES (20, 1, NULL, 13);
-INSERT INTO itemTypeFields VALUES (20, 27, NULL, 14);
-INSERT INTO itemTypeFields VALUES (20, 2, NULL, 15);
-INSERT INTO itemTypeFields VALUES (20, 22, NULL, 16);
-INSERT INTO itemTypeFields VALUES (21, 113, NULL, 1);
-INSERT INTO itemTypeFields VALUES (21, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (21, 14, NULL, 3);
-INSERT INTO itemTypeFields VALUES (21, 116, NULL, 4);
-INSERT INTO itemTypeFields VALUES (21, 1, NULL, 5);
-INSERT INTO itemTypeFields VALUES (21, 27, NULL, 6);
-INSERT INTO itemTypeFields VALUES (21, 87, NULL, 7);
-INSERT INTO itemTypeFields VALUES (21, 2, NULL, 8);
-INSERT INTO itemTypeFields VALUES (21, 22, NULL, 9);
-INSERT INTO itemTypeFields VALUES (22, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (22, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (22, 67, NULL, 3);
-INSERT INTO itemTypeFields VALUES (22, 68, NULL, 4);
-INSERT INTO itemTypeFields VALUES (22, 28, NULL, 5);
-INSERT INTO itemTypeFields VALUES (22, 6, NULL, 6);
-INSERT INTO itemTypeFields VALUES (22, 7, NULL, 7);
-INSERT INTO itemTypeFields VALUES (22, 8, NULL, 8);
-INSERT INTO itemTypeFields VALUES (22, 14, NULL, 9);
-INSERT INTO itemTypeFields VALUES (22, 87, NULL, 10);
-INSERT INTO itemTypeFields VALUES (22, 11, NULL, 11);
-INSERT INTO itemTypeFields VALUES (22, 116, NULL, 12);
-INSERT INTO itemTypeFields VALUES (22, 1, NULL, 13);
-INSERT INTO itemTypeFields VALUES (22, 27, NULL, 14);
-INSERT INTO itemTypeFields VALUES (22, 123, NULL, 15);
-INSERT INTO itemTypeFields VALUES (22, 19, NULL, 16);
-INSERT INTO itemTypeFields VALUES (22, 62, NULL, 17);
-INSERT INTO itemTypeFields VALUES (22, 18, NULL, 18);
-INSERT INTO itemTypeFields VALUES (22, 2, NULL, 19);
-INSERT INTO itemTypeFields VALUES (22, 22, NULL, 20);
+
+-- report
+INSERT INTO itemTypeFields VALUES (15, 110, NULL, 1);   -- title
+INSERT INTO itemTypeFields VALUES (15, 90, NULL, 2);    -- abstract
+INSERT INTO itemTypeFields VALUES (15, 1284, NULL, 3);    -- status [ADDED]
+INSERT INTO itemTypeFields VALUES (15, 92, NULL, 4);    -- reportNumber
+INSERT INTO itemTypeFields VALUES (15, 32, NULL, 5);    -- reportType
+INSERT INTO itemTypeFields VALUES (15, 115, NULL, 6);    -- bookTitle
+INSERT INTO itemTypeFields VALUES (15, 28, NULL, 7);    -- seriesTitle
+INSERT INTO itemTypeFields VALUES (15, 109, NULL, 8);     -- medium [ADDED]
+INSERT INTO itemTypeFields VALUES (15, 7, NULL, 9);     -- place
+INSERT INTO itemTypeFields VALUES (15, 31, NULL, 10);    -- institution
+INSERT INTO itemTypeFields VALUES (15, 46, NULL, 11);    -- committee [ADDED]
+INSERT INTO itemTypeFields VALUES (15, 1262, NULL, 12);  -- assemblyNumber [ADDED]
+INSERT INTO itemTypeFields VALUES (15, 14, NULL, 13);    -- date
+INSERT INTO itemTypeFields VALUES (15, 10, NULL, 14);    -- pages
+INSERT INTO itemTypeFields VALUES (15, 87, NULL, 15);   -- language
+INSERT INTO itemTypeFields VALUES (15, 116, NULL, 16);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (15, 1261, NULL, 17); -- jurisdiction     [ADDED]
+INSERT INTO itemTypeFields VALUES (15, 1, NULL, 18);    -- url
+INSERT INTO itemTypeFields VALUES (15, 27, NULL, 19);   -- accessed
+INSERT INTO itemTypeFields VALUES (15, 8, NULL, 20);    -- publisher        [ADDED]
+INSERT INTO itemTypeFields VALUES (15, 123, NULL, 21);  -- archive
+INSERT INTO itemTypeFields VALUES (15, 19, NULL, 22);   -- archiveLocation
+INSERT INTO itemTypeFields VALUES (15, 62, NULL, 23);   -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (15, 18, NULL, 24);   -- callNumber
+INSERT INTO itemTypeFields VALUES (15, 2, NULL, 25);    -- rights
+INSERT INTO itemTypeFields VALUES (15, 22, NULL, 26);   -- extra
+
+-- bill
+INSERT INTO itemTypeFields VALUES (16, 110, NULL, 1);  -- title
+INSERT INTO itemTypeFields VALUES (16, 90, NULL, 2);   -- abstract
+INSERT INTO itemTypeFields VALUES (16, 1261, NULL, 3); -- jurisdiction      [ADDED]
+INSERT INTO itemTypeFields VALUES (16, 116, NULL, 4);  -- short title
+INSERT INTO itemTypeFields VALUES (16, 41, NULL, 5);   -- legislativeBody
+INSERT INTO itemTypeFields VALUES (16, 1263, NULL, 6); -- resolution label  [ADDED]
+INSERT INTO itemTypeFields VALUES (16, 1262, NULL, 7); -- assembly number   [ADDED]
+INSERT INTO itemTypeFields VALUES (16, 1264, NULL, 8); -- session type      [ADDED]
+INSERT INTO itemTypeFields VALUES (16, 40, NULL, 9);   -- session
+INSERT INTO itemTypeFields VALUES (16, 93, NULL, 10);  -- bill number
+INSERT INTO itemTypeFields VALUES (16, 14, NULL, 11);  -- date
+INSERT INTO itemTypeFields VALUES (16, 15, NULL, 12);  -- section
+INSERT INTO itemTypeFields VALUES (16, 19, NULL, 13);  -- archive locator   [ADDED]
+INSERT INTO itemTypeFields VALUES (16, 36, NULL, 14);  -- code            (relabel as reporter)
+INSERT INTO itemTypeFields VALUES (16, 94, NULL, 15);  -- codeVolume      (relabel as volume)
+INSERT INTO itemTypeFields VALUES (16, 95, NULL, 16);  -- codePages       (relabel as pages)
+INSERT INTO itemTypeFields VALUES (16, 87, NULL, 17);  -- language
+INSERT INTO itemTypeFields VALUES (16, 1, NULL, 18);   -- url
+INSERT INTO itemTypeFields VALUES (16, 27, NULL, 19);  -- access date
+INSERT INTO itemTypeFields VALUES (16, 42, NULL, 20);  -- history
+INSERT INTO itemTypeFields VALUES (16, 2, NULL, 21);   -- rights
+INSERT INTO itemTypeFields VALUES (16, 22, NULL, 22);  -- extra
+
+-- case
+INSERT INTO itemTypeFields VALUES (17, 111, NULL, 1);   -- caseName
+INSERT INTO itemTypeFields VALUES (17, 116, NULL, 2);   -- shortTitle
+INSERT INTO itemTypeFields VALUES (17, 1289, NULL, 3);   -- documentName
+INSERT INTO itemTypeFields VALUES (17, 90, NULL, 4);    -- abstract
+INSERT INTO itemTypeFields VALUES (17, 1261, NULL, 5);  -- jurisdiction     [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 44, NULL, 6);    -- court
+INSERT INTO itemTypeFields VALUES (17, 7, NULL, 7);     -- place            [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 117, NULL, 8);   -- docketNumber
+INSERT INTO itemTypeFields VALUES (17, 43, NULL, 9);    -- reporter
+INSERT INTO itemTypeFields VALUES (17, 1267, NULL, 10);  -- yearAsVolume     [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 97, NULL, 11);   -- reporterVolume
+INSERT INTO itemTypeFields VALUES (17, 98, NULL, 12);   -- firstPage
+INSERT INTO itemTypeFields VALUES (17, 96, NULL, 13);   -- dateDecided
+INSERT INTO itemTypeFields VALUES (17, 121,NULL, 14);   -- filingDate       [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 1269, NULL, 15); -- reign            [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 18 , NULL, 16);  -- call-number      [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 8, NULL, 17);    -- publisher        [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 1268, NULL, 18); -- publicationDate  [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 1271, NULL, 19); -- supplementName   [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 5, NULL, 20);    -- issue            [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 123, NULL, 21);  -- archive          [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 19, NULL, 22);   -- archiveLocation  [ADDED]
+INSERT INTO itemTypeFields VALUES (17, 87, NULL, 23);   -- language
+INSERT INTO itemTypeFields VALUES (17, 1, NULL, 24);    -- url
+INSERT INTO itemTypeFields VALUES (17, 27, NULL, 25);   -- accessed
+INSERT INTO itemTypeFields VALUES (17, 42, NULL, 26);   -- history
+INSERT INTO itemTypeFields VALUES (17, 2, NULL, 27);    -- rights
+INSERT INTO itemTypeFields VALUES (17, 22, NULL, 28);   -- extra
+
+-- hearing
+INSERT INTO itemTypeFields VALUES (18, 110, NULL, 1);  -- title
+INSERT INTO itemTypeFields VALUES (18, 90, NULL, 2);   -- abstract
+INSERT INTO itemTypeFields VALUES (18, 1261, NULL, 3); -- jurisdiction      [ADDED]
+INSERT INTO itemTypeFields VALUES (18, 116, NULL, 4);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (18, 46, NULL, 5);   -- committee
+INSERT INTO itemTypeFields VALUES (18, 1275, NULL, 6);   -- meetingNumber     [ADDED]
+INSERT INTO itemTypeFields VALUES (18, 41, NULL, 7);  -- legislativeBody  
+INSERT INTO itemTypeFields VALUES (18, 1263, NULL, 8); -- resolutionLabel   [ADDED]
+INSERT INTO itemTypeFields VALUES (18, 1262, NULL, 9); -- assemblyNumber    [ADDED]
+INSERT INTO itemTypeFields VALUES (18, 1264, NULL, 10); -- session type      [ADDED]
+INSERT INTO itemTypeFields VALUES (18, 40, NULL, 11);  -- session
+INSERT INTO itemTypeFields VALUES (18, 99, NULL, 12);  -- documentNumber
+INSERT INTO itemTypeFields VALUES (18, 14, NULL, 13);  -- date
+INSERT INTO itemTypeFields VALUES (18, 4, NULL, 14);   -- volume            [ADDED]
+INSERT INTO itemTypeFields VALUES (18, 10, NULL, 15);  -- pages
+INSERT INTO itemTypeFields VALUES (18, 19, NULL, 16);  -- archiveLocation   [ADDED]
+INSERT INTO itemTypeFields VALUES (18, 43, NULL, 17);  -- reporter          [ADDED]
+INSERT INTO itemTypeFields VALUES (18, 8, NULL, 18);   -- publisher
+INSERT INTO itemTypeFields VALUES (18, 87, NULL, 19);  -- language
+INSERT INTO itemTypeFields VALUES (18, 1, NULL, 20);   -- url
+INSERT INTO itemTypeFields VALUES (18, 27, NULL, 21);  -- accessed
+INSERT INTO itemTypeFields VALUES (18, 45, NULL, 22);  -- numberOfVolumes   Deprecated
+INSERT INTO itemTypeFields VALUES (18, 42, NULL, 23);  -- history           Deprecated
+INSERT INTO itemTypeFields VALUES (18, 7, NULL, 24);   -- place             Deprecated
+INSERT INTO itemTypeFields VALUES (18, 2, NULL, 25);   -- rights
+INSERT INTO itemTypeFields VALUES (18, 22, NULL, 26);  -- extra
+
+-- patent
+INSERT INTO itemTypeFields VALUES (19, 110, NULL, 1);   -- title
+INSERT INTO itemTypeFields VALUES (19, 90, NULL, 2);    -- abstract
+INSERT INTO itemTypeFields VALUES (19, 1261, NULL, 3);  -- Jurisdiction        [ADDED]
+INSERT INTO itemTypeFields VALUES (19, 120, NULL, 4);   -- Issuing Authority
+INSERT INTO itemTypeFields VALUES (19, 7, NULL, 5);     -- Place
+INSERT INTO itemTypeFields VALUES (19, 50, NULL, 6);    -- Patent number
+INSERT INTO itemTypeFields VALUES (19, 52, NULL, 7);    -- issueDate
+INSERT INTO itemTypeFields VALUES (19, 1285, NULL, 8);    -- publicationNumber [ADDED]
+INSERT INTO itemTypeFields VALUES (19, 1268, NULL, 9);    -- publicationDate [ADDED]
+INSERT INTO itemTypeFields VALUES (19, 103, NULL, 10);   -- Application Number
+INSERT INTO itemTypeFields VALUES (19, 121, NULL, 11);   -- Filing Date                 (submitted)
+INSERT INTO itemTypeFields VALUES (19, 51, NULL, 12);   -- Priority Numbers
+INSERT INTO itemTypeFields VALUES (19, 1266, NULL, 13); -- Priority Date       [ADDED] (original-date)
+INSERT INTO itemTypeFields VALUES (19, 10, NULL, 14);   -- Pages
+INSERT INTO itemTypeFields VALUES (19, 54, NULL, 15);   -- Legal Status
+INSERT INTO itemTypeFields VALUES (19, 87, NULL, 16);   -- language
+INSERT INTO itemTypeFields VALUES (19, 116, NULL, 17);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (19, 1, NULL, 18);    -- url
+INSERT INTO itemTypeFields VALUES (19, 27, NULL, 19);   -- accessed
+INSERT INTO itemTypeFields VALUES (19, 48, NULL, 20);   -- Assignee             Deprecated
+INSERT INTO itemTypeFields VALUES (19, 102, NULL, 21);  -- Country              Deprecated
+INSERT INTO itemTypeFields VALUES (19, 53, NULL, 22);   -- References           Deprecated
+INSERT INTO itemTypeFields VALUES (19, 2, NULL, 23);    -- rights
+INSERT INTO itemTypeFields VALUES (19, 22, NULL, 24);   -- extra
+
+-- statute
+INSERT INTO itemTypeFields VALUES (20, 112, NULL, 1);   -- nameOfAct
+INSERT INTO itemTypeFields VALUES (20, 116, NULL, 2);   -- shortTitle
+INSERT INTO itemTypeFields VALUES (20, 1288, NULL, 3);  -- gazetteFlag
+INSERT INTO itemTypeFields VALUES (20, 90, NULL, 4);    -- abstract
+INSERT INTO itemTypeFields VALUES (20, 1261, NULL, 5);  -- jurisdiction     [ADDED]
+INSERT INTO itemTypeFields VALUES (20, 36, NULL, 6);    -- code
+INSERT INTO itemTypeFields VALUES (20, 55, NULL, 7);    -- codeNumber (volume)
+INSERT INTO itemTypeFields VALUES (20, 10, NULL, 8);    -- pages
+INSERT INTO itemTypeFields VALUES (20, 100, NULL, 9);   -- dateEnacted
+INSERT INTO itemTypeFields VALUES (20, 1287, NULL, 10);   -- dateAmended   [ADDED]
+INSERT INTO itemTypeFields VALUES (20, 1272, NULL, 11);   -- originalDate   [ADDED]
+INSERT INTO itemTypeFields VALUES (20, 15, NULL, 12);    -- section
+INSERT INTO itemTypeFields VALUES (20, 101, NULL, 13);  -- publicLawNumber
+INSERT INTO itemTypeFields VALUES (20, 1269, NULL, 14); -- reign            [ADDED]
+INSERT INTO itemTypeFields VALUES (20, 1270, NULL, 15); -- regnalYear       [ADDED]
+INSERT INTO itemTypeFields VALUES (20, 8, NULL, 16);    -- publisher        [ADDED]
+INSERT INTO itemTypeFields VALUES (20, 1268, NULL, 17); -- publicationDate  [ADDED]
+INSERT INTO itemTypeFields VALUES (20, 87, NULL, 18);   -- language
+INSERT INTO itemTypeFields VALUES (20, 1, NULL, 19);    -- url
+INSERT INTO itemTypeFields VALUES (20, 27, NULL, 20);   -- accessed
+INSERT INTO itemTypeFields VALUES (20, 40, NULL, 21);   -- session          Deprecated
+INSERT INTO itemTypeFields VALUES (20, 42, NULL, 22);   -- history          Deprecated
+INSERT INTO itemTypeFields VALUES (20, 2, NULL, 23);    -- rights
+INSERT INTO itemTypeFields VALUES (20, 22, NULL, 24);   -- extra
+
+-- email
+INSERT INTO itemTypeFields VALUES (21, 113, NULL, 1);  -- title
+INSERT INTO itemTypeFields VALUES (21, 90, NULL, 2);   -- abstract
+INSERT INTO itemTypeFields VALUES (21, 14, NULL, 3);   -- date
+INSERT INTO itemTypeFields VALUES (21, 116, NULL, 4);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (21, 1, NULL, 5);    -- url
+INSERT INTO itemTypeFields VALUES (21, 27, NULL, 6);   -- accessed
+INSERT INTO itemTypeFields VALUES (21, 87, NULL, 7);   -- language
+INSERT INTO itemTypeFields VALUES (21, 2, NULL, 8);    -- rights
+INSERT INTO itemTypeFields VALUES (21, 22, NULL, 9);   -- extra
+
+-- map
+INSERT INTO itemTypeFields VALUES (22, 110, NULL, 1);   -- title
+INSERT INTO itemTypeFields VALUES (22, 90, NULL, 2);    -- abstract
+INSERT INTO itemTypeFields VALUES (22, 67, NULL, 3);    -- mapType
+INSERT INTO itemTypeFields VALUES (22, 68, NULL, 4);    -- scale
+INSERT INTO itemTypeFields VALUES (22, 28, NULL, 5);    -- seriesTitle
+INSERT INTO itemTypeFields VALUES (22, 6, NULL, 6);     -- edition
+INSERT INTO itemTypeFields VALUES (22, 7, NULL, 7);     -- place
+INSERT INTO itemTypeFields VALUES (22, 8, NULL, 8);     -- publisher
+INSERT INTO itemTypeFields VALUES (22, 14, NULL, 9);    -- date
+INSERT INTO itemTypeFields VALUES (22, 87, NULL, 10);   -- language
+INSERT INTO itemTypeFields VALUES (22, 11, NULL, 11);   -- ISBN
+INSERT INTO itemTypeFields VALUES (22, 116, NULL, 12);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (22, 1, NULL, 13);    -- url
+INSERT INTO itemTypeFields VALUES (22, 27, NULL, 14);   -- accessed
+INSERT INTO itemTypeFields VALUES (22, 123, NULL, 15);  -- archive
+INSERT INTO itemTypeFields VALUES (22, 19, NULL, 16);   -- archiveLocation
+INSERT INTO itemTypeFields VALUES (22, 62, NULL, 17);   -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (22, 18, NULL, 18);   -- callNumber
+INSERT INTO itemTypeFields VALUES (22, 2, NULL, 19);    -- rights
+INSERT INTO itemTypeFields VALUES (22, 22, NULL, 20);   -- extra
+
 INSERT INTO itemTypeFields VALUES (23, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (23, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (23, 107, NULL, 3);
@@ -702,15 +825,19 @@ INSERT INTO itemTypeFields VALUES (23, 87, NULL, 8);
 INSERT INTO itemTypeFields VALUES (23, 116, NULL, 9);
 INSERT INTO itemTypeFields VALUES (23, 2, NULL, 10);
 INSERT INTO itemTypeFields VALUES (23, 22, NULL, 11);
-INSERT INTO itemTypeFields VALUES (24, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (24, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (24, 14, NULL, 3);
-INSERT INTO itemTypeFields VALUES (24, 87, NULL, 4);
-INSERT INTO itemTypeFields VALUES (24, 116, NULL, 5);
-INSERT INTO itemTypeFields VALUES (24, 1, NULL, 6);
-INSERT INTO itemTypeFields VALUES (24, 27, NULL, 7);
-INSERT INTO itemTypeFields VALUES (24, 2, NULL, 8);
-INSERT INTO itemTypeFields VALUES (24, 22, NULL, 9);
+
+-- instantMessage
+INSERT INTO itemTypeFields VALUES (24, 110, NULL, 1); -- title
+INSERT INTO itemTypeFields VALUES (24, 90, NULL, 2);  -- abstract
+INSERT INTO itemTypeFields VALUES (24, 14, NULL, 3);  -- date
+INSERT INTO itemTypeFields VALUES (24, 87, NULL, 4);  -- language
+INSERT INTO itemTypeFields VALUES (24, 116, NULL, 5); -- shortTitle
+INSERT INTO itemTypeFields VALUES (24, 1, NULL, 6);   -- url
+INSERT INTO itemTypeFields VALUES (24, 27, NULL, 7);  -- accessed
+INSERT INTO itemTypeFields VALUES (24, 2, NULL, 8);   -- rights
+INSERT INTO itemTypeFields VALUES (24, 22, NULL, 9);  -- extra
+
+-- forumPost
 INSERT INTO itemTypeFields VALUES (25, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (25, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (25, 104, NULL, 3);
@@ -722,27 +849,34 @@ INSERT INTO itemTypeFields VALUES (25, 1, NULL, 8);
 INSERT INTO itemTypeFields VALUES (25, 27, NULL, 9);
 INSERT INTO itemTypeFields VALUES (25, 2, NULL, 10);
 INSERT INTO itemTypeFields VALUES (25, 22, NULL, 11);
-INSERT INTO itemTypeFields VALUES (26, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (26, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (26, 71, NULL, 3);
-INSERT INTO itemTypeFields VALUES (26, 28, NULL, 4);
-INSERT INTO itemTypeFields VALUES (26, 4, NULL, 5);
-INSERT INTO itemTypeFields VALUES (26, 45, NULL, 6);
-INSERT INTO itemTypeFields VALUES (26, 7, NULL, 7);
-INSERT INTO itemTypeFields VALUES (26, 72, NULL, 8);
-INSERT INTO itemTypeFields VALUES (26, 14, NULL, 9);
-INSERT INTO itemTypeFields VALUES (26, 77, NULL, 10);
-INSERT INTO itemTypeFields VALUES (26, 87, NULL, 11);
-INSERT INTO itemTypeFields VALUES (26, 11, NULL, 12);
-INSERT INTO itemTypeFields VALUES (26, 116, NULL, 13);
-INSERT INTO itemTypeFields VALUES (26, 123, NULL, 14);
-INSERT INTO itemTypeFields VALUES (26, 19, NULL, 15);
-INSERT INTO itemTypeFields VALUES (26, 62, NULL, 16);
-INSERT INTO itemTypeFields VALUES (26, 18, NULL, 17);
-INSERT INTO itemTypeFields VALUES (26, 1, NULL, 18);
-INSERT INTO itemTypeFields VALUES (26, 27, NULL, 19);
-INSERT INTO itemTypeFields VALUES (26, 2, NULL, 20);
-INSERT INTO itemTypeFields VALUES (26, 22, NULL, 21);
+
+-- audioRecording
+INSERT INTO itemTypeFields VALUES (26, 110, NULL, 1);   -- title
+INSERT INTO itemTypeFields VALUES (26, 90, NULL, 2);    -- abstract
+INSERT INTO itemTypeFields VALUES (26, 1273, NULL, 3);  -- album                [ADDED]
+INSERT INTO itemTypeFields VALUES (26, 71, NULL, 4);    -- audioRecordingFormat
+INSERT INTO itemTypeFields VALUES (26, 28, NULL, 5);    -- seriesTitle
+INSERT INTO itemTypeFields VALUES (26, 4, NULL, 6);     -- volume
+INSERT INTO itemTypeFields VALUES (26, 45, NULL, 7);    -- numberOfVolumes
+INSERT INTO itemTypeFields VALUES (26, 7, NULL, 8);     -- place
+INSERT INTO itemTypeFields VALUES (26, 72, NULL, 9);    -- label
+INSERT INTO itemTypeFields VALUES (26, 1280, NULL, 10);    -- release (ed.)       [ADDED]
+INSERT INTO itemTypeFields VALUES (26, 14, NULL, 11);   -- date
+INSERT INTO itemTypeFields VALUES (26, 1274, NULL, 12); -- opus                 [ADDED]
+INSERT INTO itemTypeFields VALUES (26, 1272, NULL, 13); -- originalDate         [ADDED]
+INSERT INTO itemTypeFields VALUES (26, 77, NULL, 14);   -- runningTime
+INSERT INTO itemTypeFields VALUES (26, 87, NULL, 15);   -- language
+INSERT INTO itemTypeFields VALUES (26, 11, NULL, 16);   -- ISBN
+INSERT INTO itemTypeFields VALUES (26, 116, NULL, 17);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (26, 123, NULL, 18);  -- archive
+INSERT INTO itemTypeFields VALUES (26, 19, NULL, 19);   -- archiveLocation
+INSERT INTO itemTypeFields VALUES (26, 62, NULL, 20);   -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (26, 18, NULL, 21);   -- callNumber
+INSERT INTO itemTypeFields VALUES (26, 1, NULL, 22);    -- url
+INSERT INTO itemTypeFields VALUES (26, 27, NULL, 23);   -- accessed
+INSERT INTO itemTypeFields VALUES (26, 2, NULL, 24);    -- rights
+INSERT INTO itemTypeFields VALUES (26, 22, NULL, 25);   -- extra
+
 INSERT INTO itemTypeFields VALUES (27, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (27, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (27, 74, NULL, 3);
@@ -755,77 +889,89 @@ INSERT INTO itemTypeFields VALUES (27, 87, NULL, 9);
 INSERT INTO itemTypeFields VALUES (27, 116, NULL, 10);
 INSERT INTO itemTypeFields VALUES (27, 2, NULL, 11);
 INSERT INTO itemTypeFields VALUES (27, 22, NULL, 12);
-INSERT INTO itemTypeFields VALUES (28, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (28, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (28, 63, NULL, 3);
-INSERT INTO itemTypeFields VALUES (28, 28, NULL, 4);
-INSERT INTO itemTypeFields VALUES (28, 4, NULL, 5);
-INSERT INTO itemTypeFields VALUES (28, 45, NULL, 6);
-INSERT INTO itemTypeFields VALUES (28, 7, NULL, 7);
-INSERT INTO itemTypeFields VALUES (28, 76, NULL, 8);
-INSERT INTO itemTypeFields VALUES (28, 14, NULL, 9);
-INSERT INTO itemTypeFields VALUES (28, 77, NULL, 10);
-INSERT INTO itemTypeFields VALUES (28, 87, NULL, 11);
-INSERT INTO itemTypeFields VALUES (28, 11, NULL, 12);
-INSERT INTO itemTypeFields VALUES (28, 116, NULL, 13);
-INSERT INTO itemTypeFields VALUES (28, 1, NULL, 14);
-INSERT INTO itemTypeFields VALUES (28, 27, NULL, 15);
-INSERT INTO itemTypeFields VALUES (28, 123, NULL, 16);
-INSERT INTO itemTypeFields VALUES (28, 19, NULL, 17);
-INSERT INTO itemTypeFields VALUES (28, 62, NULL, 18);
-INSERT INTO itemTypeFields VALUES (28, 18, NULL, 19);
-INSERT INTO itemTypeFields VALUES (28, 2, NULL, 20);
-INSERT INTO itemTypeFields VALUES (28, 22, NULL, 21);
-INSERT INTO itemTypeFields VALUES (29, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (29, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (29, 119, NULL, 3);
-INSERT INTO itemTypeFields VALUES (29, 105, NULL, 4);
-INSERT INTO itemTypeFields VALUES (29, 63, NULL, 5);
-INSERT INTO itemTypeFields VALUES (29, 7, NULL, 6);
-INSERT INTO itemTypeFields VALUES (29, 78, NULL, 7);
-INSERT INTO itemTypeFields VALUES (29, 14, NULL, 8);
-INSERT INTO itemTypeFields VALUES (29, 77, NULL, 9);
-INSERT INTO itemTypeFields VALUES (29, 87, NULL, 10);
-INSERT INTO itemTypeFields VALUES (29, 116, NULL, 11);
-INSERT INTO itemTypeFields VALUES (29, 1, NULL, 12);
-INSERT INTO itemTypeFields VALUES (29, 27, NULL, 13);
-INSERT INTO itemTypeFields VALUES (29, 123, NULL, 14);
-INSERT INTO itemTypeFields VALUES (29, 19, NULL, 15);
-INSERT INTO itemTypeFields VALUES (29, 62, NULL, 16);
-INSERT INTO itemTypeFields VALUES (29, 18, NULL, 17);
-INSERT INTO itemTypeFields VALUES (29, 2, NULL, 18);
-INSERT INTO itemTypeFields VALUES (29, 22, NULL, 19);
-INSERT INTO itemTypeFields VALUES (30, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (30, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (30, 119, NULL, 3);
-INSERT INTO itemTypeFields VALUES (30, 105, NULL, 4);
-INSERT INTO itemTypeFields VALUES (30, 71, NULL, 5);
-INSERT INTO itemTypeFields VALUES (30, 7, NULL, 6);
-INSERT INTO itemTypeFields VALUES (30, 78, NULL, 7);
-INSERT INTO itemTypeFields VALUES (30, 14, NULL, 8);
-INSERT INTO itemTypeFields VALUES (30, 77, NULL, 9);
-INSERT INTO itemTypeFields VALUES (30, 87, NULL, 10);
-INSERT INTO itemTypeFields VALUES (30, 116, NULL, 11);
-INSERT INTO itemTypeFields VALUES (30, 1, NULL, 12);
-INSERT INTO itemTypeFields VALUES (30, 27, NULL, 13);
-INSERT INTO itemTypeFields VALUES (30, 123, NULL, 14);
-INSERT INTO itemTypeFields VALUES (30, 19, NULL, 15);
-INSERT INTO itemTypeFields VALUES (30, 62, NULL, 16);
-INSERT INTO itemTypeFields VALUES (30, 18, NULL, 17);
-INSERT INTO itemTypeFields VALUES (30, 2, NULL, 18);
-INSERT INTO itemTypeFields VALUES (30, 22, NULL, 19);
-INSERT INTO itemTypeFields VALUES (31, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (31, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (31, 28, NULL, 3);
-INSERT INTO itemTypeFields VALUES (31, 105, NULL, 4);
-INSERT INTO itemTypeFields VALUES (31, 80, NULL, 5);
-INSERT INTO itemTypeFields VALUES (31, 77, NULL, 6);
-INSERT INTO itemTypeFields VALUES (31, 1, NULL, 7);
-INSERT INTO itemTypeFields VALUES (31, 27, NULL, 8);
-INSERT INTO itemTypeFields VALUES (31, 87, NULL, 9);
-INSERT INTO itemTypeFields VALUES (31, 116, NULL, 10);
-INSERT INTO itemTypeFields VALUES (31, 2, NULL, 11);
-INSERT INTO itemTypeFields VALUES (31, 22, NULL, 12);
+
+
+INSERT INTO itemTypeFields VALUES (28, 110, NULL, 1);  --
+INSERT INTO itemTypeFields VALUES (28, 90, NULL, 2);   --
+INSERT INTO itemTypeFields VALUES (28, 63, NULL, 3);   --
+INSERT INTO itemTypeFields VALUES (28, 28, NULL, 4);   --
+INSERT INTO itemTypeFields VALUES (28, 4, NULL, 5);    --
+INSERT INTO itemTypeFields VALUES (28, 45, NULL, 6);   --
+INSERT INTO itemTypeFields VALUES (28, 7, NULL, 7);    --
+INSERT INTO itemTypeFields VALUES (28, 76, NULL, 8);   --
+INSERT INTO itemTypeFields VALUES (28, 14, NULL, 9);   --
+INSERT INTO itemTypeFields VALUES (28, 77, NULL, 10);  --
+INSERT INTO itemTypeFields VALUES (28, 87, NULL, 11);  --
+INSERT INTO itemTypeFields VALUES (28, 11, NULL, 12);  --
+INSERT INTO itemTypeFields VALUES (28, 116, NULL, 13); --
+INSERT INTO itemTypeFields VALUES (28, 91, NULL, 14);  -- websiteTitle [ADDED]
+INSERT INTO itemTypeFields VALUES (28, 1, NULL, 15);   --
+INSERT INTO itemTypeFields VALUES (28, 27, NULL, 16);  --
+INSERT INTO itemTypeFields VALUES (28, 123, NULL, 17); --
+INSERT INTO itemTypeFields VALUES (28, 19, NULL, 18);  --
+INSERT INTO itemTypeFields VALUES (28, 62, NULL, 19);  --
+INSERT INTO itemTypeFields VALUES (28, 18, NULL, 20);  --
+INSERT INTO itemTypeFields VALUES (28, 2, NULL, 21);   --
+INSERT INTO itemTypeFields VALUES (28, 22, NULL, 22);  --
+
+-- tvBroadcast
+INSERT INTO itemTypeFields VALUES (29, 110, NULL, 1);  -- title
+INSERT INTO itemTypeFields VALUES (29, 90, NULL, 2);   -- abstract
+INSERT INTO itemTypeFields VALUES (29, 119, NULL, 3);  -- programTitle
+INSERT INTO itemTypeFields VALUES (29, 105, NULL, 4);  -- episodeNumber
+INSERT INTO itemTypeFields VALUES (29, 63, NULL, 5);   -- videoRecordingFormat
+INSERT INTO itemTypeFields VALUES (29, 7, NULL, 6);    -- place
+INSERT INTO itemTypeFields VALUES (29, 78, NULL, 7);   -- network
+INSERT INTO itemTypeFields VALUES (29, 14, NULL, 8);   -- date
+INSERT INTO itemTypeFields VALUES (29, 77, NULL, 9);   -- runningTime
+INSERT INTO itemTypeFields VALUES (29, 87, NULL, 10);  -- language
+INSERT INTO itemTypeFields VALUES (29, 116, NULL, 11); -- shortTitle
+INSERT INTO itemTypeFields VALUES (29, 1, NULL, 12);   -- url
+INSERT INTO itemTypeFields VALUES (29, 27, NULL, 13);  -- accessed
+INSERT INTO itemTypeFields VALUES (29, 123, NULL, 14); -- archive
+INSERT INTO itemTypeFields VALUES (29, 19, NULL, 15);  -- archiveLocation
+INSERT INTO itemTypeFields VALUES (29, 62, NULL, 16);  -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (29, 18, NULL, 17);  -- call number
+INSERT INTO itemTypeFields VALUES (29, 2, NULL, 18);   -- rights
+INSERT INTO itemTypeFields VALUES (29, 22, NULL, 19);  -- extra
+
+-- radio broadcast
+INSERT INTO itemTypeFields VALUES (30, 110, NULL, 1);  -- title
+INSERT INTO itemTypeFields VALUES (30, 90, NULL, 2);   -- abstract
+INSERT INTO itemTypeFields VALUES (30, 119, NULL, 3);  -- programTitle
+INSERT INTO itemTypeFields VALUES (30, 105, NULL, 4);  -- episodeNumber
+INSERT INTO itemTypeFields VALUES (30, 71, NULL, 5);   -- audioRecordingFormat
+INSERT INTO itemTypeFields VALUES (30, 7, NULL, 6);    -- place
+INSERT INTO itemTypeFields VALUES (30, 78, NULL, 7);   -- network
+INSERT INTO itemTypeFields VALUES (30, 14, NULL, 8);   -- date
+INSERT INTO itemTypeFields VALUES (30, 77, NULL, 9);   -- runningTime
+INSERT INTO itemTypeFields VALUES (30, 87, NULL, 10);  -- language
+INSERT INTO itemTypeFields VALUES (30, 116, NULL, 11); -- shortTitle
+INSERT INTO itemTypeFields VALUES (30, 1, NULL, 12);   -- url
+INSERT INTO itemTypeFields VALUES (30, 27, NULL, 13);  -- accessed
+INSERT INTO itemTypeFields VALUES (30, 123, NULL, 14); -- archive
+INSERT INTO itemTypeFields VALUES (30, 19, NULL, 15);  -- archiveLocation
+INSERT INTO itemTypeFields VALUES (30, 62, NULL, 16);  -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (30, 18, NULL, 17);  -- call number
+INSERT INTO itemTypeFields VALUES (30, 2, NULL, 18);   -- rights
+INSERT INTO itemTypeFields VALUES (30, 22, NULL, 19);  -- extra
+
+-- podcast
+INSERT INTO itemTypeFields VALUES (31, 110, NULL, 1);    -- title
+INSERT INTO itemTypeFields VALUES (31, 90, NULL, 2);     -- abstract
+INSERT INTO itemTypeFields VALUES (31, 28, NULL, 3);     -- seriesTitle
+INSERT INTO itemTypeFields VALUES (31, 105, NULL, 4);    -- episodeNumber
+INSERT INTO itemTypeFields VALUES (31, 14, NULL, 5);     -- date           [ADDED]
+INSERT INTO itemTypeFields VALUES (31, 8, NULL, 6);      -- publisher      [ADDED]
+INSERT INTO itemTypeFields VALUES (31, 80, NULL, 7);     -- audioFileType (medium)
+INSERT INTO itemTypeFields VALUES (31, 77, NULL, 8);     -- runningTime
+INSERT INTO itemTypeFields VALUES (31, 116, NULL, 9);    -- shortTitle
+INSERT INTO itemTypeFields VALUES (31, 87, NULL, 10);    -- language
+INSERT INTO itemTypeFields VALUES (31, 1, NULL, 11);     -- url
+INSERT INTO itemTypeFields VALUES (31, 27, NULL, 12);    -- accessed
+INSERT INTO itemTypeFields VALUES (31, 2, NULL, 13);     -- rights
+INSERT INTO itemTypeFields VALUES (31, 22, NULL, 14);    -- extra
+
 INSERT INTO itemTypeFields VALUES (32, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (32, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (32, 28, NULL, 3);
@@ -845,42 +991,51 @@ INSERT INTO itemTypeFields VALUES (32, 62, NULL, 16);
 INSERT INTO itemTypeFields VALUES (32, 18, NULL, 17);
 INSERT INTO itemTypeFields VALUES (32, 27, NULL, 18);
 INSERT INTO itemTypeFields VALUES (32, 22, NULL, 19);
+
+-- conferencePaper
 INSERT INTO itemTypeFields VALUES (33, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (33, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (33, 14, NULL, 3);
+INSERT INTO itemTypeFields VALUES (33, 1283, NULL, 3);
 INSERT INTO itemTypeFields VALUES (33, 114, NULL, 4);
 INSERT INTO itemTypeFields VALUES (33, 84, NULL, 5);
 INSERT INTO itemTypeFields VALUES (33, 7, NULL, 6);
-INSERT INTO itemTypeFields VALUES (33, 8, NULL, 7);
-INSERT INTO itemTypeFields VALUES (33, 4, NULL, 8);
-INSERT INTO itemTypeFields VALUES (33, 10, NULL, 9);
-INSERT INTO itemTypeFields VALUES (33, 3, NULL, 10);
-INSERT INTO itemTypeFields VALUES (33, 87, NULL, 11);
-INSERT INTO itemTypeFields VALUES (33, 26, NULL, 12);
-INSERT INTO itemTypeFields VALUES (33, 11, NULL, 13);
-INSERT INTO itemTypeFields VALUES (33, 116, NULL, 14);
-INSERT INTO itemTypeFields VALUES (33, 1, NULL, 15);
-INSERT INTO itemTypeFields VALUES (33, 27, NULL, 16);
-INSERT INTO itemTypeFields VALUES (33, 123, NULL, 17);
-INSERT INTO itemTypeFields VALUES (33, 19, NULL, 18);
-INSERT INTO itemTypeFields VALUES (33, 62, NULL, 19);
-INSERT INTO itemTypeFields VALUES (33, 18, NULL, 20);
-INSERT INTO itemTypeFields VALUES (33, 2, NULL, 21);
-INSERT INTO itemTypeFields VALUES (33, 22, NULL, 22);
-INSERT INTO itemTypeFields VALUES (34, 110, NULL, 1);
-INSERT INTO itemTypeFields VALUES (34, 90, NULL, 2);
-INSERT INTO itemTypeFields VALUES (34, 8, NULL, 3);
-INSERT INTO itemTypeFields VALUES (34, 14, NULL, 4);
-INSERT INTO itemTypeFields VALUES (34, 87, NULL, 5);
-INSERT INTO itemTypeFields VALUES (34, 116, NULL, 6);
-INSERT INTO itemTypeFields VALUES (34, 1, NULL, 7);
-INSERT INTO itemTypeFields VALUES (34, 27, NULL, 8);
-INSERT INTO itemTypeFields VALUES (34, 123, NULL, 9);
-INSERT INTO itemTypeFields VALUES (34, 19, NULL, 10);
-INSERT INTO itemTypeFields VALUES (34, 62, NULL, 11);
-INSERT INTO itemTypeFields VALUES (34, 18, NULL, 12);
-INSERT INTO itemTypeFields VALUES (34, 2, NULL, 13);
-INSERT INTO itemTypeFields VALUES (34, 22, NULL, 14);
+INSERT INTO itemTypeFields VALUES (33, 31, NULL, 7);
+INSERT INTO itemTypeFields VALUES (33, 8, NULL, 8);
+INSERT INTO itemTypeFields VALUES (33, 14, NULL, 9);
+INSERT INTO itemTypeFields VALUES (33, 4, NULL, 10);
+INSERT INTO itemTypeFields VALUES (33, 5, NULL, 11);
+INSERT INTO itemTypeFields VALUES (33, 10, NULL, 12);
+INSERT INTO itemTypeFields VALUES (33, 3, NULL, 13);
+INSERT INTO itemTypeFields VALUES (33, 87, NULL, 14);
+INSERT INTO itemTypeFields VALUES (33, 26, NULL, 15);
+INSERT INTO itemTypeFields VALUES (33, 11, NULL, 16);
+INSERT INTO itemTypeFields VALUES (33, 116, NULL, 17);
+INSERT INTO itemTypeFields VALUES (33, 1, NULL, 18);
+INSERT INTO itemTypeFields VALUES (33, 27, NULL, 19);
+INSERT INTO itemTypeFields VALUES (33, 123, NULL, 20);
+INSERT INTO itemTypeFields VALUES (33, 19, NULL, 21);
+INSERT INTO itemTypeFields VALUES (33, 62, NULL, 22);
+INSERT INTO itemTypeFields VALUES (33, 18, NULL, 23);
+INSERT INTO itemTypeFields VALUES (33, 2, NULL, 24);
+INSERT INTO itemTypeFields VALUES (33, 22, NULL, 25);
+
+-- document
+INSERT INTO itemTypeFields VALUES (34, 110, NULL, 1);  -- title
+INSERT INTO itemTypeFields VALUES (34, 90, NULL, 2);   -- abstract
+INSERT INTO itemTypeFields VALUES (34, 8, NULL, 3);    -- publisher
+INSERT INTO itemTypeFields VALUES (34, 81, NULL, 4);   -- version [ADDED]
+INSERT INTO itemTypeFields VALUES (34, 14, NULL, 5);   -- date
+INSERT INTO itemTypeFields VALUES (34, 87, NULL, 6);   -- language
+INSERT INTO itemTypeFields VALUES (34, 116, NULL, 7);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (34, 1, NULL, 8);    -- url
+INSERT INTO itemTypeFields VALUES (34, 27, NULL, 9);   -- accessed
+INSERT INTO itemTypeFields VALUES (34, 123, NULL, 10);  -- archive
+INSERT INTO itemTypeFields VALUES (34, 19, NULL, 11);  -- archiveLocation
+INSERT INTO itemTypeFields VALUES (34, 62, NULL, 12);  -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (34, 18, NULL, 13);  -- callNumber
+INSERT INTO itemTypeFields VALUES (34, 2, NULL, 14);   -- rights
+INSERT INTO itemTypeFields VALUES (34, 22, NULL, 15);  -- extra
+
 INSERT INTO itemTypeFields VALUES (35, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (35, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (35, 85, NULL, 3);
@@ -904,6 +1059,7 @@ INSERT INTO itemTypeFields VALUES (35, 62, NULL, 20);
 INSERT INTO itemTypeFields VALUES (35, 18, NULL, 21);
 INSERT INTO itemTypeFields VALUES (35, 2, NULL, 22);
 INSERT INTO itemTypeFields VALUES (35, 22, NULL, 23);
+
 INSERT INTO itemTypeFields VALUES (36, 110, NULL, 1);
 INSERT INTO itemTypeFields VALUES (36, 90, NULL, 2);
 INSERT INTO itemTypeFields VALUES (36, 86, NULL, 3);
@@ -928,12 +1084,118 @@ INSERT INTO itemTypeFields VALUES (36, 18, NULL, 21);
 INSERT INTO itemTypeFields VALUES (36, 2, NULL, 22);
 INSERT INTO itemTypeFields VALUES (36, 22, NULL, 23);
 
+-- [NEW] gazette (derived from statute)
+INSERT INTO itemTypeFields VALUES (1261, 112, NULL, 1);   -- nameOfAct
+INSERT INTO itemTypeFields VALUES (1261, 90, NULL, 2);    -- abstract
+INSERT INTO itemTypeFields VALUES (1261, 1261, NULL, 3);  -- jurisdiction
+INSERT INTO itemTypeFields VALUES (1261, 116, NULL, 4);   -- shortTitle
+INSERT INTO itemTypeFields VALUES (1261, 101, NULL, 5);   -- publicLawNumber
+INSERT INTO itemTypeFields VALUES (1261, 36, NULL, 6);    -- code       (reporter)
+INSERT INTO itemTypeFields VALUES (1261, 55, NULL, 7);    -- codeNumber (volume)
+INSERT INTO itemTypeFields VALUES (1261, 10, NULL, 8);    -- pages
+INSERT INTO itemTypeFields VALUES (1261, 100, NULL, 9);   -- dateEnacted
+INSERT INTO itemTypeFields VALUES (1261, 15, NULL, 10);   -- section
+INSERT INTO itemTypeFields VALUES (1261, 1269, NULL, 11); -- reign            [ADDED]
+INSERT INTO itemTypeFields VALUES (1261, 1270, NULL, 12); -- regnalYear       [ADDED]
+INSERT INTO itemTypeFields VALUES (1261, 8, NULL, 13);    -- publisher       [ADDED]
+INSERT INTO itemTypeFields VALUES (1261, 1268, NULL, 14); -- publicationDate [ADDED]
+INSERT INTO itemTypeFields VALUES (1261, 87, NULL, 15);   -- language
+INSERT INTO itemTypeFields VALUES (1261, 1, NULL, 16);    -- url
+INSERT INTO itemTypeFields VALUES (1261, 27, NULL, 17);   -- accessed
+INSERT INTO itemTypeFields VALUES (1261, 40, NULL, 18);   -- session        Deprecated
+INSERT INTO itemTypeFields VALUES (1261, 42, NULL, 19);   -- history        Deprecated
+INSERT INTO itemTypeFields VALUES (1261, 2, NULL, 20);    -- rights
+INSERT INTO itemTypeFields VALUES (1261, 22, NULL, 21);   -- extra
+
+-- [NEW] treaty (derived from document)
+INSERT INTO itemTypeFields VALUES (1262, 110, NULL, 1);   -- title
+INSERT INTO itemTypeFields VALUES (1262, 90, NULL, 2);    -- abstract
+INSERT INTO itemTypeFields VALUES (1262, 116, NULL, 3);   -- shortTitle
+INSERT INTO itemTypeFields VALUES (1262, 43, NULL, 4);    -- reporter         [ADDED]
+INSERT INTO itemTypeFields VALUES (1262, 4, NULL, 5);     -- volume           [ADDED]
+INSERT INTO itemTypeFields VALUES (1262, 10, NULL, 6);    -- pages            [ADDED]
+INSERT INTO itemTypeFields VALUES (1262, 1278, NULL, 7);  -- openingDate      [ADDED]
+INSERT INTO itemTypeFields VALUES (1262, 1279, NULL, 8);  -- adoptionDate     [ADDED]
+INSERT INTO itemTypeFields VALUES (1262, 1277, NULL, 9);  -- signingDate      [ADDED]
+INSERT INTO itemTypeFields VALUES (1262, 14, NULL, 10);   -- date (effective date)
+INSERT INTO itemTypeFields VALUES (1262, 15, NULL, 11);   -- section          [ADDED]
+INSERT INTO itemTypeFields VALUES (1262, 87, NULL, 12);   -- language
+INSERT INTO itemTypeFields VALUES (1262, 1, NULL, 13);    -- url
+INSERT INTO itemTypeFields VALUES (1262, 27, NULL, 14);   -- accessed
+INSERT INTO itemTypeFields VALUES (1262, 123, NULL, 15);  -- archive
+INSERT INTO itemTypeFields VALUES (1262, 19, NULL, 16);   -- archiveLocation
+INSERT INTO itemTypeFields VALUES (1262, 62, NULL, 17);   -- libraryCatalog   Deprecated
+INSERT INTO itemTypeFields VALUES (1262, 18, NULL, 18);   -- callNumber       Deprecated
+INSERT INTO itemTypeFields VALUES (1262, 8, NULL, 19);    -- publisher        Deprecated
+INSERT INTO itemTypeFields VALUES (1262, 2, NULL, 20);    -- rights
+INSERT INTO itemTypeFields VALUES (1262, 22, NULL, 21);   -- extra
+
+-- [NEW] regulation (clone of gazette)
+INSERT INTO itemTypeFields VALUES (1263, 112, NULL, 1);   -- nameOfAct
+INSERT INTO itemTypeFields VALUES (1263, 116, NULL, 2);   -- shortTitle
+INSERT INTO itemTypeFields VALUES (1263, 1288, NULL, 3);  -- gazetteFlag
+INSERT INTO itemTypeFields VALUES (1263, 90, NULL, 4);    -- abstract
+INSERT INTO itemTypeFields VALUES (1263, 1261, NULL, 5);  -- jurisdiction
+INSERT INTO itemTypeFields VALUES (1263, 1282, NULL, 6);   -- authority [ADDED]
+INSERT INTO itemTypeFields VALUES (1263, 1281, NULL, 7);   -- regulationType [ADDED]
+INSERT INTO itemTypeFields VALUES (1263, 101, NULL, 8);   -- publicLawNumber
+INSERT INTO itemTypeFields VALUES (1263, 36, NULL, 9);    -- code           (for reporter)
+INSERT INTO itemTypeFields VALUES (1263, 55, NULL, 10);    -- codeNumber     (for volume)
+INSERT INTO itemTypeFields VALUES (1263, 10, NULL, 11);    -- pages
+INSERT INTO itemTypeFields VALUES (1263, 100, NULL, 12);   -- dateEnacted
+INSERT INTO itemTypeFields VALUES (1263, 15, NULL, 13);   -- section
+INSERT INTO itemTypeFields VALUES (1263, 8, NULL, 14);    -- publisher       [ADDED]
+INSERT INTO itemTypeFields VALUES (1263, 1268, NULL, 15); -- publicationDate [ADDED]
+INSERT INTO itemTypeFields VALUES (1263, 87, NULL, 16);   -- language
+INSERT INTO itemTypeFields VALUES (1263, 1, NULL, 17);    -- url
+INSERT INTO itemTypeFields VALUES (1263, 27, NULL, 18);   -- accessed
+INSERT INTO itemTypeFields VALUES (1263, 40, NULL, 19);   -- session         Deprecated
+INSERT INTO itemTypeFields VALUES (1263, 42, NULL, 20);   -- history         Deprecated
+INSERT INTO itemTypeFields VALUES (1263, 2, NULL, 21);    -- rights
+INSERT INTO itemTypeFields VALUES (1263, 22, NULL, 22);   -- extra
+
+-- [NEW] classic (derived from manuscript)
+INSERT INTO itemTypeFields VALUES (1264, 110, NULL, 1);  -- title
+INSERT INTO itemTypeFields VALUES (1264, 90, NULL, 2);   -- abstract
+INSERT INTO itemTypeFields VALUES (1264, 4, NULL, 3);    -- volume          [ADDED]
+INSERT INTO itemTypeFields VALUES (1264, 14, NULL, 4);   -- date            
+INSERT INTO itemTypeFields VALUES (1264, 118, NULL, 5);  -- numPages
+INSERT INTO itemTypeFields VALUES (1264, 87, NULL, 6);   -- language
+INSERT INTO itemTypeFields VALUES (1264, 116, NULL, 7);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (1264, 1, NULL, 8);    -- url
+INSERT INTO itemTypeFields VALUES (1264, 27, NULL, 9);   -- accessed
+INSERT INTO itemTypeFields VALUES (1264, 123, NULL, 10); -- archive
+INSERT INTO itemTypeFields VALUES (1264, 19, NULL, 11);  -- archiveLocation
+INSERT INTO itemTypeFields VALUES (1264, 62, NULL, 12);  -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (1264, 18, NULL, 13);  -- callNumber
+INSERT INTO itemTypeFields VALUES (1264, 66, NULL, 14);  -- manuscriptType  Deprecated
+INSERT INTO itemTypeFields VALUES (1264, 7, NULL, 15);   -- place           Deprecated
+INSERT INTO itemTypeFields VALUES (1264, 2, NULL, 16);   -- rights
+INSERT INTO itemTypeFields VALUES (1264, 22, NULL, 17);  -- extra
+
+-- standard [based on document]
+INSERT INTO itemTypeFields VALUES (1265, 110, NULL, 1);  -- title
+INSERT INTO itemTypeFields VALUES (1265, 90, NULL, 2);   -- abstract
+INSERT INTO itemTypeFields VALUES (1265, 60, NULL, 3);   -- number [ADDED]
+INSERT INTO itemTypeFields VALUES (1265, 8, NULL, 4);    -- publisher
+INSERT INTO itemTypeFields VALUES (1265, 81, NULL, 5);   -- version [ADDED]
+INSERT INTO itemTypeFields VALUES (1265, 14, NULL, 6);   -- date
+INSERT INTO itemTypeFields VALUES (1265, 87, NULL, 7);   -- language
+INSERT INTO itemTypeFields VALUES (1265, 116, NULL, 8);  -- shortTitle
+INSERT INTO itemTypeFields VALUES (1265, 1, NULL, 9);    -- url
+INSERT INTO itemTypeFields VALUES (1265, 27, NULL, 10);   -- accessed
+INSERT INTO itemTypeFields VALUES (1265, 123, NULL, 11);  -- archive
+INSERT INTO itemTypeFields VALUES (1265, 19, NULL, 12);  -- archiveLocation
+INSERT INTO itemTypeFields VALUES (1265, 62, NULL, 13);  -- libraryCatalog
+INSERT INTO itemTypeFields VALUES (1265, 18, NULL, 14);  -- callNumber
+INSERT INTO itemTypeFields VALUES (1265, 2, NULL, 15);   -- rights
+INSERT INTO itemTypeFields VALUES (1265, 22, NULL, 16);  -- extra
 
 INSERT INTO baseFieldMappings VALUES (16, 4, 94); -- bill/volume/codeVolume
 INSERT INTO baseFieldMappings VALUES (17, 4, 97); -- case/volume/reporterVolume
 INSERT INTO baseFieldMappings VALUES (7, 8, 89); -- thesis/publisher/university
 INSERT INTO baseFieldMappings VALUES (11, 8, 21); -- film/publisher/distributor
-INSERT INTO baseFieldMappings VALUES (15, 8, 31); -- report/publisher/institution
+-- INSERT INTO baseFieldMappings VALUES (15, 8, 31); -- report/publisher/institution
 INSERT INTO baseFieldMappings VALUES (26, 8, 72); -- audioRecording/publisher/label
 INSERT INTO baseFieldMappings VALUES (28, 8, 76); -- videoRecording/publisher/studio
 INSERT INTO baseFieldMappings VALUES (29, 8, 78); -- tvBroadcast/publisher/network
@@ -944,27 +1206,40 @@ INSERT INTO baseFieldMappings VALUES (17, 10, 98); -- case/pages/firstPage
 INSERT INTO baseFieldMappings VALUES (3, 12, 115); -- bookSection/publicationTitle/bookTitle
 INSERT INTO baseFieldMappings VALUES (33, 12, 114); -- conferencePaper/publicationTitle/proceedingsTitle
 INSERT INTO baseFieldMappings VALUES (13, 12, 91); -- webpage/publicationTitle/websiteTitle
+INSERT INTO baseFieldMappings VALUES (15, 12, 115); -- report/publicationTitle/bookTitle
 INSERT INTO baseFieldMappings VALUES (23, 12, 107); -- blogPost/publicationTitle/blogTitle
 INSERT INTO baseFieldMappings VALUES (25, 12, 104); -- forumPost/publicationTitle/forumTitle
+INSERT INTO baseFieldMappings VALUES (26, 6, 1280); -- audioRecording/edition/release
 INSERT INTO baseFieldMappings VALUES (29, 12, 119); -- tvBroadcast/publicationTitle/programTitle
 INSERT INTO baseFieldMappings VALUES (30, 12, 119); -- radioBroadcast/publicationTitle/programTitle
 INSERT INTO baseFieldMappings VALUES (35, 12, 85); -- encyclopediaEntry/publicationTitle/encyclopediaTitle
 INSERT INTO baseFieldMappings VALUES (36, 12, 86); -- dictionaryEntry/publicationTitle/dictionaryTitle
+INSERT INTO baseFieldMappings VALUES (16, 12, 43); -- bill/publicationTitle/reporter
+INSERT INTO baseFieldMappings VALUES (17, 12, 43); -- case/publicationTitle/reporter
+INSERT INTO baseFieldMappings VALUES (18, 12, 43); -- hearing/publicationTitle/reporter
+INSERT INTO baseFieldMappings VALUES (26, 12, 1273); -- audioRecording/publicationTitle/album
+INSERT INTO baseFieldMappings VALUES (12, 12, 91); -- artwork/publicationTitle/websiteTitle
 INSERT INTO baseFieldMappings VALUES (17, 14, 96); -- case/date/dateDecided
 INSERT INTO baseFieldMappings VALUES (19, 14, 52); -- patent/date/issueDate
 INSERT INTO baseFieldMappings VALUES (20, 14, 100); -- statute/date/dateEnacted
+INSERT INTO baseFieldMappings VALUES (1261, 14, 100); -- gazette/date/dateEnacted
+INSERT INTO baseFieldMappings VALUES (1263, 14, 100); -- regulation/date/dateEnacted
+INSERT INTO baseFieldMappings VALUES (16, 30, 1262); -- bill/seriesNumber/assemblyNumber
 INSERT INTO baseFieldMappings VALUES (15, 60, 92); -- report/number/reportNumber
 INSERT INTO baseFieldMappings VALUES (16, 60, 93); -- bill/number/billNumber
 INSERT INTO baseFieldMappings VALUES (17, 60, 117); -- case/number/docketNumber
 INSERT INTO baseFieldMappings VALUES (18, 60, 99); -- hearing/number/documentNumber
 INSERT INTO baseFieldMappings VALUES (19, 60, 50); -- patent/number/patentNumber
 INSERT INTO baseFieldMappings VALUES (20, 60, 101); -- statute/number/publicLawNumber
+INSERT INTO baseFieldMappings VALUES (1261, 60, 101); -- gazette/number/publicLawNumber
+INSERT INTO baseFieldMappings VALUES (1263, 60, 101); -- regulation/number/publicLawNumber
 INSERT INTO baseFieldMappings VALUES (29, 60, 105); -- tvBroadcast/number/episodeNumber
 INSERT INTO baseFieldMappings VALUES (30, 60, 105); -- radioBroadcast/number/episodeNumber
 INSERT INTO baseFieldMappings VALUES (31, 60, 105); -- podcast/number/episodeNumber
 INSERT INTO baseFieldMappings VALUES (7, 108, 69); -- thesis/type/thesisType
 INSERT INTO baseFieldMappings VALUES (8, 108, 65); -- letter/type/letterType
 INSERT INTO baseFieldMappings VALUES (9, 108, 66); -- manuscript/type/manuscriptType
+INSERT INTO baseFieldMappings VALUES (1264, 108, 66); -- classic/type/manuscriptType
 INSERT INTO baseFieldMappings VALUES (11, 108, 122); -- film/type/genre
 INSERT INTO baseFieldMappings VALUES (13, 108, 70); -- webpage/type/websiteType
 INSERT INTO baseFieldMappings VALUES (15, 108, 32); -- report/type/reportType
@@ -972,6 +1247,9 @@ INSERT INTO baseFieldMappings VALUES (22, 108, 67); -- map/type/mapType
 INSERT INTO baseFieldMappings VALUES (23, 108, 70); -- blogPost/type/websiteType
 INSERT INTO baseFieldMappings VALUES (25, 108, 79); -- forumPost/type/postType
 INSERT INTO baseFieldMappings VALUES (27, 108, 74); -- presentation/type/presentationType
+INSERT INTO baseFieldMappings VALUES (16, 108, 1264); -- bill/type/sessionType
+INSERT INTO baseFieldMappings VALUES (18, 108, 1264); -- hearing/type/sessionType
+INSERT INTO baseFieldMappings VALUES (1263, 108, 1281); -- regulation/type/regulationType
 INSERT INTO baseFieldMappings VALUES (10, 109, 64); -- interview/medium/interviewMedium
 INSERT INTO baseFieldMappings VALUES (11, 109, 63); -- film/medium/videoRecordingFormat
 INSERT INTO baseFieldMappings VALUES (12, 109, 59); -- artwork/medium/artworkMedium
@@ -983,6 +1261,9 @@ INSERT INTO baseFieldMappings VALUES (31, 109, 80); -- podcast/medium/audioFileT
 INSERT INTO baseFieldMappings VALUES (17, 110, 111); -- case/title/caseName
 INSERT INTO baseFieldMappings VALUES (20, 110, 112); -- statute/title/nameOfAct
 INSERT INTO baseFieldMappings VALUES (21, 110, 113); -- email/title/subject
+INSERT INTO baseFieldMappings VALUES (1261, 110, 112); -- gazette/title/nameOfAct
+INSERT INTO baseFieldMappings VALUES (1263, 110, 112); -- regulation/title/nameOfAct
+INSERT INTO baseFieldMappings VALUES (1263, 41, 1282); -- regulation/legislativeBody/regulatoryBody
 
 INSERT INTO creatorTypes VALUES(1, "author");
 INSERT INTO creatorTypes VALUES(2, "contributor");
@@ -1013,15 +1294,18 @@ INSERT INTO creatorTypes VALUES(26, "podcaster");
 INSERT INTO creatorTypes VALUES(27, "reviewedAuthor");
 INSERT INTO creatorTypes VALUES(28, "cosponsor");
 INSERT INTO creatorTypes VALUES(29, "bookAuthor");
+INSERT INTO creatorTypes VALUES(1261, "testimonyBy");
 
 INSERT INTO itemTypeCreatorTypes VALUES(2,1,1);
 INSERT INTO itemTypeCreatorTypes VALUES(2,2,0);
 INSERT INTO itemTypeCreatorTypes VALUES(2,3,0);
 INSERT INTO itemTypeCreatorTypes VALUES(2,4,0);
+INSERT INTO itemTypeCreatorTypes VALUES(2,16,0);
 INSERT INTO itemTypeCreatorTypes VALUES(2,5,0);
 INSERT INTO itemTypeCreatorTypes VALUES(3,1,1);
 INSERT INTO itemTypeCreatorTypes VALUES(3,2,0);
 INSERT INTO itemTypeCreatorTypes VALUES(3,3,0);
+INSERT INTO itemTypeCreatorTypes VALUES(3,16,0);
 INSERT INTO itemTypeCreatorTypes VALUES(3,29,0);
 INSERT INTO itemTypeCreatorTypes VALUES(3,4,0);
 INSERT INTO itemTypeCreatorTypes VALUES(3,5,0);
@@ -1068,11 +1352,14 @@ INSERT INTO itemTypeCreatorTypes VALUES(16,28,0);
 INSERT INTO itemTypeCreatorTypes VALUES(16,2,0);
 INSERT INTO itemTypeCreatorTypes VALUES(17,1,1);
 INSERT INTO itemTypeCreatorTypes VALUES(17,13,0);
+INSERT INTO itemTypeCreatorTypes VALUES(17,23,0); -- commenter [ADDED]
 INSERT INTO itemTypeCreatorTypes VALUES(17,2,0);
-INSERT INTO itemTypeCreatorTypes VALUES(18,2,1);
+INSERT INTO itemTypeCreatorTypes VALUES(18,1261,1);
+INSERT INTO itemTypeCreatorTypes VALUES(18,2,0);
 INSERT INTO itemTypeCreatorTypes VALUES(19,14,1);
-INSERT INTO itemTypeCreatorTypes VALUES(19,15,0);
 INSERT INTO itemTypeCreatorTypes VALUES(19,2,0);
+INSERT INTO itemTypeCreatorTypes VALUES(19,15,0);
+INSERT INTO itemTypeCreatorTypes VALUES(19,16,0);
 INSERT INTO itemTypeCreatorTypes VALUES(20,1,1);
 INSERT INTO itemTypeCreatorTypes VALUES(20,2,0);
 INSERT INTO itemTypeCreatorTypes VALUES(21,1,1);
@@ -1137,7 +1424,29 @@ INSERT INTO itemTypeCreatorTypes VALUES(36,2,0);
 INSERT INTO itemTypeCreatorTypes VALUES(36,3,0);
 INSERT INTO itemTypeCreatorTypes VALUES(36,4,0);
 INSERT INTO itemTypeCreatorTypes VALUES(36,5,0);
-
+-- For spoofed types, clone creator assignments from master type
+-- gazette (statute)
+INSERT INTO itemTypeCreatorTypes VALUES(1261,1,1);
+INSERT INTO itemTypeCreatorTypes VALUES(1261,2,0);
+-- treaty (document)
+INSERT INTO itemTypeCreatorTypes VALUES(1262,1,1);
+INSERT INTO itemTypeCreatorTypes VALUES(1262,2,0);
+INSERT INTO itemTypeCreatorTypes VALUES(1262,3,0);
+INSERT INTO itemTypeCreatorTypes VALUES(1262,4,0);
+INSERT INTO itemTypeCreatorTypes VALUES(1262,27,0);
+-- regulation (statute)
+INSERT INTO itemTypeCreatorTypes VALUES(1263,1,1);
+INSERT INTO itemTypeCreatorTypes VALUES(1263,2,0);
+-- classic (manuscript)
+INSERT INTO itemTypeCreatorTypes VALUES(1264,1,1);
+INSERT INTO itemTypeCreatorTypes VALUES(1264,2,0);
+INSERT INTO itemTypeCreatorTypes VALUES(1264,4,0);
+-- periodical (document)
+INSERT INTO itemTypeCreatorTypes VALUES(1265,1,1);
+INSERT INTO itemTypeCreatorTypes VALUES(1265,2,0);
+INSERT INTO itemTypeCreatorTypes VALUES(1265,3,0);
+INSERT INTO itemTypeCreatorTypes VALUES(1265,4,0);
+INSERT INTO itemTypeCreatorTypes VALUES(1265,27,0);
 
 INSERT INTO "fileTypes" VALUES(1, 'webpage');
 INSERT INTO "fileTypes" VALUES(2, 'image');
