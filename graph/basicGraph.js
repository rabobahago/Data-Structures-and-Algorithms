const depthFirst = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node);
    for (let neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }
};
const depthFirstRecursive = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstRecursive(graph, neighbor);
  }
};
const breadthFirst = (graph, source) => {
  let queue = [source];
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);
    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
depthFirstRecursive(graph, "a");
depthFirst(graph, "a");
breadthFirst(graph, "a");

//time O(e) or O(n^2) | same space(n)
//where e is the number of edges and n is the number of nodes
const hasPath = (graph, source, dist) => {
  if (source === dist) return true;
  for (let neighbor of graph[source]) {
    if (hasPath(graph, neighbor, dist) === true) {
      return true;
    }
  }
  return false;
};

const hasPathIterative = (graph, source, dist) => {
  let queue = [source];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node === dist) return true;
    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
  return false;
};

const graphLetter = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};
console.log(hasPath(graphLetter, "f", "i"));
console.log(hasPath(graphLetter, "f", "d"));

console.log(hasPathIterative(graphLetter, "f", "h"));
console.log(hasPathIterative(graphLetter, "f", "k"));
console.log(hasPathIterative(graphLetter, "f", "r"));

const undirectedGraph = (edges, nodeA, nodeB) => {
  const graph = graphAdjacencyList(edges);
  return hasPathUndirected(graph, nodeA, nodeB, new Set());
};
const hasPathUndirected = (graph, src, dist, visited) => {
  if (src === dist) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPathUndirected(graph, neighbor, dist, visited) === true) {
      return true;
    }
  }
  return false;
};
const graphAdjacencyList = (edges) => {
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
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];
console.log(undirectedGraph(edges, "j", "m"));
