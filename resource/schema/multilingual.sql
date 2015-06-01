-- 3

CREATE TABLE zlsTags (
	tag TEXT PRIMARY KEY,
	nickname TEXT,
	parent TEXT
);
CREATE INDEX zlsTags_nickname ON zlsTags(nickname);
CREATE INDEX zlsTags_parent ON zlsTags(parent);

CREATE TABLE zlsPreferences (
	profile TEXT NOT NULL,
	param TEXT NOT NULL,
	tag TEXT NOT NULL,
	PRIMARY KEY (profile, param, tag),
    FOREIGN KEY (tag) REFERENCES zlsTags(tag) ON DELETE CASCADE
);
CREATE INDEX zlsPreferences_param ON zlsPreferences(param, profile);

CREATE TABLE itemCreatorsMain (
    itemID INT,
    creatorID INT NOT NULL,
    creatorTypeID INT NOT NULL DEFAULT 1,
    orderIndex INT DEFAULT 0,
	languageTag TEXT,
	PRIMARY KEY (itemID, creatorID, creatorTypeID, orderIndex),
    UNIQUE (itemID, orderIndex),
    FOREIGN KEY (itemID) REFERENCES items(itemID) ON DELETE CASCADE,
    FOREIGN KEY (creatorID) REFERENCES creators(creatorID) ON DELETE CASCADE,
    FOREIGN KEY (creatorTypeID) REFERENCES creatorTypes(creatorTypeID)
);
CREATE INDEX itemCreatorsMain_creatorTypeID ON itemCreatorsMain(creatorTypeID);

CREATE TABLE itemCreatorsAlt (
    itemID INT,
    creatorID INT,
    creatorTypeID INT DEFAULT 1,
    orderIndex INT DEFAULT 0,
	languageTag TEXT,
    PRIMARY KEY (itemID, creatorID, creatorTypeID, orderIndex, languageTag),
    UNIQUE (itemID, orderIndex, languageTag),
    FOREIGN KEY (itemID) REFERENCES items(itemID) ON DELETE CASCADE,
    FOREIGN KEY (creatorID) REFERENCES creators(creatorID) ON DELETE CASCADE,
    FOREIGN KEY (creatorTypeID) REFERENCES creatorTypes(creatorTypeID)
);
CREATE INDEX itemCreatorsAlt_creatorTypeID ON itemCreatorsAlt(creatorTypeID);

CREATE TABLE itemDataMain (
    itemID INTEGER,
    fieldID INTEGER,
    languageTag TEXT,
	PRIMARY KEY (itemID, fieldID),
    FOREIGN KEY (itemID) REFERENCES items(itemID) ON DELETE CASCADE,
    FOREIGN KEY (fieldID) REFERENCES fieldsCombined(fieldID)
);
CREATE INDEX itemDataMain_fieldID ON itemDataMain(fieldID);

CREATE TABLE itemDataAlt (
    itemID INTEGER,
    fieldID INTEGER,
    languageTag TEXT,
    valueID INTEGER,
	PRIMARY KEY (itemID, fieldID, languageTag),
    FOREIGN KEY (itemID) REFERENCES items(itemID) ON DELETE CASCADE,
    FOREIGN KEY (fieldID) REFERENCES fieldsCombined(fieldID),
    FOREIGN KEY (valueID) REFERENCES itemDataValues(valueID)
);
CREATE INDEX itemDataAlt_fieldID ON itemDataAlt(fieldID);
