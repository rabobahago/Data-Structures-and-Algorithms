//depth first
//Time O(n^2) and Space O(n)
const depthFirst = (graph, source) => {
  let stack = [source];
  while (stack.length > 0) {
    const element = stack.pop();
    console.log(element);
    for (let neighbor of graph[element]) {
      stack.push(neighbor);
    }
  }
};
//recursive solution
//Time O(n^2) and Space O(n)
const depthFirstRecursion = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstRecursion(graph, neighbor);
  }
};
//breadth first
//Time O(n^2) and Space O(n)
const breadthFirst = (graph, source) => {
  let queue = [source];
  while (queue.length > 0) {
    let element = queue.shift();
    console.log(element);
    for (let neighbor of graph[element]) {
      queue.push(neighbor);
    }
  }
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
depthFirst(graph, "a");
depthFirstRecursion(graph, "a");
breadthFirst(graph, "a");

// Write a function, hasPath, that takes in an object representing
// the adjacency list of a directed acyclic graph and two nodes (src, dst).
// The function should return a boolean indicating whether or not there exists
// a directed path between the source and destination nodes.

//Note: This graph is acyclic: no cycle

//Has Path Depth First
const hasPathDepthFirst = (graph, source, dist) => {
  let stack = [source];
  while (stack.length > 0) {
    let element = stack.pop();
    for (let neighbor of graph[element]) {
      if (neighbor === dist) return true;
      stack.push(neighbor);
    }
  }
  return false;
};
//Has Path Breadth First
//Time O(e) Or O(n^2)
//Space O(n)
const hasPathBreadthFirst = (graph, source, dist) => {
  let queue = [source];
  while (queue.length > 0) {
    let element = queue.shift();
    for (let neighbor of graph[element]) {
      if (neighbor === dist) return true;
      queue.push(neighbor);
    }
  }
  return false;
};

//has Path depth First Recursion
//Time O(e) Or O(n^2)
//Space O(n)
const hasPathDepthFirstRecursion = (graph, source, dist) => {
  if (source === dist) return true;
  for (let neighbor of graph[source]) {
    if (hasPathDepthFirstRecursion(graph, neighbor, dist) === true) {
      return true;
    }
  }
};
console.log(hasPathDepthFirst(graph, "a", "f"));
console.log(hasPathDepthFirst(graph, "a", "f"));
console.log(hasPathDepthFirstRecursion(graph, "a", "f"));

// Write a function, undirectedPath, that takes in an
// array of edges for an undirected graph and two nodes (nodeA, nodeB).
// The function should return a boolean indicating whether or
// not there exists a path between nodeA and nodeB.
//Time O(n^2) and Space O(n)
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  //note how set is past as global for the whole traversal
  return hasUndirectedPathGraph(graph, nodeA, nodeB, new Set());
};
const hasUndirectedPathGraph = (graph, src, dist, visited) => {
  if (visited.has(src)) return false;
  visited.add(src);
  if (src === dist) return true;
  for (let neighbor of graph[src]) {
    if (hasUndirectedPathGraph(graph, neighbor, dist, visited) === true)
      return true;
  }
  return false;
};
const buildGraph = (edges) => {
  let graph = {};
  for (let neighbor of edges) {
    let [a, b] = neighbor;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "j", "m")); //

// Write a function, connectedComponentsCount, that takes in the
// adjacency list of an undirected graph. The function should return
// the number of connected components within the graph.
const connectedComponentsCount = (graph) => {
  //iterative from one component to another
  let visited = new Set();
  let count = 0;
  for (let key in graph) {
    if (explore(graph, key, visited) === true) {
      count = count + 1;
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
console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // -> 2

// Write a function, largestComponent, that takes in the adjacency
// list of an undirected graph. The function should return the size
// of the largest connected component in the graph.
const largestComponent = (graph) => {
  let max = -Infinity;
  let visited = new Set();
  for (let key in graph) {
    const count = exploreLarge(graph, key, visited);
    max = Math.max(max, count);
  }
  return max;
};
const exploreLarge = (graph, key, visited) => {
  if (visited.has(key)) return 0;
  let count = 1;
  visited.add(key);
  for (let neighbor of graph[key]) {
    count += exploreLarge(graph, neighbor, visited);
  }
  return count;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
); // -> 4

// shortest path
// Write a function, shortestPath, that takes in an array of edges
// for an undirected graph and two nodes (nodeA, nodeB). The function
// should return the length of the shortest path between A and B.
// Consider the length as the number of edges in the path, not the number of nodes.
// If there is no path between A and B, then return -1.
const shortestPath = (edges, nodeA, nodeB) => {
  let graph = buildShortestGraph(edges);
  let visited = new Set([nodeA]);
  let queue = [[nodeA, 0]];
  while (queue.length > 0) {
    let [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};
const buildShortestGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
const edgesShortest = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edgesShortest, "w", "z"));

// Write a function, islandCount, that takes in a grid containing Ws
// and Ls. W represents water and L represents land.
// The function should return the number of islands on the grid.
// An island is a vertically or horizontally connected region of land.
// (row, col)
//up(row - 1, col) down(row + 1, col) right(row, col + 1) left(row, col - 1)
//Time O(rc)
//Space O(rc)
const islandCount = (grid) => {
  let visited = new Set();
  let count = 0;
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      if (explored(grid, row, col, visited) === true) {
        count += 1;
      }
    }
  }
  return count;
};
const explored = (grid, row, col, visited) => {
  let pos = row + "," + col;
  let rowInBound = 0 <= row && row < grid.length;
  let colInBound = 0 <= col && col < grid.length;
  if (!rowInBound || !colInBound) return false;
  if (grid[row][col] === "W") return false;
  if (visited.has(pos)) return false;
  visited.add(pos);
  explored(grid, row - 1, col, visited);
  explored(grid, row + 1, col, visited);
  explored(grid, row, col - 1, visited);
  explored(grid, row, col + 1, visited);
  return true;
};
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3
