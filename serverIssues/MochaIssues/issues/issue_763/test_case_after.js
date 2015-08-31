(function () {

    function init() {



        return {mocha: require('./mocha_after/index')};
    }

    function setupTest(initResult) {
        var mocha = initResult.mocha;

        var Suite = mocha.Suite;
        var Runner = mocha.Runner;
        var Test = mocha.Test;
        return {suite:Suite, runner:Runner, test:Test};
    



    }

    function test(initResult, setupTestResult) {
              var Runner=setupTestResult.runner;
        var Suite=setupTestResult.suite;
        var Test=setupTestResult.test;
        for (var i=0; i<1000; i++) {

            var suite = new Suite(null, 'root');
            suite.addTest(new Test('im a test about lions'));
            suite.addTest(new Test('im another test about lions'));
            suite.addTest(new Test('im a test about bears'));
            var newRunner = new Runner(suite);
        }
       
        



    }
  

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
