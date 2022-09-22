const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1],
    left = [],
    right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([9, 4, 5, 6, 7, 8, 9, 10, 11]));
