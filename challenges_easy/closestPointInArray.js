// Find Closest Point in Array
// You are given a two dimensional array containing arrays of points and a single point P as arguments. Return the point found in the array that is closest to point P.

// Requirements
// Must return an array containing two integers
// Example #1
// solve([[0, 0], [1, 1], [10, 10]], [11, 11])
// > [10, 10]
// Example #2
// solve([[0, 0], [1, 1], [10, 10]], [2, 3])
// > [1,1]
const closestPointArray = (array, p) => {
  let distOne = 0;
  let distTwo = 0;
  for (let elem of array) {
    if (distOne > elem[0] - p[0] && distTwo > elem[1] - p[1]) {
      distOne = elem[0];
      distTwo = elem[1];
    }
  }
  return [distOne, distTwo];
};
console.log(
  closestPointArray(
    [
      [0, 0],
      [1, 1],
      [10, 10],
    ],
    [11, 11]
  )
);
console.log(
  closestPointArray(
    [
      [0, 0],
      [1, 1],
      [10, 10],
    ],
    [2, 3]
  )
);
