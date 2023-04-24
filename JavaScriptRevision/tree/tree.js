class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }
  insert(currentNode, newNode) {
    if (currentNode === null) {
      currentNode = new Node(newNode);
    } else if (newNode < currentNode) {
      currentNode = this.insert(currentNode.left, newNode);
    } else {
      currentNode = this.insert(currentNode.right, newNode);
    }
    return currentNode;
  }
  insertBST(newNode) {
    if (this.root === null) {
      this.root = new Node(newNode);
      return;
    }
    this.insert(this.root, newNode);
  }
  inOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.inOrderPrint(currentNode.left);
      console.log(currentNode.value);
      this.inOrderPrint(currentNode.right);
    }
  }
  inPreOrder(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.value);
      this.insertInOrder(currentNode.left);
      this.insertInOrder(currentNode.right);
    }
  }
}
var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.value);
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.inOrderPrint(BST.root);
