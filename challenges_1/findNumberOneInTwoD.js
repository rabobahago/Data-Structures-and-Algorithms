const findNumberOneInTwoD = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
};
console.log(
  findNumberOneInTwoD([
    [1, 4, 2, 1],
    [6, 3, 8, 9],
    [1, 5, 1, 0],
  ])
);
