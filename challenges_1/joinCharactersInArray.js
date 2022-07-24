// Joining Characters in an Array
// You are give an array of strings and a single character K as arguments. Return a single string containing all of the original strings joined by the character K.

// Requirements
// Must return a string
// Example #1
// solve(["Hi", "there", "how", "are", "you"], "_")
// > "Hi_there_how_are_you"
// Example #2
// solve(["a", "a", "a"], "b")
// > "ababab"
const joinCharactersInArray = (array, k) => array.join(`${k}`);
console.log(joinCharactersInArray(["Hi", "there", "how", "are", "you"], "_"));
console.log(joinCharactersInArray(["a", "a", "a"], "b"));
