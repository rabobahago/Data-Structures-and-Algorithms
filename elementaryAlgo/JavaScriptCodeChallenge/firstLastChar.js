function getTheGapX(str) {
  if (!str.includes("X")) {
    return -1;
  }
  const firstIndex = str.indexOf("X");
  const lastIndex = str.lastIndexOf("X");
  console.log(firstIndex, lastIndex);
  return firstIndex === lastIndex ? -1 : lastIndex - firstIndex;
}
console.log(getTheGapX("JavaScript"));
getTheGapX("Xamarin");
