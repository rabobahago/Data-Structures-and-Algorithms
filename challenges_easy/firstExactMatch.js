// Find the First Exact Match in an Array of Strings
// You are given an array of single characters and an array of lowercase strings
// as arguments. Return the first string that contains all of the characters from the array of characters.

// Requirements
// Must return a string
// Example #1
// solve(['p', 'p', 'l', 'a', 'e'], ['orange', 'banana', 'apple'])
// > 'apple'
// Example #2
// solve(['p', 'p', 'l', 'a', 'e'], ['applesauce', 'orange', 'banana', 'apple'])
// > 'applesauce'
// Even though apple is an exact match, we return applesauce since it is the
// first string to include all of the characters in the character array.
const firstExactMatch = (first, second) => {
  let strFirst = "";
  for (let char of first.sort()) {
    strFirst += char;
  }
  let result = [];
  for (let char of second) {
    result.push(char.split("").sort().join(""));
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === strFirst) {
      return second[i];
    }
  }
  return -1;
};
console.log(
  firstExactMatch(["p", "p", "l", "a", "e"], ["orange", "banana", "apple"])
);
console.log(
  firstExactMatch(
    ["p", "p", "l", "a", "e", "s", "c", "u", "a", "e"],
    ["applesauce", "orange", "banana", "apple"]
  )
);
