/**
 *Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead
 * @param {Array} arr
 * @param {Number} sum
 * @returns {Number}
 */
function minSubArrayLen(nums, sum, i = 2) {
	// if(!arr.length) return false;

	// // arr.sort((a, b) => a-b);
	// console.log(arr);

	// let tempSubarraySum = 0;
	// if(i>=arr.length) {
	// 	return false;
	// }
	// for (let j=0; j<i; j++) {
	// 	tempSubarraySum += arr[j];
	// }

	// for (let j = 1; j < arr.length; j++) {
	// 	if (tempSubarraySum === sum) return i;
	// 	else if(tempSubarraySum > sum){
	// 		i+=1;
	// 		return minSubArrayLen(arr, sum, i);
	// 	}
	// 	else{
	// 		tempSubarraySum = tempSubarraySum - arr[j - 1] + arr[j - 1 + i];
	// 		console.log(tempSubarraySum, i);
	// 	}
	// }

	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < nums.length) {
		// if current window doesn't add up to the given sum then
		// move the window to right
		if (total < sum && end < nums.length) {
			total += nums[end];
			end++;
		}
		// if current window adds up to at least the sum given then
		// we can shrink the window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= nums[start];
			start++;
		}
		// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));

/**
 * Notes -
 * Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)
Space Complexity - O(1)
 */
