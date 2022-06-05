function insertionSort(array) {
  //start from index one because the first element has been sorted already
  for (let i = 1; i < array.length; i++) {
    let j = i; // save i into j so we can do something like j - 1
    while (j > 0 && array[j] < array[j - 1]) {
      //while j is still greater than zero and current element is less than the previous
      swap(j, j - 1, array); // call the swap function with the current element, previous element and the array
      j--; // decrease the value of j
    }
  }
  return array;
}
function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]; //swap with es6
}
