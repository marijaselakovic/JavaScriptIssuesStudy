(function () {

    function init() {
        var cheerio = require('./cheerio_before/index');
        var object = cheerio.load('<ul id="fruits"> <li class="apple">Apple</li> <li class="orange">Orange</li> <li class="pear">Pear</li> <li class="pineapple">Pineapple</li><li class="bannana">Bannana</li><li class="avocado">Avocado</li></ul>');
        
        return {cheerio: cheerio, object:object};
    }

    function setupTest(initResult) {
        var obj = initResult.object;
        var apple = obj('.apple');
        apple.attr('autofocus', 'autofocus');
        return {object: apple};

    }

    function test(initResult, setupTestResult) {
        var apple=setupTestResult.object;
        for (var i=0; i<70000; i++) {

            apple.removeAttr('autofocus');
        }

    
         
    
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();