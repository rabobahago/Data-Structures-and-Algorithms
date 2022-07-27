let range = {
  a: 1,
  b: 10,
};
range[Symbol.iterator] = function () {
  return {
    current: this.a,
    last: this.b,
    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++,
        };
      } else {
        return { done: true };
      }
    },
  };
};
for (let num of range) {
  console.log(num);
}
function* sum() {
  yield 2;
  yield 70;
  return 5;
}
console.log(...sum());
let gen = sum();

// for (let num of gen) {
//   console.log(num);
// }
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
function* generateSequence(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}
const t = generateSequence(3, 5);
console.log([...t]);
const count = generateSequence(1, 10);
console.log(count.next());
let rangeGenerator = {
  start: 1,
  end: 10,
  *[Symbol.iterator]() {
    for (let value = this.start; value < this.end; value++) {
      yield value;
    }
  },
};
console.log([...rangeGenerator]);
function* composeGenerator(start, end) {
  for (let value = start; value < end; value++) {
    yield value;
  }
}
function* composeCharacter() {
  yield* composeGenerator(48, 57);
  yield* composeGenerator(65, 90);
  yield* composeGenerator(97, 122);
}
console.log(...composeCharacter());
let str = "";
for (let code of composeCharacter()) {
  str += String.fromCharCode(code);
}
console.log(str);
console.log(2 | 1);
console.log(1 ^ 5);
