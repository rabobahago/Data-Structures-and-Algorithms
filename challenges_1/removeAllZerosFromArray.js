const removeAllZerosFromArray = (array) => {
  let result = [];
  for (let element of array) {
    if (element === 0) continue;
    else result.push(element);
  }
  return result;
};
console.log(removeAllZerosFromArray([0, 0, 2, 0, 3, 0, 5]));
