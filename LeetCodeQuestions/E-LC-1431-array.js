/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // let max = candies.reduce((max, curr) => {
    //     if(curr > max) max = curr;
    //     return max;
    // });
    let max = Math.max(...candies);

    let output = candies.map((candy) => {
        return (candy + extraCandies) >= max
    }); 
    return output;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));