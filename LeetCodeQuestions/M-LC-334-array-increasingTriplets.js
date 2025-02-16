/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let num_i = Infinity;
  let num_j = Infinity;
  for (let num of nums) {
    if (num <= num_i) num_i = num;
    else if (num <= num_j) num_j = num;
    else return true;
  }
  return false;
};

// increasingTriplet([2,1,5,0,4,6]); // true
increasingTriplet([20, 100, 10, 12, 5, 13]); // true

// Reference - https://www.youtube.com/watch?v=41gyzVIx-ds
