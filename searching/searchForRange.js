//Recursive Solution
function searchForRange(array, target) {
  // set the initial final range
  let finalRange = [-1, -1];
  //helper pass in the necessary parameter
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  //remember one will go left while the other will go right, that is why goLeft is false here
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}
function alteredBinarySearch(array, target, left, right, finalRange, goLeft) {
  // if left crosses right return. which our base case
  if (left > right) return;
  let middle = Math.floor((right + left) / 2);
  // if the middle number is less than the target
  if (array[middle] < target) {
    alteredBinarySearch(
      array,
      target,
      // move the left pointer to middle index plus one
      middle + 1,
      right,
      finalRange,
      goLeft
    );
    // if the middle number is greater than the target
  } else if (array[middle] > target) {
    alteredBinarySearch(
      array,
      target,
      left,
      //move the right pointer to middle index minus one
      middle - 1,
      finalRange,
      goLeft
    );
    //the middle number is equal to the target
  } else {
    //if go goLeft is true
    if (goLeft) {
      //check if middle index is equal zero or number at middle-1 is not equal to the target
      if (middle === 0 || array[middle - 1] !== target) {
        //set first of finalRange to middle
        finalRange[0] = middle;
      } else {
        //else move the right pointer to middle -1
        alteredBinarySearch(
          array,
          target,
          left,
          middle - 1,
          finalRange,
          goLeft
        );
      }
      // else move right
    } else {
      //check if middle index is equal last index or number at middle+1 is not equal to the target
      if (middle === array.length - 1 || array[middle + 1] !== target) {
        //set the second element of finalRange to middle number
        finalRange[1] = middle;
      } else {
        alteredBinarySearch(
          array,
          target,
          //else move the left pointer to middle plus one
          middle + 1,
          right,
          finalRange,
          goLeft
        );
      }
    }
  }
}
//time complexity of O(log(N)) and space complexity of O(log(N))

//Iterative solution
function searchForRange(array, target) {
  // set the initial final range
  let finalRange = [-1, -1];
  //helper pass in the necessary parameter
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  //remember one will go left while the other will go right, that is why goLeft is false here
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}
function alteredBinarySearch(array, target, left, right, finalRange, goLeft) {
  // if left crosses right return. which our base case
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    // if the middle number is less than the target
    if (array[middle] < target) {
      // move the left pointer to middle index plus one
      left = middle + 1;

      // if the middle number is greater than the target
    } else if (array[middle] > target) {
      //move the right pointer to middle index minus one
      right = middle - 1;
      //the middle number is equal to the target
    } else {
      //if go goLeft is true
      if (goLeft) {
        //check if middle index is equal zero or number at middle-1 is not equal to the target
        if (middle === 0 || array[middle - 1] !== target) {
          //set first of finalRange to middle
          finalRange[0] = middle;
          return;
        } else {
          //else move the right pointer to middle -1

          right = middle - 1;
        }
        // else move right
      } else {
        //check if middle index is equal last index or number at middle+1 is not equal to the target
        if (middle === array.length - 1 || array[middle + 1] !== target) {
          //set the second element of finalRange to middle number
          finalRange[1] = middle;
          return;
        } else {
          //else move the left pointer to middle plus one
          left = middle + 1;
        }
      }
    }
  }
}
//time complexity of O(log(N)) and space complexity of O(1)
