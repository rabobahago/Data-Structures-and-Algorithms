const lastOccurenceInteger = (array, k) => {
  for (var i = 0; i < array.length; i++) {
    if (array[array.length - i] === k) {
      return array.length - i;
    }
  }
};

console.log(lastOccurenceInteger([4, 1, 3, 5, 3, 4, 2], 4));
console.log(lastOccurenceInteger([-1, -1, 3, 5, 3, 2], -1));
