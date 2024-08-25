function swap(arr, idx1, idx2) {
  let temp;
  temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 *
 * ----- Pseudo Code -----
 *  1. Loop through i = 0 to n.length-1
 *     1. In every pass loop through j=0 to n.length-1
 *       1. Compare arr[j] and arr[j+1], if (arr[j] > arr[j+1])
 *           Swap arr[j] and arr[j+1]
 *
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
function BubbleSortWithFirstIntuition(arr) {
  let copyOriginalArray = [...arr];
  let n = arr.length - 1;
  for (let i = n; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      // console.log("comparing---", arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // console.log("swapped---");
      }
    }
    // console.log("pass " + (n - i + 1) + " -----", arr);
  }
  console.log("original array - ", copyOriginalArray);
  console.log("Sorted array - ", arr);
  return arr;
}

// BubbleSortWithFirstIntuition([5, 19, 23, 24, 12, 3, 48, 10]);

/**
 * Sorts an array of numbers using the bubble sort algorithm in optimized way.
 *
 * ---- Pseudo code ----
 *
 *
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
function OptimizedBubbleSort(arr) {
  let noSwaps;
  let n = arr.length - 1;
  for (let i = n; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      console.log("comparing---", arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
        console.log("swapped---");
      }
    }
    if (noSwaps) break;
    console.log("pass " + (n - i + 1) + " -----", arr);
  }
  return arr;
}

// OptimizedBubbleSort([5, 19, 23, 24, 12, 3, 48, 10]);
OptimizedBubbleSort([19, 5, 6, 7, 9, 10, 12]);
