class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (let child of this.children) {
      //every child node call depth first search
      child.depthFirstSearch(array);
    }
    return array;
  }
  //time O(v+e) and space O(n)
}
