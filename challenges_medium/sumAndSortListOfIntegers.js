// Sum and Sort List of Integers
// You are given an array containing some repeated integers as an argument.
// Sum all of the identical integers, then return an array containing the unique integers
// and the sum sorted in ascending order.

// Requirements
// Must return an array of integers
// Must work with negative integers
// Example #1
// solve([5,5,5,5,21])
// > [20, 21]

// Example #2
// solve([-1,-1,1,1,3,3,5])
// > [-2, 2, 5, 6]
const sumAndSortListOfIntegers = (array) => {
  let result = [];
  let sumObj = {};
  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    if (!(elem in sumObj)) sumObj[array[i]] = 1;
    else sumObj[elem]++;
  }
  for (let key in sumObj) {
    const num = Number(key) * sumObj[key];
    result.push(num);
  }
  return result.sort((a, b) => a - b);
};
console.log(sumAndSortListOfIntegers([5, 5, 5, 5, 21]));
console.log(sumAndSortListOfIntegers([-1, -1, 1, 1, 3, 3, 5]));
