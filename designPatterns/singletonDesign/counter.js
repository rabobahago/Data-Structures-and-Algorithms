//When we invoke the increment method in either redButton.js
// or blueButton.js, the value of the counter property on the Counter
// instance updates in both files. It doesn't matter whether we click on
// the red or blue button: the same value is shared among all instances.
// This is why the counter keeps incrementing by one, even though we're invoking the method in different files.

// State management in React
// In React, we often rely on a global state through state management tools
// such as Redux or React Context instead of using Singletons.
// Although their global state behavior might seem similar to that of a
// Singleton, these tools provide a read-only state rather than the mutable state of
// the Singleton. When using Redux, only pure function reducers can update the state,
// after a component has sent an action through a dispatcher.

// Although the downsides to having a global state don't magically disappear by
// using these tools, we can at least make sure that the global state is mutated the
// way we intend it, since components cannot update the state directly.

let counter = 0;
class Counter {
  constructor() {
    //make sure this instance can only be call once
    if (counter) {
      throw new Error("You can only created single instance");
    }
    counter = this;
  }
  getInstance() {
    return this;
  }
  getCount() {
    return counter;
  }
  increment() {
    return ++counter;
  }
  decrement() {
    return --counter;
  }
}
//freeze this instance so that it can't be accidently change
const singletonCounter = Object.freeze(new Counter());
//export so it can be used in another file
export default singletonCounter;
