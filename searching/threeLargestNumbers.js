//solution 1
function findThreeLargestNumbers(array) {
  let largestNum = [null, null, null];
  for (const num of array) {
    updateLargest(largestNum, num);
  }

  return largestNum;
}
function updateLargest(largestThree, num) {
  if (largestThree[2] === null || num > largestThree[2]) {
    shiftAndUpdate(largestThree, num, 2);
  } else if (largestThree[1] === null || num > largestThree[1]) {
    shiftAndUpdate(largestThree, num, 1);
  } else if (largestThree[0] === null || num > largestThree[0]) {
    shiftAndUpdate(largestThree, num, 0);
  }
}
function shiftAndUpdate(array, num, ind) {
  for (let i = 0; i <= ind; i++) {
    if (i === ind) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

//solution 2
function findThreeLargestNumbers(array) {
  //initialize left, middle and right variables to zero
  let left,
    middle,
    right = -1000;
  for (let i = 0; i < array.length; i++) {
    //elememt of the array is greater than right
    if (array[i] > right) {
      left = middle;
      middle = right;
      right = array[i];
      //elememt of the array is greater than middle
    } else if (array[i] > middle) {
      left = middle;
      middle = array[i];
      //elememt of the array is greater than left
    } else if (array[i] > left) {
      left = array[i];
    }
  }
  return [left, middle, right];
}
