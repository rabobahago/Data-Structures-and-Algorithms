//write a function that takes in array of numbers as an input.
//The function should return total sum of all numbers.
//The function must be recursive

//Better solution

function sumArray(array) {
  return _sum(array, 0);
}
const _sum = (array, index) => {
  if (index === array.length) return 0;
  return array[index] + _sum(array, ++index);
};
console.log(sumArray([4]));
console.log(sum([4]));
console.log(sum([9, 6, 3]));
//Time O(n) and O(n)

function sum(array) {
  if (array.length === 0) return 0;
  let arr = array.slice(1);
  return array[0] + sum(arr);
}
console.log(sum([9, 6, 6, 8]));
console.log(sum([4]));
console.log(sum([9, 6, 3]));

//Time O(n^2) and Space O(n)
