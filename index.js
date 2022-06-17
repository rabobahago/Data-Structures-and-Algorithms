function quickselect(array, k) {
  //because indices always start from 0, k smallest will always start from index - 1
  let position = k - 1;
  return quickselectHelper(array, 0, array.length - 1, position);
}
function quickselectHelper(array, startInd, endInd, position) {
  while (true) {
    if (startInd > endInd) {
      throw new Error("Your algorithm should never arrive here");
    }
    let pivotInd = startInd;
    let leftInd = startInd + 1;
    let rightInd = endInd;
    //while left index is still less or equal to right index
    while (leftInd <= rightInd) {
      //if this condition happen then it mean we need to swap
      if (
        array[leftInd] > array[pivotInd] &&
        array[rightInd] < array[pivotInd]
      ) {
        swap(leftInd, rightInd, array);
      }
      if (array[leftInd] <= array[pivotInd]) {
        leftInd++;
      }
      if (array[rightInd] >= array[pivotInd]) {
        rightInd--;
      }
    }
    swap(pivotInd, rightInd, array);
    if (rightInd === position) {
      return array[rightInd];
    } else if (rightInd < position) {
      startInd = rightInd + 1;
    } else {
      endInd = rightInd - 1;
    }
  }
}
function swap(one, two, array) {
  let temp = array[one];
  array[one] = array[two];
  array[two] = temp;
}
