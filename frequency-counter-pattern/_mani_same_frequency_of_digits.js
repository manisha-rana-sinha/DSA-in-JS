/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * @param {Number} num1 - first number
 * @param {Number} num2 - second number
 * @returns {Boolean}
 */
function sameFrequency(num1, num2) {
	let num1Str = num1.toString();
	let num2Str = num2.toString();

	if (num1Str.length !== num2Str.length) {
		return false;
	}

	let num1Obj = {},
		num2Obj = {};
	for (let i = 0; i < num1Str.length; i++) {
		num1Obj[num1Str[i]] = (num1Obj[num1Str[i]] || 0) + 1;
		num2Obj[num2Str[i]] = (num2Obj[num2Str[i]] || 0) + 1;
	}
	debugger;

	// for (let i = 0; i < num1Str.length; i++) {
	// 	let digit = num1Str[i];

	// 	if (!num2Obj[digit]) {
	// 		//if (undefined or zero)
	// 		return false;
	// 	}
	// 	num2Obj[digit] -= 1;
	// }

	// --------leaner approach-----
	for (key in num1Obj) {
		if (num1Obj[key] !== num2Obj[key]) return false;
	}
	return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(123, 456)); // false
