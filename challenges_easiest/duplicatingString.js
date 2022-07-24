// Duplicating Strings
// You are given a string and an integer K as arguments. Return an array of strings that is K elements long, where each element is the string that was provided.

// Requirements
// Must return an array of strings
// Must work with uppercase, lowercase and special characters
// Example #1
// solve("abc", 5)
// > ["abc", "abc", "abc", "abc", "abc",]
// Example #2
// solve("Hi!", 3)
// > ["Hi!", "Hi!", "Hi!"]
const duplicatingString = (string, k) => {
  let result = [];
  for (let i = 1; i <= k; i++) {
    result.push(string);
  }
  return result;
};
console.log(duplicatingString("abc", 5));
//['abc', 'abc', 'abc', 'abc', 'abc']
console.log(duplicatingString("Hi!", 3));
//['Hi!', 'Hi!', 'Hi!']
