function shiftedBinarySearch(array, target) {
  return shiftedBinarySearchHelper(array, target, 0, array.length - 1);
}
function shiftedBinarySearchHelper(array, target, left, right) {
  //if left point cross or greater than right point just return -1
  if (left > right) return -1;
  //get the middle index
  let middle = Math.floor((left + right) / 2);
  //get the middle Num
  let potentialMatch = array[middle];
  let leftNum = array[left];
  let rightNum = array[right];
  //if target is equal to potential Match or middle num
  if (target === potentialMatch) {
    return middle;
    //if target is less equal to potential Match or middle num
  } else if (leftNum <= potentialMatch) {
    if (leftNum <= target && target < potentialMatch) {
      // decrease the middle index and keep the left index
      return shiftedBinarySearchHelper(array, target, left, middle - 1);
    } else {
      // increase the middle index and keep the right index
      return shiftedBinarySearchHelper(array, target, middle + 1, right);
    }
    //if target is greater than potential Match or middle num
  } else {
    if (target > potentialMatch && target <= rightNum) {
      // increase the middle index and keep the right index
      return shiftedBinarySearchHelper(array, target, middle + 1, right);
    } else {
      // decrease the middle index and keep the left index
      return shiftedBinarySearchHelper(array, target, left, middle - 1);
    }
  }
}
