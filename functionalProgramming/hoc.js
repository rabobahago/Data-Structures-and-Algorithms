//A function which takes a function as an argument and/or returns a function.

const filter = (predicate, xs) => xs.filter(predicate);
const is = (type) => {
  console.log("type", type);
  return (x) => {
    console.log("arg", x); // 0,  '1', 2, null
    console.log("obj x", Object(x)); //Number{1}, String{'1}, Number{2}, {}
    return Object(x) instanceof type; //this is the predicate pass to filter
  };
};
console.log(is);
console.log(filter(is(Number), [0, "1", 2, null])); // [0, 2]
