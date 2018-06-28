// An array of numbers as an example
let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//Function for comparing in the sorting process
const compare = (a,b) => a-b;

const cleanTheRoom = array => {
	//Sorting correctly the given array
	array.sort(compare);

	let repeatedValue = 0;
	let tempValue = array[0];

	const newArray = []; //Creating an empty array

	// i =1 Starting after the first value that we already stored in tempValue
	for (let i=1; i<array.length; i++) {

		if (array[i] === tempValue) repeatedValue++;
			else {
				//Storing the new values into the newArray
				if (repeatedValue > 0) {
					newArray.push(new Array(repeatedValue+1).fill(tempValue));
				} else {
					newArray.push(tempValue);
				}
				
				tempValue = array[i];
				repeatedValue = 0;
			}
	}

	return newArray;
}

console.log(cleanTheRoom(arr));