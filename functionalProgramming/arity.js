//he number of arguments a function takes. From words like unary, binary, ternary, etc.
const sum = (a, b) => a + b;
// The arity of sum is 2 (binary)
const inc = (a) => a + 1;
// The arity of inc is 1 (unary)
const zero = () => 0;
// The arity of zero is 0 (nullary)
console.log(sum(2, 3));
console.log(inc(2));
console.log(zero());
