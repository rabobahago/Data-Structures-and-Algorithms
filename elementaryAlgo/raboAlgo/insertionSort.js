const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let elementInsert = arr[i];
    while (j >= 0 && arr[j] > elementInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = elementInsert;
  }
  return arr;
};
console.log(insertionSort([2, 1, 0, 3, 4, 9, 87, 6]));
//O(n^2)
