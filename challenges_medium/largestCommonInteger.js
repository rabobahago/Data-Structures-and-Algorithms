// Largest Common Integer
// You are given two sorted arrays of integers and an integer K as arguments.
// Return the Kth largest common number between the two arrays.

// The argument array will always have at least K number of common numbers.

// Requirements
// Must return a single integer
// Example #1
// solve([1,2,3,4,5],[1, 3, 5],2)
// > 3

// Determine the common integers found in both arrays, which are 1, 3 and 5.
// The order of common integers from largest to smallest is 5,3,1.
// Since K=2 we return the second largest common number, 3.
const largestCommonInteger = (arrayOne, arrayTwo, K) => {
  let largest;
  let commonInteger = [];
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayTwo.includes(arrayOne[i])) commonInteger.push(arrayOne[i]);
  }
  let sortedCommon = commonInteger.sort((a, b) => a - b);
  for (let i = 0; i < sortedCommon.length; i++) {
    if (i === K - 1) {
      largest = sortedCommon[i];
    }
  }
  return largest;
};
console.log(largestCommonInteger([1, 2, 3, 4, 5], [1, 3, 5], 2));
