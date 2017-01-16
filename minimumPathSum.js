/*
https://leetcode.com/problems/minimum-path-sum/
Dynamic programming, 2-D

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var getValueAtPosition = function (position) {
        return grid[position[0]][position[1]];
    }

    var memo = {};
    var minPathSumHelper = function(position) {
        // base case
        if (position[0] === grid.length - 1 && position[1] === grid[0].length - 1) {
            memo[position] = getValueAtPosition(position);
            return getValueAtPosition(position);
        }

        if (memo.hasOwnProperty(position)) {
            return memo[position];
        }

        var sum = getValueAtPosition(position);
        // case 1: go down
        var case1 = (position[0] === grid.length - 1) ? Infinity : minPathSumHelper([position[0] + 1, position[1]]);
        // case 2: go right
        var case2 = (position[1] === grid[0].length - 1) ? Infinity : minPathSumHelper([position[0], position[1] + 1]);
        sum += Math.min(case1, case2);
        memo[position] = sum;
        return sum;
    }
    return minPathSumHelper([0, 0]);
};
