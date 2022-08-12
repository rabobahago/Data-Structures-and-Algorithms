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
//     return this.size == 0;
//   }
//   //add to the head
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
//   //add to the end;
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
//   // print all node value
//   print() {
//     let result = "";
//     let prev = this.head;
//     while (prev) {
//       result += `${prev.value} `;
//       prev = prev.next;
//     }
//     return result;
//   }
//   //add node anywhere with index

//   add(value, index) {
//     let node = new Node(value);
//     if (index < 0 || index > this.size) {
//       return;
//     } else if (index === 0) {
//       this.prepend(value);
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       let n = prev.next;
//       prev.next = node;
//       node.next = n;
//       this.size++;
//     }
//   }
//   //remove by index;
//   removewithindex(index) {
//     let removeNode;
//     if (index < 0 || index > this.size) {
//       return;
//     } else if (index === 0) {
//       let n = this.head;
//       removeNode = this.head;
//       this.head = n.next;
//       this.size--;
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       removeNode = prev.next;
//       prev.next = removeNode.next;
//       this.size--;
//     }
//     return removeNode.value;
//   }
//   //remove by value
//   removewithValue(value) {
//     if (this.isEmpty()) {
//       return null;
//     } else if (this.head.value === value) {
//       let removed = this.head;
//       this.head = removed.next;
//       return removed.value;
//     } else {
//       let prev = this.head;
//       while (prev.next && prev.next.value !== value) {
//         prev = prev.next;
//       }
//       if (prev.next) {
//         let removed = prev.next;
//         prev.next = removed.next;
//         return removed;
//       }
//     }
//     return -1;
//   }
//   reverse() {
//     let prev = null;
//     let current = this.head;
//     while (current) {
//       let next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
//     return current;
//   }
// }
// let list = new LinkedList();
// list.prepend(20);
// list.append(80);
// console.log(list);
// console.log(list.print());
// list.add(54, 1);
// console.log(list);
// console.log(list.removewithindex(0));
// console.log(list);
// console.log(list.removewithindex(1));
// console.log(list);
// console.log(list.removewithValue(54));
// list.add(5, 0);

// class NodeBST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BST {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }
//   insert(value) {
//     let newNode = new NodeBST(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertBst(this.root, newNode);
//     }
//   }
//   insertBst(root, newNode) {
//     if (root.value < newNode.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertBst(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertBst(root.right, newNode);
//       }
//     }
//   }
//   search(value) {
//     if (this.isEmpty()) {
//       return false;
//     } else {
//       if (this.root === value) {
//         return true;
//       } else if (value < root.value) {
//         return search(root.left, value);
//       } else {
//         return search(root.right, value);
//       }
//     }
//   }
// }
// const bst = new BST();
// console.log(bst.isEmpty());
// bst.insert(20);
// bst.insert(16);
// bst.insert(13);
// bst.insert(23);
// console.log(bst);
// let elemeents = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// //rotate 90 degree in clockwise direction;

// const clockwise = (elemeents) => {
//   let transpose = elemeents.map((_, index) =>
//     elemeents.map((array) => array[index])
//   );

//   console.log(transpose);
//   return reverseRows(transpose);
// };
// const reverseRows = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let left = 0;
//     let right = array.length - 1;
//     while (left < right) {
//       let temp = array[i][left];
//       array[i][left] = array[i][right];
//       array[i][right] = temp;
//       left++;
//       right--;
//     }
//   }
//   return array;
// };
// console.log(clockwise(elemeents));
// console.log(
//   clockwise([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );
// // reverse string
// let str = "hello world";
// const reverseStr = (str) => {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   return rev;
// };
// console.log(reverseStr(str));
// //rotate 90 degree in anticlockwise
// const anticlockwise = (elemeents) => {
//   let transpose = elemeents.map((_, index) =>
//     elemeents.map((array) => array[index])
//   );
//   console.log(transpose);
//   return reverseColumns(transpose);
// };
// const reverseColumns = (array) => {
//   for (let j = 0; j < array[0].length; j++) {
//     let left = 0;
//     let right = array.length - 1;
//     while (left < right) {
//       let temp = array[j][left];
//       array[j][left] = array[j][right];
//       array[j][right] = temp;
//       left++;
//       right--;
//     }
//   }
//   return array;
// };
// console.log(anticlockwise(elemeents));
// // Adding Rows of a 2D Array
// // You are given a two dimensional array containing arrays of integers as an argument.
// //Find the largest integer that can be obtained by summing all integers along any row or column.

