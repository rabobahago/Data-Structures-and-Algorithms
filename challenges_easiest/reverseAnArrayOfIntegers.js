// Reversing an Array of Integers
// You are given an array of integers as an argument. Reverse the elements in the array without using any built in 'reverse' functions and return it.

// Requirements
// Must return an array of integers
// Example #1
// solve([1,2,3,4,5)
// > [5,4,3,2,1]
const reverseAnArrayOfIntegers = (array) => {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};
console.log(reverseAnArrayOfIntegers([1, 2, 3, 4, 5]));
