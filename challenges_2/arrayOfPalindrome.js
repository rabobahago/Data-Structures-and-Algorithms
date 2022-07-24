// Return Array with all Palindromes Found in String
// You are given a lowercase string, which contains at least one 2 or 3 character palindrome as an argument. Return an array of strings containing all the palindromes found in the argument string.

// Palindromes are strings that form the same word if it is reversed.
// Requirements
// Must return an array of strings
// Example #1
// solve('ababa')
// > ['aba', 'aba']
// Example #2
// solve('rdrairekeaca'')
// > ['rdr','eke','aca']
const isPalindrome = (string) => {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result === string;
};
const arrayOfPalindromes = (string) => {
  let result = [];
  for (let i = 0; i < string.length - 2; i++) {
    const substr = string.substring(i, i + 3);
    if (isPalindrome(substr)) {
      result.push(substr);
    }
  }
  return result;
};
console.log(arrayOfPalindromes("ababa"));
console.log(arrayOfPalindromes("rdrairekeaca"));
