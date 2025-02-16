/**
 * Return the index of elements which sums to the target value
 */
function targetSum(arr, target) {
    // hashmap the target complement index
    // return if the complement found in the hashmap

    let cMap = {}

    for (let i=0; i<arr.length; i++) {
        let complement = target - arr[i];
        if(cMap.hasOwnProperty(complement)) {
            return [cMap[complement], i];
        }
        cMap[arr[i]] = i;
    }
    return [];
}

console.log(targetSum([2, 7, 5, 6], 9));