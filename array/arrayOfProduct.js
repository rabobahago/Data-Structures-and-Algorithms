function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1); //[1, 1, , 1, 1]
  const leftProduct = new Array(array.length).fill(1); //[1, 1, , 1, 1]
  const rightProduct = new Array(array.length).fill(1); //[1, 1, , 1, 1]
  let leftValue = 1; //initial left value
  for (let i = 0; i < array.length; i++) {
    //set first value of left products to equal 1,
    //while remaining values will depend on array[i]
    leftProduct[i] = leftValue;
    leftValue *= array[i];
  }
  let rightValue = 1; //initial right value
  for (let i = array.length - 1; i >= -1; i--) {
    //set first value of left products to equal 1,
    //while remaining values will depend on array[i]
    rightProduct[i] = rightValue;
    rightValue *= array[i];
  }
  for (let i = 0; i < products.length; i++) {
    // products is got  by products by multiplying leftProduct and rightProduct
    products[i] = leftProduct[i] * rightProduct[i];
  }
  return products;
}
//time O(n) and space O(1)
