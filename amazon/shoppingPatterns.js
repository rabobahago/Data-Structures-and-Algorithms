// A customer wants to buy a pair of jeans, a pair of shoes, a skirt, and a top but has a limited budget in dollars. Given different pricing options for each product, determine how many options our customer has to buy 1 of each product. You cannot spend more money than the budgeted amount.

// Example
// priceOfJeans = [2, 3]
// priceOfShoes = [4]
// priceOfSkirts = [2, 3]
// priceOfTops = [1, 2]
// budgeted = 10

// The customer must buy shoes for 4 dollars since there is only one option. This leaves 6 dollars to spend on the other 3 items. Combinations of prices paid for jeans, skirts, and tops respectively that add up to 6 dollars or less are [2, 2, 2], [2, 2, 1], [3, 2, 1], [2, 3, 1]. There are 4 ways the customer can purchase all 4 items.

// Function Description

// Complete the getNumberOfOptions function in the editor below. The function must return an integer which represents the number of options present to buy the four items.

// getNumberOfOptions has 5 parameters:
// int[] priceOfJeans: An integer array, which contains the prices of the pairs of jeans available.
// int[] priceOfShoes: An integer array, which contains the prices of the pairs of shoes available.
// int[] priceOfSkirts: An integer array, which contains the prices of the skirts available.
// int[] priceOfTops: An integer array, which contains the prices of the tops available.
// int dollars: the total number of dollars available to shop with.

// Constraints

// 1 ≤ a, b, c, d ≤ 103
// 1 ≤ dollars ≤ 109
// 1 ≤ price of each item ≤ 109
// Note: a, b, c and d are the sizes of the four price arrays
const Combination = (
  priceOfJeans,
  priceOfShoes,
  priceOfSkirts,
  priceOfTops,
  budgeted
) => {
  let map = new Map();
  for (let i = 0; i < priceOfJeans.length; i++) {
    for (let j = 0; j < priceOfShoes.length; j++) {
      if (!map.has(priceOfJeans[i] + priceOfShoes[j])) {
        map.set(priceOfJeans[i] + priceOfShoes[j], 1);
      } else {
        map.set(
          priceOfJeans[i] + priceOfShoes[j],
          map.get(priceOfJeans[i] + priceOfShoes[j]) + 1
        );
      }
    }
  }
  console.log(map);
  let l = Array.from(map.keys());
  console.log(l);
  let count = 0;
  for (let i = 0; i < priceOfSkirts.length; i++) {
    for (let j = 0; j < priceOfTops.length; j++) {
      let x = budgeted - priceOfSkirts[i] - priceOfTops[j];
      for (let k = 0; k < l.length; k++) {
        if (l[k] <= x) {
          count += map.get(l[k]);
        }
      }
    }
  }
  return count;
};

console.log(
  Combination(
    [4, 7, 1, 1, 1, 1, 1, 1, 1, 1],
    [6, 6, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 3, 5, 1, 1, 1, 1, 1],
    [5, 7, 12, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1],
    20
  )
);
