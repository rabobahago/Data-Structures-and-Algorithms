function threeNumberSort(array, order) {
  //first element of order
  let firstValue = order[0];
  //last element of order
  let lastValue = order[2];
  //let's start iteration at index of zero
  let startIndex = 0;
  for (let i = 0; i < array.length; i++) {
    //if the current element in the array is equal to the first element in the
    // array swap and increase the start index
    if (array[i] === firstValue) {
      //pass into the swap call function the startIndex, the current index of
      //our iteration and the array
      swap(startIndex, i, array);
      //increase the startIndex
      startIndex++;
    }
  }
  // let's start iteration at the last index
  let lastIndex = array.length - 1;
  //iteration from last to first
  for (let i = array.length; i >= 0; i--) {
    if (array[i] === lastValue) {
      swap(lastIndex, i, array);
      //decrease the
      lastIndex--;
    }
  }
  return array;
}
function swap(first, second, array) {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}
