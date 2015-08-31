

(function () {

    function init() {
        var underscore = require('./underscore_after.js');
        return {underscore: underscore};
    }

    function setupTest(initResult) {
        var object={a:function(){return 'something';}};

        return {obj:object};


    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscore;
        var object=setupTestResult.obj;

        for (var i=0; i<=500000; i++) {
            _.result(object, 'a');
        }

    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();