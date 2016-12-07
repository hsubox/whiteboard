/*
https://leetcode.com/problems/house-robber/
Dynamic programming, 1-D

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var memo = [];

    var robber = function(nums) {
        // base case:
        if (nums.length === 0) {
            return 0;
        }
        var n = nums.length - 1;
        if (memo.length > n) {
            return memo[n];
        }
        // case 1: rob this house, so we can't rob the previous
        var case1 = robber(nums.slice(0, -2)) + nums[n];
        // case 2: don't rob this house, so we can rob the previous
        var case2 = robber(nums.slice(0, -1));
        // store in memo
        memo[n] = Math.max(case1, case2);
        return memo[n];
    }

    return robber(nums);
};
