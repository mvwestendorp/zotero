var fs = require("fs");
var path = require("path");
var query = require("prompt-confirm");

const mapper = JSON.parse(fs.readFileSync(path.join(__dirname, "branding-locale-replacements.json")));


function processLocales() {
    var pth = path.join(__dirname, "..", "chrome", "locale");
	var locales = fs.readdirSync(pth);
	for (var locale of locales) {
		processLocale(locale);
	}

}

function processLocale(locale) {
	var pth = path.join(__dirname, "..", "chrome", "locale", locale, "zotero");
	var fns = fs.readdirSync(pth);
	for (var fn of fns) {
		if (fn.slice(0, 4) === "new-") continue;
		var mode = null;
		if (fn.slice(-4) === ".dtd") {
			mode = "dtd";
		} else if (fn.slice(-11) === ".properties") {
			mode = "properties";
		} else {
			continue;
		}
		//console.log("FILE: " + fn)
		var txt = fs.readFileSync(path.join(pth, fn)).toString();
		txt = processFile(locale, mode, fn, txt);
		fs.writeFileSync(path.join(pth, fn), txt);
	}
}

function scanReplace(count, str, replacements, key, fn, locale) {
	if (replacements.length === 0) return {
		replacements: replacements,
		str: str
	};
	var buf = "";
	var deletes = [];
	for (var i=0,ilen=replacements.length;i<ilen;i++) {
		var info = replacements[i];
		// Find start pos of each repl, incrementing offset each time
		offset = str.indexOf(info.orig);
		if (offset === -1) {
			if (count === 2) {
				console.log("WARNING[1]: string \"" + info.orig + "\" not found on key " + key + " in file " + fn + " of " + locale);
			}
			continue;
		}
		deletes.push(i);
		buf += str.slice(0, offset);
		buf += info.repl;
		str = str.slice(offset);
		var rex = new RegExp("^(" + info.orig + "(?:|[a-z]|[a-z][a-z]|[a-z][a-z][a-z]))(?:[^a-z].*|$)")
		var m = str.match(rex);
		if (m) {
			str = str.slice(m[1].length)
		}
	}
	if (str.length) {
		buf += str;
	}
	for (var pos=deletes.length-1;pos>-1;pos--) {
	    var i = deletes[pos];
		replacements = replacements.slice(0, i).concat(replacements.slice(i+1));
	}
	// Aha! On last run, replacements may well have length 0.
	return {
		replacements: replacements,
		str: buf
	}
}

function replaceThings(locale, fn, key, str, replacements) {
	var str = str.replace("forums.zotero.hu", "forums.zotero.org").replace("forums.zoter.org", "forums.zotero.org");
	for (var count=0, countlen= 2; count<countlen; count++) {
		var {replacements, str} = scanReplace(count, str, replacements, key, fn, locale);
	}
	return str;
}

function processFile(locale, mode, fn, txt) {
	var lines = txt.split("\n");
	for (var i=0,ilen=lines.length; i<ilen; i++) {
		var line = lines[i];
		if (mode === "dtd") {
			var m = line.match(/<\!ENTITY\s+(.*?)\s+\"(.*)\"\s*>/);
			if (m) {
				var key = m[1];
				var str = m[2];
				if (str.indexOf("Zotero") === -1) continue;
				if (mapper[fn][key]) {
					// Apply replacements
					str = replaceThings(locale, fn, key, str, mapper[fn][key]);
				} else {
					// Replace Zotero with Juris-M everywhere
					str = str.replace(/Zotero/g, "Juris-M");
				}
				lines[i] = "<!ENTITY " + key + " \"" + str + "\">"
			}
		} else if (mode === "properties") {
			var m = line.match(/^(.*?)\s+=\s+(.*)/);
			if (m) {
				var key = m[1];
				var str = m[2];
				if (str.indexOf("Zotero") === -1) continue;
				if (mapper[fn][key]) {
					// Apply replacements
					str = replaceThings(locale, fn, key, str, mapper[fn][key]);
				} else {
					str = str.replace(/Zotero/g, "Juris-M");
				}
				lines[i] = key + " = " + str;
			}
		}
	}
	return lines.join("\n");
}


processLocales();
