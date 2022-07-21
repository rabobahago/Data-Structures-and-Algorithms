// Find Two Duplicate Strings
// You are given an array of lowercase strings as an argument. Return an array containing the first two duplicate strings found in the original array.

// Requirements
// Must return an array containing two strings
// Example #1
// solve(["a","b","d","xyz","xy","a","d"])
// > ["a", "d"]

// Example #2
// solve(["aa","here","d","somewhere","xy","here","somewhere","d"])
// > ["here", "somewhere"]
const twoDuplicates = (array) => {
  let duplicate = [];
  let result = [];
  for (let elem of array) {
    if (result.includes(elem)) {
      duplicate.push(elem);
    } else {
      result.push(elem);
    }
  }
  return duplicate.slice(0, 2);
};
console.log(twoDuplicates(["a", "b", "d", "xyz", "xy", "a", "d"]));
console.log(
  twoDuplicates([
    "aa",
    "here",
    "d",
    "somewhere",
    "xy",
    "here",
    "somewhere",
    "d",
  ])
);
