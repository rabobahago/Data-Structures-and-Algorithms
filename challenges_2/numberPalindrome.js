// Palindromic Numbers
// You are given a non-negative integer as an argument. Return true if it is a palindrome, false if not.

// Palindromic numbers will form the same number if it is reversed.

// The argument integer will always have an odd number of digits.

// Requirements
// Must return either true or false
// Example #1
// solve(5110115)
// > true
// Example #2
// solve(12355)
// > false
const numberPalindrome = (number) => {
  number = number.toString();
  let str = "";
  for (let i = number.length - 1; i >= 0; i--) {
    str += number[i];
  }
  return str === number;
};
console.log(numberPalindrome(5110115));
console.log(numberPalindrome(12355));