// // Inner arrays may or may not contain equal number elements in each.

// // Requirements
// // Must return an integer
// // Example #1
// // solve([
// //   [1, 2, 5, 1, 5, 1],
// //   [0, 4, 5, 7, 7, 3],
// //   [1, 6, 7, 1, 7, 8]
// // ])
// // > 30
// // Summing up all integers in row three 1+6,+7+1+7+8 gives us the largest sum, so we return 30.

// // Example #2
// // solve([
// //   [1, 2, 2, 1, 5, 4],
// //   [0, 1, 1, 2, 1, 9],
// //   [1, 2, 2, 1, 3, 8]
// // ])
// // > 21
// // Summing up all integers in column six 4+9+8 gives us the largest sum, so we return 21.
// const addingRowOrColumn = (elements) => {
//   const sumOfRows = buildSumOfRows(elements);
//   const sumOfColumns = buildSumOfColumns(elements);
//   console.log(sumOfColumns);
//   return [...sumOfRows, ...sumOfColumns].sort((a, b) => b - a)[0];
// };
// function buildSumOfRows(elements) {
//   let result = [];
//   for (let i = 0; i < elements.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < elements[i].length; j++) {
//       sum += elements[i][j];
//     }
//     result.push(sum);
//   }
//   return result;
// }
// const buildSumOfColumns = (elements) => {
//   let result = [];
//   for (let i = 0; i < elements[0].length; i++) {
//     let sum = 0;
//     for (let j = 0; j < elements.length; j++) {
//       console.log(elements[j][i]);
//       sum += elements[j][i];
//     }
//     result.push(sum);
//   }
//   return result;
// };
// console.log(
//   addingRowOrColumn([
//     [1, 2, 5, 1, 5, 1],
//     [0, 4, 5, 7, 7, 3],
//     [1, 6, 7, 1, 7, 8],
//   ])
// );
// console.log(
//   addingRowOrColumn([
//     [1, 2, 2, 1, 5, 4],
//     [0, 1, 1, 2, 1, 9],
//     [1, 2, 2, 1, 3, 8],
//   ])
// );
// const checkRowsOrcolumn = (array) => {
//   //row
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].every((a) => a === 1)) {
//       return true;
//     }
//   }
//   //column

//   for (let i = 0; i < array[0].length; i++) {
//     let result = [];
//     for (let j = 0; j < array.length; j++) {
//       result.push(array[j][i]);
//     }
//     if (result.every((a) => a === 1)) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(
//   checkRowsOrcolumn([
//     [1, 2, 2, 1, 5],
//     [0, 1, 1, 1, 1],
//     [1, 2, 2, 1, 3],
//   ])
// );

// function lastColumns(array) {
//   let columns = [];
//   for (let i = 0; i < array[0].length; i++) {
//     let result = [];
//     for (let j = 0; j < array.length; j++) {
//       result.push(array[j][i]);
//     }
//     columns.push(result);
//   }
//   return columns[columns.length - 1].reverse();
// }
// console.log(
//   lastColumns([
//     [2, 4, 6],
//     [7, 0, 9],
//     [1, 2, 2],
//   ])
// );
// const spiral = (n) => {
//   let result = [];
//   for (let i = 0; i < n; i++) {
//     result.push([]);
//   }
//   let counter = 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   while (startRow <= endRow && startColumn <= endColumn) {
//     for (let i = startColumn; i <= endColumn; i++) {
//       result[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;
//     for (let i = startRow; i <= endRow; i++) {
//       result[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;
//     for (let i = endColumn; i >= startColumn; i--) {
//       result[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;
//     for (let i = endRow; i >= startRow; i--) {
//       result[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }
//   return result;
// };
// console.log(spiral(3));

// // const depthFirstPrint = (graph, source) => {
// //   let stack = [source];
// //   while (stack.length > 0) {
// //     let current = stack.pop();
// //     console.log(current);
// //     for (let neighbor of graph[current]) {
// //       stack.push(neighbor);
// //     }
// //   }
// // };
// const breadthFirstPrint = (graph, source) => {
//   let queue = [source];
//   while (queue.length > 0) {
//     let current = queue.shift();
//     console.log(current);
//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }
// };
// const depthFirstPrint = (graph, source) => {
//   console.log(source);
//   for (let neighbor of graph[source]) {
//     depthFirstPrint(graph, neighbor);
//   }
// };
// const graph = {
//   a: ["b", "c"],
//   b: ["d"],
//   c: ["e"],
//   d: ["f"],
//   e: [],
//   f: [],
// };
// console.log(depthFirstPrint(graph, "a"));
// console.log(breadthFirstPrint(graph, "a"));

// const hasPath = (graph, src, dist) => {
//   const stack = [src];
//   while (stack.length > 0) {
//     let current = stack.pop();
//     if (current === dist) {
//       return true;
//     }
//     for (let neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
//   return false;
// };
// const hasPath = (graph, src, dist) => {
//   const queue = [src];
//   while (queue.length > 0) {
//     let current = queue.shift();
//     if (current === dist) {
//       return true;
//     }
//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }
//   return false;
// };
// const hasPath = (graph, src, dist) => {
//   if (src === dist) {
//     return true;
//   }
//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dist) === true) {
//       return true;
//     }
//   }
//   return false;
// };

// const graphLetter = {
//   f: ["g", "i"],
//   g: ["h"],
//   h: [],
//   i: ["g", "k"],
//   j: ["i"],
//   k: [],
// };
// console.log(hasPath(graphLetter, "j", "h"));
// const undirectedHasPath = (edges, nodeA, nodeB) => {
//   const graph = build(edges);
//   let visited = new Set();
//   return hasPath(graph, nodeA, nodeB, visited);
// };
// const hasPath = (graph, src, dist, visited) => {
//   if (src === dist) return true;
//   if (visited.has(src)) return false;
//   visited.add(src);
//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dist, visited) === true) {
//       return true;
//     }
//   }
//   return false;
// };
// const build = (edges) => {
//   let graph = {};
//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!(a in graph)) graph[a] = [];
//     if (!(b in graph)) graph[b] = [];
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };
// const edges = [
//   ["i", "j"],
//   ["k", "i"],
//   ["m", "k"],
//   ["k", "l"],
//   ["o", "n"],
// ];
// console.log(build(edges));
// console.log(undirectedHasPath(edges, "j", "m"));
// const connectComponents = (graph) => {
//   let counter = 0;
//   let visited = new Set();
//   for (let node in graph) {
//     if (explore(graph, node, visited) === true) {
//       counter++;
//     }
//   }

