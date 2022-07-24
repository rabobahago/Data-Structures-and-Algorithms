// Array of Strings Without Special Characters
// You are given a string representing a sentence as an argument. Return an array with each word from the string as separate string element, removing any special characters, punctuation or spaces.

// Requirements
// Must return an array of strings
// The original upper or lower casing should be maintained
// Example #1
// solve("Hi, how are you; I was quite curious!")
// > ["Hi", "how", "are", "you", "I", "was", "quite", "curious"]
// Example #2
// solve("Hello!!! The- sun- is- shining?")
// > ["Hello", "The", "sun", "is", "shining"]

const withoutSpecialCharacter = (string) => {
  let result = [];
  const matchReplace = string.replace(/[^a-zA-Z0-9]/g, " ");
  for (let char of matchReplace.split(" ")) {
    if (char === "") continue;
    else result.push(char);
  }
  return result;
};
console.log(withoutSpecialCharacter("Hi, how are you; I was quite curious!"));
console.log(withoutSpecialCharacter("Hello!!! The- sun- is- shining?"));
