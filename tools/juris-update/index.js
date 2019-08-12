const getopts = require("getopts");
const path = require("path");
const dbToCompact = require("./lib/dbToCompact").dbToCompact;
const compactToDescriptive = require("./lib/compactToDescriptive").compactToDescriptive;

const handleError = require("./lib/errors").handleError;

/*
 * Options
 */

const optParams = {
    alias: {
		f: "from",
		t: "to",
		a: "all",
		j: "jurisdiction",
        h: "help"
    },
    string: ["j", "f", "t"],
    boolean: ["h", "a"],
    unknown: option => {
        throw Error("Unknown option \"" +option + "\"");
    }
};
const usage = "Usage: " + path.basename(process.argv[1])
      + "\nUsage: jmconv <options>\n"
      + "    -f, --from\n"
      + "       Data format to convert from. Valid values are:\n"
	  + "       - jurism-db (converts to compact)\n"
	  + "       - compact (converts to descriptive)\n"
	  + "       - descriptive (converts to compact)\n"
      + "    -a, --all\n"
      + "       Perform requested operation on all jurisdictions.\n"
      + "    -j <jurisdictionID>, --jurisdiction=<jurisdictionID>\n"
      + "       Perform requested operation on the specified jurisdiction.\n";

const opts = getopts(process.argv.slice(2), optParams);

if (opts.h) {
	console.log(usage);
	process.exit();
}

if (!opts.f) {
	var e = new Error("The -f option is required");
	handleError(e);
}

var fromToMap = {
	"jurism-db": "compact",
	"compact": "descriptive",
	"descriptive": "compact"
}

if (!fromToMap[opts.f]) {
	var e = new Error("Argument to option -f must be one of \"jurism-db\", \"compact\" or \"descriptivew\"");
	handleError(e);
}

if (!opts.a && !opts.j) {
	var e = new Error("One of -a or -j is required.");
	handleError(e);
}

if (opts.a && opts.j) {
	var e = new Error("Options -a and -j are mutually exclusive.");
	handleError(e);
}

/*
 * Run
 */

console.log("Converting from \"" + opts.f + "\" to \"" + fromToMap[opts.f] + "\"");

if (opts.f === "jurism-db") {
	dbToCompact(opts).catch(err => handleError(err));
} else if (opts.f === "compact") {
	compactToDescriptive(opts).catch(err => handleError(err));
}

