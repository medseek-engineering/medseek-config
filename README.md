# medseek-config
A common configuration module for use within the MEDSEEK API and UI node projects.

# about
medseek-config is a lightweight wrapper on top of the [https://github.com/flatiron/nconf](nconf) module, which abstracts access to various configuration stores. Configuration data may come from files, machine environment variables, or the node command line. 

# npm link
As with other projects in the medseek-common repository, in order to use the module, you need to link to it. See [https://npmjs.org/doc/cli/npm-link.html](NPM Link) for a description of link. For example:
````
 "scripts": {
    "postinstall": "npm link ../medseek-common/medseek-config"
  }
````

# usage
* require the module

````
var config = require('medseek-config');
````

* get a config value

````
var foo = config.get('foo');
````

# file based configuration
