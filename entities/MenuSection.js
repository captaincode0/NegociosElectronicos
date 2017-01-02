"use strict"

class MenuSection{
	constructor(id, menuid, name){
		this.id = id;
		this.menuid = menuid;
		this.name = name;
	}

	getId(){
		return this.id;
	}

	getMenuId(){
		return this.menuid;
	}

	setName(name){
		this.name = name;
	}

	getName(){
		return this.name;
	}
}