diff --git a/resource/schema/triggers.sql b/resource/schema/triggers.sql
index 556d1a8..63e8102 100644
--- a/resource/schema/triggers.sql
+++ b/resource/schema/triggers.sql
@@ -23,7 +23,7 @@
 -- Triggers to validate date field
 DROP TRIGGER IF EXISTS insert_date_field;
 CREATE TRIGGER insert_date_field BEFORE INSERT ON itemData
-  FOR EACH ROW WHEN NEW.fieldID IN (14, 27, 52, 96, 100)
+  FOR EACH ROW WHEN NEW.fieldID IN (14, 27, 52, 96, 100, 121, 1265, 1266, 1268, 1272, 1277, 1278, 1279)
   BEGIN
     SELECT CASE
         CAST(SUBSTR((SELECT value FROM itemDataValues WHERE valueID=NEW.valueID), 1, 4) AS INT) BETWEEN 0 AND 9999 AND
@@ -36,7 +36,7 @@ CREATE TRIGGER insert_date_field BEFORE INSERT ON itemData
 
 DROP TRIGGER IF EXISTS update_date_field;
 CREATE TRIGGER update_date_field BEFORE UPDATE ON itemData
-  FOR EACH ROW WHEN NEW.fieldID IN (14, 27, 52, 96, 100)
+  FOR EACH ROW WHEN NEW.fieldID IN (14, 27, 52, 96, 100, 121, 1265, 1266, 1268, 1272, 1277, 1278, 1279)
   BEGIN
     SELECT CASE
         CAST(SUBSTR((SELECT value FROM itemDataValues WHERE valueID=NEW.valueID), 1, 4) AS INT) BETWEEN 0 AND 9999 AND
