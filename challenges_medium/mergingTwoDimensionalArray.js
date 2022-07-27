// Merging Arrays of Integers in 2D Array
// You are given a two dimensional array containing arrays of sorted
// integers as an argument. Return a new array combining all elements in sorted order.
// There will never be duplicate integers.

// Requirements
// Must return an array of integers
// Should work with both positive and negative integers
// Example #1
// solve([[1, 10, 20], [5, 15, 23], [3, 7, 25]])
// > [1, 3, 5, 7, 10, 15, 20, 23, 25]
// Example #2
// solve([[-1, 10, 20], [-5, 15, 23], [-3, 7, 25]])
// > [-5, -3 ,-1, 7, 10, 15, 20, 23, 25]
const mergingTwoDimensionalArray = (arrays) => {
  return arrays.flat().sort((a, b) => a - b);
};
console.log(
  mergingTwoDimensionalArray([
    [1, 10, 20],
    [5, 15, 23],
    [3, 7, 25],
  ])
);
console.log(
  mergingTwoDimensionalArray([
    [-1, 10, 20],
    [-5, 15, 23],
    [-3, 7, 25],
  ])
);
