function powerset(array) {
  let subsets = [[]];
  for (let elem of array) {
    //set the length of inner array of subsets or else you loose
    //it in this loop
    let length = subsets.length;
    //loop the array of subsets
    for (let i = 0; i < length; i++) {
      let current = subsets[i];
      //use each array of subset to concat and generate others array and push into the subset
      subsets.push(current.concat(elem));
    }
  }
  return subsets;
}
//Time O(2^n * n) and Space O(2^n * n)
