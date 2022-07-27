// Longest Increasing Sequence
// You are given an array of non-repeating integers as an argument. Return an array containing the longest increasing sequence of values found in the argument array.

// The argument array will always have at least two values that will match this condition.

// Requirements
// Must return an array of integers
// Must handle negative integers
// Example #1
// solve([10, 7, 5, 20, 21, 23, 9])
// > [5, 20, 21, 23]
// Example #2
// solve([-10, -7, -5, -20, 21, 20, 9])
// > [-10, -7, -5]
const longestIncreasingSequence = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] < array[i]) {
      result[result.length - 1].push(array[i]);
    } else {
      result.push([array[i]]);
    }
  }
  return result.sort((a, b) => b.length - a.length)[0];
};
console.log(longestIncreasingSequence([10, 7, 5, 20, 21, 23, 9]));
console.log(longestIncreasingSequence([-10, -7, -5, -20, 21, 20, 9]));
