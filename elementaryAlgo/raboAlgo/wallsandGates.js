// You are given a m x n 2D grid initialized with these three possible values.

// -1 - A wall or an obstacle. 0 - A gate. INF - Infinity means an empty room.
// We use the value 231 - 1 = 2147483647 to represent INF as you may assume that
// the distance to a gate is less than 2147483647. Fill each empty room with the
// distance to its nearest gate. If it is impossible to reach a gate, it should be
// filled with INF.

let directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

var numIslands = function (grid) {
  if (grid.length == 0) return 0;

  let row = grid.length - 1;
  let col = grid[0].length - 1;
  let count = 0;

  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      if (grid[i][j] == "1") {
        BFS(i, j, row, col, grid);
        count++;
      }
    }
  }

  return count;
};

let BFS = function (i, j, row, col, grid) {
  let queue = [[i, j]];
  grid[i][j] = "-1";
  while (queue.length) {
    let [currRow, currCol] = queue.pop();

    for (let dir of directions) {
      let [r, c] = dir;

      r = currRow + r;
      c = currCol + c;

      if (
        r < 0 ||
        r > row ||
        c < 0 ||
        c > col ||
        grid[r][c] == "-1" ||
        grid[r][c] == "0"
      )
        continue;

      grid[r][c] = "-1";
      queue.push([r, c]);
    }
  }
};
let INF = 2187983647;
console.log(
  numIslands([
    [INF, -1, 0, INF],
    [INF, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF],
  ])
);
