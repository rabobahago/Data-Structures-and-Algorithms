// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
const spiralMatrixII = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let left = 0,
    counter = 1,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result[top][i] = counter;
      counter++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result[i][right] = counter;
      counter++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      result[bottom][i] = counter;
      counter++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      result[i][left] = counter;
      counter++;
    }
    left++;
  }
  return result;
};
console.log(spiralMatrixII(2));
console.log(spiralMatrixII(3));
console.log(spiralMatrixII(4));
