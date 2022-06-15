//solution one running in the time complexity of log N
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}
function binarySearchHelper(array, target, left, right) {
  //if left pointer greater than right pointer
  if (left > right) return -1;
  //get the middle index
  let middle = Math.floor((left + right) / 2);
  let potentialResult = array[middle];
  //if target equal to potential return the index at that point
  if (target === potentialResult) {
    return middle;
  } else if (target < potentialResult) {
    //if target is less than the potential then recall the func with right index less than one
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    //if target is greater or equal to the potential then recall the func with right index less than one
    return binarySearchHelper(array, target, middle + 1, right);
  }
}

//solution two running in the time complexity of N
function binarySearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
