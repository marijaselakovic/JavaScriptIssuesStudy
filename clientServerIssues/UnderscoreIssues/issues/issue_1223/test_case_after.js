// Author: Michael Pradel

(function() {

    function init() {
        var underscore = require('./underscore_after.js');
        var map = {};
        for (var i = 0; i < 100; i++) {
            map["prop" + i] = i;
        }
        var f = function() {
        };
        return {underscore:underscore, map:map, f:f};
    }

    function setupTest(initResult) {
    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscore;
        var map = initResult.map;
        var f = initResult.f;

        for (var i = 0; i < 1000; i++) {
            _.each(map, f);
        }
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();