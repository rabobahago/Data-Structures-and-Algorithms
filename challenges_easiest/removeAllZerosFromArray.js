// Remove all Zeros from Array
// You are given an array of integers containing some zeros as an argument. Return an array of integers with all zeros removed, while maintaining the original order.

// Requirements
// Must return an array of integers
// Example #1
// solve([0, 0, 2, 0, 3, 0, 5])
// > [2, 3, 5]
const removeAllZerosFromArray = (array) => {
  let result = [];
  for (let element of array) {
    if (element === 0) continue;
    else result.push(element);
  }
  return result;
};
console.log(removeAllZerosFromArray([0, 0, 2, 0, 3, 0, 5]));
