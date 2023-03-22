// With a Proxy object, we get more control over the interactions with certain objects.
// A proxy object can determine the behavior whenever we're interacting with the object,
// for example when we're getting a value, or setting a value.
// Generally speaking, a proxy means a stand-in for someone else.
// Instead of speaking to that person directly, you'll speak to the proxy person who
// will represent the person you were trying to reach. The same happens in JavaScript:
// instead of interacting with the target object directly, we'll interact with the Proxy object.
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;
    }
  },
});
//console.log(personProxy);

// The second argument of Proxy is an object that represents
// the handler. In the handler object, we can define specific
// behavior based on the type of interaction. Although there are many
// methods that you can add to the Proxy handler, the two most common ones are get and set:

// get: Gets invoked when trying to access a property
// set: Gets invoked when trying to modify a property
personProxy.name;
personProxy.age = 43;
