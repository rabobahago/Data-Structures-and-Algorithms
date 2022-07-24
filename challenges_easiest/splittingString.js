// Splitting Strings
// You are given a string and integer K as arguments. Split the string into an array of strings, where each element is no longer than K characters long. Return the resulting array.

// The argument string will always be at least K characters long.

// Requirements
// Must return an array of strings
// Example #1
// solve("aabbbcccd", 3)
// > ["aab", "bbc", "ccd"]
// Example #2
// solve("abcdefgh", 5)
// > ["abcde","fgh"]
const splittingString = (string, k) => {
  //time O(n) and O(n)
  let result = [];
  while (string.length > 0) {
    result.push(string.slice(0, k));
    string = string.slice(k);
  }
  return result;
};
console.log(splittingString("aabbbcccd", 3));
console.log(splittingString("abcdefgh", 5));
