// Check if a String is a Palindrome
// You are given a lowercase string as an argument. Return true if the string is a palindrome, false if it is not.

// Palindromes are strings that form the same word if it is reversed.

// Requirements
// Must return true or false
// Special characters should be considered part of the string
// Must account for spaces
// Example #1
// solve("abba")
// > true
// Example #2
// solve("racecar!")
// > false
// Example #3
// solve("ab ba")
// > true
// Example #4
// solve("race car")
// > false
const palindrome = (string) => {
  let result = "";
  for (var i = 0; i < string.length; i++) {
    result = string[i] + result;
  }
  return result === string;
};
console.log(palindrome("abba"));
console.log(palindrome("racecar!"));
console.log(palindrome("ab ba"));
console.log(palindrome("race car"));
