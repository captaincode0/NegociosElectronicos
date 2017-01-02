/**
 * @author: captaincode0.
 * @desc: this module u
 */
'use strict'

var ApplicationConfigurationException = require("./exception/ApplicationConfigurationException.js");

class ApplicationConfigurator{
	constructor(system_variables){
		//assign the internal sys variablesz
		this.system_variables = system_variables;
		this.updateSystemVariables();
	}

	getSystemVariables(){
		return this.system_variables;
	}

	setSystemVariables(system_variables){
		try{
			if(this.system_variables.constructor === Object){
				//update the system variables
				this.system_variables = system_variables;
				this.updateSystemVariables();
			}
			else
				throw new ApplicationConfigurationException("the application configurator needs an object with name:value");
		}
		catch(ex){
			ex.print();
		}
	}

	updateSystemVariables(){
		//map the current object and creates propertyes
		for(var sys_variable_name in this.system_variables)
			this[sys_variable_name] = this.system_variables[sys_variable_name];
	}

	addSystemVariable(name, value){
		try{
			if(typeof name === "string"
				& this.system_variables[name] == undefined){
				this.system_variables[name] = value;
				this.updateSystemVariables();
			}
			else 
				throw new ApplicationConfigurationException("to update one variable the parameter name needs to be an string or index in the internal collection");
		}
		catch(ex){
			ex.print();
		} 
	}

	delSystemVariable(name){
		try{
			if(typeof name
				& this.system_variables[name] != undefined){
				//delete the system variable and update the others
				delete this.system_variables[name];
				this.updateSystemVariables();
			}
			else
				throw new ApplicationConfigurationException("to delete one system variable, it needs to exist first");
		}
		catch(ex){
			ex.print();
		}
	}
}

module.exports = ApplicationConfigurator;