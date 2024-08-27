function swap(arr, idx1, idx2) {
  let temp;
  temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

/**
 * Note :
 *
 * This approach was misunderstood as selection sort, unlike selection sort where swap happens at the end of inner loop
 * it swaps whenever it finds the new min. Selection sort algo is provided below.
 *
 * With this approach, we are always assuming the first element of inner loop as smallest and comparing to the current element
 * in the loop.
 * If 'smallest' > arr[j], make smallest = arr[j] and swap smallest and current element by their index.
 * It means, if the subsequent element is smaller than the assumed smallest element, it swaps both of them by their indices
 * so that the subsequent element becomes the smallest at 0th position again the comparison starts to the
 * next subsequent element.
 *
 */
/**
 * Sorts an array of numbers using the misunderstood selection sort algorithm.
 *
 *  --------- Pseudo Code -----------
 * Loop through i=0 to arr.length-1 {
 *      Assume smaller = arr[i];
 *      Loop through j=i+1 to arr.length-1 {
 *          compare, if(smaller > arr[j])
 *               smaller = arr[j];
 *               swap(smaller, arr[j])
 *      }
 * }
 *
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
function misunderstoodSelectionSort(arr) {
  console.log("Original array - ", [...arr]);
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let smaller = arr[i];
    for (let j = i + 1; j < n; j++) {
      // console.log("compare - - ", smaller, arr[j]);
      if (smaller > arr[j]) {
        smaller = arr[j];
        // console.log("swap - - ", smaller, arr[j], i, j, arr);
        swap(arr, i, j);
      }
    }
    // console.log("after pass - " + (i + 1), arr);
  }
  console.log("sorted array - ", arr);
  return arr;
}

// misunderstoodSelectionSort([5, 19, 34, 22, 3, 4, 67, 23]);

/**
 * Sorts an array of numbers using the selection sort algorithm.
 *
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} - Array of numbers
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i],
      minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
      if (j === arr.length - 1) {
        swap(arr, i, minIndex);
      }
    }
  }

  console.log("sorted array -----------", arr);
  return arr;
}

selectionSort([5, 19, 34, 22, 3, 4, 67, 23]);
