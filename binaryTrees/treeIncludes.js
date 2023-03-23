// Write a function, breadthFirstValues, that takes in the
// root of a binary tree. The function should return an array
// containing all values of the tree in breadth-first order.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.right = c;
a.left = b;
b.left = d;
b.right = e;
c.right = f;
console.log(a);
const treeIncludes = (root, target) => {
  if (root === null) return false;
  let stack = [root];
  while (stack.length > 0) {
    let element = stack.pop();
    if (element.value === target) return true;
    if (element.left) stack.push(element.left);
    if (element.right) stack.push(element.right);
  }
  return false;
};
console.log(treeIncludes(a, "b"));
const treeIncludesRecursion = (root, target) => {
  if (root === null) return false;
  if (root.value === target) return true;
  return (
    treeIncludesRecursion(root.left, target) ||
    treeIncludesRecursion(root.right, target)
  );
};
console.log(treeIncludesRecursion(a, "b"));
