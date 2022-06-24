//time O(1) and Space O(1)
class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    let minmax = { min: number, max: number };
    if (!this.stack.length) {
      minmax.min = Math.min(number, minmax.min);
      minmax.max = Math.max(number, minmax.max);
      this.minMaxStack.push(minmax);
    }
    minmax.min = Math.min(
      number,
      this.minMaxStack[this.minMaxStack.length - 1].min
    );
    minmax.max = Math.max(
      number,
      this.minMaxStack[this.minMaxStack.length - 1].max
    );
    this.minMaxStack.push(minmax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
