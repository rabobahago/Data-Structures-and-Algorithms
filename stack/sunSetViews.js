function sunsetViews(buildings, direction) {
  const buildingWithSunsetViews = [];
  //if direction is west start at zero, else start from the last element
  const startInd = direction === "WEST" ? 0 : buildings.length - 1;
  // the step is 1 or -1 depending whether the direction is east or west
  const step = direction === "WEST" ? 1 : -1;
  let ind = startInd;
  let runningMaxHeight = 0;
  //check for both directions
  while (ind >= 0 && ind < buildings.length) {
    //get the buildingHeight
    let buildingHeight = buildings[ind];
    //if buildingHeight is greater than runningMaxHeight
    if (buildingHeight > runningMaxHeight) {
      //push the index into buildingWithSunsetViews
      buildingWithSunsetViews.push(ind);
    }
    //make either runningMaxHeight or buildingHeight the max
    runningMaxHeight = Math.max(runningMaxHeight, buildingHeight);
    //increase the index by the step
    ind = ind + step;
  }
  //if direction is east reverse the buildingWithSunsetViews
  if (direction === "EAST") buildingWithSunsetViews.reverse();
  return buildingWithSunsetViews;
}
