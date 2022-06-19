function classPhotos(redShirtHeights, blueShirtHeights) {
  //sort our arrays such that highest value come first
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  //take the first element of each array to determine a blue or red shift will come first
  let firstOrSecond = redShirtHeights[0] > blueShirtHeights[0] ? "RED" : "BLUE";
  //loop through the two array
  for (let i = 0; i < redShirtHeights.length; i++) {
    let redElem = redShirtHeights[i];
    let blueElem = blueShirtHeights[i];
    if (firstOrSecond === "RED") {
      //when red condition is not met return false
      if (redElem <= blueElem) return false;
    } else if (firstOrSecond === "BLUE") {
      //when blue condition is not met return false
      if (blueElem <= redElem) return false;
    }
  }
  //else return true
  return true;
}
