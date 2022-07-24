// Products of Integers in Array
// You are given an array of integers and an integer K as arguments. Return the product of every integer in the array except for K.

// K is guaranteed to always be present in the argument array.

// Requirements
// Must return an integer
// Example #1
// solve([1,2,3,4,5], 3)
// > 40

// We skip the number 3 so 1 \ 2 \* 4 \* 5 = 40*
const productOfIntegers = (array, k) => {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === k) {
      continue;
    }
    product *= array[i];
  }
  return product;
};
console.log(productOfIntegers([1, 2, 3, 4, 5], 3));
