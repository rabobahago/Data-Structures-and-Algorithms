const medianOfArray = (array) => {
  let start = 0;
  let end = array.length;
  array.sort((a, b) => a - b);
  let mid = Math.floor((start + end) / 2);
  return array[mid];
};
console.log(medianOfArray([1, 5, 4, 3, 2]));
console.log(medianOfArray([-5, -12, 3, -3, 95]));
