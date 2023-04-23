const set = new Set();
set.add(0);
set.add(1);
set.add(100);
console.log(set.has(199));
console.log(set.has(100));
set.delete(0);
console.log(set);
for (let elem of set.entries()) {
  const val = elem[0];
  console.log(val);
}
console.log(set.size);
console.log(set.clear());
console.log(set);
function union(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  return new Set(set1, set2);
}
console.log(union([1, 2, 3, 4], [3, 4, 5, 6]));
function intersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let res = new Set();
  for (let elem of set1.values()) {
    if (set2.has(elem)) res.add(elem);
  }
  return res;
}
console.log(intersection([1, 2, 3, 4], [2, 4, 5, 6]));
function complement(universal, arr1) {
  let set1 = new Set(arr1);
  let res = new Set();
  let universalSet = new Set(universal);
  for (let elem of universalSet.values()) {
    if (!set1.has(elem)) res.add(elem);
  }
  return res;
}
console.log(
  complement(
    [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [1, 3, 4, 5, 6, 7, 8, 9]
  )
);
function differenceA(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let res = new Set();
  for (let elem of set1.values()) {
    if (!set2.has(elem)) {
      res.add(elem);
    }
  }
  return res;
}
console.log(differenceA([2, 4, 5, 6, 78], [2, 4, 6]));
function disjoint(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  for (let elem of set1.values()) {
    if (set2.has(elem)) return false;
  }
  return true;
}
console.log(disjoint([2, 4, 5, 6, 78], [2]));
