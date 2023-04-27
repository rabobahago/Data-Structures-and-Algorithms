const Queue = function () {
  this.collection = [];
  this.print = () => {
    console.log(this.collection);
    return this.collection;
  };
  this.isEmpty = () => {
    return this.collection.length === 0;
  };
  this.enqueue = (element) => {
    this.collection.push(element);
  };
  this.dequeue = () => {
    if (this.isEmpty()) throw new Error("queue is empty");
    const remove = this.collection.shift();
    return remove;
  };
  this.size = () => {
    return this.collection.length;
  };
  this.front = () => {
    return this.collection[0];
  };
};
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.print());
console.log(queue.size());
console.log(queue.front());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
