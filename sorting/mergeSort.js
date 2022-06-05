function mergeSort(array) {
  if (array.length <= 1) return array;
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);
  return mergeSortedArray(mergeSort(leftArray), mergeSort(rightArray));
}
function mergeSortedArray(leftArray, rightArray) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      results.push(leftArray[i]);
      i++;
    } else {
      results.push(rightArray[j]);
      j++;
    }
  }
  // if one array is more lengthy than the other
  while (i < leftArray.length) {
    results.push(leftArray[i]);
    i++;
  }
  // if one array is more lengthy than the other
  while (j < rightArray.length) {
    results.push(rightArray[j]);
    j++;
  }
  return results;
}
