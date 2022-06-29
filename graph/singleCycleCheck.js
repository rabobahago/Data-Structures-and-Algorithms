function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentIdx = 0;
  //while num of element visited is less than array.length
  while (numElementsVisited < array.length) {
    //if numElementsVisited is greater than 0 and currentInx is still 0
    //return false
    if (numElementsVisited > 0 && currentIdx === 0) return false;
    //increase numElementsVisited
    numElementsVisited++;
    //currentIdx from getNextIdx passing it currentIdx and array
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0;
}
function getNextIdx(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
