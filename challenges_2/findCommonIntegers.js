// Find Common Integers
// You are given two arrays of integers as arguments. Return a new array of integers containing only the common integers.

// Assume that there will be at least one common integer in both arrays.

// Requirements
// Must return an array of integers
// Must also handle negative integers
// Example #1
// solve([2, 10, 1, 3, 1, 8], [3, 7, 10, 9, 2])
// > [2, 10, 3]
// Example #2
// solve([2, 10, 1, -3, 1, 8], [-3, 7, 10, 5, -2])
// > [10, -3]
const findCommonIntegers = (arrayOne, arrayTwo) => {
  let result = [];
  for (let elem of arrayOne) {
    if (arrayTwo.includes(elem)) {
      result.push(elem);
    }
  }
  return result;
};
console.log(findCommonIntegers([2, 10, 1, 3, 1, 8], [3, 7, 10, 9, 2]));
console.log(findCommonIntegers([2, 10, 1, -3, 1, 8], [-3, 7, 10, 5, -2]));
