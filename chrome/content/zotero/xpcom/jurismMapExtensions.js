
Zotero.Jurism = {}


Zotero.Jurism.EXTENDED = {
	// For extended types, see below
	// 
	TYPES: {
		"gazette":"statute",
		"regulation":"statute",
		"classic":"manuscript",
		"treaty":"document",
		"standard":"document"
	},

	CREATORS: {
		"patent": ["recipient"],
		"book": ["recipient"],
		"bookSection": ["recipient"],
		"hearing": ["testimonyBy", "translator"],
		"case": ["translator"],
		"statute": ["translator"],
		"bill": ["translator"],
		"gazette": ["translator"],
		"regulation": ["translator"],
		"case": ["commenter"]
	},

	FIELDS: {
		"book": [
			"medium",
			"volumeTitle"
		],
		"bookSection": [
			"volumeTitle"
		],
		"standard": [
			"versionNumber",
			"number",
			"jurisdiction"
		],
		"conferencePaper": [
			"issue",
			"institution"
		],
		"interview": [
			"place"
		],
		"magazineArticle": [
			"place",
			"publisher"
		],
		"newspaperArticle": [
			"jurisdiction",
			"court"
		],
		"journalArticle": [
			"status",
			"jurisdiction"
		],
		"bill": [
			"jurisdiction",
			"resolutionLabel",
			"assemblyNumber",
			"sessionType",
			"archiveLocation",
			"reporter"
		], 
		"hearing": [
			"jurisdiction",
			"assemblyNumber",
			"resolutionLabel",
			"sessionType",
			"archiveLocation",
			"reporter",
			"meetingName",
			"meetingNumber", // Changing from JM chapter-number to new JM issue, styles will need adjustment"volume"
		],
		"artwork": [
			"websiteTitle"
		], 
		"patent": [
			"jurisdiction",
			"publicationNumber",
			"genre"
		], 
		"case": [
			"jurisdiction",
			"place",
			"yearAsVolume",
			"publisher",
			"reign",
			"callNumber",
			"supplementName",
			"issue",
			"archive",
			"archiveLocation",
			"documentName"
		], 
		"statute": [
			"jurisdiction",
			"publisher",
			"reign",
			"regnalYear",
			"gazetteFlag"
		], 
		"audioRecording": [
			"album",
			"opus",
			"publisher",
			"release"
		],
		"podcast": [
			"publisher"
		],
		"videoRecording": [
			"websiteTitle"
		],
		"report": [
			"bookTitle",
			"jurisdiction",
			"status",
			"medium",
			"committee",
			"assemblyNumber",
			"publisher"
		],
		"gazette": [
			"jurisdiction",
			"reign",
			"regnalYear",
			"publisher",
		],
		"regulation": [
			"jurisdiction",
			"publisher",
			"regulatoryBody",
			"regulationType",
			"gazetteFlag"
		],
		"treaty": [
			"reporter",
			"volume",
			"pages",
			"section",
			"versionNumber", // MISSING IN system.sql!"parentTreaty",
			"supplementName"
		],
		"classic": [
			"volume"
		],
		"document": [
			"versionNumber"
		]
	},

	DATES: {
		"conferencePaper": [
			"conferenceDate"
		],
		"newspaperArticle": [
			"newsCaseDate"
		],
		"patent": [
			"priorityDate",
			"publicationDate"
		],
		"case": [
			"publicationDate",
			"filingDate"
		],
		"statute": [
			"publicationDate",
			"originalDate",
			"dateAmended"
		],
		"audioRecording": [
			"originalDate"
		],
		"podcast": [
			"date"
		],
		"gazette": [
			"publicationDate"
		],
		"regulation": [
			"publicationDate"
		],
		"treaty": [
			"openingDate",
			"adoptionDate",
			"signingDate"
		]
	}
}

Zotero.Jurism.CSL = {
	FORCE_FIELD_CONTENT: {
		"tvBroadcast":{
			"genre":"television broadcast"
		},
		"radioBroadcast":{
			"genre":"radio broadcast"
		},
		"instantMessage":{
			"genre":"instant message"
		},
		"email":{
			"genre":"email"
		},
		"podcast":{
			"genre":"podcast"
		}
	},

	FORCE_REMAP: {
		"periodical":{
			"title":"container-title"
		}
	}
}

Zotero.Jurism.PATCH = {

	TYPES: {
		add: Zotero.Jurism.EXTENDED.TYPES,
		extend: {},
		remove: {},
		override: {
			hearing: "hearing",
			videoRecording: "video"
		}
	},
	
	CREATORS: {
		add: {
			artist: "author",
			testimonyBy: "author",
			contributor: "contributor",
			commenter: "commenter"
		},
		extend: {},
		remove: {},
		override: {}
	},
	
	FIELDS: {
		add: {
			committee: ["committee"],
			"gazette-flag": ["gazetteFlag"],
			"document-name": ["documentName"],
			"volume-title": ["volumeTitle"],
			jurisdiction: ["jurisdiction"],
			"publication-number": ["publicationNumber"]
		},
		extend: {
			"container-title": ["album", "websiteTitle", "bookTitle"],
			"collection-title": ["parentTreaty"],
			"collection-number": ["assemblyNumber", "regnalYear", "yearAsVolume"],
			authority: ["institution", "regulatoryBody"],
			section: ["opus"],
			genre: ["genre", "reign", "supplementName", "sessionType", "regulationType"],
			"issue": ["meetingNumber"],
			status: ["status"],
			edition: ["release"],
			event: ["resolutionLabel"]
		},
		remove: {
			"section": ["committee"] // ?? What's going on with this in the hearing type?
		},
		override: {}
	},
	
	DATES: {
		add: {
			"original-date": ["newsCaseDate", "priorityDate", "originalDate", "adoptionDate"],
			"available-date": ["openingDate"],
			"event-date": ["signingDate", "conferenceDate", "dateAmended"],
			"publication-date": ["publicationDate"]
		},
		extend: {},
		remove: {},
		override: {
			issued: ["date"],
			accessed: ["accessDate"],
			submitted: ["filingDate"]
		}
	}
}

