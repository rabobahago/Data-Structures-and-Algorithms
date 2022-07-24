// Add Arrays Like Single Numbers
// You are given two arrays containing single digit integers as arguments. Interpret all of the elements in the arrays as one large single number instead of individual numbers and add them together. Return the resulting sum as an array of individual single digit integers.

// Requirements
// Must return an array of integers
// Example #1
// solve([1, 8, 7, 6], [1, 2, 3, 4])
// > [3, 1, 1, 0]

// We add the number 1876 with 1234 to get 3110.
// We then return this as an array of single digits \[3, 1, 1, 0].
const singleNumbers = (arrayOne, arrayTwo) => {
  let result = [];
  const numberOne = parseInt(convertToString(arrayOne));
  const numberTwo = parseInt(convertToString(arrayTwo));
  const total = numberOne + numberTwo;
  for (let char of total.toString()) {
    result.push(parseInt(char));
  }
  return result;
};
const convertToString = (array) => {
  let sum = "";
  for (let i = 0; i < array.length; i++) {
    sum += array[i].toString();
  }
  return sum;
};
console.log(singleNumbers([1, 8, 7, 6], [1, 2, 3, 4]));
