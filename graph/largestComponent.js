const largestComponent = (graph) => {
  let largest = -Infinity;
  let visited = new Set();
  for (let node in graph) {
    let size = explode(graph, node, visited);
    if (size > largest) {
      largest = size;
    }
  }
  return largest;
};
const explode = (graph, root, visited) => {
  let size = 1;
  if (visited.has(String(root))) return 0;
  visited.add(String(root));
  for (let neighbor of graph[root]) {
    size += explode(graph, neighbor, visited);
  }
  return size;
};
const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 3],
  4: [3, 5],
};
console.log(largestComponent(graph));
