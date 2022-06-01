function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let index1 = 0;
  let index2 = 0;
  let current = Infinity;
  let smallest = Infinity;
  let arrayDiff = [];
  while (index1 < arrayOne.length && index2 < arrayTwo.length) {
    let elemOne = arrayOne[index1];
    let elemTwo = arrayTwo[index2];
    if (elemOne < elemTwo) {
      current = elemTwo - elemOne;
      index1++;
    } else if (elemTwo < elemOne) {
      current = elemOne - elemTwo;
      index2++;
    } else {
      return [elemOne, elemTwo];
    }
    if (current < smallest) {
      smallest = current;
      arrayDiff = [elemOne, elemTwo];
    }
  }
  return arrayDiff;
  // Write your code here.
}
