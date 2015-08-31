(function () {



    function init() {


        return {ejs: require('./ejs_before_node')};
    }

    function setupTest(initResult) {




    }

    function test(initResult, setupTestResult) {

        var ejs = initResult.ejs;
        //var str = initResult.str;
        for (var i=0; i<500; i++) {
            ejs.render('<li><a href="foo"><% // double-slash comment %>foo</li>');
        }


    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
