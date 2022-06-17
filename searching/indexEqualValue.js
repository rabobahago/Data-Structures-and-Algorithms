//First solution
//time complexity of O(log(n)) and space complexity of O(1)
function indexEqualsValue(array) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let middleValue = array[middle];
    if (middleValue < middle) {
      left = middle + 1;
    } else if (middleValue === middle && middle === 0) {
      return middle;
    } else if (middleValue === middle && array[middle - 1] < middle - 1) {
      return middle;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

//second solution but naive implementation
//time complexity of O(n) and space complexity of O(1)
function indexEqualsValue(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === array[i]) {
      return i;
    }
  }
  return -1;
}
