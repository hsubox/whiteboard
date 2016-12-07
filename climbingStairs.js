/*
https://leetcode.com/problems/climbing-stairs/
Dynamic programming, 1-D

You are climbing a stair case. It takes n steps to reach to the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
var memo = [1];
var climbStairs = function(n) {
    // base cases:
    if (n < 0) {
        return 0;
    }
    if (n < memo.length) {
        return memo[n];
    }
    // case 1: climb 1 step
    var case1 = climbStairs(n - 1);
    // case 2: climb 2 steps
    var case2 = climbStairs(n - 2);
    // store in memo
    memo[n] = case1 + case2;
    return memo[n];
};