Zotero.Jurism.MapTools = {
	getMap: function(key) {
		return Zotero.Jurism.CSL[key];
	},
	patchMap: function(key, data) {
		var patchData = Zotero.Jurism.PATCH[key];
		for (var k in patchData.override) {
			if (!data[k]) {
				throw "Expected field " + k + " does not exist to be overridden in " + key;
			}
			data[k] = patchData.override[k];
		}
		for (var k in patchData.add) {
			if (data[k]) {
				throw "Field " + k + " already exists in " + key;
			}
			data[k] = patchData.add[k];
		}
		for (var k in patchData.extend) {
			if (!data[k]) {
				throw "Expected field " + k + " does not exist to be extended in " + key;
			}
			for (var i=0,ilen=patchData.extend[k].length; i<ilen; i++) {
				data[k].push(patchData.extend[k][i]);
			}
		}
		for (var k in patchData.remove) {
			if (!data[k]) {
				throw "Expected field " + k + " does not exist for removals to be applied in " + key;
			}
			for (var i=0,ilen=patchData.remove[k].length; i<ilen; i++) {
				var removeCSLvar = patchData.remove[k][i];
				for (var j=0,jlen=data[k].length; j<jlen; j++) {
					if (data[k][j] === removeCSLvar) {
						data[k] = data[k].slice(0, j).concat(data[k].slice(j+1));
					}
				}
			}
		}
	},

	// These will have to be run on Utilities, and install the maps there.
	DECODE: 1,
	ENCODE: 2,

	// We need first build the encode map, to establish which
	// zField is the correct mapping for the cField within the type.

	// Then when to build the decode map, we just reverse the cField and zField
	// mappings in the ecnode map.

	// Then everything just works.
	
	getFieldsForType: function(type) {
		if(type === "attachment" || type === "note") return [];
		var fields = Zotero.ItemFields.getItemTypeFields(Zotero.ItemTypes.getID(type));
		var cleanFields = new Array();
		for(var i=0; i<fields.length; i++) {
			cleanFields.push(Zotero.ItemFields.getName(fields[i]));
		}
		return cleanFields;
	},

	getEncodeField: function(zField, cslMap) {
		for (var cField in cslMap) {
			if ("string" === typeof cslMap[cField]) {
				if (cslMap[cField] === zField) {
					return cField;
				}
			} else {
				if (cField === "shortTitle") {
					continue;
				}
				for (var i=0,ilen=cslMap[cField].length; i<ilen; i++) {
					var val = cslMap[cField][i];
					if (val === zField) {
						return cField;
					}
				}
			}
		}
	},
	
	makeEncodeMap: function(extName, cslMap) {
		var ret = {};
		var extMap = Zotero.Jurism.EXTENDED[extName];
		for (var itemType in extMap) {
			ret[itemType] = {};
			var me = this;
			extMap[itemType].forEach(function(zField){
				ret[itemType][zField] = me.getEncodeField(zField, cslMap);
			});
		}
		return ret;
	},
	
	makeDecodeMap: function(extName, cslMap) {
		var encodeMap = this.makeEncodeMap(extName, cslMap);
		var ret = JSON.parse(JSON.stringify(encodeMap));
		for (var itemType in encodeMap) {
			ret[itemType] = {};
			for (var zField in encodeMap[itemType]) {
				ret[itemType][encodeMap[itemType][zField]] = zField;
			}
		}
		return ret;
	},

	makeReverseMap: function(extName, cslMap) {
		var _map = null;
		var me = this;
		return function(itemType, zField) {
			if (!_map) {
				if (!Zotero.ItemTypes) {
					throw "Error: Zotero.ItemTypes is not yet loaded";
				}
				var _map = {};
				var allTypes = Zotero.ItemTypes.getSecondaryTypes().map(o => o.name);
				for (var i=0,ilen=allTypes.length; i<ilen; i++) {
					var newItemType = allTypes[i];
					if (!Zotero.Utilities.CSL_TYPE_MAPPINGS[newItemType]) {
						continue;
					}
					_map[newItemType] = {};
					var allFields;
					if (extName === "CREATORS") {
						allFields = Zotero.Utilities.getCreatorsForType(newItemType);
					} else {
						allFields = me.getFieldsForType(newItemType);
					}
					for (var j=0,jlen=allFields.length; j<jlen; j++) {
						var newZField = allFields[j];
						var cField = me.getEncodeField(newZField, cslMap);
						if (cField) {
							_map[newItemType][newZField] = cField;
						}
					}
				}
			}
			return _map[itemType] && _map[itemType][zField];
		}
	}
}

if (typeof process === 'object' && process + '' === '[object process]'){
    module.exports = Zotero.Jurism.MapTools;
}
