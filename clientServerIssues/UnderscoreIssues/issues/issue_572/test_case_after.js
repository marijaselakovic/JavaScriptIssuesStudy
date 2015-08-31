// Author: Michael Pradel

(function() {

    function init() {
        return {underscore:require('./underscore_after.js')};
    }

    function setupTest(initResult) {
        var array = [];
        for (var i = 0; i < 10; i++) {
            array.push(i);
        }
        var nestedArray = [];
        for (i = 0; i < 20; i++) {
            nestedArray.push(array.slice(0));
        }
        for (i = 0; i < 10; i++) {
            nestedArray.push(nestedArray.slice(0));
        }
        return {nestedArray:nestedArray};
    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscore;
        var nestedArray = setupTestResult.nestedArray;

        _.flatten(nestedArray);
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();