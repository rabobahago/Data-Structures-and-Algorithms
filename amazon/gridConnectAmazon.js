// A supply chain manager at Amazon Logisitcs wants to determine the number of connections
// between warehouses, represented as nodes on a grid. A grid with m rows and n columns is
// used to form a cluster of nodes. If a point in the grid has a value of 1, then it represents a
// node.
// Each node in the cluster has a level associated with it. A node located in the ith row of the grid
// is a level inode.
// Here are the rules for creating a cluster:
// Every node at a level connects to the next level that contains at least 1 node (i.e., every
// node at level i connects to all the nodes at level k where k > i and k is the first level
// after level i than contains at least one note).
// When i reaches the last level in the grid, no more connections are possible.
// Given such a grid, please help the supply chain manager by finding the number of connections
// present in the cluster.
// Input
// grid: the nodes grid
// Output
// the total number of connections
// Examples
// Example 1:
// Input: 1grid = [[1, 1, 1], [0, 1, 0], [0, 0, 0], [1, 1, 0]]
// Output: 5
//There are a total of 3+2=5 connections

const gridOfNodes = (edges) => {
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
  gridOfNodes([
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
    [1, 1, 0],
  ])
);
