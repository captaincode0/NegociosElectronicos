"use strict"

class Alert{
	constructor(id, userid, title, body, isactive){
		this.id = id;
		this.userid = userid;
		this.title = title;
		this.body = body;
		this.isactive = isactive;
	}

	getId(){
		return this.id;
	}

	getUserId(){
		return this.userid;
	}

	setTitle(title){
		this.title = title;
	}

	getTitle(){
		return this.title;
	}

	setBody(body){
		this.body = body;
	}

	getBody(){
		return this.body;
	}

	isActive(){
		return this.isactive;
	}
}

module.exports = Alert;