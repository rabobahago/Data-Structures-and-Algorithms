// Sorting a 2D Array Without Changing Inner Array Length
// You are given a two dimensional array containing arrays of integers as an argument.
// Sort the integer elements of the inner arrays in ascending numerical order,
// while maintaining the length of the inner arrays.

// Requirements
// Must return an a two dimensional array containing integer arrays
// Inner arrays must be exactly same length as in the given 2D argument array.
// Must account for inner arrays with all different sizes
// Example #1
// solve([[3,2,6],[1],[7,4],[5]])
// > [[1,2,3],[4],[5,6],[7]]
// Example #2
// solve([[3],[6],[1],[7],[4],[5,10]])
// > [[1],[3],[4],[5],[6],[7,10]]
const sortingTwoDArrayWithoutChange = (array) => {
  let result = [];
  let flatArray = array.flat().sort((a, b) => a - b);
  let arrayLength = array.map((ar) => ar.length);
  for (let i = 0; i < arrayLength.length; i++) {
    let num = arrayLength[i];
    result.push(flatArray.splice(0, num));
  }
  return result;
};
console.log(sortingTwoDArrayWithoutChange([[3, 2, 6], [1], [7, 4], [5]]));
const elem = [
  [1, 2],
  [4, 6],
];
console.log(sortingTwoDArrayWithoutChange([[3], [6], [1], [7], [4], [5, 10]]));
function lastCol(elem) {
  for (let j = 0; j < elem[0].length; j++) {
    console.log(elem[0][j]);
  }
}
lastCol(elem);
