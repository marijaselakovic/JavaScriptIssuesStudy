// Author: Michael Pradel

(function() {

    function init() {
        return {underscore:require('./underscore_after.js')};
    }

    function setupTest(initResult) {
        var array = [];
        for (var i = 0; i < 100000; i++) {
            array.push(i);
        }
        return {sortedArray:array};
    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscore;
        var sortedArray = setupTestResult.sortedArray;

        for (var i = 0; i < 10000; i++) {
            _.indexOf(sortedArray, 90000, true);
        }
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();