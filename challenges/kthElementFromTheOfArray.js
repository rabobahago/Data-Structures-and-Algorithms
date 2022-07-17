const kthElementFromTheOfArray = (array, k) => {
  return array[array.length - (1 + k)];
};
console.log(kthElementFromTheOfArray([1, 2, 3, 4, 5, 6], 0));
console.log(kthElementFromTheOfArray([-1, 2, 3, -4, 5, 0], 3));
