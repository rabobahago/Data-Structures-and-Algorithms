// Greatest Difference Between Two Integers
// You are given an array of non-negative integers as an argument. Return the greatest difference between any two integers in the array.

// Requirements
// Must return an integer
// Example #1
// solve([1,3,10,11,13])
// > 12

// 13 - 1 returns 12, the largest difference between two numbers.
const greatestDifferece = (array) => {
  array.sort((a, b) => a - b);
  const first = array[0];
  let last = array[array.length - 1];
  return last - first;
};
console.log(greatestDifferece([1, 3, 10, 11, 13]));
