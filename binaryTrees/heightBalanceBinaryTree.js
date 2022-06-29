function calcHeight(tree, height, balance) {
  // check to see if there is no tree
  if (!tree) return height;
  //calculation the height of left and right tree
  const leftHeight = calcHeight(tree.left, height + 1, balance);
  const rightHeight = calcHeight(tree.right, height + 1, balance);
  //check if the left and right height difference is greate than one
  // return balance isBalance false
  if (Math.abs(leftHeight - rightHeight) > 1) balance.isBalanced = false;
  //then return the max
  return Math.max(leftHeight, rightHeight);
}
function heightBalancedBinaryTree(tree) {
  //set the default like this
  const balance = { isBalanced: true };
  //call calcHeight with the tree with height 0 and balance object pass
  calcHeight(tree, 0, balance);
  return balance.isBalanced;
}
