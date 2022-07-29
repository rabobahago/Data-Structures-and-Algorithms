const matrixRotation = (array) => {
  for (let i = 0; i < array.length; i++) {
    let result = "";
    for (let j = 0; j < array[0].length; j++) {
      result += array[i][j] + "";
    }
    console.log(result);
  }
};
//transpose of a matrix
function transpose(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);
}

let elements = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let t = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 11],
];

console.log(transpose(t));
console.log(matrixRotation(elements));
