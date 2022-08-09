function tab(n) {
  let array = new Array(n + 1).fill(0);
  for (let i = 2; i < array.length; i++) {
    array[1] = 1;
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
}
console.log(tab(6));
