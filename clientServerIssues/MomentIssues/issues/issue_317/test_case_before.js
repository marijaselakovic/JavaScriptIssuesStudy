(function () {

    function init() {
        var moment = require('./moment_before');
        var b = moment(new Date(2009, 1, 14, 15, 25, 50, 125));
        return {momentobj: b};
    }

    function setupTest(initResult) {




    }

    function test(initResult, setupTestResult) {
         var moment_obj=initResult.momentobj;
        for (var i=0; i<1000; i++) {
            moment_obj.format('MM');
            moment_obj.format('DD');
            moment_obj.format('YYYY');
            moment_obj.format('dddd');
            moment_obj.format('A');
            moment_obj.format('a');
            moment_obj.format('H');
            moment_obj.format('h');
            moment_obj.format('m');
            moment_obj.format('s');
            moment_obj.format('MM-DD-YYYY');
        }
   
   
       
        
        

    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();