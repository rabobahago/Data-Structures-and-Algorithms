// Replacing Characters with other Characters
// You are given a string containing only the characters 'a' and 'b' as an argument.
// Return a new string where each 'a' is turned into 'bb' and each 'bb' is turned into 'a'.

// Requirements
// Must return a string
// Example #1
// solve("aabbbbbb")
// > "bbbbaaa"
// Example #2
// solve("bbabb")
// > "abba"
const replacingCharacterWithOthers = (string) => {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      str += "bb";
    } else {
      if (string[i + 1] === "b") {
        str += "a";
        i++;
      }
    }
  }
  return str;
};
console.log(replacingCharacterWithOthers("aabbbbbb"));
console.log(replacingCharacterWithOthers("bbabb"));
