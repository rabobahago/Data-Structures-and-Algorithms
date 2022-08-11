// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
//write a function to check whether these edges make up a valid tree.

// For example:

// Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.

// Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.

// Note: you can assume that no duplicate edges will appear in edges. Since all edges are
//undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
const buildAdjac = (n, edges) => {
  let graph = Array.from({ length: n }, () => []);
  for (let [post, pre] of edges) {
    graph[post].push(pre);
    graph[pre].push(post);
  }
  return graph;
};
const isBFSCycle = (node, adList, visited, parent) => {
  let queue = [node];
  while (queue.length > 0) {
    let current = queue.shift();
    visited[current] = true;
    for (let neighbor of adList[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        parent[neighbor] = current;
        queue.push(neighbor);
      } else {
        if (neighbor !== parent[current]) return true;
      }
    }
  }
  return false;
};
const graphValidTree = (n, edges) => {
  const adList = buildAdjac(n, edges);
  let visited = {};
  let parent = {};
  let regions = 0;
  for (let vertex = 0; vertex < adList.length; vertex++) {
    if (!visited[vertex]) {
      regions++;
      if (regions > 1) return false;
      if (isBFSCycle(vertex, adList, visited, parent)) return false;
    }
  }
  return true;
};
console.log(
  graphValidTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
);
