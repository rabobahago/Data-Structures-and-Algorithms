var maximalRectangle = function (matrix) {
  let row = matrix.length;
  if (row === 0) return 0;
  let col = matrix[0].length;
  let dp = Array.from(new Array(row), () => new Array(col));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === "1") {
        dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }
    }
  }
  let maxArea = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let width = Infinity;
      for (let curRow = i; curRow < row; curRow++) {
        width = Math.min(width, dp[curRow][j]);
        if (width === 0) break;
        let height = curRow - i + 1;
        maxArea = Math.max(maxArea, width * height);
      }
    }
  }
  return maxArea;
};
console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
  ])
);
