/**
 * @author: captaincode0.
 * @desc: Exception is a class that could be extended to other exceptions to be catched.
 */
"use strict"
class Exception{
	constructor(name, message){
		this.name = name;
		this.message = message;
	}

	getName(){
		return this.name;
	}

	setName(value){
		if(typeof value === 'string')
			this.name = value;
		else 
			console.log("[+] ExceptionM: The name of Exception needs to be an string");
	}

	getMessage(){
		return this.message;
	}

	setMessage(value){
		if(typeof value === 'string')
			this.message = value;
		else 
			console.log("[+] ExceptionM: The message of Exception needs to be an string");
	}

	print(){
		console.log("[-]"+this.name+": "+this.message);
	}
}

module.exports = Exception;