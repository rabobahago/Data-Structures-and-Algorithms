//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// first solution
// function isEmpty(obj) {
//   for (let nam in obj) {
//     return false;
//   }
//   return true;
// }
//second solution
function isEmpty(obj) {
  return Object.keys(obj).length === 0 ? true : false;
}

// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.
function getSalary(salary) {
  let sum = 0;
  if (Object.keys(salary).length === 0) return 0;
  for (let value of Object.values(salary)) {
    sum += value;
  }
  return sum;
}
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
console.log(getSalary(salaries));
const num = {
  1: 300,
  3: 500,
  6: "rabo",
};

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

function multiply(obj) {
  for (let name in obj) {
    if (typeof obj[name] === "number") {
      name * 2;
    }
  }
  return obj;
}
console.log({ width: 400, height: 600, title: "My menu" });
//pass by value
let message = "Please";
let menu = message;
menu = "he" + menu.slice(1);
console.log(message === menu);
//pass by reference
let obj = {
  name: "Rabo",
  age: 34,
};
let hoo = obj;
hoo.name = "Hosea";
console.log(obj);
