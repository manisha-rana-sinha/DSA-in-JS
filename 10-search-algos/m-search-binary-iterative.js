
// ---------------------Iterative approach--------------------

function binarySearch (arr, k) {
    let start = 0,
        end = arr.length - 1,
        mid = Math.floor((start + end)/2);

    while (end >= start) {
        if (k === arr[mid]) return mid;
        else if (k < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
         mid = Math.floor((start + end)/2);
    }
    
    return -1;
}
let arr = [3, 22, 34, 56, 72, 88, 90, 95, 100];
console.log(binarySearch(arr, 3)) // 0
console.log(binarySearch(arr, 22)) // 1
console.log(binarySearch(arr, 34)) // 2
console.log(binarySearch(arr, 56)) // 3
console.log(binarySearch(arr, 72)) // 4
console.log(binarySearch(arr, 88)) // 5
console.log(binarySearch(arr, 90)) //  6
console.log(binarySearch(arr, 95)) // 7
console.log(binarySearch(arr, 100)) // 8
console.log(binarySearch(arr, 10)) // -1
console.log(binarySearch(arr, 78)) // -1
console.log(binarySearch(arr, 24)) // -1

// Note -
// This only works with SORTED ARRAY

// Time complesity - O(log n)
// Auxiliary Space: O(1)