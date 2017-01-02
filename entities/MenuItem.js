"use strict"

class MenuItem{
	constructor(id, sectionid, name, image, price){
		this.id = id;
		this.sectionid = sectionid;
		this.name = name;
		this.image = image;
		this.price = price;
	}

	getId(){
		return this.id;
	}

	getSectionId(){
		return this.sectionid;
	}

	setName(name){
		this.name = name;
	}	

	getName(){
		return this.name;
	}

	setImage(image){
		this.image = image;
	}

	getImage(){
		return this.image;
	}

	setPrice(price){
		this.price = price;
	}

	getPrice(){
		return this.price;
	}
}