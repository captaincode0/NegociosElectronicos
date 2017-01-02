"use strict"

class User{
	constructor(id, name, tel, email, passwd, usertype, passwd, usertype){
		this.id = id;
		this.name = name;
		this.tel = tel;
		this.email = email;
		this.passwd = passwd;
		this.usertype = usertype;
	}

	getId(){
		return this.id;
	}

	setName(name){
		this.name = name;
	}

	getName(){
		return this.name;
	}

	setTel(tel){
		this.tel = tel;
	}

	getTel(){
		return this.tel;
	}

	setEmail(email){
		this.email = email;
	}

	getEmail(){
		return this.email;
	}

	setPasswd(passwd){
		this.passwd = passwd;
	}

	getPasswd(){
		return this.passwd;
	}

	getUserType(){
		return this.usertype;
	}
}

module.exports = User;