// Reverse List of Strings
// You are given an array containing multiple strings as an argument. Return a new array that has all of the strings listed in opposite order

// Requirements
// Must return an array of strings
// Must work with upper and lowercase letters as well as special characters
// Example #1
// solve(["Cat","Dog","Skunk","Bird"])
// > ["Bird","Skunk","Dog","Cat"]
// Example #2
// solve(["owl","ferret","Mouse!","Eagle"])
// > ["Eagle","Mouse!","ferret","owl"]
const reverseAListString = (array) => {
  return array.reverse();
};
console.log(reverseAListString(["Cat", "Dog", "Skunk", "Bird"]));
console.log(reverseAListString(["owl", "ferret", "Mouse!", "Eagle"]));
