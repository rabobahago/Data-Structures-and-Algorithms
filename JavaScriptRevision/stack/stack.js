function Stack() {
  this.storages = [];
  this.top = 0;
  this.pop = pop;
  this.peek = peek;
  this.push = push;
  this.clear = clear;
  this.length = length;
}
function clear() {
  this.top = 0;
}
function pop() {
  return this.storages[this.top--];
}
function peek() {
  return this.storages[this.top - 1];
}
function push(elem) {
  this.storages[this.top++] = elem;
}
function length() {
  return this.top;
}
let stack = new Stack();
stack.push("Rabo");
stack.push("Martins");
stack.push("Mardins");
console.log(stack.length());
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.clear();
console.log(stack.length());

// 1. The rightmost digit of n is n % b. Push this digit onto the stack.
// 2. Replace n with n / b.
// 3. Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
// 4. Build the converted number string by popping the stack until the stack is empty.

function mulBase(num, base) {
  let s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);
  let converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}
let num = 32;
let base = 2;
console.log(mulBase(num, base));
num = 125;
base = 8;
console.log(mulBase(num, base));

const StackMethod = function () {
  this.count = 0;
  this.storage = {};
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };
  this.pop = () => {
    if (this.count === 0) return undefined;
    this.count--;
    const item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
  };

  this.size = () => {
    return this.count;
  };
  this.peek = () => {
    return this.storage[this.count - 1];
  };
};
const stackm = new StackMethod();
stackm.push(1);
stackm.push(2);
stackm.push(3);
console.log(stackm.peek());
