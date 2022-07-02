function fibb(n) {
  if (n <= 2) return n;
  return fibb(n - 1) + fibb(n - 2);
}
console.log(fibb(20));

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 5 === 0) console.log("Buzz");
  else if (i % 3 === 0) console.log("Fizz");
  else console.log(i);
}
