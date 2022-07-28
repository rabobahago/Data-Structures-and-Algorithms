// Merge and Sort Two Arrays of Integers
// You are given two arrays of integers as arguments.
// \Merge the two arrays into a single array sorted in ascending numerical order, with all duplicates removed.

// Requirements
// Must return an array of integers
// Should also work with negative numbers
// Example #1
// solve([1,2,3,4],[8,9,2,4])
// > [1,2,3,4,8,9]
// Example #2
// solve([-1,2,3,4],[1,8,9,2,4])
// > [-1,1,2,3,4,8,9]

const mergeAndSort = (arrayOne, arrayTwo) => {
  return [...arrayOne, ...arrayTwo].sort((a, b) => a - b);
};
console.log(mergeAndSort([1, 2, 3, 4], [8, 9, 2, 4]));
console.log(mergeAndSort([-1, 2, 3, 4], [1, 8, 9, 2, 4]));
