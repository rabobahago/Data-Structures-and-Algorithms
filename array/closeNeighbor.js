function closeNeighbor(array, N) {
  array.sort((a, b) => a - b);
  let minIndex, index;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= N) {
      minIndex = i - 1;
      index = i;
      break;
    }
  }
  let finalMin = Math.abs(array[minIndex] - N);
  let finalMax = array[index] - N;
  return finalMin <= finalMax ? array[minIndex] : array[index];
}
console.log(closeNeighbor([14, 13, 34, 1, 6, 3, 7, 8, 10, 11, 12, 13], 10));
console.log(closeNeighbor([30, -1, 3, 5, 14, 13, 34, 1, 6, 3], 4));
