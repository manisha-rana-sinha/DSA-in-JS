// Transpose a 2D Matrix
// Write a function to transpose a 2D matrix.
// Example:
// Input: [[1, 2], [3, 4], [5, 6]]
// Output: [[1, 3, 5], [2, 4, 6]]
function transpose2DMatrix (arr) {
    let tMatrixRow1 = [],  tMatrixRow2 = [];
    arr.forEach((row) => {
        tMatrixRow1.push(row[0]);
        tMatrixRow2.push(row[1]);
    })
    return [tMatrixRow1, tMatrixRow2];
}

transpose2DMatrix([[1, 2], [3, 4], [5, 6], [7,8], [9,10]])

