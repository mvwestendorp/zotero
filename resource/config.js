var ZOTERO_CONFIG = {
	GUID: 'juris-m@juris-m.github.io',
	ID: 'jurism',
	CLIENT_NAME: 'Juris-M',
	DOMAIN_NAME: 'zotero.org',
	DOMAIN_NAME_JURISM: 'juris-m.github.io',
	REPOSITORY_URL: 'https://our.law.nagoya-u.ac.jp/updater/',
	REPOSITORY_CHECK_INTERVAL: 86400, // 24 hours
	REPOSITORY_RETRY_INTERVAL: 3600, // 1 hour
	BASE_URI: 'http://zotero.org/',
	WWW_BASE_URL: 'https://www.zotero.org/',
	PROXY_AUTH_URL: 'https://zoteroproxycheck.s3.amazonaws.com/test',
	API_URL: 'https://api.zotero.org/',
	STREAMING_URL: 'wss://stream.zotero.org/',
	SERVICES_URL: 'https://services.zotero.org/',
	API_VERSION: 3,
	CONNECTOR_MIN_VERSION: '5.0.59.1', // show upgrade prompt for requests from below this version
	PREF_BRANCH: 'extensions.zotero.',
	BOOKMARKLET_ORIGIN: 'https://www.zotero.org',
	BOOKMARKLET_URL: 'https://www.zotero.org/bookmarklet/',
	START_URL: "https://juris-m.github.io/downloads/#start",
	QUICK_START_URL: "https://www.zotero.org/support/quick_start_guide",
	PDF_TOOLS_URL: "https://www.zotero.org/download/xpdf/",
	SUPPORT_URL: "https://juris-m.github.io/support/",
	TROUBLESHOOTING_URL: "https://juris-m.github.io/support/",
	FEEDBACK_URL: "https://juris-m.github.io/support/",
	CONNECTORS_URL: "https://juris-m.github.io/downloads/"
};

if (typeof process === 'object' && process + '' === '[object process]'){
	module.exports = ZOTERO_CONFIG;
} else {
	var EXPORTED_SYMBOLS = ["ZOTERO_CONFIG"];
}