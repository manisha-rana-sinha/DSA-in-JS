/**
 * Reverse the array and return the same array
 */

function reverseArray(arr) {
  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));
