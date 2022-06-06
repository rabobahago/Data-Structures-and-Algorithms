function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array, left = 0, right = array.length - 1) {
  var index;
  if (array.length > 1) {
    index = partition(array, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(array, index, right);
    }
  }
  return array;
}
