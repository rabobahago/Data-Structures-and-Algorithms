const removeFirstIntegerInArray = (array) => {
  //time O(n) and space O(1)
  return array.slice(1);
};
console.log(removeFirstIntegerInArray([1, 2, 3, 4, 5]));
console.log(removeFirstIntegerInArray([-1, -2]));
