// Find the Median of an Array
// You are given an array of unsorted integers. Return the median integer of the array.

// The argument array will always have an odd number of at least 3 elements.

// Requirements
// Must return an integer
// Must also handle negative integers
// Example #1
// solve([1, 5, 4, 3, 2])
// > 3
// Example #2
// solve([-5, -12, 3, -3, 95])
// > -3

const medianOfArray = (array) => {
  let start = 0;
  let end = array.length;
  array.sort((a, b) => a - b);
  let mid = Math.floor((start + end) / 2);
  return array[mid];
};
console.log(medianOfArray([1, 5, 4, 3, 2]));
console.log(medianOfArray([-5, -12, 3, -3, 95]));
