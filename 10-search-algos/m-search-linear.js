function linearSearch (arr, k) {
    for (let i=0; i<arr.length; i++) {
        if(arr[i] === k)
            return i;
    }
    return -1;
}

console.log(linearSearch([7,5,6,4,9,2,3,1,8,0,10], 3)) // 6
console.log(linearSearch([7,5,6,4,9,2,3,1,8,0,10], 10)) // 10
console.log(linearSearch([7,5,6,4,9,2,3,1,8,0,10], 44)) // -1
console.log(linearSearch(['axe', 'apple', 'x-ray', 'watch', 'banana', 'hut', 'cat', 'icecream', 'dog'], 'cat')) // 6

// Note - 

// Time complexity -
// Best Case: In the best case, the key might be present at the first index. So the best case complexity is O(1)
// Worst Case: In the worst case, the key might be present at the last index i.e., opposite to the end from which the search has started in the list. So the worst-case complexity is O(N) where N is the size of the list.
// Average Case: O(N)

// Auxiliary Space - O(1) as except for the variable to iterate through the list, no other variable is used.