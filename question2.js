// A number array as an example
let numArray = [3,4,7,2,4,94,12,35,65];

const answer = (array,result) => {

	// Creating space for an array of 2 elements
	const twoNumSum = new Array(2);

	for (let i=0; i< array.length-1; i++) {
		for (let j=i+1; j<array.length; j++) {
			if ( (array[i] + array[j]) === result) {
				twoNumSum[0] = array[i];
				twoNumSum[1] = array[j];

				return twoNumSum;
			}
		}
	}

	return twoNumSum;
}

console.log(answer(numArray,101));