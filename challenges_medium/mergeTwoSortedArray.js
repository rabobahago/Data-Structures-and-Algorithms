// Merging Two Sorted Arrays of Strings
// You are given two sorted arrays of lowercase strings as arguments.
// Merge the arrays of strings into one alphabetically sorted array and return the result. The two arrays might be of different length.

// Requirements
// Must return an array of strings
// Example #1
// solve(["x","y","z"],["r","s","w"])
// > ["r","s","w","x","y","z"]
const mergeTwoSortedArray = (arrayOne, arrayTwo) => {
  return [...arrayOne, ...arrayTwo].sort();
};
console.log(mergeTwoSortedArray(["x", "y", "z"], ["r", "s", "w"]));
