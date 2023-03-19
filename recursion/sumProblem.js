//write a function that takes in array of numbers as an input.
//The function should return total sum of all numbers.
//The function must be recursive

function sum(array) {
  if (array.length === 0) return 0;
  let arr = array.slice(1);
  return array[0] + sum(arr);
}
console.log(sum([9, 6, 6, 8]));
console.log(sum([4]));
console.log(sum([9, 6, 3]));
