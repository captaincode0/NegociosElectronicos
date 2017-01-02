/**
 * @author: captaincode0
 * @desc: this exception is thrown when an error is presented in the configuration of the application.
 */
"use strict"
var Exception = require("./Exception.js");

class ApplicationConfigurationException extends Exception{
	constructor(message){
		super("ApplicationConfigurationException", message);
	}
}

module.exports = ApplicationConfigurationException;