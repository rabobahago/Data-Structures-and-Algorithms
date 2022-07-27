// Two Elements Add Up to Argument
// You are given an array of integers and an integer K as arguments. Return true
// if exactly two elements from the array will add up to the integer K, false if not.

// Requirements
// Must return either true or false
// Example #1
// solve([10,12,3,4,5], 8)
// > true

// 3 and 5 added together equals 8, so we return true.

// Example #2
// solve([-10,12,17,14,15], 3)
// > false

// No pair of integers in this array will sum to 3, so we return false.
const twoElementsAddArgument = (array, k) => {
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    let j = i - 1;
    while (j >= 0) {
      if (array[j] + x === k) {
        return true;
      }
      j--;
    }
  }
  return false;
};
console.log(twoElementsAddArgument([10, 12, 3, 4, 5], 8));
console.log(twoElementsAddArgument([-10, 12, 17, 14, 15], 3));
