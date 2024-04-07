/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 * @returns
 */
// ---------my approach------------
// function isSubSequence(str1, str2) {
// 	let firstChar = str1.charAt(0);
// 	let lastChar = str1.charAt(str1.length - 1);
// 	let i = 0,
// 		j = str2.length - 1;

// 	if (str1.length > str2.length) {
// 		return false;
// 	}

// 	while (str1.length && i <= j) {
// 		if (firstChar === str2[i]) {
// 			str1 = str1.slice(1);
// 			firstChar = str1.charAt(0);
// 		}
// 		if (lastChar === str2[j]) {
// 			str1 = str1.slice(0, -1);
// 			lastChar = str1.charAt(str1.length - 1);
// 		}
// 		i+=1;
// 		j-=1;
// 	}
// 	if (str1.length) {
// 		return false;
// 	}
// 	return true;
// }

// -------------isSubsequence Solution - Iterative----------
// function isSubSequence(str1, str2) {
// 	var i = 0;
// 	var j = 0;
// 	if (!str1) return true;
// 	while (j < str2.length) {
// 		if (str2[j] === str1[i]) i++;
// 		if (i === str1.length) return true;
// 		j++;
// 	}
// 	return false;
// }

// --------------isSubsequence Solution - Recursive but not O(1) Space------------
function isSubSequence(str1, str2) {
	if (str1.length === 0) return true;
	if (str2.length === 0) return false;
	if (str2[0] === str1[0]) return isSubSequence(str1.slice(1), str2.slice(1));
	return isSubSequence(str1, str2.slice(1));
}

console.log(isSubSequence('ello', 'hello world!')); // true
console.log(isSubSequence('abc', 'avhhbhhhcjjjc')); // true
console.log(isSubSequence('abc', 'acb')); // false
console.log(isSubSequence('abc', 'abracadabra')); // true
console.log(isSubSequence('sing', 'sting')); // true
console.log(isSubSequence('abc', 'acb')); // false
