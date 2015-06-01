diff --git a/resource/schema/userdata.sql b/resource/schema/userdata.sql
index c73bc88..56a380a 100644
--- a/resource/schema/userdata.sql
+++ b/resource/schema/userdata.sql
@@ -1,4 +1,4 @@
--- 78
+-- 10002
 
 -- Copyright (c) 2009 Center for History and New Media
 --                    George Mason University, Fairfax, Virginia, USA
@@ -29,6 +29,8 @@ CREATE TABLE version (
     version INT NOT NULL
 );
 CREATE INDEX schema ON version(schema);
+-- Prevents issuance of upgrade prompt in sync.js, q.v.
+INSERT INTO version VALUES('fulltext_upgrade', 1);
 
 -- Settings that have to be tied to the local database rather than the profile directory
 CREATE TABLE settings (
@@ -66,6 +68,7 @@ CREATE TABLE itemDataValues (
     valueID INTEGER PRIMARY KEY,
     value UNIQUE
 );
+CREATE INDEX itemDataValues_value ON itemDataValues(value);
 
 -- Type-specific data for individual items
 CREATE TABLE itemData (
@@ -153,6 +156,7 @@ CREATE TABLE creators (
 );
 CREATE INDEX creators_creatorDataID ON creators(creatorDataID);
 
+
 -- Unique creator data, which can be associated with more than one creator
 CREATE TABLE creatorData (
     creatorDataID INTEGER PRIMARY KEY,
@@ -401,4 +405,5 @@ CREATE TABLE translatorCache (
 	translatorJSON TEXT,
 	code TEXT,
 	lastModifiedTime INT
-);
\ No newline at end of file
+);
+
