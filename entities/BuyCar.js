"use strict"

var Item = require("./Item");
var ArrayIterator = require("../utils/ArrayIterator");

class BuyCar extends ArrayIterator{
	constructor(){
		//build one empty array to add elements
		super([]);
	}		

	getItems(){
		return this.array;
	}

	setItems(items){
		this.array = items;
	}

	addItem(item){
		try{
			if(item instanceof Item)
				this.array.push(item);
			else
				throw new TypeError("The parameter item needs to be an instance of item");
		}
		catch(error){
			console.log(error);
		}
	}

	delItem(itemname){
		try{
			for(var index in this.array){
				var item = this.array[index];

				if(item.getName() == itemname){
					delete this.array[index];
					break;
				}
			}
		}
		catch(error){
			console.log(error);
		}
	}

	get total(){
		var total = 0;

		for(var index in this.array){
			total += this.array[index].subtotal;
		}

		return total;
	}

	print(){
		for(var index in this.array){
			var item = this.array[index];

		}
	}
}