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

	getTel(){
		return this.tel;
	}

	setTel(tel){
		this.tel = tel;
	}

	getEmail(){
		return this.email;
	}

	setEmail(email){
		this.email = email;
	}

	getPasswd(){
		return this.passwd;
	}

	setPasswd(passwd){
		this.passwd = passwd;
	}

	getUserType(){
		return this.usertype;
	}

	setUserType(usertype){
		this.usertype = usertype;
	}
}

module.exports = User;