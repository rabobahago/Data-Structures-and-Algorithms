// Sorting Points in a 2D Array by Distance from Origin
// You are given a two dimensional array containing arrays of
// integer pairs as an argument. Each inner array represents an X,Y coordinate.
// Return a two dimensional array with the points sorted by their distance
// from the origin point 0, 0 in ascending numerical order.

// Requirements
// Must return a two dimensional array containing arrays of integer pairs
// Example #1
// solve([
//   [3, 3],
//   [5, 5],
//   [1000, 0],
//   [0, 0]
// ])
// > [
//    [0, 0],
//    [3, 3],
//    [5, 5],
//    [1000, 0]
// ]
const sortPointsInTwoArray = (array) => {
  return array.sort((a, b) => a[0] - b[0]);
};
console.log(
  sortPointsInTwoArray([
    [3, 3],
    [5, 5],
    [1000, 0],
    [0, 0],
  ])
);
