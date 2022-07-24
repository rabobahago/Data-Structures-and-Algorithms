// Movement of a Person Given an Array
// You are given an array containing strings of directions (up, down, left, right) as an argument. Imagine a person standing on a grid at point 0, 0. For each direction in the array of strings, move your person in that direction on the grid. Return the final X,Y point that the person is standing at as an array of two integers.

// Requirements
// Must return an array of two integers
// Example #1
// solve(["up", "up", "down", "left", "left", "right", "up"])
// > [-1, 2]
const movementOfAPersonGivenAnArray = (array) => {
  // the question starting from 0, 0
  return array.reduce(
    ([a, b], curr) => {
      if (curr === "up") return [a, b + 1];
      if (curr === "down") return [a, b - 1];
      if (curr === "left") return [a - 1, b];
      if (curr === "right") return [a + 1, b];
    },
    [0, 0]
  );
};
console.log(
  movementOfAPersonGivenAnArray([
    "up",
    "up",
    "down",
    "left",
    "left",
    "right",
    "up",
  ])
);
