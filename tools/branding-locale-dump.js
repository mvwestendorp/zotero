/*
 * Dump locale lines that include Zotero to standard output
 */

var fs = require("fs");
var path = require("path");
var query = require("prompt-confirm");

const pth = path.join(__dirname, "..", "chrome", "locale", "en-US", "zotero");

var fns = fs.readdirSync(pth);

function showLines(mode, fn, txt) {
	var lines = txt.split("\n");
	for (var i=0,ilen=lines.length; i<ilen; i++) {
		var line = lines[i];
		if (mode === "dtd") {
			var m = line.match(/<\!ENTITY\s+(.*?)\s+\"(.*)\"\s*>/);
			if (m) {
				var key = m[1];
				var str = m[2]
				if (str.indexOf("Zotero") === -1) continue;
				console.log(key+"@"+fn+"\n    "+str);
			}
		} else if (mode === "properties") {
			var m = line.match(/^(.*?)\s+=\s+(.*)/);
			if (m) {
				var key = m[1];
				var str = m[2];
				if (str.indexOf("Zotero") === -1) continue;
				console.log(key+"@"+fn+"\n    "+str);
			}
		}
	}
}

for (var fn of fns) {
	var mode = null;
	if (fn.slice(-4) === ".dtd") {
		mode = "dtd";
	} else if (fn.slice(-11) === ".properties") {
		mode = "properties";
	} else {
		continue;
	}
	var txt = fs.readFileSync(path.join(pth, fn)).toString();
	showLines(mode, fn, txt);
}
