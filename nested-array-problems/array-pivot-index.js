/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefixSumArr = [];
    let suffixSumArr = [];
    
    prefixSumArr[0] = 0;
    for (let i=1; i<nums.length; i++) {
        prefixSumArr[i] = prefixSumArr[i-1] + nums[i-1];
    }
    
    suffixSumArr[nums.length-1] = 0;
    for (let i=nums.length-2; i>=0; i--) {
        suffixSumArr[i] = suffixSumArr[i+1] + nums[i+1];
    }
    
    for(let i=0; i<nums.length; i++) {
        if(prefixSumArr[i] === suffixSumArr[i]) {
            return i;
        }
    }
    
    return -1;
};

pivotIndex([1,7,3,6,5,6]);