/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Dynamic programming (variation), 1-D

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Input: [7, 1, 5, 3, 6, 4]
Output: 5
max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)

Input: [7, 6, 4, 3, 1]
Output: 0
In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // base case:
    if (prices.length === 0 || prices.length === 1) {
        return 0;
    }

    var maxDifferenceSoFar = 0;
    var minimumSoFar = prices[0];

    for (var i = 0; i < prices.length; i++) {
        if (prices[i] - minimumSoFar > maxDifferenceSoFar) {
            maxDifferenceSoFar = prices[i] - minimumSoFar;
        }
        if (prices[i] < minimumSoFar) {
            minimumSoFar = prices[i];
        }
    }

    return maxDifferenceSoFar;
};
