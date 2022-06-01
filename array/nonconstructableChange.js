function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);
  let sum = 0;
  for (let num of coins) {
    if (num > sum + 1) {
      return sum + 1;
    }
    sum += num;
  }
  return sum + 1;
}
