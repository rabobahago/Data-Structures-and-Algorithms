class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //O(1)
  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  //O(n)
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index >= this.size) {
      return "Invalid index";
    }
    if (index === 0) {
      this.prepend(value);
    }
    let node = new Node(value);
    let prev = this.head;
    let ind = 0;
    while (prev) {
      if (ind === index - 1) {
        let next = prev.next;
        prev.next = node;
        node.next = next;
        this.size++;
      }
      prev = prev.next;
      ind++;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.size) {
      return "Invalid index";
    }
    if (this.isEmpty()) {
      return null;
    }
    if (index === 0) {
      let head = this.head;
      this.head = head.next;
      this.size--;
      return head.value;
    }
    let fast = this.head;
    let ind = 0;
    while (fast) {
      if (ind === index - 1) {
        let next = fast.next;
        fast.next = fast.next.next;
        this.size--;
        return next.value;
      }
      fast = fast.next;
      ind++;
    }
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (value === this.head.value) {
      let remove = this.head;
      this.head = this.head.next;
      this.size--;
      return remove.value;
    }
    let prev = this.head;

    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    if (prev.next) {
      let remove = prev.next;
      prev.next = remove.next;
      this.size--;
      return remove.value;
    }
    return null;
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let prev = this.head;
    let ind = 0;
    while (prev) {
      if (prev.value === value) {
        return ind;
      }
      ind++;
      prev = prev.next;
    }
    return -1;
  }
  reverse() {
    let prev = null,
      cur = this.head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      //advance prev pointer
      prev = cur;
      //advance curr pointer
      cur = next;
    }
    //set head to be new item in the list
    this.head = prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let result = "";
      let currentNode = this.head;
      while (currentNode) {
        result += `${currentNode.value} `;
        currentNode = currentNode.next;
      }
      console.log(result);
      return result;
    }
  }
}
let linkedList = new LinkedList();
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
linkedList.prepend(2);
linkedList.prepend(40);
console.log(linkedList.print());
linkedList.append(100);
console.log(linkedList.print());
console.log(linkedList.insert(700, 1));
console.log(linkedList.print());
console.log(linkedList.remove(0));
console.log(linkedList.print());
console.log(linkedList.removeValue(700));
console.log(linkedList.removeValue(1000));
console.log(linkedList.print());
console.log(linkedList.search(100));
console.log(linkedList.reverse());
console.log(linkedList.print());
