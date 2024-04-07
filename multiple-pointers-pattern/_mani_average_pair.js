/**
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 * @param  {Array} arr
 * @returns {Array}
 */
function averagePair(arr, targetAvg) {
	// 1. start two pointers, one from start (i) and one from the end (j) of the array since the array is sorted
	// 2. Loop through it
	// 3. check if i+J/2 === targetAvg, if true, return true
	// 4. else check if i+j/2 < targetAVG, if true, i++ else j--

	let i = 0,
		j = arr.length - 1;
	while (i < j) {
		let avg = (arr[i] + arr[j]) / 2;
		if (avg === targetAvg) {
			console.log('first pair which gives target average', [arr[i], arr[j]]);
			return true;
		} else if (avg < targetAvg) {
			i++;
		} else {
			j--;
		}
	}
	return false;
}
console.log(averagePair([-4, -3, -2, 1, 3, 4, 5, 6, 8], 3));
console.log(averagePair([1, 3, 4, 5, 6, 8], 3));
console.log(averagePair([-4, -3, -2, 1, 3, 4, 5, 6, 8], 8));
