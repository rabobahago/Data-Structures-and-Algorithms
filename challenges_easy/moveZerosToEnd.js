// Move Zeroes to the End
// You are given an array of integers containing some zeros as an argument. Return a new array that contains all the elements of the original, but with all of the zero values moved to the right hand side of the array.

// Requirements
// Must return an array of integers
// Example #1
// solve([0, 1, 0, 2, 0])
// > [1, 2, 0, 0, 0]

const moveZerosToEnd = (array) => {
  let zeros = [];
  let numbers = [];
  for (let num of array) {
    if (num === 0) zeros.push(num);
    else numbers.push(num);
  }
  return numbers.concat(zeros);
};
console.log(moveZerosToEnd([0, 1, 0, 2, 0]));
