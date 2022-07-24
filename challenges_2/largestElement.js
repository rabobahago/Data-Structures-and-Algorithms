// Largest Integer in Array Within Range of Arguments
// You are given an array of integers and integers K and M as arguments.
// Find the largest integer between indices K and M, inclusive of K and M.

// Requirements
// Must return a single integer
// Example #1
// solve([6, 3, 8, 5, 3, 10, 33], 2, 5)
// > 10
// The integers between the 2nd and the 5th index are 8, 5, 3 and 10 so we return the largest number 10.
const largestElement = (array, s, m) => {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (i >= s && i <= m) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
  }
  return largest;
};
console.log(largestElement([6, 3, 8, 5, 3, 10, 33], 2, 5));
