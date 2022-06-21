//first solution
function firstDuplicateValue(array) {
  //declare and empty set
  let seen = new Set();
  for (let value of array) {
    //iterate and check the set
    //to see if it already in
    //the set, if so return it
    //if not add to the list
    if (seen.has(value)) return value;
    seen.add(value);
  }
  //if non is duplicate return -1
  return -1;
}
//time O(n) and O(1)

//second solution
function firstDuplicateValue(array) {
  let minimuSecondIndex = array.length;
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let valueToCompare = array[j];
      if (value === valueToCompare) {
        minimuSecondIndex = Math.min(minimuSecondIndex, j);
      }
    }
  }
  if (minimuSecondIndex === array.length) return -1;
  return array[minimuSecondIndex];
}
