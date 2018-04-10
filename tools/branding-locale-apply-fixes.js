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

function scanReplace(count, buf, str, replacements, key, fn, locale) {
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
	for (var i=deletes.length-1;i>-1;i--) {
		replacements = replacements.slice(0, i).concat(replacements.slice(i+1));
	}
	return {
		count: count+1,
		replacements: replacements,
		str: buf,
		buf: buf
	}
}

function replaceThings(locale, fn, key, str, replacements) {
	var buf = "";
	var offset = 0;
	var str = str.replace("forums.zotero.hu", "forums.zotero.org").replace("forums.zoter.org", "forums.zotero.org");
	for (var i=0, ilen= 3; i<ilen; i++) {
		var {count, str, replacements, buf} = scanReplace(i, buf, str, replacements, key, fn, locale);
	}
	buf += str;
	return buf;
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
					lines[i] = "<!ENTITY " + key + " \"" + str + "\">"
				} else {
					// Replace Zotero with Juris-M everywhere
					lines[i] = lines[i].replace(/Zotero/g, "Juris-M");
				}
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
					lines[i] = key + " = " + str;
				} else {
					lines[i] = lines[i].replace(/Zotero/g, "Juris-M");
				}
			}
		}
	}
	return lines.join("\n");
}


processLocales();
