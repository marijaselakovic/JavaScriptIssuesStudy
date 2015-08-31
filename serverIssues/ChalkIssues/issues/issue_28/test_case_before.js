(function () {

    function init() {



        return {chalk: require('./chalk_before/index')};
    }

    function setupTest(initResult) {




    }

    function test(initResult, setupTestResult) {
        var chalk = initResult.chalk;

        for (var i=0; i<800; i++){
   
           chalk.underline('foo');
           chalk.red('foo');
           chalk.red.bgGreen.underline('foo');
           chalk.underline.red.bgGreen('foo');
           chalk.red('foo' + chalk.underline.bgBlue('bar') + '!');
           chalk.red('a' + chalk.yellow('b' + chalk.green('c') + 'b') + 'c');
           chalk.grey('foo');
           chalk.hasColor(chalk.green('foo'));
           !chalk.hasColor(chalk.stripColor(chalk.green('foo')));
           chalk.stripColor(chalk.underline.red.bgGreen('foo'));

        }
        

    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
