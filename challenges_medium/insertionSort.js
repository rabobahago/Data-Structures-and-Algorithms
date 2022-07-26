// Binary Insertion Sort of Integers
// Given a randomly sorted list of integers, sort the list using binary insertion sort.
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let insertElem = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > insertElem) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = insertElem;
  }
  return array;
};
console.log(insertionSort([1, 3, 6, 4, 5, 6]));
