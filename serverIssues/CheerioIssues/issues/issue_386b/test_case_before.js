(function () {

    function init() {
        var cheerio = require('./cheerio_before/index');
        var a = cheerio.load('<h2 class="class1 new optimization in cheerio ! ! !">Hello world 1!</h2> <h1 class="class2 new optimization in cheerio ! ! !">Hello world 2!</h1> <h3 class="class3 new optimization in cheerio ! ! !">Hello world 3!</h3> <h4 class="class4 new optimization in cheerio ! ! !">Hello world 4!</h4>');


        return {cheerio: cheerio, obj: a};
    }

    function setupTest(initResult) {




    }

    function test(initResult, setupTestResult) {

        var a = initResult.obj;
        for (var j=0; j<40; j++) {
            for (var i = 0; i <= 3; i++) {
                a('h2').removeClass('!');
                a('h1').removeClass('!');
                a('h3').removeClass('!');
                a('h4').removeClass('!');
            }
            a('h2').removeClass('cheerio');
            a('h1').removeClass('cheerio');
            a('h3').removeClass('cheerio');
            a('h4').removeClass('cheerio');
            a('h2').removeClass('optimization');
            a('h1').removeClass('optimization');
            a('h3').removeClass('optimization');
            a('h4').removeClass('optimization');
            a('h2').removeClass('in');
            a('h1').removeClass('in');
            a('h3').removeClass('in');
            a('h4').removeClass('in');
            a('h2').removeClass('new');
            a('h1').removeClass('new');
            a('h3').removeClass('new');
            a('h4').removeClass('new');

        }

 



    }


    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
