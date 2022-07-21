const squareRootDimensions = (k) => {
  let result = [];
  for (let i = 1; i <= k; i++) {
    let last = result[result.length - 1];
    if (!last || last.length === Math.sqrt(k)) {
      result.push([i]);
    } else {
      last.push(i);
    }
  }
  return result;
};
console.log(squareRootDimensions(9));
