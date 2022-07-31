// Find a Column in 2D Array of All Ones
// You are Given a two dimensional array containing arrays of integers, where each integer is either a 1 or a 0. Return true if any row or column contains only ones, false if not.

// Requirements
// Must return either true or false
// Example #1
// solve([
//   [0, 1, 1, 0, 0, 1],
//   [0, 1, 1, 0, 0, 1],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 1],
//   [0, 1, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 0]
// ])
// > true

// The second column (1st index of all arrays), contains all 1's, so we return true.

// Example #2
// solve([
//   [0, 1, 1, 0, 0, 1],
//   [0, 1, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 0]
// ])
// > false

const findColumnIn2DAllOnes = (array) => {
  //row
  for (let i = 0; i < array.length; i++) {
    if (array[i].every((a) => a === 1)) {
      return true;
    }
  }
  //column

  for (let i = 0; i < array[0].length; i++) {
    let result = [];
    for (let j = 0; j < array.length; j++) {
      result.push(array[j][i]);
    }
    if (result.every((a) => a === 1)) {
      return true;
    }
  }
  return false;
};
console.log(
  findColumnIn2DAllOnes([
    [0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
  ])
);
console.log(
  findColumnIn2DAllOnes([
    [0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
  ])
);
