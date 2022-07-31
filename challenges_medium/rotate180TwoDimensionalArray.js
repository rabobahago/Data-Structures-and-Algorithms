const rotate180TwoDimensionalArray = (elements) => {
  //transpose
  const transpose = elements.map((_, index) =>
    elements.map((array) => array[index])
  );
  //reverse
  for (let i = 0; i < transpose.length; i++) {
    let left = 0;
    let right = transpose.length - 1;
    while (left < right) {
      let temp = transpose[left][i];
      transpose[left][i] = transpose[right][i];
      transpose[right][i] = temp;
      left++;
      right--;
    }
  }
  return transpose;
};
//save 90 degree output to a variable
const firstRotate = rotate180TwoDimensionalArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
//the function again to make it 180 degree
console.log(rotate180TwoDimensionalArray(firstRotate));
