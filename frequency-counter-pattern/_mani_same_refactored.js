/**
 * Write a function called the "same", which accepts two arrays and the function should return true if every value in the array has the corresponding value squared in the second array. The frequency of the values must be the same
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
function same(arr1, arr2) {
	if (!arr1.length || !arr2.length || arr1.length !== arr2.length) {
		console.log("frequencies don't match");
		return false;
	}

	let a1Obj = {},
		a2Obj = {};
	for (let i = 0; i < arr1.length; i++) {
		// hashmap a1Obj
		a1Obj[arr1[i]] = (a1Obj[arr1[i]] || 0) + 1;

		//hashmap a2Obj
		a2Obj[arr2[i]] = (a2Obj[arr2[i]] || 0) + 1;
	}
	console.log(a1Obj, a2Obj);

	for (key in a1Obj) {
		let keySquare = key ** 2; //key*key
		if (!a2Obj.hasOwnProperty(keySquare) || a1Obj[key] !== a2Obj[keySquare]) {
			return false;
		}
	}
	return true;
}

//----output-----
console.log(same([1, 2, 3, 3], [4, 1, 9, 9]));
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

// -----------------------colt's refactored solution --------------------------------

// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1){
//         if(!(key ** 2 in frequencyCounter2)){ //is similar to Math.pow(7, 3) => 7*7*7 => 343
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }

// console.log(same([1,2,3,2,5], [9,1,4,4,11]))
// console.log(same([1,2,3,2], [9,1,4,4]))