//   return counter;
// };
// const explore = (graph, src, visited) => {
//   if (visited.has(String(src))) return false;
//   visited.add(String(src));
//   for (let neighbor of graph[src]) {
//     explore(graph, neighbor, visited);
//   }
//   return true;
// };
// const adjacencyList = {
//   3: [],
//   4: [6],
//   6: [4, 5, 7, 8],
//   8: [6],
//   7: [6],
//   5: [6],
//   1: [2],
//   2: [1],
// };
// console.log(connectComponents(adjacencyList));

// const largestComponent = (graph) => {
//   let largest = -Infinity;
//   let visited = new Set();
//   for (let node in graph) {
//     let size = exploreLargest(graph, node, visited);
//     if (size > largest) {
//       largest = size;
//     }
//   }
//   return largest;
// };
// const exploreLargest = (graph, src, visited) => {
//   let size = 1;
//   if (visited.has(String(src))) return 0;
//   visited.add(String(src));
//   for (let neighbor of graph[src]) {
//     size += exploreLargest(graph, neighbor, visited);
//   }
//   return size;
// };
// const g = {
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 3],
//   4: [3, 5],
// };
// console.log(largestComponent(g));
// const shortest = (graph, nodeA, nodeB) => {
//   let visited = new Set([nodeA]);
//   let queue = [[nodeA, 0]];
//   while (queue.length > 0) {
//     const [current, distance] = queue.shift();
//     if (current === nodeB) return distance;
//     for (let neighbor of graph[current]) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push([neighbor, distance + 1]);
//       }
//     }
//   }
//   return -1;
// };
// const adjacencyList = (edges) => {
//   let graph = {};
//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!(a in graph)) graph[a] = [];
//     if (!(b in graph)) graph[b] = [];
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };
// const edges = [
//   ["w", "x"],
//   ["x", "y"],
//   ["z", "y"],
//   ["z", "v"],
//   ["w", "v"],
// ];
// console.log(shortest(adjacencyList(edges), "w", "z"));

