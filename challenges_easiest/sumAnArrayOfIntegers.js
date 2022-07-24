// Sum an Array of Integers
// You are given an array of integers as an argument. Return the sum of all elements in the array.

// Requirements
// Must return a single integer
// Must be able to handle negative integers
// Example #1
// solve([1, 5, 4])
// > 10
// Example #2
// solve([10, -1, -4])
// > 5
const sumAnArrayOfIntegers = (array) => {
  return array.reduce((cur, prev) => cur + prev, 0);
};
console.log(sumAnArrayOfIntegers([1, 5, 4]));
console.log(sumAnArrayOfIntegers([10, -1, -4]));
