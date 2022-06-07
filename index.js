let array = [2, 3, 5, 8, 9];
array.forEach(function (x) {
  console.log(x * x);
});
console.log(array);
let str = "hello world";
console.log(str.charAt(str.length - 2));
console.log(str.substring(1, 4));
console.log("rabo yusuf".indexOf("a"));
console.log("hello world, i am a software engineer".indexOf("am", 4));
function isStringIn(stringOfChar, search) {
  return stringOfChar.indexOf(search) !== -1;
}
let letters =
  "You can use an additional parameter to search after a certain index in a string";

console.log(isStringIn(letters, "rabo"));
console.log(isStringIn(letters, "hello"));
console.log(isStringIn(letters, "search"));
function letterCount(str) {
  let count = 0;
  let pos = str.indexOf("a");
  while (pos !== -1) {
    count++;
    pos = str.indexOf("a", pos + 1);
  }
  return count;
}
console.log(letterCount(letters, "a"));
console.log(letters.startsWith());
console.log(letters.endsWith());
let charLetter = "hi you there";
console.log(charLetter.replace("hi", "hello"));
console.log(letters.charCodeAt(0));
console.log(letters.charAt(0));
console.log(String.fromCharCode(122));
console.log(String.fromCharCode(56));
console.log(String.fromCodePoint(97));
// a=97
//z =122
console.log("&essall".at());
const cod = "heo".charCodeAt();
console.log(cod);
console.log(String.fromCharCode(cod));
console.log("a".localeCompare("b"));
const st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches_array = st.match(regexp);

console.log(matches_array);
let name = "Hi people, I love to sell myself all corner ";
let regrex = /[a-e]gi/;
console.log(name.match(regexp));
