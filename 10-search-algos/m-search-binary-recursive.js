
// ---------------------- Pure Recursive approach-------------------------
// function binarySearch (arr, k, start, end) {
//     let mid = Math.floor((start + end)/2);
//     if(k === arr[mid]) return mid;
//     if(start > end) return -1;
//     else if(k < arr[mid]) {
//         end = mid - 1;
//         return binarySearch(arr, k, start, end );
//     }
//     else {
//         start = mid + 1;
//         return binarySearch(arr, k, start, end)
//     }
// }

// let arr = [3, 22, 34, 56, 72, 88, 90, 95, 100];
// console.log(binarySearch(arr, 3, 0, arr.length-1)) // 0
// console.log(binarySearch(arr, 22, 0, arr.length-1)) // 1
// console.log(binarySearch(arr, 34, 0, arr.length-1)) // 2
// console.log(binarySearch(arr, 56, 0, arr.length-1)) // 3
// console.log(binarySearch(arr, 72, 0, arr.length-1)) // 4
// console.log(binarySearch(arr, 88, 0, arr.length-1)) // 5
// console.log(binarySearch(arr, 90, 0, arr.length-1)) //  6
// console.log(binarySearch(arr, 95, 0, arr.length-1)) // 7
// console.log(binarySearch(arr, 100, 0, arr.length-1)) // 8
// console.log(binarySearch(arr, 10, 0, arr.length-1)) // -1
// console.log(binarySearch(arr, 78, 0, arr.length-1)) // -1
// console.log(binarySearch(arr, 24, 0, arr.length-1)) // -1


// ============================= converting while loop of iterative approach into recursive =========================== //
// ---------------------- Indirect Recursive approach ------------------------- //

function binarySearch (arr, k) {
    let start = 0,
        end = arr.length - 1,
        mid = Math.floor((start + end)/2);

    function search(start, mid, end) {
        if(start > end) return -1;
        if (k === arr[mid]) return mid;
        else if (k < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
        mid = Math.floor((start + end)/2);
        return search(start, mid, end);
    }

    return search(start, mid, end);
}

let arr = [3, 22, 34, 56, 72, 88, 90, 95, 100];
console.log(binarySearch(arr, 3, 0, arr.length-1)) // 0
console.log(binarySearch(arr, 22, 0, arr.length-1)) // 1
console.log(binarySearch(arr, 34, 0, arr.length-1)) // 2
console.log(binarySearch(arr, 56, 0, arr.length-1)) // 3
console.log(binarySearch(arr, 72, 0, arr.length-1)) // 4
console.log(binarySearch(arr, 88, 0, arr.length-1)) // 5
console.log(binarySearch(arr, 90, 0, arr.length-1)) //  6
console.log(binarySearch(arr, 95, 0, arr.length-1)) // 7
console.log(binarySearch(arr, 100, 0, arr.length-1)) // 8
console.log(binarySearch(arr, 10, 0, arr.length-1)) // -1
console.log(binarySearch(arr, 78, 0, arr.length-1)) // -1
console.log(binarySearch(arr, 24, 0, arr.length-1)) // -1


// ---------------------Iterative approach--------------------

// Note -
// This only works with SORTED ARRAY

// Time Complexity: 
// Best Case: O(1)
// Average Case: O(log N)
// Worst Case: O(log N)
// Auxiliary Space: O(1), If the recursive call stack is considered then the auxiliary space will be O(logN).