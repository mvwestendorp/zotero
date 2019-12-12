-- 50
DROP TABLE IF EXISTS jurisVersion;
CREATE TABLE jurisVersion (
    schema TEXT PRIMARY KEY,
    version INT NOT NULL
);

DROP TABLE IF EXISTS jurisdictions;
CREATE TABLE jurisdictions (
	jurisdictionIdx INTEGER PRIMARY KEY,
	jurisdictionID TEXT UNIQUE NOT NULL,
	jurisdictionName TEXT NOT NULL,
    segmentCount INTEGER NOT NULL
);
CREATE INDEX jurisdictions_jurisdictionID ON jurisdictions(jurisdictionID);
CREATE INDEX jurisdictions_jurisdictionName ON jurisdictions(jurisdictionName);
CREATE INDEX jurisdictions_segmentCount ON jurisdictions(segmentCount);

DROP TABLE IF EXISTS courtNames;
CREATE TABLE courtNames (
	courtNameIdx INTEGER PRIMARY KEY,
	courtName TEXT UNIQUE NOT NULL
);
CREATE INDEX courtNames_courtName ON courtNames(courtName);

DROP TABLE IF EXISTS countryCourtLinks;
CREATE TABLE countryCourtLinks (
	countryCourtLinkIdx INTEGER PRIMARY KEY,
	courtNameIdx INTEGER NOT NULL,
	countryIdx INTEGER NOT NULL,
	UNIQUE (countryIdx, courtNameIdx),
	FOREIGN KEY (courtNameIdx) REFERENCES courtNames(courtNameIdx),
	FOREIGN KEY (countryIdx) REFERENCES jurisdictions(jurisdictionIdx) ON DELETE CASCADE
);
CREATE INDEX countryCourtLinks_courtIdx ON countryCourtLinks(countryIdx);

DROP TABLE IF EXISTS courts;
CREATE TABLE courts (
	courtIdx INTEGER PRIMARY KEY,
	courtID TEXT NOT NULL,
	countryCourtLinkIdx INTEGER NOT NULL,
	UNIQUE (courtID, countryCourtLinkIdx),
	FOREIGN KEY (countryCourtLinkIdx) REFERENCES countryCourtLinks(countryCourtLinkIdx) ON DELETE CASCADE
);
CREATE INDEX courts_courtID ON courts(courtID);
CREATE INDEX courts_countryCourtLinkIdx ON courts(countryCourtLinkIdx);

DROP TABLE IF EXISTS courtJurisdictionLinks;
CREATE TABLE courtJurisdictionLinks (
	jurisdictionIdx INTEGER NOT NULL,
	courtIdx INTEGER NOT NULL,
	PRIMARY KEY (jurisdictionIdx, courtIdx),
	FOREIGN KEY (courtIdx) REFERENCES courts(courtIdx),
	FOREIGN KEY (jurisdictionIdx) REFERENCES jurisdictions(jurisdictionIdx) ON DELETE CASCADE
);
