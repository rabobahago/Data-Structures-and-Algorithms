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
const addTwoNumber = (intOne, intTwo) => {
  //time O(1) and space O(1)
  return Number(intOne) + Number(intTwo);
};
console.log(addTwoNumber(10, 10));
//20
console.log(addTwoNumber(-90, -90));
//180
