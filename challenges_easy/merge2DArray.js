// Merge 2D Array into Single Array
// You are given a two dimensional array containing arrays of integers as an argument.
// Return a single array containing all of the integers from all of the arrays, maintaining the original ordering.

// Requirements
// Must return a single array of integers
// Example #1
// solve([[1,2],[3],[4,5,6]])
// > [1,2,3,4,5,6]
// Example #2
// solve([[5,6],[3,4],[7,2]])
// > [5,6,3,4,7,2]

const merge2DArray = (array) => array.flat();
console.log(merge2DArray([[1, 2], [3], [4, 5, 6]]));
console.log(
  merge2DArray([
    [5, 6],
    [3, 4],
    [7, 2],
  ])
);
