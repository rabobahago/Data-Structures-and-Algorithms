// Check if Two Strings With Special Characters are Anagrams
// You are given two strings containing some uppercase, lowercase and special characters. Ignoring special characters, return true if the two strings are anagrams of each other, false if not.

// An anagram is a word made by rearranging the letters of a different word, using all the letters exactly once.

// Treat uppercase and lowercase characters as the same character.

// Requirements
// Must return either true or false
// Example #1
// solve('Hi, how are you!?!?', 'Yeah! Houri Ow!')
// > true

// Example #2
// solve('testing!!', 'beesting!!')
// > false
const specialCharacterAnagram = (stringOne, stringTwo) => {
  let one = removeSpecialCharacter(stringOne);
  let two = removeSpecialCharacter(stringTwo);
  let sortedOne = trimString(one);
  let sortedTwo = trimString(two);
  return sortedOne === sortedTwo;
};
const trimString = (string) => {
  return string.trim().split("").sort().join("");
};
const removeSpecialCharacter = (string) => {
  return string.replace(/[^a-zA-Z]+/g, "").toLowerCase();
};
console.log(specialCharacterAnagram("Hi, how are you!?!?", "Yeah! Houri Ow!"));
console.log(specialCharacterAnagram("testing!!", "beesting!!"));
console.log(specialCharacterAnagram("elbo$%67283838w", "below0900000000"));
