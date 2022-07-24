// Remove Duplicated Strings
// You are given an array of strings containing some duplicates as an argument. Return an array without any duplicated strings.

// Requirements
// Must return an array of strings
// Must be able to handle uppercase, lowercase and special characters
// Must also work with strings of words as well as single character strings
// Example #1
// solve(["a","b","b","a","c","d"])
// > ["a","b","c","d"]
// Example #2
// solve(["a","b","b","Hello!","c","goodbye", "Hello!"])
// > ["a","b","Hello!","c","goodbye"]

// const removeDuplicates = (array) => {
//   return [...new Set(array)];
// };

const removeDuplicates = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.includes(array[i])) {
      continue;
    } else {
      result.push(array[i]);
    }
  }
  return result;
};
console.log(removeDuplicates(["a", "b", "b", "a", "c", "d"]));
