// Arrays of Integers
// You are given two arrays of integers as arguments. Return true if they contain the exact same elements in any order.

// Requirements
// Must return either true or false
// Must account for negative integers
// Example #1
// solve([1,2,7],[7,1,2])
// > true
// Example #2
// solve([5,7],[7,1])
// > false
// Example #3
// solve([5,-7],[-7,5])
// > true
const arrayOfIntegers = (arrayOne, arrayTwo) => {
  for (let i = 0; i < arrayOne.length; i++) {
    if (!arrayTwo.includes(arrayOne[i])) {
      return false;
    }
  }
  return true;
};
console.log(arrayOfIntegers([1, 2, 7], [7, 1, 2]));
console.log(arrayOfIntegers([5, 7], [7, 1]));
console.log(arrayOfIntegers([5, -7], [-7, 5]));
