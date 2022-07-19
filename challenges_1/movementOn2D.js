const movementOn2D = (array) => {
  return array.reduce(([a, b], [x, y]) => [a + x, b + y], [0, 0]);
};
console.log(
  movementOn2D([
    [1, 0],
    [0, -3],
    [3, 3],
  ])
);
