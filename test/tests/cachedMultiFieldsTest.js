describe("Zotero.CachedMultiFields", function() {
	describe("#isMultiFieldName()", function() {
		var isMultiFieldName = Zotero.CachedMultiFields.isMultiFieldName.bind(Zotero.CachedMultiFields);
		it("should return true on a multilingual field name", function() {
			assert.isTrue(isMultiFieldName('title'));
		});
		it("should return false on a non-multilingual field name", function() {
			assert.isFalse(isMultiFieldName('url'));
		});
		it("should return false on an invalid field name (without error)", function() {
			assert.isFalse(isMultiFieldName('tumbleweek'));
		});
		it("should return false on null (without error)", function() {
			assert.isFalse(isMultiFieldName(null));
		});
		it("should return false on numeric value (without error)", function() {
			assert.isFalse(isMultiFieldName(110));
		});
	});
	describe("#isMultiFieldID()", function() {
		var isMultiFieldID = Zotero.CachedMultiFields.isMultiFieldID.bind(Zotero.CachedMultiFields);
		var titleID = Zotero.ItemFields.getID("title");
		it("should return true on a multilingual field ID of number type", function() {
			assert.isTrue(isMultiFieldID(parseInt(titleID, 10)));
		});
		it("should return true on a multilingual field ID of string type", function() {
			assert.isTrue(isMultiFieldID("" + titleID));
		});
		var urlID = Zotero.ItemFields.getID("url");
		it("should return false on a non-multilingual field ID of number type", function() {
			assert.isFalse(isMultiFieldID(parseInt(urlID, 10)));
		});
		it("should return false on a non-multilingual field ID of string type", function() {
			assert.isFalse(isMultiFieldID("" + urlID));
		});
		it("should return false on null", function() {
			assert.isFalse(isMultiFieldID(null));
		});
	});
});
