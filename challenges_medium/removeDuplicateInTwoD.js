// Remove Duplicates from a 2D Array
// You are given a two dimensional array containing arrays of
// strings as an argument. Return the 2D array with all of the duplicate strings removed.

// Requirements
// Must return a two dimensional containing arrays of strings.
// Example #1
// solve([["red", "blue", "yellow", "blue"],["blue", "orange"]])
// > [["red", "yellow"],["orange"]]
const removeDuplicatesInTwoD = (array) => {
  let first = array[0];
  let second = array[1];
  const filtedFirst = first.filter((item, index) => {
    return first.indexOf(item) === index;
  });
  for (let i = 0; i < second.length; i++) {
    if (filtedFirst.includes(second[i])) {
      return [filtedFirst, second.splice(i - 1, 1)];
    }
  }
  return [filtedFirst, second];
};
console.log(
  removeDuplicatesInTwoD([
    ["red", "blue", "yellow", "blue"],
    ["blue", "orange"],
  ])
);
console.log(
  removeDuplicatesInTwoD([
    ["yellow", "red", "white", "pink", "red", "yellow"],
    ["green", "orange"],
  ])
);
