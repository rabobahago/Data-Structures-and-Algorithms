const longestIncreasingSequence = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] < array[i]) {
      result[result.length - 1].push(array[i]);
    } else {
      result.push([array[i]]);
    }
  }
  return result.sort((a, b) => b.length - a.length)[0];
};
console.log(longestIncreasingSequence([10, 7, 5, 20, 21, 23, 9]));
