/*
https://leetcode.com/problems/perfect-squares/
Dynamic programming

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // base case:
    if (n < 0) {
        return -Infinity;
    }
    if (n === 0) {
        return 0;
    }
    if (memo.hasOwnProperty(n)) {
        return memo[n];
    }
    // generate squares less than n
    var squares = [];
    for (var i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
        squares.push(Math.pow(i, 2));
    }
    var solution = squares.reduce((min, x) => Math.min(min, numSquares(n - x) + 1), Infinity);
    memo[n] = solution;
    return solution;
};
var memo = {};
