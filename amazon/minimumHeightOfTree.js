// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Example 1:

// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
// Example 2:

// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

// Constraints:

// 1 <= n <= 2 * 104
// edges.length == n - 1
// 0 <= ai, bi < n
// ai != bi
// All the pairs (ai, bi) are distinct.
// The given input is guaranteed to be a tree and there will be no repeated edges.
const topologocalSort = (queue, n, no_of_centroids) => {
  while (n > 2) {
    let len = queue.length;
    n = n - len;
    for (let i = 0; i < len; i++) {
      let ele = queue.shift();
      let neighbours = ed[ele] || [];
      for (let j = 0; j < neighbours.length; j++) {
        let node = neighbours[j];
        indegree[node]--;
        if (indegree[node] === 1) {
          queue.push(node);
        }
      }
    }
  }
  return queue;
};
var findMinHeightTrees = function (n, edges) {
  indegree = [];
  ed = {};
  if (n === 1) return [0];
  let no_of_centroids = n % 2 === 0 ? 2 : 1;
  for (let i = 0; i < n; i++) {
    indegree[i] = 0;
  }
  for (let i = 0; i < edges.length; i++) {
    let src = edges[i][0];
    let dst = edges[i][1];
    if (!ed[src]) ed[src] = [];
    if (!ed[dst]) ed[dst] = [];
    ed[src].push(dst);
    ed[dst].push(src);
    indegree[dst]++;
    indegree[src]++;
  }
  let queue = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 1) queue.push(i);
  }

  return topologocalSort(queue, n, no_of_centroids);
};