// const islandCount = (grid) => {
//   let count = 0;
//   let visited = new Set();
//   for (let r = 0; r < grid.length; r++) {
//     for (let c = 0; c < grid[0].length; c++) {
//       if (explore(grid, r, c, visited) === true) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
// function explore(grid, r, c, visited) {
//   const rowInBound = 0 <= r && r < grid.length;
//   const rowOutBound = 0 <= c && c < grid[0].length;
//   if (!rowInBound || !rowOutBound) return false;
//   let pos = r + ", " + c;
//   if (grid[r][c] === "W") return false;
//   if (visited.has(pos)) return false;
//   visited.add(pos);
//   explore(grid, r - 1, c, visited);
//   explore(grid, r + 1, c, visited);
//   explore(grid, r, c - 1, visited);
//   explore(grid, r, c + 1, visited);
//   return true;
// }
// const grid = [
//   ["W", "L", "W", "W", "W"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "L", "W", "L", "W"],
//   ["W", "L", "W", "L", "W"],
//   ["W", "W", "L", "L", "W"],
//   ["W", "W", "W", "L", "L"],
//   ["W", "W", "W", "W", "W"],
// ];
// console.log(islandCount(grid));
// const minimumIsland = (grid) => {
//   let min = Infinity;
//   let visited = new Set();
//   for (let r = 0; r < grid.length; r++) {
//     for (let c = 0; c < grid[0].length; c++) {
//       let size = explored(grid, r, c, visited);
//       if (size > 0 && size < min) min = size;
//     }
//   }
//   return min;
// };
// function explored(grid, r, c, visited) {
//   let pos = r + "," + c;
//   let size = 1;
//   const rowInBound = 0 <= r && r < grid.length;
//   const colInBound = 0 <= c && c < grid[0].length;
//   if (!rowInBound || !colInBound) return 0;
//   if (grid[r][c] === "W") return 0;
//   if (visited.has(pos)) return 0;
//   visited.add(pos);
//   size += explored(grid, r - 1, c, visited);
//   size += explored(grid, r + 1, c, visited);
//   size += explored(grid, r, c - 1, visited);
//   size += explored(grid, r, c + 1, visited);
//   return size;
// }
// const g = [
//   ["W", "W", "W", "W", "W"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "L", "W"],
//   ["W", "W", "L", "L", "L"],
//   ["W", "W", "W", "L", "W"],
// ];
// console.log(minimumIsland(g));
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// console.log(a);
// const depthFirst = (root) => {
//   let result = [];
//   if (root === null) return [];
//   let stack = [root];
//   while (stack.length > 0) {
//     let current = stack.pop();
//     result.push(current.val);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return result;
// };
// console.log(depthFirst(a));
// const breadthFirst = (root) => {
//   if (root === null) return [];
//   let result = [];
//   let queue = [root];
//   while (queue.length > 0) {
//     let current = queue.shift();
//     result.push(current.val);
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return result;
// };
// console.log(breadthFirst(a));
// const depthFirstRecursive = (root) => {
//   if (root === null) return [];
//   const leftVal = depthFirstRecursive(root.left);
//   const rightVal = depthFirstRecursive(root.right);
//   return [root.val, ...leftVal, ...rightVal];
// };
// console.log(depthFirstRecursive(a));

// const treeIncludes = (root, target) => {
//   if (root === null) return false;
//   if (root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };
// console.log(treeIncludes(a, "d"));
// const treeSum = (root) => {
//   if (root === null) return "";
//   return root.val + treeSum(root.left) + treeSum(root.right);
// };
// console.log(treeSum(a));
// const treeMinValue = (root) => {
//   if (root === null) return Infinity;
//   let leftValue = treeMinValue(root.left);
//   let rightValue = treeMinValue(root.right);
//   return Math.min(root.val, leftValue, rightValue);
// };
// const maxPath = (root) => {
//   if (root === null) return -Infinity;
//   if (root.left === null && root.right === null) return root.val;
//   let max = Math.max(maxPath(root.left), maxPath(root.right));
//   return root.val + max;
// };

