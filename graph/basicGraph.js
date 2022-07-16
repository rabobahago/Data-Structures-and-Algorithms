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
  for (let neighbor of graph[source]) {
    depthFirst(graph, neighbor);
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
