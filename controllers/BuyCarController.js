"use strict"

var Controller = require("./Controller");
var BuyCarModel = require("../model/BuyCarModel");


class BuyCarController extends Controller{
	constructor(){
		super(new BuyCarModel());
	}

	insertOrder(buycar, callback){

	}

	updateOrder(buycar, callback){

	}

	deleteOrder(buycar, callback){

	}

	getOrders(userid){

	}
}

module.exports = BuyCarController;