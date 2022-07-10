// function reverseStrig(str) {
//   let reverse = "";
//   for (let char of str) {
//     reverse = char + reverse;
//   }
//   return reverse;
// }
// console.log(reverseStrig("hello"));
// function reverseStrigReduce(str) {
//   return str.split("").reduce((rev, char) => rev + char, "");
// }
// console.log(reverseStrig("hello"));
// function reverseStrigReduceRight(str) {
//   return str.split("").reduceRight((rev, char) => rev + char);
// }
// console.log(reverseStrigReduceRight("hello"));
// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseStr("hello"));
// function reverseSt(str) {
//   let total = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     total += str[i];
//   }
//   return total;
// }
// console.log(reverseSt("hello"));
// function isPalindrome(str) {
//   return str.split("").reverse().join("") === str;
// }
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("dod"));
// function palindrome(str) {
//   let mid = Math.floor(str.length / 2);
//   for (let i = 0; i < str.length; i++) {
//     if (mid === i) break;
//     if (str[i] !== str[str.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrome("hello"));
// //console.log(palindrome("dod"));
// function maxChar(str) {
//   let result = {};
//   let max = 0;
//   let characters = "";
//   for (let char of str) {
//     if (!result[char]) result[char] = 1;
//     else result[char] = result[char] + 1;
//   }
//   for (let char in result) {
//     if (result[char] > max) {
//       max = result[char];
//       characters = char;
//     }
//   }
//   return characters;
// }
// console.log(maxChar("hello"));
// function chunk(array, size) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let last = result[result.length - 1];
//     if (!last || last.length === size) {
//       result.push([array[i]]);
//     } else {
//       last.push(array[i]);
//     }
//   }
//   return result;
// }
// console.log(chunk([3, 5, 6, 8, 89, 23, 4, 1], 3));
function taskAssignment(k, tasks) {
  let result = [];
  const formattedTasks = tasks.map((task, index) => ({ task, index }));
  formattedTasks.sort((a, b) => a.task - b.task);
  let start = 0;
  let end = formattedTasks.length - 1;
  while (start <= end) {
    result.push([formattedTasks[start].index, formattedTasks[end].index]);
    start++;
    end--;
  }
  return result;
}
console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]));
const solve = (intArray) => {
  let sumRight = 0;
  let sumLeft = 0;
  let start = 0;
  let end = intArray.length - 1;
  let mid = Math.floor((start + end) / 2);
  console.log(mid);
  for (let i = 0; i < intArray.length; i++) {
    if (i <= mid) sumLeft += intArray[i];
    if (i > mid + 1) sumRight += intArray[i];
  }
  return sumRight === sumLeft;
};
console.log(solve([5, 4, 3, 9]));
console.log(solve([5, 1, 3, 9]));
console.log(solve([5, 5, -1, 3, 9]));
function capitalize(str) {
  let result = [];
  for (let char of str.split(" ")) {
    result.push(char[0].toUpperCase() + char.slice(1));
  }
  return result.join(" ");
}
console.log(capitalize("hello world"));
function steps(n) {
  for (let row = 0; row < n; row++) {
    let steps = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) steps += "#";
      else steps += " ";
    }
    console.log(steps);
  }
}
console.log(steps(6));
function stepRecursive(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    stepRecursive(n, row + 1, "");
    return;
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  stepRecursive(n, row, stair);
}
console.log(stepRecursive(6));
function chessboard(n) {
  if (n !== 8) return "n * n is the dimension, where n is 8. pls enter 8";
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < n; col++) {
      if ((row + col) % 2 === 0) stair += "#";
      else stair += " ";
    }
    console.log(stair);
  }
}
console.log(chessboard(7));
function pyramid(n) {
  let midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}
console.log(pyramid(8));
class Queue {
  constructor() {
    this.stackItems = [];
  }
  add(item) {
    this.stackItems.push(item);
  }
  remove() {
    return this.stackItems.shift();
  }
  peek() {
    return this.stackItems[0];
  }
  isEmpty() {
    if (!this.stackItems.length) return true;
    return false;
  }
}
const stack = new Queue();
stack.add(4);
stack.add(5);
const stringStack = new Queue();
stringStack.add("hello");
stringStack.add("world");
function combineStack(QueueA, QueueB) {
  let q = new Queue();
  while (QueueA.peek() || QueueB.peek()) {
    if (QueueA.peek()) {
      q.add(QueueA.remove());
    }
    if (QueueB.peek()) {
      q.add(QueueB.remove());
    }
  }
  return q;
}
console.log(combineStack(stack, stringStack));
// console.log(stack);
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.remove());
// console.log(stack.remove());
// console.log(stack.isEmpty());

class Node {
  constructor(element, index) {
    this.element = element;
    this.index = index;
  }
}
class PriorityQueue {
  constructor() {
    this.priority = [];
  }
  enqueuePriority(element, index) {
    let newPriority = new Node(element, index);
    let contain = false;
    for (let i = 0; i < this.priority.length; i++) {
      if (this.priority[i].index > newPriority.index) {
        this.priority.splice(i, 0, newPriority);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.priority.push(newPriority);
    }
  }
  isEmpty() {
    if (this.priority.length) return false;
    return true;
  }
  peek() {
    if (this.isEmpty()) return "No such priority exist";
    return this.priority[this.priority.length - 1];
  }
  front() {
    if (this.isEmpty()) return "No such priority exist";
    return this.priority[0];
  }
  dequeue() {
    if (this.isEmpty()) return "No such priority exist";
    return this.priority.shift();
  }
  getLength() {
    return this.priority.length;
  }
  getAll() {
    let str = "";
    for (let i = 0; i < this.priority.length; i++) {
      str += this.priority[i].index + " ";
    }
    return str;
  }
}
const p = new PriorityQueue();
p.enqueuePriority("add stuff to the store", 1);
p.enqueuePriority("Travel to Kaduna", 2);
p.enqueuePriority("Love to see my parent", 3);
console.log(p);
console.log(p.front());
//console.log(p.rear());
console.log(p.dequeue());
console.log(p.getLength());

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }
  //O(log(n)) time | O(1) space
  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((current - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}
