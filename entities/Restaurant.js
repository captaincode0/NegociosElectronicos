"use strict"

class Restaurant{
	constructor(id, userid, name, address, googlemap, tel, image, banner){
		this.id = id;
		this.userid = userid;
		this.name = name;
		this.address = address;
		this.googlemap = googlemap;
		this.tel = tel;
		this.image = image;
		this.banner = banner;
	}

	getId(){
		return this.id;
	}

	getUserId(){
		return this.userid;
	}

	setName(name){
		this.name = name;
	}

	getName(){
		return this.name;
	}

	setAddress(address){
		this.address = address;
	}

	getAddress(){
		return this.address;
	}

	setGoogleMap(googlemap){
		this.googlemap = googlemap;
	}

	getGoogleMap(){
		return this.googlemap;
	}

	setTel(tel){
		this.tel = tel;
	}

	getTel(){
		return this.tel;
	}

	setImage(image){
		this.image = image;
	}

	getImage(){
		return this.image;
	}

	setBanner(banner){
		this.banner = banner;
	}

	getBanner(){
		return this.banner;
	}
}

module.exports = Restaurant;