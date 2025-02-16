/**
 * @param {number[]} digits
 * @return {number[]}
 *
 * another solution - dry run it for 199, 9 and 123
    var plusOne = function(digits) {
      for(let i = digits.length - 1; i >= 0; i--) {
          digits[i]++

          if(digits[i] > 9) {
              digits[i] = 0
          } else {
              return digits
          }
      }
      digits.unshift(1)
      return digits
    };
 */
var plusOne = function (digits) {
  let output = [];
  let carryForward = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digitPlusOne = digits[i] + carryForward;

    if (digitPlusOne > 9) {
      output[i] = 0;
      carryForward = 1;
    } else {
      output[i] = digitPlusOne;
      carryForward = 0;
    }

    if (i === 0 && carryForward) {
      output.splice(0, 0, 1);
    }
  }
  return output;
};

plusOne([9]); //[1, 0]
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]); //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
plusOne([1, 9, 9]); //[2, 0, 0]
plusOne([1, 2, 3]); //[1, 2, 4]
