const findLargestSum = (array, k) => {
  let max = 0;
  let index = 0;
  let result;
  while (index < array.length) {
    let items = array.slice(index, index + k);
    let sum = items.reduce((sum, item) => sum + item);
    if (sum > max) {
      max = sum;
      result = items;
    }
    index++;
  }
  return result;
};

console.log(findLargestSum([2, 4, 7, 8, 0, -2, 7, 8], 2));
