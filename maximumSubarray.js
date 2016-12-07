/*
https://leetcode.com/problems/maximum-subarray/
Dynamic programming (variation), 1-D

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    maxEndingHere = -Infinity;
    maxSoFar = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        // net of left should have a positive effect, or drop it
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        // net of right should have a positive effect, or ignore it
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
};
