//time O(n) because we to visit every tree and space O(d) where is the depth
function validateBst(node, min = null, max = null) {
  if (max !== null && node.value >= max) {
    return false;
  }
  if (min !== null && node.value < min) {
    return false;
  }
  if (node.left && !validateBst(node.left, min, node.value)) {
    return false;
  }
  if (node.right && !validateBst(node.right, node.value, max)) {
    return false;
  }
  return true;
}
