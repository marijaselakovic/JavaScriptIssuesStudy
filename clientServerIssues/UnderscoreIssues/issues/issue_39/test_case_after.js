// Author: Michael Pradel

(function() {

    function init() {
        var underscore = require('./underscore_after.js')._().noConflict();
        return {underscore:underscore};
    }

    function setupTest(initResult) {
        var str = new Array(100).join(" ' ");
        return {str:str};
    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscore;

        for (var i = 0; i < 1000; i++) {
            _.template(setupTestResult.str);
        }
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();