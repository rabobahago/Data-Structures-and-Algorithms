const multipleOfIntegers = (array, k) => {
  //time O(n) and O(1)
  for (let i = 0; i < array.length; i++) {
    if (array[i] % k !== 0) return false;
  }
  return true;
};
console.log(multipleOfIntegers([2, 4, 6, 8], 2));
console.log(multipleOfIntegers([12, 14, 36, 18], 9));
