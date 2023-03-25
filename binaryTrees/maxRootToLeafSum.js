// Write a function, maxPathSum, that takes in the root of a
// binary tree that contains number values. The function should
// return the maximum sum of any root to leaf path within the tree.

// You may assume that the input tree is non-empty.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(4);
const b = new Node(6);
const c = new Node(2);
const d = new Node(1);
const e = new Node(3);
const f = new Node(7);
a.right = c;
a.left = b;
b.left = d;
b.right = e;
c.right = f;
const maxPathSum = (root) => {
    if(root === null) return 0;
  if (root.left === null && root.right === null) return root.value;
  const maxChildPathSum = Math.max(
    maxPathSum(root.left),
    maxPathSum(root.right)
  );
  return root.value + maxChildPathSum;
};
console.log(maxPathSum(a));
