// Sort Values of Array Based on Squares
// You are given an array of integers as an argument.
// Sort the array from lowest to highest based on the value of the integer's square.

// Requirements
// Example #1
// solve([-1, 2, -5, 0])
// > [0, -1, 2, -5]

// The square of 0 is 0
// The square of -1 is 1
// The square of 2 is 4
// The square of -5 is 25
// Therefore, we return the integers sorted in this order: \[0, -1, 2, -5]

const sortedBaseOnSquare = (array) => array.sort((a, b) => a ** 2 - b ** 2);
console.log(sortedBaseOnSquare([-1, 2, -5, 0]));
