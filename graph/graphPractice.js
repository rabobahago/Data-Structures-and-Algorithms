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
console.log("----------");
breadthFirst(graph, "a");
