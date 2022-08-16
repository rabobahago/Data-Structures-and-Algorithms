// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
//Time complexity O(3n^L)== O(n^L) exponential
const searchWords = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && dfs(board, word, i, j, 0)) return true;
    }
  }
  return false;
};
function dfs(board, word, r, c, index) {
  if (word.length === index) return true;
  if (
    c < 0 ||
    c >= board[0].length ||
    r < 0 ||
    r >= board.length ||
    board[r][c] !== word[index]
  )
    return false;
  board[r][c] = "#";
  if (
    dfs(board, word, r + 1, c, index + 1) ||
    dfs(board, word, r - 1, c, index + 1) ||
    dfs(board, word, r, c + 1, index + 1) ||
    dfs(board, word, r, c - 1, index + 1)
  )
    return true;
  board[r][c] = word[index];
}
let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCCED";
console.log(searchWords(board, word));
