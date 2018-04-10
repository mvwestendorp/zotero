/*
 * Reprocess dump from branding-locale-dump.js, assuming replacements
 * appended to key line as ::Zotero>Juris-M,forum>mailing list
 * Replacements are one-to-one, applied sequentially.
 *
 * Script is a quick one-off. Note weird filename assumption.
 *
 * Output should be written to the ./tools directory,
 * as file branding-locales-replacements.json
 */
var fs = require("fs");
var path = require("path");

var txt = fs.readFileSync("BRANDO.txt").toString();

var lines = txt.split("\n");

var obj = {};

for (var line of lines) {
	if (line.match(/^\s+/)) continue;
	var m = line.match(/^(.*)?@(.*)?::(.*)/)
	if (m) {
		var key = m[1];
		var file = m[2];
		var str = m[3];
	} else {
		continue;
	}
	if (!obj[file]) {
		obj[file] = {};
	}
	if (!obj[file][key]) {
		obj[file][key] = [];
	}
	var parts = str.split(",");
	for (var part of parts) {
		var pos = part.indexOf(">");
		obj[file][key].push({
			orig: part.slice(0,pos),
			repl: part.slice(pos+1)
		});
	}
}

console.log(JSON.stringify(obj, null, 2));

