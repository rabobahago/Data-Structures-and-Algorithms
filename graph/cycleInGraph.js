const [WHITE, GREY, BLACK] = [0, 1, 2];
// O(v + e) time | O(v) space - where v is the number of
// vertices and e is the number of edges in the graph

function cycleInGraph(edges) {
  const numberOfNodes = edges.length;
  const colors = new Array(numberOfNodes).fill(WHITE);
  for (let node = 0; node < numberOfNodes; node++) {
    if (colors[node] != WHITE) continue;
    const containsCycle = traverseAndColorNodes(node, edges, colors);
    if (containsCycle) return true;
  }
  return false;
}
function traverseAndColorNodes(node, edges, colors) {
  colors[node] = GREY;
  const neighbors = edges[node];
  for (const neighbor of neighbors) {
    const neighborColor = colors[neighbor];
    if (neighborColor === GREY) return true;
    if (neighbor === BLACK) continue;
    const containsCycle = traverseAndColorNodes(neighbor, edges, colors);
    if (containsCycle) return true;
  }
  colors[node] = BLACK;
  return false;
}