// const insertion = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let elem = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > elem) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = elem;
//   }
//   return array;
// };
// console.log(insertion([48, 5, 1, 10, -1]));

// const bubble = (array) => {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < array.length - 1; i++) {
//       if (array[i] > array[i + 1]) {
//         let temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return array;
// };
// console.log(bubble([6, 2, 3, 1, 2000, -12]));
// function fizzBuzz(n) {
//   let value;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0 && i % 3 === 0) {
//       value = console.log("fizzbuzz");
//     } else if (i % 2 === 0) {
//       value = console.log("fizz");
//     } else if (i % 3 === 0) {
//       value = console.log("buzz");
//     } else {
//       value = console.log(i);
//     }
//   }
//   return value;
// }

// console.log(fizzBuzz(100));
// function width(root) {
//   let counter = [0];
//   let stack = [root, "s"];
//   while (stack.length > 1) {
//     let current = stack.shift();
//     if (current === "s") {
//       counter.push(0);
//       stack.push("s");
//     } else {
//       for (let child of children) {
//         stack.push(child);
//         counter[counter.length - 1]++;
//       }
//     }
//   }
//   return counter;
// }
// function step(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }
// console.log(step(3));
// function pyramid(n) {
//   let mid = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (mid - row <= col && mid + row >= col) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }
// console.log(pyramid(3));
// let words = "hello world";
// console.log(words[0]);
// const word = words.trim();
// console.log(word.indexOf("w"));
// console.log(word.indexOf("u"));
// console.log(word.indexOf("W"));
// console.log(word.indexOf("wo"));
// console.log(word.lastIndexOf("world"));
// console.log(word.slice(0, 4));
// console.log(word.slice());
// console.log(word.slice(-5));
// console.log(word.slice(0, -2));
// let num = [2, 4, 5, 6, 7, 8];
// console.log(num.slice(0, -2));
// //this get the index of the first space
// let index = word.indexOf(" ");
// //this get the first word of a giving sentence
// let w = "I love you my friend";
// let ind = w.lastIndexOf(" ");
// console.log(ind);
// console.log(w.slice(ind));
// console.log(word.slice(0, index));
// function getFirst(words) {
//   let index = words.indexOf(" ");
//   return words.slice(0, index);
// }
// console.log(getFirst("program in Java"));
// function lastLetter(words) {
//   let index = words.lastIndexOf(" ") + 1;
//   console.log(index);
//   return words.slice(index);
// }
// console.log(lastLetter("program in Java"));
// let emp1 = { name: "John", empCode: "BLR1122P", gender: "Male" };
// let emp2 = { name: "Mark", empCode: "NYC1322C", gender: "Male" };
// let emp3 = { name: "Merry", empCode: "LON4221P", gender: "Female" };
// function employeeDetail(employee) {
//   let name = employee.name;
//   let gender = employee.gender;
//   let employeeDept = employee.empCode.slice(0, 3);
//   employeeDept === "BLR"
//     ? "Engineering"
//     : employeeDept === "NYC"
//     ? "Sale"
//     : "Logistic";
//   let type = employee.empCode.slice(-1) === "P" ? "Permanent" : "Temporary";
//   let code = employee.empCode.slice(3, -1);
//   return `I am ${name}, gender ${gender} with employee code ${code}, a ${type} staff of ${employeeDept} dept`;
// }
// console.log(employeeDetail(emp1));
// console.log(employeeDetail(emp2));
// console.log(employeeDetail(emp3));
// const message = "I like JavaScript";
// let lower = message.toLowerCase();
// console.log(lower);
// let upper = message.toUpperCase();
// console.log(upper);
// function upperFunc(words) {
//   return words[0].toUpperCase() + words.slice(1).toLowerCase();
// }
// console.log(upperFunc("hello"));
// console.log(upperFunc("read"));
// let foo = " football ";
// console.log(foo.trim());
// let charater = "hello, My baby is crying";
// //note replace charater  is case sensitive
// console.log(charater.replace(",", "?"));
// console.log(charater.replaceAll("b", "c"));
// //includes is case sensitive too and return boolean
// console.log(charater.includes("bab"));
// //startsWith() and endsWith() are case sensitive and also return boolean
// console.log(charater.startsWith("hello"));
// console.log(charater.endsWith("g"));
// console.log(charater.split("n"));
// console.log(charater.split("-"));
// let names = ["rabo", "yusuf", "bar"];
// console.log(names.join(" "));
// console.log(charater.padStart(30, "%"));
// function cardNumber(number) {
//   let str = number + ""; //number.toString()
//   let last = str.slice(-4);
//   return last.padStart(11, "*");
// }
// console.log(cardNumber(23456758679));
// //with no arguments it return first letter
// console.log(charater.charAt());
// console.log(charater.charAt(0));
// //without it argument it will return first letter char code
// console.log(charater.charCodeAt());
// console.log(String.fromCharCode(charater.charCodeAt()));
// console.log(charater.search("s"));
// let str = "I am a string and i love to see string in my Program";
// console.log(str.match(/am/gi));
// console.log(str.match(/[A-Z][a-z]*/g));
// const rain = "The main bulk of rain will fall in SPAIN. That's our gain";
// console.log(rain.match(/ain/));
// console.log(rain.match(/ain/g));
// console.log(rain.match(/ain/gi));
// console.log(rain.match(/[a-z]/g));
// console.log(rain.match(/[a-zA-Z]/g));
// console.log(rain.match(/[.]/g));
// console.log(rain.match(/[A-Z][a-z]*/g));
// let details = ["Software", "USA"];
// console.log("Hello timer function......");
// let timer = setTimeout(
//   (job, location) => {
//     console.log("I am " + job + " from " + location);
//   },
//   3000,
//   ...details
// );
// console.log("another hello timer.......");
// clearTimeout(timer);
// const time = setInterval(() => {
//   let now = Date.now();
//   console.log(now);
// }, 3000);
// clearInterval(time);
// let now = new Date();
// let options = {
//   day: "numeric",
//   month: "numeric",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
//   weekday: "short",
// };
// console.log(now);
// const local = navigator.language;
// console.log(local);
// const us = Intl.DateTimeFormat("en-US", options).format(now);
// console.log(us);
// const uk = Intl.DateTimeFormat("en-UK").format(now);
// console.log(uk);
// const lv = Intl.DateTimeFormat("lv-LV").format(now);
// // console.log(lv);
// let num = 400000;
// const options = {
//   style: "currency",
//   currency: "USD", //"percent",
// };
// const number = Intl.NumberFormat("en-US", options).format(num);
// console.log(number);
// const now = new Date();
// console.log(now);
// let curr = new Date(1200);
// console.log(curr);
// console.log(new Date(24 * 60 * 60 * 1000));
// console.log(new Date(-24 * 60 * 60 * 1000));
// const time = new Date(24 * 60 * 60 * 1000);
// console.log(time.getTime());
// const n = new Date("2018-04-12");
// console.log(n);
// var twoSum = function (nums, target) {
//   var hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     var num = target - nums[i];
//     console.log(hash);
//     console.log(hash[num]);
//     if (hash[num] !== undefined) {
//       return [hash[num], i];
//     }
//     hash[nums[i]] = i;
//   }
//   console.log(hash);
// };
// // console.log(twoSum([2, 7, 11, 15], 9));
// const obj = {
//   name: "rabo",
//   age: 18,
//   contacts: {
//     phone: 99934567,
//   },
// };
// console.log(obj.age);
// console.log(obj.age);
// const valueObj = obj.age.data === undefined ? "hello" : 78;
// console.log(valueObj);
// console.log(obj.name.age?.target);
// console.log(obj.contacts.month?.data);
// console.log(obj.contacts.eat?.format);
// console.log(obj.read?.currency?.age);
// function name() {
//   console.log("hello world");
// }
// name.lan = "language";
// console.log(name.lan);
// let a = 80; // this is stored in stack memory because is value; note that it will not change
// let b = a;
// a = 89;
// console.log(a === b);
// const detail = {
//   name: "rabo", // reference the value changes in the memory
//   age: 34,
// };
// const array = [3, 5, 8, [4, 5, [7, [8]]], 684];
// console.log(array.flat(4));
const employee = [
  { id: 1, name: "Yusuf", skills: ["html", "sql", "css"] },
  { id: 2, name: "Timothy", skills: ["ruby", "sql", "css"] },
  { id: 3, name: "Joshua", skills: ["JavaScript", "sql", "css", ["React"]] },
];
const skillsArray = employee.map((skill) => skill.skills).flat(3);
console.log(skillsArray);
const skill = employee.flatMap((skill) => skill.skills);
console.log(skill);
const salary = [800, 700, 400, 1000, 500, 600];
//includes: equality check
console.log(salary.includes(400));
//conditional check: that if a certain condition matches
const sala = salary.some((c) => c === 400 || c > 400);
console.log(sala);
const someEven = salary.some((c) => c % 2 === 0);
console.log(someEven);
const someOdd = salary.some(
  (c, _, array) => c % 2 === 1 && array.includes(500)
);
console.log(someOdd);
const allEven = salary.every((c) => c % 2 === 0);
console.log(allEven);
const index = salary.findIndex((c) => c > 800);
console.log(index);
console.log(salary.findIndex((c) => c % 2 === 0));
console.log(salary.findIndex((c) => c > 3000));
console.log(salary.find((c) => c > 55000));
const reduce = salary.reduce((acc, curr, index, array) => acc + curr, 0);
console.log(reduce);
let array = ["red", "green", "yellow", "red"];

