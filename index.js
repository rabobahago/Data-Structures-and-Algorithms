function firstDuplicateValue(array) {
  for (let value of array) {
    const absValue = Math.abs(value);
    console.log(absValue);
  }
}
firstDuplicateValue([1, 2, 5, 6]);
