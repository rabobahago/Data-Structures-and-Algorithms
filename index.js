function searchForRange(array, target) {
  let finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}
function alteredBinarySearch(array, target, left, right, finalRange, goLeft) {
  if (left > right) {
    return;
  }
  let middle = Math.floor((right + left) / 2);
  if (array[middle] < target) {
    alteredBinarySearch(array, target, middle + 1, right, finalRange, goLeft);
  } else if (array[middle] > target) {
    alteredBinarySearch(array, target, left, middle - 1, finalRange, goLeft);
  } else {
    if (goLeft) {
      if (middle === 0 || array[middle - 1] !== target) {
        finalRange[0] = middle;
      } else {
        alteredBinarySearch(
          array,
          target,
          left,
          middle - 1,
          finalRange,
          goLeft
        );
      }
    } else {
      if (middle == array.length - 1 || array[middle + 1] !== target) {
        finalRange[1] = middle;
      } else {
        alteredBinarySearch(
          array,
          target,
          middle + 1,
          right,
          finalRange,
          goLeft
        );
      }
    }
  }
}
