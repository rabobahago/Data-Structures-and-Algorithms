// Write a function, depthFirstValues, that takes in the
// root of a binary tree. The function should return an
//  array containing all values of the tree in depth-first order.

// Hey. This is our first binary tree problem, so you should be
// liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
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
const depthFirstValues = (root) => {
  if (root === null) return [];
  let results = [];
  let stack = [root];
  while (stack.length > 0) {
    let element = stack.pop();
    results.push(element.value);
    if (element.left) stack.push(element.left);
    if (element.right) stack.push(element.right);
  }
  return results;
};
console.log(depthFirstValues(a));

const depthFirstRecursion = (root) => {
  if (root === null) return [];
  let leftValues = depthFirstValues(root.left);
  let rightValues = depthFirstValues(root.right);
  return [root.value, ...leftValues, ...rightValues];
};
console.log(depthFirstRecursion(a));
//Time O(n) and O(n)
