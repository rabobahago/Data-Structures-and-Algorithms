const maxPathSum = (root, maxSum = [-Infinity]) => {
  pathSum(root, maxSum);
  return maxSum[0];
};
const pathSum = (root, maxSum) => {
  let baseCase = root === null;
  if (baseCase) return 0;
  return dfs(root, maxSum);
};
const dfs = (root, maxSum) => {
  let maxLeft = Math.max(0, pathSum(root.left, maxSum));
  let maxRight = Math.max(0, pathSum(root.right, maxSum));
  let sum = root.val + maxLeft + maxRight;
  maxSum[0] = Math.max(maxSum[0], sum);
  return Math.max(maxLeft, maxRight) + root.val;
};
