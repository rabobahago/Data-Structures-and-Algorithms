// Swap Sequential Pairs of Integers
// You are given an array of lowercase single character strings as an argument. Swap each alphabetically sequential pair of characters.

// If the argument array has an odd number of characters, leave the final character as it is.

// Requirements
// Must return an array of strings
// Example #1
// solve(['a', 'b', 'c', 'd', 'e', 'f'])
// > ['b', 'a', 'd', 'c', 'f', e']
// Example #2
// solve(['a', 'b', 'c'])
// > ['b', 'a', 'c']
const swapSequentialPairOfInteger = (array) => {
  let result = [];
  let k = 2;
  while (array.length > 0) {
    let swap = array.slice(0, k);
    if (swap.length === 2) {
      swapArray(swap);
      result.push(swap);
    } else {
      result.push(swap);
    }
    array = array.slice(k);
  }
  return result.flat();
};
const swapArray = (array) => {
  let first = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = first;
};

console.log(swapSequentialPairOfInteger(["a", "b", "c", "d", "e", "f"]));
console.log(swapSequentialPairOfInteger(["a", "b", "c"]));
