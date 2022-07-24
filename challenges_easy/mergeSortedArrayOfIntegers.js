// Merging Sorted Array of Integers
// You are given two sorted arrays of integers as arguments. Return a new array combining elements from both arrays in sorted order.

// There will never be duplicate integers in either array.

// Requirements
// Must return an array of integers
// Should work with both positive and negative integers
// Example #1
// solve([1, 10, 20], [2, 3, 15])
// > [1,2,3,10,15,20]
// Example #2
// solve([-1, 0, 5], [-2, 3, 15])
// > [-2,-1,0,3,5,15]

const mergeSortedArrayOfIntegers = (arrayOne, arrayTwo) => {
  return [...arrayOne, ...arrayTwo].sort((a, b) => a - b);
};
console.log(mergeSortedArrayOfIntegers([1, 10, 20], [2, 3, 15]));
console.log(mergeSortedArrayOfIntegers([-1, 0, 5], [-2, 3, 15]));
