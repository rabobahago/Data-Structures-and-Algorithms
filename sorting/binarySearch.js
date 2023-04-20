const binarySearch = (array, num) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] == num) {
      return true;
    } else if (num > array[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return false;
};
console.log(binarySearch([1, 2, 3, 4], 4));
console.log(binarySearch([1, 2, 3, 4], 5));
