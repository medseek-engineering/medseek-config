module.exports = parseJsonValues;

/**
 * Recursively checks all values in the config object and,
 * if the value is a string and appears to be JSON, tries
 * to parse it to a JavaScript object and updates the config.
 * This is so we can specify arrays or entire sections as env vars.
 * @param {object} config A config object.
 */
function parseJsonValues(config) {
	Object.keys(config).forEach(function (key) {
		var val = config[key];
		var type = typeof val;
		if (type === 'object') {
			parseJsonValues(val);
		} else if (type === 'string') {
			if (looksLikeJson(val.trim())) {
				try {
					var parsed = JSON.parse(val);
					config[key] = parsed;
				} catch (e) {}
			}
		}
	});
}

function looksLikeJson(val) {
	return (val[0] == '[' && val[val.length - 1] === ']') || ((val[0] == '{' && val[val.length - 1] === '}'));
}
