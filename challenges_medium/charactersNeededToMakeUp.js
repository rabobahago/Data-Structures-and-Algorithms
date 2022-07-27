// Additional Characters Needed to Make up a String
// You are given a lowercase string and an array of lowercase characters
// as arguments. Return the number of additional characters that would
// need to be added to the array of characters to form the string.

// The array of characters will never include characters that are not found in the argument string.

// Requirements
// Must return a single integer
// Example #1
// solve("terminal", ["t", "m", "l")
// > 5

// The array of characters would need five more characters, "e", "r", "i", "n", "a" to match the argument string, so we return the number 5.

// Example #2
// solve("test", ["t", "s", "t"])
// > 1

// The array of characters would need one more character, "e", to match the argument string, so we return the number 1.
const charactersNeededToMakeUp = (string, array) => {
  return string.length - array.length;
};
console.log(charactersNeededToMakeUp("terminal", ["t", "m", "l"]));
console.log(charactersNeededToMakeUp("test", ["t", "s", "t"]));
