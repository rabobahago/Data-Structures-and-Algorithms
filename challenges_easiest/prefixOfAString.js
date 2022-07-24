// Prefix of a String
// You are given two single word strings as arguments. Return true if the second string is a prefix of the first.

// Requirements
// Must return true or false
// Example #1
// solve("banner", "bang")
// > false
// Example #2
// solve("hugging", "hug")
// > true
const prefixOfAString = (stringA, stringB) => {
  return stringB === stringA.slice(0, stringB.length) ? true : false;
};
console.log(prefixOfAString("banner", "bang"));
console.log(prefixOfAString("hugging", "hug"));
