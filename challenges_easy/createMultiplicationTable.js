// Create a Multiplication Table
// You are given an integer N as an argument. Return a two dimensional array containing arrays of integers that make up a multiplication table from 1x1 to NxN.

// The top left element must be zero.

// Requirements
// Must return a two dimensional array containing arrays of integers
// Example #1
// solve(4)
// >  [[1, 2, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6, 9, 12],
//     [4, 8, 12, 16]]

const createMultiplicationTable = (N) => {
  let table = [];
  for (let i = 1; i <= N; i++) {
    let element = [];
    for (let j = 1; j <= N; j++) {
      element.push(i * j);
    }
    table.push(element);
  }
  return table;
};
console.log(createMultiplicationTable(4));
