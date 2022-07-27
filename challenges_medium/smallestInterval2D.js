// Smallest Interval in 2D Array
// You are given a two dimensional array of integers as an argument. Return the smallest interval found across a single column.

// Requirements
// Must return an array of two integers
// Example #1
// solve([
//   [1,   1000, 20],
//   [50,  1001, 60],
//   [100, 1002, 80],
// ])
// > [1000, 1002]

// Column 1 range is \[1,100], column 2 range is \[1000,1002] and column 3 range is \[20,80].
// We return \[1000,1002] which contains the smallest interval of the three.
// Example #1
// solve([
//   [1,   1000, 10],
//   [50,  1005, 20],
//   [100, 2000, 30],
// ])
// > [10, 30]

// Column 1 range is \[1,100], column 2 range is \[1000,2000] and column 3 range is \[10,30].
// We return \[10,30] which contains the smallest interval of the three.
const smallestInterval2D = (array) => {
  let result = [];
  let col = [];
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array[1].length; j++) {
      if (!col[i]) {
        col[i] = [array[j][i]];
      } else {
        col[col.length - 1].push(array[j][i]);
      }
    }
  }
  for (let i = 0; i < col.length; i++) {
    const value = col[i][col[i].length - 1] - col[i][0];
    result.push({
      smallest: value,
      arr: [col[i][0], col[i][col[i].length - 1]],
    });
  }
  let min = Math.min(...result.map((a) => a.smallest));
  return result.find((a) => a.smallest === min).arr;
};
console.log(
  smallestInterval2D([
    [1, 1000, 10],
    [50, 1005, 20],
    [100, 2000, 30],
  ])
);
console.log(
  smallestInterval2D([
    [1, 1000, 20],
    [50, 1001, 60],
    [100, 1002, 80],
  ])
);
