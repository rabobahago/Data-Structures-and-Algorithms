function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) {
        lowest = j;
      }
    }
    let temp = array[i];
    array[i] = array[lowest];
    array[lowest] = temp;
  }
  return array;
}
