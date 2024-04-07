/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate maximum sum of n consecutive elements in the array
 * @param {Array} arr
 * @param {Number} n
 * @returns {Number}
 */
function maxSubarraySum(arr, n) {
	if (arr.length === 0) {
		console.log('No integers found in the array');
		return null;
	}

	if (!n) {
		console.log('Value of n must be provided');
		return null;
	}

	if (n > arr.length) {
		console.log('n is greater than the integers present in the array');
		return null;
	}

	let tempSum = 0;
	let maxSum = 0;

	for (let i = 0; i < n; i++) {
		tempSum += arr[i];
	}

	maxSum = tempSum;

	for (let i = 0; i < arr.length - n; i++) {
		tempSum = tempSum - arr[i] + arr[i + n];
		// maxSum = Math.max(maxSum, tempSum);
		if (maxSum < tempSum) {
			maxSum = tempSum;
		}
	}

	return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([4, 2, 1], 4));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 0));
