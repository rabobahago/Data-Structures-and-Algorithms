// The prototype pattern is a useful way to share properties among many
// objects of the same type. The prototype is an object that's native to
// JavaScript, and can be accessed by objects through the prototype chain.

// In our applications, we often have to create many objects of the same type.
// A useful way of doing this is by creating multiple instances of an ES6 class.

// Let's say we want to create many dogs! In our example, dogs can't do
// that much: they simply have a name, and they can bark!
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");
console.log(Dog.prototype);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

console.log(dog1.__proto__);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
// The prototype pattern is very powerful when working with
//  objects that should have access to the same properties. Instead of creating
//  a duplicate of the property each time, we can simply add the property
//  to the prototype, since all instances have access to the prototype object.
