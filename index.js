function sunsetViews(buildings, direction) {
  const buildingWithSunsetViews = [];
  const startInd = direction === "WEST" ? 0 : buildings.length - 1;
  const step = direction === "WEST" ? 1 : -1;
  let ind = startInd;
  let runningMaxHeight = 0;
  while (ind >= 0 && ind < buildings.length) {
    let buildingHeight = buildings[ind];
    if (buildingHeight > runningMaxHeight) {
      buildingWithSunsetViews.push(ind);
      runningMaxHeight = Math.max(runningMaxHeight, buildingHeight);
      ind = ind + step;
    }
  }
  if (direction === "EAST") buildingWithSunsetViews.reverse();
  return buildingWithSunsetViews;
}
