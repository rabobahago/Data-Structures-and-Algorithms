class Priority {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.priority = [];
  }
  enqueuePriority(element, priority) {
    let newPriority = new Priority(element, priority);
    let contain = false;
    // check to see where the new priority should be insert
    for (let i = 0; i < this.priority.length; i++) {
      if (this.priority[i].Priority > newPriority.priority) {
        this.priority.splice(i, 0, newPriority);
        contain = true;
        break;
      }
    }
    //if the new priority is greater than all then
    if (!contain) {
      this.priority.push(newPriority);
    }
  }
  isEmpty() {
    if (!this.priority.length) return true;
    return false;
  }
  dequeue() {
    if (this.isEmpty()) return "No such priority exist";
    return this.priority.shift();
  }
  rear() {
    if (this.isEmpty()) return "No such priority exist";
    return this.priority[this.priority.length - 1];
  }
  front() {
    if (this.isEmpty()) return "No such priority exist";
    return this.priority[0];
  }
  getAll() {
    let str = "";
    for (let i = 0; i < this.priority.length; i++) {
      str += this.priority[i].element + " ";
    }
    return str;
  }
  getLength() {
    return this.priority.length;
  }
}
const p = new PriorityQueue();
p.enqueuePriority("add stuff to the store", 1);
p.enqueuePriority("Travel to Kaduna", 2);
p.enqueuePriority("Love to see my parent", 3);
console.log(p);
console.log(p.front());
console.log(p.rear());
console.log(p.dequeue());
console.log(p.getLength());
