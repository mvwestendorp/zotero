-- 2
DROP TABLE IF EXISTS jurisdictions;
CREATE TABLE jurisdictions (
    jurisdictionIdx INTEGER PRIMARY KEY,
	jurisdictionID TEXT NOT NULL,
	jurisdictionName TEXT NOT NULL
);
CREATE INDEX jurisdictions_jurisdictionID ON jurisdictions(jurisdictionID);
CREATE INDEX jurisdictions_jurisdictionName ON jurisdictions(jurisdictionName);

DROP TABLE IF EXISTS courtJurisdictions;
CREATE TABLE courtJurisdictions (
    courtJurisdictionIdx PRIMARY KEY,
	jurisdictionIdx INTEGER NOT NULL,
	courtIdx INTEGER NOT NULL
);
CREATE INDEX courtJurisdictions_jurisdictionIdx ON courtJurisdictions(jurisdictionIdx);
CREATE INDEX courtJurisdictions_courtIdx ON courtJurisdictions(courtIdx);

DROP TABLE IF EXISTS courts;
CREATE TABLE courts (
    courtIdx INTEGER PRIMARY KEY,
	courtID TEXT NOT NULL,
	courtName TEXT NOT NULL
);
CREATE INDEX courts_courtID ON courts(courtID);
CREATE INDEX courts_courtName ON courts(courtName);

