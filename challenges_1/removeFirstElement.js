const removeFirstElement = (array) => {
  return array.slice(1);
};
console.log(removeFirstElement(["pears", "apples", "oranges"]));
console.log(removeFirstElement(["apples", "apples"]));
