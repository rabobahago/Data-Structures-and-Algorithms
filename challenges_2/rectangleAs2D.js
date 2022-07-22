// Return a Rectangle as a 2D array
// You are given a two dimensional array containing two arrays of integer pairs as an argument. The first inner array pair represents the bottom left point of a rectangle, and the second inner array pair represents the top right point of the rectangle.

// Return a two dimensional array representing the same rectangle but instead with the first inner array containing the the bottom left point of the rectangle and the second inner array containing the height and width of the rectangle.

// Requirements
// Must return a two dimensional array containing two arrays of integer pairs.
// Example #1
// solve([[10, 5], [23, 8]])
// > [[10,5], [13, 3]]
// Example #2
// solve([[3, 9], [5, 15]])
// > [[3, 9], [6, 2]]
const rectangleAs2D = (array) => {
  let result = [];
  let v1,
    w1 = 0;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      [v1, w1] = array[i];
      result.push(array[i]);
    } else {
      const [x1, y1] = array[i];
      result.push([Math.abs(x1 - v1), Math.abs(y1 - w1)]);
    }
  }
  return result;
};
console.log(
  rectangleAs2D([
    [10, 5],
    [23, 8],
  ])
);
console.log(
  rectangleAs2D([
    [3, 9],
    [5, 15],
  ])
);
