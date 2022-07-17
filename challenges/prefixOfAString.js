const prefixOfAString = (stringA, stringB) => {
  return stringB === stringA.slice(0, stringB.length) ? true : false;
};
console.log(prefixOfAString("banner", "bang"));
console.log(prefixOfAString("hugging", "hug"));
