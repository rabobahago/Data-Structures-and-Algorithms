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
