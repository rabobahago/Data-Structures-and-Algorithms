function findKthLargestValueInBst(tree, k) {
  let sortedNodeValues = [];
  inOrderTraverse(tree, sortedNodeValues);
  return sortedNodeValues[sortedNodeValues.length - k];
}
function inOrderTraverse(node, sortedNodeValues) {
  if (node === null) return;
  inOrderTraverse(node.left, sortedNodeValues);
  sortedNodeValues.push(node.value);
  inOrderTraverse(node.right, sortedNodeValues);
}
