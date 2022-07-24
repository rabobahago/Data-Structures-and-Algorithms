// Swap Upper and Lower Case Characters in a String
// You are given a string containing both upper case and lower case characters as an argument. Swap the casing of all characters and return the resulting string.

// Requirements
// Must return a string
// Must work with special characters like punctuation
// Example #1
// solve('Hi Alex, will I see you in May?')
// > 'hI aLEX, WILL i SEE YOU IN mAY?'
const swapUpperLower = (string) => {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      str += string[i].toUpperCase();
    } else {
      str += string[i].toLowerCase();
    }
  }
  return str;
};
console.log(swapUpperLower("Hi Alex, will I see you in May?"));
