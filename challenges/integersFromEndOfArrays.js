const integersFromEndOfArrays = (array, k) => {
  return array.slice(array.length - k);
};
console.log(integersFromEndOfArrays([1, 2, 3, 4], 2));
//[3, 4]
console.log(integersFromEndOfArrays([10, 20, 30, 40, 50, 60], 4));
//[30, 40, 50, 60]
console.log(integersFromEndOfArrays([1, -2, 3, -4], 1));
//[-4]
