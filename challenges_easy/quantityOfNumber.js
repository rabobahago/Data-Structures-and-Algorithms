const quantityOfNumber = (n) => {
  let sum = n + 1;
  for (let i = 0; i <= n; i++) {
    if (i.toString().includes("4")) {
      sum = sum - 1;
    }
  }
  return sum;
};
console.log(quantityOfNumber(25));
