/**
Input: [1, [2, [3, [4]], 5]]
Output: [1, 2, 3, 4, 5]
*/
function flattenArray(arr) {
    let flatArr = [];
    for(let i=0; i<arr.length; i++) {
        if(typeof arr[i] === 'object') {
            flatArr = flatArr.concat(flattenArray(arr[i]))
        }else {
            flatArr = flatArr.concat(arr[i]);
        }
    }
    return flatArr;
}

console.log('---flattenArray---', flattenArray([1, [2, [3, [4, 8, 9, [58, 9]]], 5]]));


function deeplyNestedSum(arr) {
    let sum = 0;
    for (let item of arr) {
        if(typeof item === 'number') {
            sum+=item;
        }else {
            sum+=deeplyNestedSum(item);
        }
    }

    return sum;
}

console.log(deeplyNestedSum([1, [2, [3, [4]], 5]]));

function evenNumOfNestedArr(arr) {
    let evenNum = [];
    for(let item of arr) {
        if(typeof item === 'number') {
            if(item % 2 === 0) evenNum = evenNum.concat(item);                 
        }else {
            evenNum = evenNum.concat(evenNumOfNestedArr(item))
        }
    }

    return evenNum;
}

console.log(evenNumOfNestedArr([1, [2, [3, [4]], 5]]));