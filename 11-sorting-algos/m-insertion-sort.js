/**
 * It sorts the array by pick and insert mechanism
 *
 * @param {number[]} arr - unsorted array
 * @returns {number[]} - sorted array
 */
function insertionSort(arr) {
  function swap(arr, idx1, idx2) {
    let temp;
    temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  console.log("unsorted array", [...arr]);
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        if (arr[j] > arr[j - 1]) {
          break;
        }
      }
    }
  }
  console.log("sorted array", arr);
  return arr;
}

insertionSort([5, 16, 6, 4, 7, 20, 40, 23, 3]);
