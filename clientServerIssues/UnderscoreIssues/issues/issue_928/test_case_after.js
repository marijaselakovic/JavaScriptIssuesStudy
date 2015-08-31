

(function () {

    function init() {
        var underscore = require('./underscore_after.js');
        return {underscore: underscore};
    }

    function setupTest(initResult) {



    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscore;


        for (var i=0; i<4000; i++){

            _.invoke([[1, 7, 6], [6, 7, 4]], Array.prototype.sort);



        }



}

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();