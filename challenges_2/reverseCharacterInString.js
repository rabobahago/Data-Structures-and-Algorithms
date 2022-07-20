// Reverse Characters in a String
// You are given a string that forms a sentence as an argument. Reverse the characters in each word, but not the words themselves. Return the resulting string.

// Requirements
// Must return a single string
// Must handle uppercase and lowercase characters
// Special characters should also be reversed.
// Example #1
// solve("How are you?")
// > "woH era ?uoy"

const reverseCharacterInString = (string) => {
  let result = [];
  for (let char of string.split(" ")) {
    result.push(char.split("").reverse().join(""));
  }
  return result;
};
console.log(reverseCharacterInString("How are you?"));
