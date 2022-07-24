// Find String in Array of Strings
// You are given an array of strings and a single string as arguments. Return true if the single string is also present in the array.

// Requirements
// Must return either true or false
// Example #1
// solve(['apple', 'orange', 'banana'], 'orange' )
// > true
// Example #2
// solve(['apple', 'orange', 'banana'], 'pear' )
// > false
const findAString = (array, k) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === k) return true;
  }
  return false;
};
console.log(findAString(["apple", "orange", "banana"], "orange"));
console.log(findAString(["apple", "orange", "banana"], "pear"));
