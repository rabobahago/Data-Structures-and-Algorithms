function branchSums(root) {
  //set empty arrat
  let sums = [];
  //create a helper function pass in the root, initial sum, and the array
  //to save them
  helperBranchSums(root, 0, sums);
  //return the array
  return sums;
}
function helperBranchSums(node, total, sums) {
  // if the is no note return
  if (!node) return;
  //sum the value of the node
  total += node.value;
  //push the total if are at the leave node
  if (!node.left && !node.right) {
    sums.push(total);
    return;
  }
  //recall the helper function on the left and right
  helperBranchSums(node.left, total, sums);
  helperBranchSums(node.right, total, sums);
}
//time O(n) and space O(n)
