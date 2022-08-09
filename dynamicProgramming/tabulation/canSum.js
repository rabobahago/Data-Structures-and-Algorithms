const canSum = (target, numbers) => {
  let table = new Array(target + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[target];
};
console.log(canSum(7, [2, 3]));
console.log(canSum(300, [7, 4, 2, 1, 2, 3]));
