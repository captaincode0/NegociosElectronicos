"use strict"

var ApplicationConfigurator = require("./ApplicationConfigurator.js");

//create one application configurator and stores the APP_DEBUG system variable
var appconfigurator = new ApplicationConfigurator({
	APP_DEBUG: true,
	APP_PORT: 8080,
	APP_ROUTES: "./routes/"
});

module.exports = appconfigurator;