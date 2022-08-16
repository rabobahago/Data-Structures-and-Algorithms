const rotate180TwoDimensionalArray = (elements) => {
  //transpose
  for (let i = 0; i < elements.length; i++) {
    for (let j = i; j < elements[0].length; j++) {
      let temp = elements[i][j];
      elements[i][j] = elements[j][i];
      elements[j][i] = temp;
    }
  }

  //reverse in row
  for (let i = 0; i < elements.length; i++) {
    let left = 0;
    let right = elements.length - 1;
    while (left < right) {
      let temp = elements[i][left];
      elements[i][left] = elements[i][right];
      elements[i][right] = temp;
      left++;
      right--;
    }
  }
  return elements;
};
//save 90 degree output to a variable
const firstRotate = rotate180TwoDimensionalArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
//the function again to make it 180 degree
console.log(rotate180TwoDimensionalArray(firstRotate));
