var maxProfit = function (prices) {
  let buy = Infinity,
    profit = 0;
  for (const val of prices) {
    buy = Math.min(buy, val);
    profit = Math.max(val - buy, profit);
  }
  return profit;
};
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
