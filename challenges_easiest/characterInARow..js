// Find Identical Characters in a Row
// You are given a single word string as an argument. Return true if it contains two identical characters in a row, false if not.

// Requirements
// Must return true or false
// Should also work with special characters
// Example #1
// solve("terrific")
// > true
// Example #2
// solve("cats")
// > false
// Example #3
// solve("cats!!")
// > true
const characterInARow = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(characterInARow("terrific"));
console.log(characterInARow("cats"));
console.log(characterInARow("cats!!"));
