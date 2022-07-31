// let set = new Set([]);
// set.add(1);
// set.add(2);
// set.add(3);
// console.log(set);
// console.log(set.size);
// set.delete(3);
// console.log(set);
// console.log(set.has(1));
// const map = new Map([
//   ["name", "rabo"],
//   ["age", 60],
// ]);
// map.set("a", 600);
// console.log(map.has("a"));
// map.set("c", 7);
// console.log(map.size);
// console.log(map.clear());
// console.log(map);
// for (let [key, value] of map) {
//   console.log(`${key} : ${value}`);
// }
// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   add(item) {
//     this.items.push(item);
//     return this.items.length;
//   }
//   pop() {
//     let removed = this.items.pop();
//     return removed;
//   }

//   isEmpty() {
//     return !this.items.length;
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[this.items.length - 1];
//     }
//   }
//   size() {
//     return this.items.length;
//   }
//   print() {
//     return this.items.toString();
//   }
//   clear() {
//     this.items = [];
//     return this.items;
//   }
// }
// const stack = new Stack();
// stack.add(400);
// stack.add(500);
// stack.add(600);
// console.log(stack.print());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.peek());
// console.log(stack.clear());
// console.log(stack.isEmpty());
// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   add(item) {
//     this.items.push(item);
//     return this.items.length;
//   }
//   remove() {
//     let remove = this.items.shift();
//     return remove;
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[0];
//     }
//   }
//   size() {
//     return this.items.length;
//   }
//   clear() {
//     this.items = [];
//     return this.items;
//   }
//   print() {
//     return this.items.toString();
//   }
// }
// const queue = new Queue();
// queue.add(50);
// queue.add(40);
// queue.add(30);
// queue.add(20);
// console.log(queue);
// console.log(queue.size());
// console.log(queue.remove());
// console.log(queue.peek());
// console.log(queue.print());
// function binarySearch(array, target) {
//   let left = 0;
//   let right = array.length - 1;
//   let result;
//   while (left < right) {
//     if (array[left] === target) {
//       result = array[left];
//     } else {
//       result = array[right];
//     }
//     left++;
//     right--;
//   }
//   return result;
// }
// console.log(binarySearch([6, 7, 8, 9, 10, 11, 12], 10));
// class QueueObject {
//   constructor() {
//     this.items = {};
//     this.rear = 0;
//     this.front = 0;
//   }
//   add(item) {
//     this.items[this.rear] = item;
//     this.rear++;
//     return Object.keys(this.items).length;
//   }
//   remove() {
//     let item = this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return item;
//   }
//   size() {
//     return Object.keys(this.items).length;
//   }
//   isEmpty() {
//     return Object.keys(this.items).length === 0;
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[this.front];
//     }
//   }
//   print() {
//     return Object.values(this.items).toString();
//   }
// }
// const q = new QueueObject();
// console.log(q.add(400));
// console.log(q.add(800));
// console.log(q.add(8));
// console.log(q.items);
// console.log(q.remove());
// console.log(q.items);
// console.log(q.size());
// console.log(q.isEmpty());
// console.log(q.peek());
// console.log(q.print());
// class Circle {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.rear = -1;
//     this.front = -1;
//     this.length = 0;
//   }
//   isFull() {
//     return this.capacity === this.length;
//   }
//   isEmpty() {
//     return this.length === 0;
//   }
//   add(item) {
//     this.rear++;
//     this.items[this.rear] = item;
//     this.length++;
//     if (!this.rear === 0) {
//       this.front = this.rear;
//     }
//   }
//   remove() {
//     if (isEmpty()) {
//       return null;
//     }
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   prepend(value) {
//     let node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     let node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }
//   removeWithIndex(index) {
//     let removedNode;
//     if (index < 0 || index >= this.size) {
//       return null;
//     } else if (index === 0) {
//       removedNode = this.head;
//       this.head = this.head.next;
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       removedNode = prev.next;
//       prev.next = removedNode.next;
//     }
//     this.size--;
//     return removedNode.value;
//   }
//   removeWithValue(value) {
//     if (this.isEmpty()) {
//       return null;
//     } else if (this.head.value === value) {
//       let removedNode = this.head;
//       this.head = removedNode.next;
//       this.size--;
//       return removedNode.value;
//     } else {
//       let prev = this.head;
//       while (prev.next && prev.next.value !== value) {
//         prev = prev.next;
//       }
//       if (prev.next) {
//         let removedNode = prev.next;
//         prev.next = removedNode.next;
//         this.size--;
//         return removedNode.value;
//       }
//       return null;
//     }
//   }
//   print() {
//     let curr = this.head;
//     let results = "";
//     while (curr) {
//       results += curr.value;
//       curr = curr.next;
//     }
//     console.log(`${results} `);
//   }
//   insert(value, index) {
//     let node = new Node(value);
//     if (index < 0 || index >= this.size) {
//       return;
//     } else if (index === 0) {
//       this.prepend(value);
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }
//   search(value) {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let i = 0;
//       let curr = this.head;
//       while (curr) {
//         if (curr.value === value) {
//           return i;
//         }
//         curr = curr.next;
//         i++;
//       }
//       return -1;
//     }
//   }
// }
// const list = new LinkedList();
// list.prepend(90);
// list.append(100);
// list.append(101);
// console.log(list);
// list.insert(400, 1);
// console.log(list);
// console.log(list.removeWithIndex(1));
// console.log(list);
// list.prepend(100);
// console.log(list.removeWithValue(100));
// console.log(list.removeWithValue(9000));
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
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size == 0;
  }
  //add to the head
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
  //add to the end;
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
  // print all node value
  print() {
    let result = "";
    let prev = this.head;
    while (prev) {
      result += `${prev.value} `;
      prev = prev.next;
    }
    return result;
  }
  //add node anywhere with index

  add(value, index) {
    let node = new Node(value);
    if (index < 0 || index > this.size) {
      return;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      let n = prev.next;
      prev.next = node;
      node.next = n;
      this.size++;
    }
  }
  //remove by index;
  removewithindex(index) {
    let removeNode;
    if (index < 0 || index > this.size) {
      return;
    } else if (index === 0) {
      let n = this.head;
      removeNode = this.head;
      this.head = n.next;
      this.size--;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
      this.size--;
    }
    return removeNode.value;
  }
  //remove by value
  removewithValue(value) {
    if (this.isEmpty()) {
      return null;
    } else if (this.head.value === value) {
      let removed = this.head;
      this.head = removed.next;
      return removed.value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removed = prev.next;
        prev.next = removed.next;
        return removed;
      }
    }
    return -1;
  }
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return current;
  }
}
let list = new LinkedList();
list.prepend(20);
list.append(80);
console.log(list);
console.log(list.print());
list.add(54, 1);
console.log(list);
console.log(list.removewithindex(0));
console.log(list);
console.log(list.removewithindex(1));
console.log(list);
console.log(list.removewithValue(54));
list.add(5, 0);

