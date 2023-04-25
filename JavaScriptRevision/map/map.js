const map = new Map();
console.log(map);
//map is key value pair
map.set("tea", ["ma", 8]);
map.set("cat", ["color", "green"]);
map.set("name", [{ name: "rabo" }]);
console.log(map);
console.log(map.has("tea"));
console.log(map.has("cat"));
console.log(map.has("red"));
map.delete("name");
console.log(map);
for (let elem of map.values()) {
  let [elem1, elem2] = elem;
  console.log(elem1);
  console.log("....");
  console.log(elem2);
}
