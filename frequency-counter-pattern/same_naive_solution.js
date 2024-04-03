// Write a function called the "same", which accepts two arrays and the function should return true if every value in the array has the corresponding value squared in the second array. The frequency of the values must be the same

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2); //indexOf itself is looping
		if (correctIndex === -1) {
			return false;
		}
		console.log(arr2);
		arr2.splice(correctIndex, 1);
	}
	return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// Note
// Time Complexity - N^2
// Technically, it is a single loop here but 'indexOf' itself is looping and so it is a nested loop.
