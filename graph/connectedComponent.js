const connectComponents = (graph) => {
  let count = 0;
  let visited = new Set();
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
};
const explore = (graph, src, visited) => {
  if (visited.has(String(src))) return false;
  visited.add(String(src));
  for (let neighbor of graph[src]) {
    explore(graph, neighbor, visited);
  }
  return true;
};
const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};
console.log(connectComponents(graph));
// const obj = {
//   num: { a: 1, b: 2 },
//   week: { a: 40, b: 80 },
// };
// let converted = {};
// for (let elem in obj) {
//   const { a, b } = obj[elem];
//   if (!(elem in converted)) converted[elem] = [];
//   converted[elem].push(a + b);
// }
// console.log(converted);
