// Find Integer in Array
// You are given an array of integers and an integer N as arguments. Return the number in the array at the index of Integer N.

// Integer N will never be more than the length of the argument array - 1.

// Requirements
// Must return an integer
// Example #1
// solve([20, 30, 40], 0)
// > 20
// Example #2
// solve([3, 0, -1, 8], 2)
// > -1

const findIntegerInArray = (array, N) => {
  for (let i = 0; i < array.length; i++) {
    if (i === N) return array[i];
  }
  return -1;
};
console.log(findIntegerInArray([20, 30, 40], 0));
console.log(findIntegerInArray([3, 0, -1, 8], 2));
console.log(findIntegerInArray([3, 9, 9, 4, 3], 23));
