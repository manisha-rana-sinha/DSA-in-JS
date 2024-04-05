/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * @param  {...any} args
 * @returns {boolean}
 */
// ----------Frequency Counter approach----------
// Questions - Will it check for the datatype - No [As args is an array which has similar items]
function areThereDuplicates(...args) {
	let argsObj = {};
	for (let item of args) {
		if (argsObj[item]) {
			return true;
		}
		argsObj[item] = 1;
	}
	return false;

	// -----one liner-----
	//return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(23, 45, 33, 344, 44, 55)); //false
console.log(areThereDuplicates(23, 23, 45, 67)); //true
console.log(areThereDuplicates(23, 45, 33, 344, 44, 55)); //false
console.log(areThereDuplicates('apple', 'banana', 'cat')); //false
console.log(areThereDuplicates('apple', 'banana', 'cat', 'apple')); //true

/**
 * Notes----
 * 	const mySet = new Set();
	mySet.add(1);
	mySet.add(5);
	mySet.add("some text");

	console.log(mySet.size); // 3 - it doesn't count duplicate values
 */

// -----------Multiple pointers approach-----------
// function areThereDuplicates(...args) {
// 	args.sort((a, b) => {
// 		if (a < b) return -1;
// 		if (a > b) return 1;
// 		return 0;
// 	});

// 	let start = 0;
// 	let next = 1;
// 	while (next < args.length) {
// 		if (args[start] === args[next]) {
// 			return true;
// 		}
// 		start++; //after sorting, duplicate values will become adjacent
// 		next++;
// 	}
// 	return false;
// }
