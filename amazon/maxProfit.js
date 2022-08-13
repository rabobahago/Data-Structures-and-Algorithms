// Efficient Harvest: A farmer uses pivot irrigation to water a circular field of crops.
// Due to varying conditions, the field does not produce consistently. The farmer wants to
// achieve maximum profit using limited resources for harvest. The field is segmented into a
// number of equal segments, and a profit is calculated for each segment. This profit is the
// cost to harvest versus the sale price a the produce. The farmer will harvest a number of contiguous
// segments along with those opposite. Determine the maximum profit the farmer can achieve. For example,
// the field is divided into n = 6 sections and will select k = 2 contiguous sections and those opposite for harvest.
// The profit estimates are profit = [1, 5, 1, 3, 7.-3) respectively. The diagrams below show the possible choices with
// profits(0) at the 9 o'clock position and filling counterclockwise. -3 The profit levels, from left to
// right, are 1 + 5+7 + 3 - 16,5+1 +7 +-3-10, and 1 + 3+3+1 -2. The maximum profit is 16. Function Description
// Complete the function maxProfit in the editor below. The function must return the maximum profit achievable.
// maxProfit has the following parameters:
// k an integer denoting the half of the needed amount of pieces of the field. profit[profit[0],..profit[n-1].

function maxHarvest(profit, k) {
  let n = profit.length;
  let s = n / 2; // step
  let sum = 0;
  for (let i = 0; i < s; i++) {
    let curr = 0;
    curr += profit[i];
    if (i + k >= n) curr += profit[(i + s) % n];
    else curr += profit[i + s];
    for (let j = i + 1; j < k; j++) {
      curr += profit[j];
      if (i + k >= n) curr += profit[(j + s) % n];
      else curr += profit[j + s];
    }
    sum = Math.max(sum, curr);
  }
  return sum;
}
console.log(maxHarvest([1, 5, 1, 3, 7, -3], 6));
