const integerEqualToItIndex = (arrayIn) => {
  for (let i = 0; i < arrayIn.length; i++) {
    if (arrayIn[i] === i) return arrayIn[i];
  }
  return -1;
};
console.log(integerEqualToItIndex([10, 20, 11, 12, 4]));
//4
console.log(integerEqualToItIndex([2, 1, 11, 12, 4]));
//1