class NodeBST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    let newNode = new NodeBST(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertBst(this.root, newNode);
    }
  }
  insertBst(root, newNode) {
    if (root.value < newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertBst(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertBst(root.right, newNode);
      }
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return false;
    } else {
      if (this.root === value) {
        return true;
      } else if (value < root.value) {
        return search(root.left, value);
      } else {
        return search(root.right, value);
      }
    }
  }
}
const bst = new BST();
console.log(bst.isEmpty());
bst.insert(20);
bst.insert(16);
bst.insert(13);
bst.insert(23);
console.log(bst);
let elemeents = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//rotate 90 degree in clockwise direction;

const clockwise = (elemeents) => {
  let transpose = elemeents.map((_, index) =>
    elemeents.map((array) => array[index])
  );

  console.log(transpose);
  return reverseRows(transpose);
};
const reverseRows = (array) => {
  for (let i = 0; i < array.length; i++) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      let temp = array[i][left];
      array[i][left] = array[i][right];
      array[i][right] = temp;
      left++;
      right--;
    }
  }
  return array;
};
console.log(clockwise(elemeents));
console.log(
  clockwise([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
// reverse string
let str = "hello world";
const reverseStr = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};
console.log(reverseStr(str));
//rotate 90 degree in anticlockwise
const anticlockwise = (elemeents) => {
  let transpose = elemeents.map((_, index) =>
    elemeents.map((array) => array[index])
  );
  console.log(transpose);
  return reverseColumns(transpose);
};
const reverseColumns = (array) => {
  for (let j = 0; j < array[0].length; j++) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      let temp = array[j][left];
      array[j][left] = array[j][right];
      array[j][right] = temp;
      left++;
      right--;
    }
  }
  return array;
};
console.log(anticlockwise(elemeents));
// Adding Rows of a 2D Array
// You are given a two dimensional array containing arrays of integers as an argument.
//Find the largest integer that can be obtained by summing all integers along any row or column.

