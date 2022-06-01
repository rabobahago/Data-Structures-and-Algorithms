function isMonotonic(array) {
  // Write your code here.
  let isNondecreasing = true;
  let isNonIncreasing = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNondecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNondecreasing || isNonIncreasing;
}
