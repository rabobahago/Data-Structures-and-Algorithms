// Array of Strings From a Pattern
// You are given a string containing single digit integers followed by one more letters as an argument. Interpret the string as a pattern. The integer leading the character will determine how many times that character or series of characters should be repeated as a string. Return an array of strings as specified by the "pattern."

// Requirements
// Must return an array of strings
// Example #1
// solve("3a2z3c")
// > ["a", "a", "a", "z", "z", "c", "c", "c"]
// Example #2
// solve("2abc1xyz")
// > ["abc", "abc", "xyz"]
const pattern = (string) => {
  let num = string.match(/\d+/g);
  let nonNum = string.match(/[a-zA-Z]+/g);
  let result = [];
  for (let i = 0; i < num.length; i++) {
    result.push(new Array(parseInt(num[i])).fill(nonNum[i]));
  }
  return result.flat();
};
//note flate work like spread operators
console.log(pattern("3a2z3c"));
console.log(pattern("2abc1xyz"));
