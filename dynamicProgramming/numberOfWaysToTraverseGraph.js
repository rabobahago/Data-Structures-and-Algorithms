function numberOfWaysToTraverseGraph(width, height) {
  //O(n + m) time | O(1) space- where n is
  // the width of the graph and m is the height
  let xDistanceToCorner = width - 1;
  let yDistanceToCorner = height - 1;
  // the number of permutations of right and down movements
  // is the number of ways to reach the bottom right corner
  let numerator = factorial(xDistanceToCorner + yDistanceToCorner);
  let denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner);
  return Math.floor(numerator / denominator);
}
function factorial(num) {
  let result = 1;
  for (let n = 2; n < num + 1; n++) {
    result *= n;
  }
  return result;
}
