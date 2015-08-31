// Author: Michael Pradel

(function () {
    var testCasePath = process.argv[2];
    var warmUpRepetitions = process.argv[3];
    var measurementRepetitions = process.argv[4];
    var testCase = require('./' + testCasePath);
    var init = testCase.init();
    var ss = require('simple-statistics');

// warm up
    for (var i = 0; i < warmUpRepetitions; i++) {
        var setupTestResult = testCase.setupTest(init);
        testCase.test(init, setupTestResult);
    }
// measurement
    var measuredTimes = [];
    for (var i = 0; i < measurementRepetitions; i++) {
        var setupTestResult = testCase.setupTest(init);
        var start = process.hrtime();
        testCase.test(init, setupTestResult);
        var stop = process.hrtime(start);
        var time = stop[0] * 1e9 + stop[1];
        measuredTimes.push(time);
    }
// print mean time to console
/*    var sum = measuredTimes.reduce(function (previous, current) {
        return previous + current;
    }, 0);
    var mean = sum / measuredTimes.length;*/
    var mean=Math.round(parseFloat(ss.mean(measuredTimes)));

    console.log('mean:'+mean);
})();