Zotero.Multi = new function() {

	    var _multiBaseFields = ['title', 'shortTitle','publicationTitle', 'series', 'seriesTitle', 'seriesText','publisher', 'reporter', 'court','place','edition','archive','archiveLocation','committee','type','legislativeBody','resolutionLabel','supplementName','institution','jurisdiction'];
    
    var _multiFieldIDs;
    var _multiFieldNames;

    this.init = Zotero.Promise.coroutine(function* () {

        _multiFieldIDs = {};
        _multiFieldNames = {};

        // Multi fieldIDs
	    var sql = "SELECT CASE WHEN B.fieldID IS NULL "
            +   "THEN F.fieldID "
            +   "ELSE B.fieldID "
            + "END AS fieldID "
            + "FROM fields F "
            + "LEFT JOIN baseFieldMappings B USING(fieldID) " +
		    "WHERE F.fieldName in ('" + _multiBaseFields.join("','") + "')";
	    var colVals = yield Zotero.DB.columnQueryAsync(sql);

        for (let i=0,ilen=colVals.length;i<ilen;i+=1) {
		    _multiFieldIDs[colVals[i]] = true;
	    }
        
        // Multi fieldNames
	    var sql = "SELECT fieldName from fields " +
		    "WHERE fieldID in (" + [colVals[i] for (i in colVals)].join(",") + ")";
	    var colVals = yield Zotero.DB.columnQueryAsync(sql);

        for (let i=0,ilen=colVals.length;i<ilen;i+=1) {
            _multiFieldNames[colVals[i]] = true;
        }
    });

    this.isMultiFieldID = function(fieldID) {
		if (!_multiFieldIDs) {
			throw new Zotero.Exception.UnloadedDataException("Multi field ID data not yet loaded");
		}
        return !!_multiFieldIDs[fieldID];
    }
    
    this.isMultiFieldName = function(fieldName) {
		if (!_multiFieldNames) {
			throw new Zotero.Exception.UnloadedDataException("Multi field name data not yet loaded");
		}
        return !!_multiFieldNames[fieldName];
    }
    
}
