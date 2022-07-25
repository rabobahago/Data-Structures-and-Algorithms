const stringToArrayOfString = (strArg) => {
  return strArg
    .split(".")
    .map((i) => i.trim())
    .filter((i) => i);
};
