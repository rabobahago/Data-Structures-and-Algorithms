// Remove the First Element in Array
// You are given an array of strings as an argument. Return a new array containing all elements from the original array excluding the first element.

// The argument array will always be at least two elements long.

// Requirements
// Must return an array of strings
// Example #1
// solve(["pears", "apples", "oranges"])
// > ["apples", "oranges"]
// Example #2
// solve(["apples", "apples"])
// > ["apples"]
const removeFirstElement = (array) => {
  return array.slice(1);
};
console.log(removeFirstElement(["pears", "apples", "oranges"]));
console.log(removeFirstElement(["apples", "apples"]));
