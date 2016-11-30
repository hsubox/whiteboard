// https://www.hackerrank.com/contests/hourrank-7/challenges/array-splitting/submissions/code/7956609
// How many times can we partition an array that into 2 parts having equal sums, iterating over one of those two parts?

function processData(input) {
    var inputByLine = input.split(/\r|\r\n|\n/g);
    var testCases = Number(inputByLine[0]);
    for (var i = 0; i < testCases; i++) {
        var size = inputByLine[i*2 + 1];
        var arr = inputByLine[i*2 + 2].split(" ").map(Number);
        console.log(determineSplits(arr));
    }
}

function determineSplits(arr) {
    if (arr.length <= 1) {
        return 0;
    }
    var sum = arr.reduce((a,b) => a + b);
    if (sum === 0){
        return arr.length - 1;
    }
    var sumSoFar = 0;
    for (var i = 0; i < arr.length; i++) {
        sumSoFar += arr[i];
        if (sumSoFar === sum - sumSoFar) {
            return 1 + Math.max(determineSplits(arr.slice(0, i + 1)), determineSplits(arr.slice(i + 1)));
        }
    }
    return 0;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
