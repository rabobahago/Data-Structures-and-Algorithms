// Largest Integer in Array, Smaller Than K
// You are given an unsorted array of integers and an integer K as arguments. Find the largest integer in the array that is smaller than K.

// Requirements
// Must return an integer
// Example #1
// solve([4, 3, 2, 6, 10], 5)
// >4
// Example #2
// solve([4, 3, 2, 6, 10], 9)
// >6
const largestArray = (array, k) => {
  const sorted = array.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > k) {
      return sorted[i - 1];
    }
  }
  return -1;
};

console.log(largestArray([4, 3, 2, 6, 10], 5));
console.log(largestArray([4, 3, 2, 6, 10], 9));
