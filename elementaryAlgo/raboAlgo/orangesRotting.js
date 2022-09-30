const orangesRotting = (grid) => {
  let queue = [],
    time = 0,
    oranges = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) oranges++;
      else if (grid[row][col] === 2) queue.push([row, col, 0]);
    }
  }
  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  while (queue.length && oranges) {
    const [rRow, cCol, mins] = queue.shift();
    if (grid[rRow][cCol] === 1) {
      grid[rRow][cCol] = 2;
      oranges--;
      time = mins;
    }
    for (let [r, c] of dir) {
      let nextRow = r + rRow,
        nextCol = c + cCol;
      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= grid.length ||
        nextCol >= grid[0].length
      )
        continue;
      if (grid[nextRow][nextCol] === 1) {
        queue.push([nextRow, nextCol, mins + 1]);
      }
    }
  }
  return oranges ? -1 : time;
};
