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
