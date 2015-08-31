

(function () {

    function init() {
        var underscore = require('./underscore_after.js')._().noConflict();
        return {underscore: underscore};
    }

    function setupTest(initResult) {
        var greet = function (name) {
            return 'hi: ' + name;
        };
        var exclaim = function (sentence) {
            return sentence + '!';
        };
        return{fun1: greet, fun2: exclaim};

    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscore;
        var fun1 = setupTestResult.fun1;
        var fun2 = setupTestResult.fun2;
        var composed = _.compose(fun1,fun2);
        for (var i=0; i<200000; i++) {
            composed('Marija');
        }



    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();