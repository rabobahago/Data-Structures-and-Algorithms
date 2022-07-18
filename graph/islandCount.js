const isLand = (grid) => {
  let count = 0;
  let visited = new Set();
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }
  return count;
};
const explore = (grid, r, c, visited) => {
  let rowInBound = 0 <= r && r < grid.length;
  let colInBound = 0 <= c && c < grid.length;
  if (!colInBound || !rowInBound) return false;
  if (grid[r][c] === "W") return false;
  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);
  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  return true;
};
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "L", "W"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];
console.log(isLand(grid));
