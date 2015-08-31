

(function() {

    function init() {
        var underscore = require('./underscore_before.js')._().noConflict();
        return {underscore:underscore};
    }

    function setupTest(initResult) {
        
    }

    function test(initResult, setupTestResult) {
        var _=initResult.underscore;
        for (var i=0; i<100000; i++) {
            _.map([[1, 2, 3], [1, 2, 3]], _.first);
        }
     
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();