const getopts = require("getopts");
const path = require("path");
const dbToCompact = require("./lib/dbToCompact").dbToCompact

const handleError = require("./lib/errors").handleError;

/*
 * Options
 */

const optParams = {
    alias: {
		D: "db-to-compact-json",
		a: "all",
		j: "jurisdiction",
        h: "help"
    },
    string: ["j"],
    boolean: ["h", "D", "a"],
    unknown: option => {
        throw Error("Unknown option \"" +option + "\"");
    }
};
const usage = "Usage: " + path.basename(process.argv[1])
      + "\nUsage: jmconv <options>\n"
      + "    -D, --db-to-compact-json\n"
      + "       Write one or more jurisdictions from Jurism database to compact JSON source files.\n"
      + "    -a, --all\n"
      + "       Perform requested operation on all jurisdictions.\n"
      + "    -j <jurisdictionID>, --jurisdiction=<jurisdictionID>\n"
      + "       Perform requested operation on the specified jurisdiction.\n";

const opts = getopts(process.argv.slice(2), optParams);

if (opts.h) {
	console.log(usage);
	process.exit();
}

if (!opts.D) {
	var e = new Error("One of -D is required");
	handleError(e);
}

if (opts.D && !opts.a && !opts.j) {
	var e = new Error("With the -D option, one of -a or -j is required.");
	handleError(e);
}

/*
 * Run
 */
if (opts.D) {
	dbToCompact(opts).catch(err => handleError(err));
}
