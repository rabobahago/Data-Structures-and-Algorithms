// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
// write a function to find the number of connected components in an undirected graph.
// Example 1:
//     0          3
//     |          |
//     1 --- 2    4
// Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.
// Example 2:
//     0           4
//     |           |
//     1 --- 2 --- 3
// Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.
const connectComponents = (edges) => {
  let graph = buildAdlist(edges);
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
const buildAdlist = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
console.log(
  connectComponents([
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);
console.log(
  connectComponents([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
