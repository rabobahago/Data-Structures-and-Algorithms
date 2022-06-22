//add depth parameter to the function
function nodeDepths(root, depth = 0) {
  //if the root node is null
  if (root === null) return 0;
  //sum the depth using recursion
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}
//time O(n) and Space O(n)
