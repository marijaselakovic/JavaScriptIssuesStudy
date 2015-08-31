(function () {

    function init() {


        return {moment: require('./moment_after')};
    }

    function setupTest(initResult) {


    }

    function test(initResult, setupTestResult) {
        var moment = initResult.moment;
           for (var i=0; i<=10000; i++){
            var b = moment(new Date(2009, 1, 14, 15, 25, 50, 125));
        
        }
     
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();