"use strict"

var User = require("../entites/User");
var Model = require("./Model");
var DatabaseController = require("./DatabaseController");

class BuyCarModel extends Model{
	constructor(){
		super();
		this.dbcontroller = new DatabaseController(__dirname+"/sinhambredb");
	}

	getBuyCarByUserId(userid, callback){

	}

	insertOrder(buycar, callback){

	}

	updateOrder(buycar, callback){

	}

	deleteOrder(buycar, callback){
		
	}
}

module.exports = BuyCarModel;