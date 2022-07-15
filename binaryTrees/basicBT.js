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

class Number {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const o = new Node(1);
const t = new Node(2);
const th = new Node(3);
const fo = new Node(4);
const fi = new Node(5);
const si = new Node(6);
o.right = th;
o.left = t; //      1
t.left = fo; //     / \
t.right = fi; //    2   3
th.right = si; //  / \   \
console.log(o); // 4   5   6

//depth first Method uses stack
//Iterative solution
function depthFirstValues(root) {
  const results = [];
  let stack = [root];
  // note our loop start by removing item from the stack
  //and end by adding it left and right node to the stack
  //if they exists. then loop repeat again accordingly
  while (stack.length > 0) {
    if (root === null) return [];
    let node = stack.pop();
    //console.log(node.value);
    results.push(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return results;
}

console.log(depthFirstValues(a));

function depthFirstValuesRecursion(root) {
  if (root === null) return [];
  const leftValues = depthFirstValuesRecursion(root.left); //['b', 'd', 'e']
  const rightValues = depthFirstValuesRecursion(root.right); //['c', 'f']
  return [root.value, ...leftValues, ...rightValues];
}
console.log(depthFirstValuesRecursion(a));
//bredth first method uses queue
function breadthFirstValues(root) {
  if (root === null) return [];
  let results = [];
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    //console.log(node.value);
    results.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return results;
}
console.log(breadthFirstValues(a));
function breadthFirstValuesRecursion(root) {
  if (root === null) return [];
  const rightValues = breadthFirstValuesRecursion(root.right);
  [];
  const leftValues = breadthFirstValuesRecursion(root.left);
  return [root.value, ...rightValues, ...leftValues];
}
console.log(breadthFirstValuesRecursion(a));
function treeIncludes(root, target) {
  if (root === null) return false;
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value === target) return true;
    if (node.left !== null) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
}
console.log(treeIncludes(a, "a"));
console.log(treeIncludes(null, "h"));
function treeIncludesRecursion(root, target) {
  if (!root) return false;
  if (root.value === target) return true;
  const leftBoolean = treeIncludesRecursion(root.left, target);
  const rightBoolean = treeIncludesRecursion(root.right, target);
  return leftBoolean || rightBoolean;
}
console.log(treeIncludesRecursion(null, "a"));
console.log(treeIncludesRecursion(a, "a"));
function treeSum(root) {
  let sum = 0;
  if (root === null) return 0;
  let queue = [root];
  while (queue.length > 0) {
    let child = queue.shift();
    sum += child.value;
    if (child.left) queue.push(child.left);
    if (child.right !== null) queue.push(child.right);
  }
  return sum;
}
console.log(treeSum(o));
function treeSumRecursion(root) {
  if (root === null) return 0;
  return (
    root.value + treeSumRecursion(root.left) + treeSumRecursion(root.right)
  );
}
console.log(treeSumRecursion(o));
function minValue(root) {
  let min = Infinity;
  let queue = [root];
  while (queue.length > 0) {
    let child = queue.shift();
    if (child.value < min) {
      min = child.value;
    }
    if (child.left !== null) queue.push(child.left);
    if (child.right) queue.push(child.right);
  }
  return min;
}
console.log(minValue(o));
function minValueRecursion(root) {
  if (!root) return Infinity;
  return Math.min(
    root.value,
    minValueRecursion(root.left),
    minValueRecursion(root.right)
  );
}
console.log(minValueRecursion(o));
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.value;
  const maxChildPathSum = Math.max(
    maxPathSum(root.left),
    maxPathSum(root.right)
  );
  return root.value + maxChildPathSum;
};
console.log(maxPathSum(o));
function minPathSum(root) {
  if (!root) return Infinity;
  if (root.left === null && root.right === null) return root.value;
  return root.value + Math.min(minPathSum(root.left), minPathSum(root.right));
}
console.log(minPathSum(o));

function pathTargetSum(root, target) {
  if (!root) return 0;
  if (root.left === null && root.right === null) return root.value;
  const path = pathTargetSum(root.left, target);
  console.log(path);
  // return (
  //   root.value +
  //     minPathSum(root.left, target) +
  //     minPathSum(root.right, target) ===
  //   target
  // );
}
console.log(pathTargetSum(o, 7));

var hasPathSum = function (root, targetSum) {
  return checkTree(root, targetSum, 0);
  function checkTree(root, targetSum, sum) {
    if (!root) {
      return false;
    }

    sum += root.val;

    if (root.left === null && root.right === null) {
      return sum === targetSum;
    }

    return (
      checkTree(root.left, targetSum, sum) ||
      checkTree(root.right, targetSum, sum)
    );
  }
};
console.log(hasPathSum(a, 9));
