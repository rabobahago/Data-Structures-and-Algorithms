function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    // set lowest to be our dynamic initial value
    let lowest = i;
    //let j be dynamic changing by plus one
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) {
        // reset should be done here
        lowest = j;
      }
    }
    // swapping should be in the first array
    let temp = array[i];
    array[i] = array[lowest];
    array[lowest] = temp;
  }
  return array;
}
