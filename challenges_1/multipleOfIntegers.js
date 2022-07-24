// Multiples of Integers
// You are given an array of integers and an integer K as arguments. Return true if each integer is an even multiple of integer K.

// Requirements
// Must return either true or false
// Example #1
// solve([2, 4, 6, 8], 2)
// > true

// 2, 4, 6 and 8 are all multiples of 2

// Example #2
// solve([12, 14, 36, 18], 9)
// > false

// Only 18 and 36 are multiples of 9

const multipleOfIntegers = (array, k) => {
  //time O(n) and O(1)
  for (let i = 0; i < array.length; i++) {
    if (array[i] % k !== 0) return false;
  }
  return true;
};
console.log(multipleOfIntegers([2, 4, 6, 8], 2));
console.log(multipleOfIntegers([12, 14, 36, 18], 9));
