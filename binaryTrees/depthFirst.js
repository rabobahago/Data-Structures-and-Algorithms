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
