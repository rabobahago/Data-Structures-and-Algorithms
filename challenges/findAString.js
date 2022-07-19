const findAString = (array, k) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === k) return true;
  }
  return false;
};
console.log(findAString(["apple", "orange", "banana"], "orange"));
console.log(findAString(["apple", "orange", "banana"], "pear"));