let set = new Set(array);
console.log(set);
console.log([...set]);
console.log(set.add("blue"));
console.log(set.has("green"));
console.log(set.has("yellow"));
console.log(set.size);
console.log(set.delete("green"));
const stringSet = "hello";
console.log(new Set(stringSet));
for (let letter of stringSet) {
  console.log(letter);
}
let string = "hello world";
let stringLen = new Set(string);
console.log(stringLen.size);
let week = undefined;
let queen = 600;
console.log(week ?? queen);
let stri = "hello";
console.log(...stri);
function closeNeighbor(array, N) {
  array.sort((a, b) => a - b);
  let min, max;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= N) {
      min = array[i - 1];
      max = array[i + 1];
      break;
    }
  }
  let finalMin = N - min;
  let finalMax = max - N;
  let final = Math.min(finalMax, finalMin);
  for (let i = 0; i < array.length; i++) {
    if (N - final === array[i] || N + final === array[i]) {
      return array[i];
    }
  }
}
console.log(closeNeighbor([14, 13, 34, 1, 6, 3, 7, 8, 10, 11, 12, 13], 10));
console.log(closeNeighbor([30, -1, 3, 14, 13, 34, 1, 6, 3], 4));
//XOR ^
console.log(1 ^ 0);
console.log(1 ^ 1);
console.log(0 ^ 1);
console.log(0 ^ 0);
//carry &
console.log(1 & 0);
console.log(0 & 1);
console.log(1 & 1);
//left shift
console.log(1 << 1);
console.log(1 << 2);
console.log(Number(001110012334));
const d = new Object();
d.name = "rabo";
console.log(d);
function Person(age) {
  (this.name = "John"),
    (this.age = age),
    (this.greet = function () {
      return this.age;
    });
}

