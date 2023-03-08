const partial =
  (f, ...a) =>
  (...b) =>
    f(...a, ...b);
const add = (a, b, c) => a + b + c;
const multiply = (a, b, c, d) => a * b * c * d;
const fivePlus = partial(add, 1, 2);
console.log(fivePlus(2));
const threeAndFourMultiply = partial(multiply, 1, 2);
console.log(threeAndFourMultiply(3, 4));
