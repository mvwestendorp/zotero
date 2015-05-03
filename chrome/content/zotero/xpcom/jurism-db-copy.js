/*
 * Copy an existing zotero.sqlite file, if any,
 * and its associate journal, if any, to jurism.sqlite
 * and jurism.sqlite-journal respectively.
 */

function copyDatabaseFiles() {
	Zotero.Prefs.init();
    var oldFile, newFile, ext, extensions = ["sqlite", "sqlite-journal"];
    for (var i=0,ilen=extensions.length;i<ilen;i++) {
        ext = extensions[i];
        oldFile = Zotero.getZoteroDirectory();
        oldFile.append("zotero." + ext);
        newFile = Zotero.getZoteroDirectory();
        newFile.append("jurism." + ext);
        if (oldFile.exists() && !newFile.exists()) {
            oldFile.copyTo(null, "jurism." + ext);
        }
    }
}
copyDatabaseFiles();
