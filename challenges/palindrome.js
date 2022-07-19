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
