"use strict"

class Item{
	constructor(id, name, image, price, quantity){
		this.id = id;
		this.name = name;
		this.image = image;
		this.price = price;
		this.quantity = quantity;
	}	

	getId(){
		return this.id;
	}

	setId(id){
		this.id = id;
	}

	getName(){
		return this.name;
	}

	setName(name){
		this.name = name;
	}

	getImage(){
		return this.image;
	}

	setImage(image){
		this.image = image;
	}

	getPrice(){
		return this.price;
	}

	setPrice(price){
		this.price = price;
	}

	getQuantity(){
		return this.quantity;
	}

	setQuantity(quantity){
		this.quantity = quantity;
	}

	get subtotal(){	
		return this.price * this.quantity;
	}

	//Override
}

module.exports = Item;