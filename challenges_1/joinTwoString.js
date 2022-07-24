// Join Two Strings
// You are given two strings as arguments. Join the strings and return the result.

// Requirements
// Must return a single string
// Example #1
// solve("ab", "ba")
// > "abba"
// Example #2
// solve("race", "car")
// > "racecar"
const joinTwoString = (strOne, strTwo) => {
  //time O(1) and space O(1)
  return `${strOne}${strTwo}`;
};
console.log(joinTwoString("ab", "ba"));
// abba
console.log(joinTwoString("race", "car"));
//"racecar"
