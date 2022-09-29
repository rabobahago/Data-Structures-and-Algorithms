// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along
// the longest path from the root node down to the farthest leaf node.

var maxDepth = (root) => {
  if (root === null) return 0;
  let maxLeft = maxDepth(root.left);
  let maxRight = maxDepth(root.right);
  return 1 + Math.max(maxLeft, maxRight);
};
