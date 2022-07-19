const sumAnArrayOfIntegers = (array) => {
  return array.reduce((cur, prev) => cur + prev, 0);
};
console.log(sumAnArrayOfIntegers([1, 5, 4]));
console.log(sumAnArrayOfIntegers([10, -1, -4]));
