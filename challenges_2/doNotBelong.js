const doNotBelong = (stringOne, stringTwo) => {
  stringOne.split("").sort().join("");
  stringTwo.split("").sort().join("");
  let longest = stringOne.length > stringTwo.length ? stringOne : stringTwo;
  let shortest = stringOne.length < stringTwo.length ? stringOne : stringTwo;
  for (let i = 0; i < longest.length; i++) {
    if (shortest[i] !== longest[i]) {
      return longest[i];
    }
  }
  return -1;
};
console.log(doNotBelong("flooding", "floodring"));
console.log(doNotBelong("floodring", "flooding"));
console.log(doNotBelong("root", "rootuu"));
console.log(doNotBelong("negative", "negativ"));
