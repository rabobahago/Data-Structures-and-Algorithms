function findClosestValueInBst(tree, target) {
  return helperClosesValueInBst(tree, target, tree.value);
}

function helperClosesValueInBst(root, target, closest) {
  //start from the initial node
  let currentNode = root;
  //while currentNode is not null
  while (currentNode !== null) {
    //check for the smallest value
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
      //if the target is less than the current node value
    } else if (target < currentNode.value) {
      //set the current node value to the left
      currentNode = currentNode.left;
      //if the target is greater than the current node value
    } else if (target > currentNode.value) {
      //set the current node value to the right;
      currentNode = currentNode.right;
      //else break out of the while loop
    } else {
      break;
    }
  }
  return closest;
}
