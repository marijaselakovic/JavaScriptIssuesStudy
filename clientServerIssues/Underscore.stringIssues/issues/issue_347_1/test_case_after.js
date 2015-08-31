(function () {

    function init() {


        return {underscorestring: require('./underscore.string_after.js')};
    }

    function setupTest(initResult) {

    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscorestring;

        for (var i=0; i<=100000; i++) {
            _.startsWith('image.gif', 'image');
            _.startsWith('.vimrc', 'vim', 1);
            _.endsWith('image.gif', 'image');
            _.endsWith('.vimrc', 'vim', 1);
        }



    }



    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
