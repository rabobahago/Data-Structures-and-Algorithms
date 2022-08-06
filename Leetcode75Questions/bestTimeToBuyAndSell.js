// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
var maxProfit = function (prices) {
  // left set = 0 starting from zero
  let left = 0;
  //the interval between between left and right: 1
  //that is why the right is starting at 1
  let right = 1;
  // initial max sell
  let max_sell = 0;
  //this time right most not excite the total array length
  while (right < prices.length) {
    //check if there is in anyway that left elem < right elem
    if (prices[left] < prices[right]) {
      //profit is obtained by right and left elements differences
      let profit = prices[right] - prices[left];
      //set the max sell or profit
      max_sell = Math.max(max_sell, profit);
    } else {
      //else move left equal to the right
      left = right;
    }
    //increase right by one step
    right++;
  }
  //return max_sell
  return max_sell;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
