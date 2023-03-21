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
