// Strings of Anagrams
// You are given an array containing multiple single word strings as an argument. Return true if they are all anagrams of each other.

// An anagram is a word made by rearranging the letters of a different word, using all the letters exactly once.

// Consider upper and lower case characters the same.

// Requirements
// Must return true or false
// Should be able to handle both upper and lowercase letters
// Example #1
// solve(["act","cat","tac"])
// > true
// Example #2
// solve(["act","cat","garden"])
// > false
// Example #3
// solve(["UPPERCASE", "praepuces"])
// > true
const anagramsOfStrings = (array) => {
  return array
    .map((element) => {
      return element.split("").sort().join("").toLowerCase();
    })
    .every((elem, _, arr) => {
      return elem === arr[0];
    });
};
console.log(anagramsOfStrings(["act", "cat", "tac"]));
console.log(anagramsOfStrings(["act", "cat", "garden"]));
console.log(anagramsOfStrings(["UPPERCASE", "praepuces"]));
