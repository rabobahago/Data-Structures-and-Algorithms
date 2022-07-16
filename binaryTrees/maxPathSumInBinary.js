function maxPathSum(tree) {
  let max = -Infinity;
  const dsf = (tree) => {
    if (!tree) return 0;
    const left = Math.max(0, dsf(tree.left));
    const right = Math.max(0, dsf(tree.right));
    max = Math.max(max, left + right + tree.value);
    return Math.max(left, right) + tree.value;
  };
  dsf(tree);
  return max;
}
