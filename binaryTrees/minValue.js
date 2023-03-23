// Write a function, treeMinValue, that
// takes in the root of a binary tree that contains number values.
// The function should return the minimum value within the tree.

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
const treeMinValue = (root) => {
  let min = Infinity;
  if (root === null) return 0;
  let stack = [root];
  while (stack.length > 0) {
    let element = stack.pop();
    if (element.value <= min) {
      min = element.value;
    }
    if (element.left) stack.push(element.left);
    if (element.right) stack.push(element.right);
  }
  return min;
};
console.log(treeMinValue(a));
const treeMinValueRecursive = (root) => {
  if (root === null) return Infinity;
  return Math.min(
    root.value,
    treeMinValueRecursive(root.left),
    treeMinValueRecursive(root.right)
  );
};

console.log(treeMinValueRecursive(a));
