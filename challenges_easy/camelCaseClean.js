// Camel Case and Clean a String
// You are given a string as an argument. Return the camel case of the string and remove any spaces, integers, or non-letter characters.

// Requirements
// Must return a string
// Should also handle more than two words
// Example #1
// solve("Hello! you!")
// > "helloYou"
// Example #2
// solve("2 things 2 remember")
// > "thingsRemember"
// Example #2
// solve("Seven Years Ago...")
// > "sevenYearsAgo"

const camelCaseClean = (string) => {
  let result = "";
  let str = string.replace(/[^a-zA-Z]+/g, " ");
  str = str.trim().toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    if (i === 0) {
      result += word;
    } else {
      result += word[0].toUpperCase() + word.slice(1);
    }
  }
  return result;
};
console.log(camelCaseClean("2 things 2 remember"));
console.log(camelCaseClean("Seven Years Ago..."));
