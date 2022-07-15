function getLowestCommonManager(topManager, reportOne, reportTwo) {
  return getLowestCommonManagerHelper(topManager, reportOne, reportTwo)[0];
}
function getLowestCommonManagerHelper(manager, reportOne, reportTwo) {
  const matchReports = [];
  for (let node of manager.directReports) {
    let result = getLowestCommonManagerHelper(node, reportOne, reportTwo);
    if (result === null) continue;
    if (result[1]) return result;
    if (manager.name === reportOne.name || manager.name === reportTwo.name)
      return [manager, true];
    matchReports.push(result);
    if (matchReports.length === 2) return [manager, true];
  }
  if (manager.name === reportOne.name || manager.name === reportTwo.name)
    return [manager, false];
  if (matchReports.length > 0) return matchReports[0];
  return null;
}
