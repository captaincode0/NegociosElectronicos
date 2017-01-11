"use strict"

class Iterator{
	/**
	 * [hasNextElement checks if the iterator has elements]
	 * @return {Boolean} [true if the current index redirect to one existent element]
	 */
	hasNextElement(){}

	/**
	 * [next gets the next element of the iterator]
	 * @return {Object} [the next element]
	 */
	next(){}

	/**
	 * [prev gets the previous element in the collection]
	 * @return {Object} [the previous element]
	 */
	prev(){}

	/**
	 * [reset reset the iterator to point to the first object]
	 * @return {void}
	 */
	reset(){}
}

module.exports = Iterator;