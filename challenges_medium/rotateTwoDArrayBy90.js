// Rotate a 2D Array Matrix by 90 Degrees
// You are given a two dimensional array containing arrays of
// integers representing a matrix and a single string of either 'right'
// or 'left' as arguments. Rotate the matrix by 90 degrees in the direction
// specified by the argument string and return the resulting 2D array.

// Requirements
// Must return a two dimensional array of integer arrays
// Example #1
// solve([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ], "right")
// > [
//  [9, 5, 1],
//  [10, 6, 2],
//  [11, 7, 3],
//  [12, 8, 4]
// ]
// Example #2
// solve([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ], "left")
// > [
//  [4,8,12],
//  [3,7,11],
//  [2,6,10],
//  [1,5,9]
// ]
//time O(n * n) and space complexity O(1)
const rotateTwoDArrayBy90 = (array, string) => {
  let result;
  if (string === "right") {
    let rows = array.map((_, index) =>
      array.map((row) => row[index]).reverse()
    );
    result = rotateRows(rows);
  } else {
    let columns = array.map((_, index) => array.map((row) => row[index]));
    result = rotateColumns(columns);
  }
  return result;
};

const rotateRows = (array) => {
  //this is done for row
  for (let i = 0; i < array.length; i++) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      let temp = array[i][left];
      array[i][left] = array[i][right];
      array[i][right] = temp;
      left++;
      right--;
    }
  }
  return array;
};

function rotateColumns(array) {
  // note the number of elements in the first row give you number of columns;

  for (let j = 0; j < array[0].length; j++) {
    let left = 0;
    //the j loop above has cover the
    //array[0].length,
    // so right = array.length-1
    let right = array.length - 1;
    while (left < right) {
      let temp = array[left][j];
      array[left][j] = array[right][j];
      array[right][j] = temp;
      //decrease right and increase left;
      left++;
      right--;
    }
  }
  return array;
}
console.log(
  rotateTwoDArrayBy90(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    "right"
  )
);

console.log(
  rotateTwoDArrayBy90(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    "left"
  )
);
