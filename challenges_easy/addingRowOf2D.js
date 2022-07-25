// Adding Rows of a 2D Array
// You are given a two dimensional array containing arrays of integers as an argument. Find the largest integer that can be obtained by summing all integers along any row or column.

// Inner arrays may or may not contain equal number elements in each.

// Requirements
// Must return an integer
// Example #1
// solve([
//   [1, 2, 5, 1, 5, 1],
//   [0, 4, 5, 7, 7, 3],
//   [1, 6, 7, 1, 7, 8]
// ])
// > 30
// Summing up all integers in row three 1+6,+7+1+7+8 gives us the largest sum, so we return 30.

// Example #2
// solve([
//   [1, 2, 2, 1, 5, 4],
//   [0, 1, 1, 2, 1, 9],
//   [1, 2, 2, 1, 3, 8]
// ])
// > 21
// Summing up all integers in column six 4+9+8 gives us the largest sum, so we return 21.
const addingRowOf2D = (array) => {
  // sum the rows of ab array
  let sumRowsAsArray = array.map((subRow) => {
    console.log(subRow);
    return subRow.reduce((a, b) => a + b, 0);
  });
  //sum the columns of an array
  let sumColsAsArray = [];
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array.length; j++) {
      //if the sumcols don't have that element, it should be set
      if (!sumColsAsArray[i]) sumColsAsArray[i] = array[j][i];
      // else keep the summing
      else sumColsAsArray[i] += array[j][i];
    }
  }
  console.log(sumRowsAsArray);
  console.log(sumColsAsArray);
  // the result is sorted in descending order;
  return [...sumColsAsArray, ...sumRowsAsArray].sort((a, b) => b - a)[0];
};
console.log(
  addingRowOf2D([
    [1, 2, 5, 1, 5, 1],
    [0, 4, 5, 7, 7, 3],
    [1, 6, 7, 1, 7, 8],
  ])
);
console.log(
  addingRowOf2D([
    [1, 2, 2, 1, 5, 4],
    [0, 1, 1, 2, 1, 9],
    [1, 2, 2, 1, 3, 8],
  ])
);
