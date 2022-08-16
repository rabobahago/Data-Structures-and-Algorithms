// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
const spiralMatrix = (matrix) => {
  let nums = [],
    left = 0,
    top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    size = matrix[0].length * matrix.length;
  while (nums.length < size) {
    for (let i = left; i <= right && nums.length < size; i++) {
      nums.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && nums.length < size; i++) {
      nums.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left && nums.length < size; i--) {
      nums.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top && nums.length < size; i--) {
      nums.push(matrix[i][left]);
    }
    left++;
  }
  return nums;
};
console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  spiralMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
