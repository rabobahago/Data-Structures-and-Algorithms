const alternateUpperAndLower = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      result.push(array[i].toUpperCase());
    } else {
      result.push(array[i].toLowerCase());
    }
  }
  return result;
};
console.log(alternateUpperAndLower(["a", "b", "c", "d", "e"]));
