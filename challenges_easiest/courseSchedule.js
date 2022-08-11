// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
var canFinish = function (numCourses, prerequisites) {
  let graph = Array.from(Array(numCourses), () => []);
  let ranks = Array.from(Array(numCourses).fill(0));
  for (let [post, pre] of prerequisites) {
    //[[], [0], [0], [1,2]]
    graph[pre].push(post);
    ranks[post]++;
  }
  //push node with no dependencies or ranks
  let queue = [];
  //loop through the graph and if empty then push it index to the queue
  ranks.forEach((array, index) => {
    if (!array) {
      queue.push(index);
    }
  });
  //normal bfs start start here
  while (queue.length > 0) {
    let current = queue.shift();
    //reduce neighbors ranks by 1;
    numCourses--;
    // push node with no dependencies (rank 0) to queue
    graph[current].forEach((neighbor) => {
      ranks[neighbor]--;
      if (!ranks[neighbor]) {
        queue.push(neighbor);
      }
    });
  }
  return !numCourses;
};

//console.log(canFinish(2, [[1, 0]]));
// console.log(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ])
// );
console.log(
  canFinish(4, [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ])
);
