const movementOfAPersonGivenAnArray = (array) => {
  // the question starting from 0, 0
  return array.reduce(
    ([a, b], curr) => {
      if (curr === "up") return [a, b + 1];
      if (curr === "down") return [a, b - 1];
      if (curr === "left") return [a - 1, b];
      if (curr === "right") return [a + 1, b];
    },
    [0, 0]
  );
};
console.log(
  movementOfAPersonGivenAnArray([
    "up",
    "up",
    "down",
    "left",
    "left",
    "right",
    "up",
  ])
);
