// Find the Missing Number
// You are given an unsorted array of integers as an argument. When sorted, the numbers in the array will form a sequence. One number in the sequence is missing. Return the missing number.

// Requirements
// Must return a single integer.
// Number returned must be between the 0th and Kth index of the given array when sorted.
// Must also work with negative integers
// Example 1
// solve([5, 0, 2, 1, 3])
// > 4

// Sorted, the array will be 0,1,2,3,5, The missing number in this sequence is 4

// Example 2
// solve([-5, 0, -2, -1, -3])
// > 4

// Sorted, the array will be -5, -3, -2, -1, 0, The missing number in this sequence is -4
const missingNumber = (array) => {
  const sorted = array.sort((a, b) => a - b);
  for (let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
    if (!sorted.includes(i)) {
      return i;
    }
  }
  return -1;
};
console.log(missingNumber([5, 0, 2, 1, 3]));
console.log(missingNumber([-5, 0, -2, -1, -3]));
