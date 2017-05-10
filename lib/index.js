
var fs = require('fs');
var nconf = require('nconf');

// command line args are highest importance
nconf.argv();

// next, use machine environment variables
// separator for nested vars is two underscores __
nconf.env('__');

// next use configuration files
// these are loaded in the following order
// note: higher order items take precedence
// 1.) config/*.config.local.js
// 2.) config/*.config.js

var configDir = process.cwd() + '/config';
var files = [];
if (fs.existsSync(configDir)) {
    files = fs.readdirSync(configDir);
} else {
    console.error('[ih-config] ./config directory does not exist!')
}
var filter = function (pattern) {
    return files.filter(function (f) {
        return f.match(pattern);
    });
};

var configLocalJs = filter('.*\.config\.local\.js$');
var configJs = filter('.*\.config\.js$');

configLocalJs.forEach(function (f) {
    nconf.overrides(require(configDir + '/' + f));
});
configJs.forEach(function (f) {
    nconf.defaults(require(configDir + '/' + f));
});

// export nconf as config
module.exports = nconf;
