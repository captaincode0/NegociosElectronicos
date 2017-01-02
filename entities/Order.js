"use strict"

class Order{
	constructor(id, userid, total, payed){
		this.id = id;
		this.userid = userid;
		this.total = total;
		this.payed = payed;
	}

	getId(){
		return this.id;
	}

	getUserId(){
		return this.userid;
	}

	setTotal(total){
		this.total = total;
	}

	getTotal(){
		return this.total;
	}

	setPayed(payed){
		this.payed = payed;
	}

	getPayed(){
		return this.payed;
	}
}