const intersectionOfAnArrays = (arrayOne, arrayTwo) => {
  let result = [];
  arrayOne.forEach((elem) => {
    if (arrayTwo.includes(elem)) {
      result.push(elem);
    }
  });
  return result;
};
console.log(intersectionOfAnArrays([1, 2, 3, 4, 5], [4, 2]));
console.log(intersectionOfAnArrays([2, 5, 6, 9, 13, 1], [1, 6, 13, 7]));
console.log(intersectionOfAnArrays([1, -2, 3, -4, 5], [-4, -2]));
