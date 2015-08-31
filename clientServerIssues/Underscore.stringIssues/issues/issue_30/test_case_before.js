(function () {

    function init() {


        return {underscorestring: require('./underscore.string_before.js')};
    }

    function setupTest(initResult) {

    }

    function test(initResult, setupTestResult) {
        var unstring = initResult.underscorestring;
        for (var i= 0; i<3000; i++){

            unstring.join('', 'foo', 'bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar',
                'bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar','bar');

        }


    }
    


    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
