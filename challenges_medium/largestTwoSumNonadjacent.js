// Largest Sum of Two Non-Adjacent Elements
// You are given an array of integers as an argument. Return the largest sum that
// can be obtained by adding together two non-adjacent elements.

// Requirements
// Must return a single integer
// Must handle both positive and negative integers
// Example #1
// solve([9, 8, 0, 10, 50])
// > 1045

// 999 and 50 are the two largest non-adjacent integers. We return their sum which is 1045.

// Example #2
// solve([10, -20, 0, 50, 20])
// > 60

// 10 and 50 are the two largest non-adjacent integers. We return their sum which is 60.
const largestNumbersInArrays = (intArray) => {
  let result;
  for (let i = 0; i < intArray.length; i++) {
    for (let j = i + 1; j < intArray.length; j++) {
      let sum = intArray[j];
      if (!result || sum > result) {
        result = intArray[i] + intArray[j];
      }
    }
  }
  return result;
};
console.log(largestNumbersInArrays([9, 8, 0, 10, 0]));