//console.log(person.name);
Person.prototype.getDetail = function () {
  return this.name;
};

const person = new Person(90);
console.log(person.greet());
console.log(person.getDetail());
let wordBank = [
  "ate",
  "google",
  "googleplus",
  "ket",
  "facebook",
  "you",
  "twoduplicates",
];
let target = "plus";
function puzzleWord(target, words) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    //console.log(word)
    if (word.toLowerCase().includes(target)) {
      return i;
    }
  }
  return -1;
}
console.log(puzzleWord(target, wordBank));
console.log(puzzleWord("ic", wordBank));
console.log(puzzleWord("ze", wordBank));
function tab(n) {
  let array = new Array(n + 1).fill(0);
  for (let i = 2; i < array.length; i++) {
    array[1] = 1;
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
}
console.log(tab(6));
const mergeInvervals = (intervals) => {
  const sorted = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  const merge = [sorted.shift()];
  console.log(merge);
};
console.log(
  mergeInvervals([
    [1, 4],
    [7, 9],
    [2, 5],
  ])
);
let result = [[2, 5]];
console.log(result[result.length - 1][1]);
// console.log(
//   mergeInvervals([
//     [6, 7],
//     [2, 4],
//     [5, 9],
//   ])
// );
// console.log(
//   mergeInvervals([
//     [1, 4],
//     [2, 6],
//     [3, 5],
//   ])
// );
