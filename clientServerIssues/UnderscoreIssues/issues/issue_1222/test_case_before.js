// Author: Michael Pradel

(function() {

    function init() {
        var underscore = require('./underscore_before.js');
        var map = {};
        for (var i = 0; i < 100; i++) {
            map["prop" + i] = i;
        }
        return {underscore:underscore, map:map};
    }

    function setupTest(initResult) {
    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscore;
        var map = initResult.map;

        for (var i = 0; i < 1000; i++) {
            _.values(map);
        }
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();