/*
https://leetcode.com/problems/perfect-squares/
Graph search

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var queue = [[n, 0]];
    var visited = new Set();
    while (queue.length > 0) {
        var item = queue.shift();
        if (item[0] === 0) {
            return item[1];
        }
        if (item[0] > 0) {
            var squares = [];
            for (var i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
                squares.push(Math.pow(i, 2));
            }
            var new_values = squares.map((square) => [item[0]-square, item[1] + 1]).filter((x) => !visited.has(x));
            queue.push(...new_values);
            new_values.forEach((x) => visited.add(x));
        }
    }
    return -1;
};
