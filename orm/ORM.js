class ORM{
	constructor(orm_name){
		this.orm_name = orm_name;
	}

	print(){
		console.log("orm: "+this.orm_name):
	}

	insert(query){}
	update(query){}
	delete(query){}
}