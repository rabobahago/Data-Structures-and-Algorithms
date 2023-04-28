class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BSTree {
  constructor() {
    this.root = null;
  }
  add(data) {
    let node = new Node(data);
    if (this.root === null) {
      this.root = node;
      return;
    } else {
      const searchTree = (data) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };

      return searchTree(node);
    }
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return current.data;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (current.data === data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}
