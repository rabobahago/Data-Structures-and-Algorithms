function waterArea(heights) {
  const leftHightest = [];
  const rightHightest = [];
  let area = 0;
  for (let index = 0; index < heights.length; index++) {
    leftHightest[index] = Math.max(
      leftHightest[index - 1] ?? 0,
      heights[index]
    );
  }
  for (let index = heights.length - 1; index >= 0; index--) {
    rightHightest[index] = Math.max(
      rightHightest[index + 1] ?? 0,
      heights[index]
    );
  }
  for (let index = 0; index < heights.length; index++) {
    area +=
      Math.min(leftHightest[index], rightHightest[index]) - heights[index];
  }
  return area;
}
