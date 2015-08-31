(function () {

    function init() {
        var cheerio = require('./cheerio_after/index');
        var object = cheerio.load('<ul id="fruits"> <li class="apple">Apple</li> <li class="orange">Orange</li> <li class="pear">Pear</li> <li class="pineapple">Pineapple</li><li class="bannana">Bannana</li><li class="avocado">Avocado</li></ul>');
        return {cheerio: cheerio, obj: object};
    }

    function setupTest(initResult) {

    }

    function test(initResult, setupTestResult) {
        var obj = initResult.obj;
         for (var i=0; i<=25; i++){
        obj('.apple').siblings();
        obj('.orange').siblings();
        obj('.pear').siblings();
        obj('.pineapple').siblings();
        obj('.bannana').siblings();
        obj('.avocado').siblings();
    }



    }


    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();