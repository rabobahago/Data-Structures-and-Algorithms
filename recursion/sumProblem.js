//write a function that takes in array of numbers as an input.
//The function should return total sum of all numbers.
//The function must be recursive

function sumRecursive(array) {
  let sum = 0;
  if (array.length === 0) return 0;
  while (array.length !== 0) {
    let arr = array.splice(0, 1);
    sum += arr[0];
  }

  return sum;
}
console.log(sumRecursive([9, 6, 6, 8]));
console.log(sumRecursive([4]));
console.log(sumRecursive([9, 6, 3]));
