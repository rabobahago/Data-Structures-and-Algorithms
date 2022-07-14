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

//depth first Method
//Iterative solution
function depthFirstValues(root) {
  let stack = [root];
  // note our loop start by removing item from the stack
  //and end by adding it left and right node to the stack
  //if they exists. then loop repeat again accordingly
  while (stack.length > 0) {
    let node = stack.pop();
    console.log(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
console.log(depthFirstValues(a));
