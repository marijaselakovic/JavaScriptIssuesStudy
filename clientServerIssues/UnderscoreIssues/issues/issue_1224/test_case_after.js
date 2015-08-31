

(function() {

    function init() {
        var underscore = require('./underscore_after.js')._().noConflict();
        return {underscore:underscore};
    }

    function setupTest(initResult) {
        var obj={};
        for (var i=0; i<100; i++){
            obj[i]=i;
        }
        
        return {object:obj};
    }

    function test(initResult, setupTestResult) {
        var _=initResult.underscore;
        var obj=setupTestResult.object;

        for (var i=0; i<4000; i++){

            _.keys(_.invert(obj));
        }

        
       
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();