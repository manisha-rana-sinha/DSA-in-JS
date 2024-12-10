/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    largestElement = Math.max(...nums);
    let index;
    
    for (let i=0; i<nums.length; i++) {
        if(nums[i] !== largestElement) {
            if(nums[i]*2 > largestElement) {
                return -1;
            }
        }else {
                index = i;
            }
    }
    
    return index;
};

console.log(dominantIndex([3,6,1,0]))