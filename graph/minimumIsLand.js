const minimumIsLand = (grid) => {
  let visited = new Set();
  let min = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let size = explored(grid, r, c, visited);
      //check if the island is at (0,0)
      //increase a check with size > 0 && the check for minimum
      if (size > 0 && size < min) {
        min = size;
      }
    }
  }
  return min;
};
const explored = (grid, r, c, visited) => {
  const pos = r + ", " + c;
  let size = 1;
  const rowInBound = 0 <= r && r < grid.length;
  const colInBound = 0 <= c && c < grid[0].length;
  if (!rowInBound || !colInBound) return 0;
  if (grid[r][c] === "W") return 0;
  if (visited.has(String(pos))) return 0;
  visited.add(String(pos));
  size += explored(grid, r - 1, c, visited);
  size += explored(grid, r + 1, c, visited);
  size += explored(grid, r, c - 1, visited);
  size += explored(grid, r, c + 1, visited);
  return size;
};
const grid = [
  ["W", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "L", "W"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];
console.log(minimumIsLand(grid));
