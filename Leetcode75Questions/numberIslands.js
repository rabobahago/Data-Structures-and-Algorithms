//Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

const numberIsland = (grid) => {
  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[r].length; c += 1) {
      if (grid[r][c] === "1") {
        count = count + explore(grid, r, c);
      }
    }
  }
  return count;
};

let explore = (grid, r, c) => {
  if (
    r < 0 ||
    r > grid.length - 1 ||
    c < 0 ||
    c > grid[r].length - 1 ||
    grid[r][c] === "0"
  ) {
    return;
  }
  grid[r][c] = "0";
  explore(grid, r + 1, c);
  explore(grid, r - 1, c);
  explore(grid, r, c + 1);
  explore(grid, r, c - 1);
  return 1;
};
console.log(
  numberIsland([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
console.log(
  numberIsland([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
console.log(numberIsland([["1", "0", "1", "1", "0", "1", "1"]]));
