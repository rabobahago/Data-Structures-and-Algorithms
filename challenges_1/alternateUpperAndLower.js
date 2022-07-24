// Alternate Between Upper and Lower Case Characters
// You are given an array of lowercase single string characters as an argument. Return the same array but with each character alternating lowercase, then uppercase.

// Requirements
// Must return an array of strings
// Example #1
// solve(['a', 'b', 'c', 'd', 'e'])
// > ['a', 'B', 'c', 'D', 'e']
const alternateUpperAndLower = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      result.push(array[i].toUpperCase());
    } else {
      result.push(array[i].toLowerCase());
    }
  }
  return result;
};
console.log(alternateUpperAndLower(["a", "b", "c", "d", "e"]));
