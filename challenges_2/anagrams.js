// Anagrams
// You are given two strings as arguments. Return true if the strings are anagrams of each other.

// An anagram is a word made by rearranging the letters of a different word, using all the letters exactly once.

// The argument string will not have any special characters or punctuation. Treat upper and lower case characters as the same character.

// Requirements
// Must return either true or false
// Must also work with strings that have multiple words separated by a space
// Example #1
// solve("listen", "silent")
// > true
// Example #2
// solve("dog", "cat")
// > false
// Example #3
// solve("Debit card", "bad Credit")
// > true
// Example #4
// solve("Hi There", "Bye There")
// > false
const anagram = (stringOne, stringTwo) => {
  return convertFunc(stringOne) === convertFunc(stringTwo);
};
const convertFunc = (string) => {
  return string.toLowerCase().split("").sort().join("");
};
console.log(anagram("listen", "silent"));
console.log(anagram("dog", "cat"));
console.log(anagram("Debit card", "bad Credit"));
console.log(anagram("Hi There", "Bye There"));
