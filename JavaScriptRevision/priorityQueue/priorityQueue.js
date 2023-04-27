const PriorityQueue = function () {
  let collection = [];
  this.print = () => {
    console.log(collection);
  };
  this.enqueue = (element) => {
    if (this.isEmpty()) {
      collection.push(element);
    }
    let added = false;
    for (let i = 0; i < collection.length; i++) {
      if (element[1] < collection[i][1]) {
        collection[i].splice(i, 0, element);
        added = true;
        break;
      }
    }
    if (!added) {
      collection.push(element);
    }
  };
  this.dequeue = () => {
    let removed = collection.shift();
    return removed[0];
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };
  this.front = () => {
    return collection[0][0];
  };
  this.size = () => {
    return collection.length;
  };
};
const queue = new PriorityQueue();
queue.enqueue(["Love Football", 4]);
queue.enqueue(["Listen to my God", 2]);
queue.enqueue(["Listen to my God", 2]);
console.log(queue.size());
