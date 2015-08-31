(function () {

    function init() {
        var cheerio = require('./cheerio_before/index');
        var object = cheerio.load('<ul id="fruits"> <li class="apple">Apple</li> <li class="orange">Orange</li> <li class="pear">Pear</li> <li class="pineapple">Pineapple</li><li class="bannana">Bannana</li><li class="avocado">Avocado</li></ul>');
        return {cheerio: cheerio, obj: object};
    }

    function setupTest(initResult) {

    }

    function test(initResult, setupTestResult) {
        var obj = initResult.obj;
        for (var i=0; i<50; i++) {
            obj('#fruits').find('.apple');
            obj('#fruits').find('.orange');
            obj('#fruits').find('.pear');
            obj('#fruits').find('.pineapple');
            obj('#fruits').find('.bannana');
            obj('#fruits').find('.avocado');
        }
   
    }



    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();