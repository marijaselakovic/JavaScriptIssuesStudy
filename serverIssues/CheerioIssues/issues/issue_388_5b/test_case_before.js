(function () {

    function init() {
        var cheerio = require('./cheerio_before/index');
        var a = cheerio.load('<h2 class="class1">Hello world 1!</h2> <h1 class="class2">Hello world 2!</h1> <h3 class="class3">Hello world 3!</h3> <h4 class="class4">Hello world 4!</h4>');

        return {cheerio: cheerio, obj: a};
    }

    function setupTest(initResult) {

    }

    function test(initResult, setupTestResult) {

        var a = initResult.obj;
        for (var i = 0; i <= 1000; i++) {
            a.html();
        }
    }
   
    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();