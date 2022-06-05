function productSum(array, multiplier = 1) {
  let total = 0;
  for (let element of array) {
    //check to see if there is nested array.
    if (Array.isArray(element)) {
      total += productSum(element, multiplier + 1);
    } else {
      //else sum the element to total
      total += element;
    }
  }
  let sum = total * multiplier;
  return sum;
}
