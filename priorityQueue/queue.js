class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (this.size === 0) {
      return null;
    }
    let remove = this.front;
    if (this.size === 1) {
      this.back = null;
    }

    this.front = this.front.next;
    this.size--;
    return remove.val;
  }
}

let queue = new Queue();
queue.enqueue("a");
console.log(queue.front.val);
queue.enqueue("b");
queue.enqueue("c");
console.log(queue.front.next.val);
console.log(queue.front.next.next.val);
console.log(queue.front.next.next.next);
console.log(queue.dequeue());
console.log(queue);