// Inner arrays may or may not contain equal number elements in each.

// Requirements
// Must return an integer
// Example #1
// solve([
//   [1, 2, 5, 1, 5, 1],
//   [0, 4, 5, 7, 7, 3],
//   [1, 6, 7, 1, 7, 8]
// ])
// > 30
// Summing up all integers in row three 1+6,+7+1+7+8 gives us the largest sum, so we return 30.

// Example #2
// solve([
//   [1, 2, 2, 1, 5, 4],
//   [0, 1, 1, 2, 1, 9],
//   [1, 2, 2, 1, 3, 8]
// ])
// > 21
// Summing up all integers in column six 4+9+8 gives us the largest sum, so we return 21.
const addingRowOrColumn = (elements) => {
  const sumOfRows = buildSumOfRows(elements);
  const sumOfColumns = buildSumOfColumns(elements);
  console.log(sumOfColumns);
  return [...sumOfRows, ...sumOfColumns].sort((a, b) => b - a)[0];
};
function buildSumOfRows(elements) {
  let result = [];
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements[i].length; j++) {
      sum += elements[i][j];
    }
    result.push(sum);
  }
  return result;
}
const buildSumOfColumns = (elements) => {
  let result = [];
  for (let i = 0; i < elements[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      console.log(elements[j][i]);
      sum += elements[j][i];
    }
    result.push(sum);
  }
  return result;
};
console.log(
  addingRowOrColumn([
    [1, 2, 5, 1, 5, 1],
    [0, 4, 5, 7, 7, 3],
    [1, 6, 7, 1, 7, 8],
  ])
);
console.log(
  addingRowOrColumn([
    [1, 2, 2, 1, 5, 4],
    [0, 1, 1, 2, 1, 9],
    [1, 2, 2, 1, 3, 8],
  ])
);
const checkRowsOrcolumn = (array) => {
  //row
  for (let i = 0; i < array.length; i++) {
    if (array[i].every((a) => a === 1)) {
      return true;
    }
  }
  //column

  for (let i = 0; i < array[0].length; i++) {
    let result = [];
    for (let j = 0; j < array.length; j++) {
      result.push(array[j][i]);
    }
    if (result.every((a) => a === 1)) {
      return true;
    }
  }
  return false;
};
console.log(
  checkRowsOrcolumn([
    [1, 2, 2, 1, 5],
    [0, 1, 1, 1, 1],
    [1, 2, 2, 1, 3],
  ])
);

function lastColumns(array) {
  let columns = [];
  for (let i = 0; i < array[0].length; i++) {
    let result = [];
    for (let j = 0; j < array.length; j++) {
      result.push(array[j][i]);
    }
    columns.push(result);
  }
  return columns[columns.length - 1].reverse();
}
console.log(
  lastColumns([
    [2, 4, 6],
    [7, 0, 9],
    [1, 2, 2],
  ])
);
