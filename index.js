function sunsetViews(buildings, direction) {
  const buildingWithSunsetViews = [];
  //if direction is west start at zero, else start from the last element
  const startInd = direction === "WEST" ? 0 : buildings.length - 1;
  // the step is 1 or -1 depending whether the direction is east or west
  const step = direction === "WEST" ? 1 : -1;
  let ind = startInd;
  //check for both directions
  while (ind >= 0 && ind < buildings.length) {
    //get the buildingHeight
    let buildingHeight = buildings[ind];
    while (
      buildingWithSunsetViews.length > 0 &&
      buildings[buildingWithSunsetViews[buildingWithSunsetViews.length - 1]] <=
        buildingHeight
    ) {
      buildingWithSunsetViews.pop();
    }
    buildingWithSunsetViews.push(ind);
    //increase the index by the step
    ind = ind + step;
  }
  //if direction is east reverse the buildingWithSunsetViews
  if (direction === "EAST") buildingWithSunsetViews.reverse();
  return buildingWithSunsetViews;
}
