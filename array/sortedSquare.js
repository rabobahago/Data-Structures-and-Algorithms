function sortedSquaredArray(array) {
  // Write your code here.
  let sortSquares = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    sortSquares[i] = array[i] * array[i];
  }
  return sortSquares.sort((a, b) => a - b);
}
