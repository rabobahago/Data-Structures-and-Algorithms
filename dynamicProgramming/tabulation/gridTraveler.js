const gridTraveler = (m, n) => {
  let table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      let current = table[i][j];
      if (i + 1 <= m) table[i + 1][j] += current;
      if (j + 1 <= n) table[i][j + 1] += current;
    }
  }
  return table[m][n];
};
console.log(gridTraveler(3, 3));
