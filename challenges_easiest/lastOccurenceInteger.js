// Find Last Occurrence of Integer in Array
// You are given an array of integers and an integer K as arguments.
// Return the index of the last occurrence of integer K in the array.

// Argument Integer K is guaranteed to be found in the array at least once.

// Requirements
// Must return a single integer
// Should work with both positive and negative numbers
// Example #1
// solve([4, 1, 3, 5, 3, 4, 2], 4)
// > 5

// 4 occurs twice, the last occurrence can be found at the 5th index of the array, so we return 5.

// Example #2
// solve([-1, -1, 3, 5, 3, 2], -1)
// > 1

// -1 occurs twice, the last occurrence can be found at the 1st index of the array, so we return 1.
const lastOccurenceInteger = (array, k) => {
  for (var i = 0; i < array.length; i++) {
    if (array[array.length - i] === k) {
      return array.length - i;
    }
  }
};

console.log(lastOccurenceInteger([4, 1, 3, 5, 3, 4, 2], 4));
console.log(lastOccurenceInteger([-1, -1, 3, 5, 3, 2], -1));
