// https://www.hackerrank.com/contests/101hack40/challenges/lazy-mayor-and-lasers

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    input = input.split('\n');
    var n = Number(input[0]);
    var buildings = input[1].split(' ').map(Number);
    var m = Number(input[2]);
    var lasers = input[3].split(' ').map(Number).sort((a,b) => a - b);

    var total = 0;
    var lastLaser = 0;
    for(var i = 0; i < m; i++){
        var currentLaser = lasers[i] - 1;

        for(var buildIndex = lastLaser; buildIndex < currentLaser && buildIndex < n; buildIndex++){
            var currentBuildingHeight = buildings[buildIndex];
            var diff = currentLaser - buildIndex;
            total += Math.min(currentBuildingHeight, diff);
        }

        lastLaser = currentLaser;
    }
    for (var i = lastLaser; i < n; i++) {
        total += buildings[i];
    }
    console.log(total);
});
