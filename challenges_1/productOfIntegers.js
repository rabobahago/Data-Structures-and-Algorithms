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
