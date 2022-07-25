// Splitting Integers into 2D Array
// You are given an array of integers and a single integer K as arguments. Split the array of integers into a two dimensional array of integers, where each inner array is K elements long. Return the resulting array.

// Assume that the given array will always be at least K integers in length.

// Requirements
// Must return a two dimensional array containing arrays of integers
// Must work with positive or negative integers
// Ensure that the inner array length is satisfied as many times as possible.
// Example #1
// solve([1,-2,3,-4], 1)
// > [[1], [-2], [3], [-4]]
// Example #2
// solve([1,2,3,4,5,6,7], 3)
// > [[1,2,3], [4,5,6], [7]]

// Example #2
// solve([1,2,3,4,5,6,7], 5)
// > [[1,2,3,4,5], [6,7]]
const splitIntegersInto2DArray = (array, k) => {
  let result = [];
  while (array.length > 0) {
    const subArray = array.slice(0, k);
    result.push(subArray);
    array = array.slice(k);
  }
  return result;
};
console.log(splitIntegersInto2DArray([1, -2, 3, -4], 1));
console.log(splitIntegersInto2DArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(splitIntegersInto2DArray([1, 2, 3, 4, 5, 6, 7], 5));
