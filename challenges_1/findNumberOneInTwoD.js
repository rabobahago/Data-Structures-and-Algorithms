// Find the Number of 1's in a 2D Array
// You are given a two dimensional array containing arrays of integers as arguments. Return the amount of times that the number 1 is found in any of the arrays.

// Requirements
// Must return a single integer
// Example #1
// solve([
//   [1, 4, 2, 1],
//   [6, 3, 8, 9],
//   [1, 5, 1, 0]
// ])
// > 4
const findNumberOneInTwoD = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
};
console.log(
  findNumberOneInTwoD([
    [1, 4, 2, 1],
    [6, 3, 8, 9],
    [1, 5, 1, 0],
  ])
);
