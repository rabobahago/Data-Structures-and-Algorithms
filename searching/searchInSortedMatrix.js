function searchInSortedMatrix(matrix, target) {
  //first row
  let row = 0;
  //the last value in the first row
  let col = matrix[0].length - 1;
  //while coordinate are still valid postion in the matrix
  while (row < matrix.length && col >= 0) {
    //when the element in the matrix is greater than the target sum
    //decreases the col or move leftward
    if (matrix[row][col] > target) {
      col--;
      //when the element in the matrix is greater than the target sum
      //increase the row or move downward
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      //else the target some is fund
      return [row, col];
    }
  }
  //out of the while loop, can't find the target
  return [-1, -1];
}
//it time complexity of O(N + M), and space Complexity of O(1)
