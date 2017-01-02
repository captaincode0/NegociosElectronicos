"use strict"

class Menu{
	constructor(id, restaurantid, name){
		this.id = id;
		this.restaurantid = restaurantid;
		this.name = name;
	}

	getId(){
		return this.id;
	}

	getRestaurantId(){
		return this.restaurantid;
	}

	setName(name){
		this.name = name;
	}

	getName(){
		return this.name;
	}
}

module.exports = Menu;