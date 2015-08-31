// Author: Michael Pradel

(function() {

    function init() {
        var underscore = require('./underscore_after.js');
        return {underscore:underscore};
    }

    function setupTest(initResult) {
        var _ = initResult.underscore;
        var arr = _.shuffle(_.range(100));
        var f = _.memoize(function(array) {
            var val;
            _.each(array, function(Number) {
                val = Number * Number - Number;
                return val;
            });
        });
        return {arr:arr, f:f}
    }

    function test(initResult, setupTestResult) {
        var arr = setupTestResult.arr;
        var f = setupTestResult.f;

        for (var i = 0; i < 2000; i++) {
            f(arr);
        }
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
