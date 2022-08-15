//intersection of a sets
const intersectionOfSet = (setA, setB) => {
  let intersection = new Set();
  for (let i of setA) {
    if (setB.has(i)) {
      intersection.add(i);
    }
  }
  return intersection;
};
console.log(
  intersectionOfSet(new Set([1, 2, 5, 7, 8]), new Set([2, 4, 6, 8, 9]))
);
//union of sets
const unionOfSet = (setA, setB) => {
  let union = new Set(setA);
  for (let i of setB) {
    union.add(i);
  }
  return union;
};
console.log(unionOfSet(new Set([1, 2, 5, 7, 8]), new Set([2, 4, 6, 8, 9])));
