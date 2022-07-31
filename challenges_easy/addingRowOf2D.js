// Adding Rows of a 2D Array
// You are given a two dimensional array containing arrays of integers as an argument.
//Find the largest integer that can be obtained by summing all integers along any row or column.

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
const addingRowOrColumn = (elements) => {
  const sumOfRows = buildSumOfRows(elements);
  const sumOfColumns = buildSumOfColumns(elements);
  console.log(sumOfColumns);
  return [...sumOfRows, ...sumOfColumns].sort((a, b) => b - a)[0];
};
function buildSumOfRows(elements) {
  let result = [];

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements[i].length; j++) {
      sum += elements[i][j];
    }
    result.push(sum);
  }
  return result;
}
const buildSumOfColumns = (elements) => {
  let result = [];
  // elements[0].length for the column
  for (let i = 0; i < elements[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      console.log(elements[j][i]);
      sum += elements[j][i];
    }
    result.push(sum);
  }
  return result;
};
console.log(
  addingRowOrColumn([
    [1, 2, 5, 1, 5, 1],
    [0, 4, 5, 7, 7, 3],
    [1, 6, 7, 1, 7, 8],
  ])
);
console.log(
  addingRowOrColumn([
    [1, 2, 2, 1, 5, 4],
    [0, 1, 1, 2, 1, 9],
    [1, 2, 2, 1, 3, 8],
  ])
);
