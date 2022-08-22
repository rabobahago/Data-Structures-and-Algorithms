let obj = { name: "random", email: "random@example.com" };
const result = Object.create(obj);
result.age = 800;
result.speak = function () {
  return `My name is ${this.name} and I am ${this.age} years old.`;
};
console.log(result);
console.log(result.name);
console.log(result.age);
console.log(result.hasOwnProperty("name"));
console.log(result.hasOwnProperty("age"));
console.log(result.hasOwnProperty("speak"));
console.log(result.speak());
let protoRabbit = {
  speak(line) {
    return `The ${this.type} rabbit says '${line}'`;
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
console.log(killerRabbit.hasOwnProperty("type"));
console.log(killerRabbit.speak("SKREEEE!"));
// → The killer rabbit says 'SKREEEE!
//git submodule add <url> javascript-code-challenges
