// Movement on an X-Y Plane with 2D Arrays
// You are given a two dimensional array of integer pairs as an argument. Each integer pair represents movement on the X-Y plane. Starting at (0,0), apply each movement pair, then return the point that you end at.

// Requirements
// Must return an array of two integers
// Example #1
// solve([[1, 0], [0,-3], [3,3]])
// > [4,0]

// We start out at 0,0.
// We apply the first point 1,0 and go to the right 1 on the X axis and stay at 0 for the Y axis.
// We are now at points 1,0
// Moving to the second point 0,-3 we don't move for the X axis and move down 3 for the Y axis.
// We are now at points 1,-3
// Moving to the last point 3,3 we move to the right 3 on the X axis and up 3 on the Y axis.
// We are now at points 4,0 so we return \[4,0]
const movementOn2D = (array) => {
  return array.reduce(([a, b], [x, y]) => [a + x, b + y], [0, 0]);
};
console.log(
  movementOn2D([
    [1, 0],
    [0, -3],
    [3, 3],
  ])
);
