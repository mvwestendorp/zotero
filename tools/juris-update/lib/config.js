var fs = require("fs");
var path = require("path");
var os = require("os");

var handleError = require("./errors").handleError;

var configFile = path.join(os.homedir(), ".jurisUpdate");

function getConfig() {
	var config;
	if (fs.existsSync(configFile)) {
		config = JSON.parse(fs.readFileSync(configFile).toString());
	} else {
		config = {
			path: {
				repoDir: null,
				dataDir: null
				jurisAbbrevsDir: null,
				configFile: configFile
			}
		}
		fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
	}

	if (!config.path.dataDir) {
		var e = new Error("path.dataDir is undefined in " + configFile);
		handleError(e);
	}

	if (!config.path.repoDir) {
		var e = new Error("path.repoDir is undefined in " + configFile);
		handleError(e);
	}
	return config;
}

module.exports = {
	getConfig: getConfig
}
