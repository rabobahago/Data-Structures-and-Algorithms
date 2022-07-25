// Cards of the Same Suit
// You are given an array of strings that represents a hand of playing cards as an argument. Each string is formatted as " of ." Return true if the hand forms a flush, false if not.

// A flush is formed when you have five cards of the same suit.

// Requirements
// Must return either true or false
// Example #1
// solve(["Ace of Spades", "Three of Spades", "Four of Spades", "Five of Spades", "King of Spades"])
// > true
// Example #2
// solve(["Ace of Diamonds", "Three of Hearts", "Four of Spades", "Five of Spades", "King of Spades"])
// > false
const cardOfSameSuit = (array) => {
  let count = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    [_, _, last] = array[i].split(" ");
    result.push(last);
  }
  let first = result[0];
  for (let i = 0; i < result.length; i++) {
    if (result[i] === first) {
      count++;
    }
  }
  return count >= 5 ? true : false;
};
console.log(
  cardOfSameSuit([
    "Ace of Spades",
    "Three of Spades",
    "Four of Spades",
    "Five of Spades",
    "King of Spades",
  ])
);

console.log(
  cardOfSameSuit([
    "Ace of Diamonds",
    "Three of Hearts",
    "Four of Spades",
    "Five of Spades",
    "King of Spades",
  ])
);
