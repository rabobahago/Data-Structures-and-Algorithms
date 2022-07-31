// Convert 2D Array to a 1D Array
// You are given a two dimensional array containing arrays of integers as an argument.
//Take each column and return the integer elements in a one dimensional array.

// Requirements
// Must return an array of integers
// Must account for inner arrays of all different sizes
// Example #1
// solve([
//   [1, 2, 3],
//   [4],
//   [5, 6, 7, 8]
// ])
// > [1,4,5,2,6,3,7,8]
// Example #2
// solve([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10]
// ])
// > [1,5,9,2,6,10,3,7,4,8]
const convert2D1D = (array) => {
  let result = [];
  for (let i = 0; i <= array[0].length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j][i]) result.push(array[j][i]);
    }
  }
  return result;
};
console.log(convert2D1D([[1, 2, 3], [4], [5, 6, 7, 8]]));
//console.log(
//   convert2D1D([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10],
//   ])
// );
