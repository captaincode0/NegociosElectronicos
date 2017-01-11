"use strict"

var Controller = require("./Controller");
var UserModel = require("../model/UserModel");
	

class UserLoginController extends Controller{
	constructor(){
		super(new UserModel());
	}

	login(user, callback){

	}

	logout(callback){
		callback();
	}
}