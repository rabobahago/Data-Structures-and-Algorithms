// Integers From the End of Array
// You are given an array of integers and an integer K as arguments. Return a new array containing only integers that are K elements from the end of the array.

// Assume that the argument array will always be at least integer K in size.

// Requirements
// Must return an array of integers
// Must handle both negative and positive integers
// Example #1
// solve([1,2,3,4], 2)
// > [3, 4]
// Example #2
// solve([10, 20, 30, 40, 50, 60], 4)
// > [30, 40, 50, 60]
// Example #3
// solve([1,-2,3,-4], 1)
// > [-4]

const integersFromEndOfArrays = (array, k) => {
  //time O(n) and space O(n)
  return array.slice(array.length - k);
};
console.log(integersFromEndOfArrays([1, 2, 3, 4], 2));
//[3, 4]
console.log(integersFromEndOfArrays([10, 20, 30, 40, 50, 60], 4));
//[30, 40, 50, 60]
console.log(integersFromEndOfArrays([1, -2, 3, -4], 1));
//[-4]
