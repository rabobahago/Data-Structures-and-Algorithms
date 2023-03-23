// Write a function, treeSum, that takes in the root of a
// binary tree that contains number values. The function
// should return the total sum of all values in the tree.

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
const treeSum = (root) => {
  let sum = 0;
  if (root === null) return 0;
  let stack = [root];
  while (stack.length > 0) {
    let element = stack.pop();
    sum += element.value;
    if (element.left) stack.push(element.left);
    if (element.right) stack.push(element.right);
  }
  return sum;
};
console.log(treeSum(a));
const treeSumRecursion = (root) => {
  if (root === null) return 0;
  return (
    root.value + treeSumRecursion(root.left) + treeSumRecursion(root.right)
  );
};
console.log(treeSumRecursion(a));
