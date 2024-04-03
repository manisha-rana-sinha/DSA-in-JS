// ------- using multiple pointers ---------- // it will be applicable if array is sorted
/**
 * Write a function which returns the number of unique values in the array
 * @param {Array} arr
 * @returns {Number}
 */
function countUnique(arr) {
	if (!arr.length) {
		return 0;
	}
	let i = 0;
	j = 1;
	while (j < arr.length) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
		j++;
	}
	return i + 1;
}

console.log(countUnique([1, 1, 3, 3, 3, 4, 4, 7, 8, 8, 8, 8, 9, 9, 9]));

// // ------- using frequency counter ----------
// function countUnique(arr) {
//     let valuesObj = {}
//     for (let key of arr) {
//         valuesObj[key] = (valuesObj[key] || 0) + 1
//     }

//     return Object.keys(valuesObj).length;
// }
