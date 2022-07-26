// Longest Common Prefix
// You are given an array of lowercase strings as an argument. Return the longest common prefix of all strings.

// Requirements
// Must return a string
// Must be able to compare more than two strings
// Example #1
// solve(["antiquated", "antilope"])
// > "anti"
// Example #2
// solve(["california", "calibrated"])
// > "cali"
// Example #3
// solve(["test","testing","tester"])
// > "test"
const longestCommonPrefix = (array) => {
  let prefix;
  let count = 1;
  const min = Math.min(...array.map((a) => a.length));
  for (let i = 0; i < min; i++) {
    let composeCharacter = array.every((c) => {
      return c.slice(0, count) === array[array.length - 1].slice(0, count);
    });
    if (composeCharacter) {
      prefix = array[array.length - 1].slice(0, count);
      count++;
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(["test", "testing", "tester"]));
