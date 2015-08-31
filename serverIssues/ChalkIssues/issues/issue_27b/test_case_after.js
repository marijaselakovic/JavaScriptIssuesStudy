(function () {

    function init() {



        return {chalk: require('./chalk_after.js')};
    }

    function setupTest(initResult) {




    }

    function test(initResult, setupTestResult) {
        var chalk = initResult.chalk;
        for (var i = 0; i < 6000; i++) {
            chalk.red('some text bla, bla, bla');
        }

    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();