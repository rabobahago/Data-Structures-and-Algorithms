// Write a function, breadthFirstValues, that
// takes in the root of a binary tree. The function
// should return an array containing all values of the tree in breadth-first order.
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
const breadthFirstValues = (root) => {
  if (root === null) return [];
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let element = queue.shift();
    result.push(element.value);
    if (element.left) queue.push(element.left);
    if (element.right) queue.push(element.right);
  }
  return result;
};
console.log(breadthFirstValues(a));
//Time O(n) and O(n)
