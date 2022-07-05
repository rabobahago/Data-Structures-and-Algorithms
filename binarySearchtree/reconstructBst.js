class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  insert(value) {
    if (value < this.value) {
      if (this.left) this.left.insert(value);
      else this.left = new BST(value);
    } else {
      if (this.right) this.right.insert(value);
      else this.right = new BST(value);
    }
  }
}
function reconstructBst(arr) {
  const root = new BST(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    root.insert(arr[i]);
  }
  return root;
}
