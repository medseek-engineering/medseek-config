# medseek-config
A common configuration module to abstract precedence of config options.

# about
medseek-config is a lightweight wrapper on top of the [https://github.com/flatiron/nconf](nconf) module, which abstracts access to various configuration stores. Configuration data may come from files, machine environment variables, or the node command line. 

# usage
* require the module

````
var config = require('ih-config');
````

* get a config value

````
var foo = config.get('foo');

// nested property access
var bar = config.get('foo:bar');
````

# config stores
ih-config supports 3 types of configuration storage, and 4 levels of precedence (listed from highest to lowest precedence):
* CMD params - command line parameters, passed to node
* ENV variables - machine environment variables
* files - JS files, located in a directory in the root of your project named `config`
  * `*.config.local.js` takes precedence over
  * `*.config.js`


# config files
Config files must be placed in the root config directory. Files should match for format `*.config.js` in order to be included. Additionally, files matching `*.config.local.js` are also parsed. Local files take precedence over non-local files. Normally a repo should ignore `config/*.local.*`, allowing developers to override properties as needed, without committing those changes to the repository.

# environment variables
Machine environment variables are included in the available configuration data. This is the same set of data normally provided by node under *process.env*. 

# command line parameters
Config data may also be set directly from the command line, when starting node. To set a parameter value, prefix it with two dashes, and place an equals sign between the value. For example: **--value='hello world'** Note that command line parameters take the highest priority.
