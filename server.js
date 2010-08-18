// Example Express App on Heroku - Copyright Corey Donohoe <atmos@atmos.org> (MIT Licensed)

// add the vendored express to the require path
require.paths.unshift("vendor/express/lib")
require.paths.unshift("vendor")

// require express and its plugins
require("express")
require("express/plugins")

// require other goodness
require("connect")
require("jade")

//require the actual express app
require ("./lib/app")
