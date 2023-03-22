import "./redButton";
import "./blueButton";

console.log("Click on either of the buttons 🚀!");
//When we invoke the increment method in either redButton.js
// or blueButton.js, the value of the counter property on the Counter
// instance updates in both files. It doesn't matter whether we click on
// the red or blue button: the same value is shared among all instances.
// This is why the counter keeps incrementing by one, even though we're invoking the method in different files.
