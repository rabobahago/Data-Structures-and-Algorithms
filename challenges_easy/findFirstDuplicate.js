// Find the First Duplicate
// You are given an array of integers containing some duplicates as an argument. Return the first element in the array that is duplicated twice.

// Requirements
// Must return an integer
// Must also handle negative integers
// Must be able to handle cases with multiple duplicate elements
// Example #1
// solve([6, 2, 5, 1, 0, 12, 2])
// > 2
// Example #2
// solve([-6, 1, 5, -6, 0, -2, 3])
// > -6
// Example #3
// solve([3, 1, 5, 1, 0, -2, 3, 5])
// > 1
// The number three appears twice, but both instances of the number one appear before both instances of three, so return one.

const findFirstDuplicate = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.includes(array[i])) {
      return array[i];
    } else {
      result.push(array[i]);
    }
  }
};
console.log(findFirstDuplicate([6, 2, 5, 1, 0, 12, 2]));
console.log(findFirstDuplicate([-6, 1, 5, -6, 0, -2, 3]));
console.log(findFirstDuplicate([3, 1, 5, 1, 0, -2, 3, 5]));
