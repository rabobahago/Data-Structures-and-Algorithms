function getPermutations(array) {
  //declared empty arry
  let permutations = [];
  //call helper function with array, empty array call currentPermutations in the helper func
  //and permutations declared itself
  helperGetPermutations(array, [], permutations);
  // return the array
  return permutations;
}
function helperGetPermutations(array, currentPermutations, permutations) {
  //when ever the array is empty, we know that we
  // have created a brand permutaion to be added to our list of permutations
  //and also check to see our current permutations is not empty else we will
  //adding empty array instead of array of permutations
  if (!array.length && currentPermutations.length) {
    //push the current
    permutations.push(currentPermutations);
  } else {
    for (let i = 0; i < array.length; i++) {
      //slice the  front and back of the current element to return as new array
      let newPermutations = array.slice(0, i).concat(array.slice(i + 1));
      //concat the current element to the current permutations array
      let current = currentPermutations.concat(array[i]);
      //call the helper with set of new parameters
      helperGetPermutations(newPermutations, current, permutations);
    }
  }
}
