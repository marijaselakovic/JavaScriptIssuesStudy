(function () {

    function init() {



        return {chalk: require('./chalk_after.js')};
    }

    function setupTest(initResult) {




    }

    function test(initResult, setupTestResult) {
        var chalk = initResult.chalk;
        for (var i = 0; i < 80; i++) {
            chalk.underline('foo');
            chalk.red('foo');
            chalk.grey('foo');
        }

    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();