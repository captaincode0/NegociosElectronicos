"use strict"

var Iterator = require("./Iterator");

class ArrayIterator extends Iterator{
	constructor(array){
		this.setArray(array);
	}

	setArray(array){
		try{
			if(array.constructor != Array)
				throw new TypeError("The parameter array needs to be an instance of Array object");
			else{
				this.array = array;
				this.reset();
			}
		}
		catch(error){
			console.log(error);
		}
	}

	//@Override
	hasNextElement(){
		if(this.array_index[this.array_index] === undefined
			|| this.array_index > this.array_limit)
			return false;
		else
			return true;
	}

	//@Override
	next(){
		return this.array[this.array_index++];
	}

	//@Override
	prev(){
		return this.array[this.array_index--];
	}

	//@Override
	reset(){
		//put the array index from the beggining
		this.array_index = 0;

		//put the array limit
		this.array_limit = this.array.length-1;
	}
}