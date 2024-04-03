// ------------------- Approach 3 [colt's approach] -------------------------
/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function valid_anagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	let lookup = {};
	for (let i = 0; i < str1.length; i++) {
		// hashmap str1
		let key = str1[i];
		lookup[key] = (lookup[key] || 0) + 1;
	}

	// lookup = {a: 3, n: 1, g: 1, r: 1, m: 1}, str2 = 'nagaram'
	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];

		//if can't find letter or if letter count is zero; it's not an anagram
		if (!lookup[letter]) {
			//if (undefined or zero)
			return false;
		}
		lookup[letter] -= 1;
	}
	return true;
}

console.log(valid_anagram('anagram', 'nagaram')); //true
console.log(valid_anagram('iceman', 'cinema')); //true
console.log(valid_anagram('norway', 'waynor')); // true
console.log(valid_anagram('norman', 'norwan')); // false
console.log(valid_anagram('normannormannorman', 'norwannotrwbnorwanb')); // false
console.log(valid_anagram('normannorman', 'norwannotrwbnorwanb')); //false
console.log(valid_anagram('titu', 'wayb')); // false

/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
 */

// ------------------- Approach 1 [bad approach] -------------------------
// function valid_anagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         console.log('frequencies don\'t match');
//         return false;
//     }

//     for (let i=0; i<str1.length; i++) {
//        let indexInStr2 = str2.indexOf(str1[i]); // not so efficient - as it is creating nested loop (indexOf() walks through the array to get it)
//         if(indexInStr2 >= 0) {
//             str2 = str2.slice(0, indexInStr2) + str2.slice((indexInStr2 + 1), (str2.length)); //unlike array.splice, string.splice doesn't exist
//         }else {
//             return false;
//         }
//     }

//     return true;
// }

// // ------------------- Approach 2 -------------------------
// function valid_anagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let str1Obj = {}, str2Obj = {};
//     for (let i=0; i<str1.length; i++) {
//         // hashmap str1
//         let key = str1[i];
//         str1Obj[key] = (str1Obj[key] || 0) + 1;

//         // hashmap str2
//         key = str2[i];
//         str2Obj[key] = (str2Obj[key] || 0) + 1;
//     }

//     for (key in str1Obj) {
//         if(!key in str2Obj || str1Obj[key] !== str2Obj[key]) {
//             return false;
//         }
//     }
//     return true;
// }
