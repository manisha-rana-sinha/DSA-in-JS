/**
 * Write a fn called sumZero which accepts a sorted array of integers. The fn should find the first pair where the sum is 0. Return an array that includes both the values that sum to 0 or undefined if a pair does not exist.
 * @param {Array} arr
 * @returns {[number, number]}
 */
function sumZero(arr) {
	if (!arr.length) return;

	let i = 0,
		j = arr.length - 1;
	while (i < j) {
		let sum = arr[i] + arr[j];
		if (sum === 0) {
			return [arr[i], arr[j]];
		} else if (sum > 0) {
			if (arr[i] < arr[j]) {
				j--; // means array is sorted in ascending order
			} else {
				i++; // means array is sorted in descending order
			}
		} else {
			if (arr[i] < arr[j]) {
				i++; // means array is sorted in ascending order
			} else {
				j--; // means array is sorted in descending order
			}
		}
	}
}

console.log(sumZero([-8, -7, -4, -3, -1, 0, 3, 4, 5])); // Array must be in ascending number
console.log(sumZero([5, 4, 3, 0, -1, -3, -4, -7, -8]));
console.log(sumZero([]));
