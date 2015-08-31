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
        for (var i=0; i<200; i++) {

            var orange = obj('.apple').next('.orange');
            var pear = orange.next('.pear');
            var pineapple = pear.next('.pineapple');
            var bannana = pineapple.next('bannana');
            var avocado = bannana.next('avocado');
        }
    
        

    }



    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();