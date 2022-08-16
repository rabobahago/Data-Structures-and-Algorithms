const rotateImage90Clockwise = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    //do forget that matrix j = i for transpose
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  //reverse clockwise and that why matrix.length
  for (let i = 0; i < matrix.length; i++) {
    //left = 0
    let left = 0;
    //right = matrix.length-1
    let right = matrix.length - 1;
    //while left is less than right
    while (left < right) {
      //because is clockwise i of row will be dynamic, that is
      //matrix[i] then the second [] will be interchanging between left and right.
      //swap
      let temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      //don't forget to decrease and increase right, left respectively
      left++;
      right--;
    }
  }
  return matrix;
};
