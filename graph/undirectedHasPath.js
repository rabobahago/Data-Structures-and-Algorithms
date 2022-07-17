// const hasPath = (edges, sourceA, sourceB) => {
//   const graph = graphAdjacencyList(edges);
//   return graphHasPath(graph, sourceA, sourceB, new Set());
// };
// const graphHasPath = (graph, src, dist, visited) => {
//   if (src === dist) return true;

//   if (visited.has(src)) return false;
//   visited.add(src);

//   for (let neighbor of graph[src]) {
//     if (graphHasPath(graph, neighbor, dist, visited) === true) return true;
//   }
//   return false;
// };
// const graphAdjacencyList = (edges) => {
//   let graph = {};
//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!(a in graph)) graph[a] = [];
//     if (!(b in graph)) graph[b] = [];
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };

// const edges = [
//   ["i", "j"],
//   ["k", "i"],
//   ["m", "k"],
//   ["k", "l"],
//   ["o", "n"],
// ];
// console.log(hasPath(edges, "j", "m"));

const hasPath = (edges, sourceA, sourceB) => {
  const graph = graphAdjacencyList(edges);
  return graphHasPath(graph, sourceA, sourceB, new Set());
};
const graphHasPath = (graph, src, dist, visited) => {
  if (src === dist) return true;

  const stack = [src];
  while (stack.length > 0) {
    const node = stack.pop();
    for (let neighbor of graph[node]) {
      if (visited.has(neighbor)) return false;
      visited.add(neighbor);
      stack.push(neighbor);
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
console.log(hasPath(edges, "j", "m"));
