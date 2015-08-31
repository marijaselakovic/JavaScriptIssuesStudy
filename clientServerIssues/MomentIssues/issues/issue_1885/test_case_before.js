(function () {

    function init() {
        var moment = require('./moment_before');
        var m = moment(new Date(2011, 3, 2, 3, 4, 5, 10));

        return {moment:moment,obj: m};
    }

    function setupTest(initResult) {


    }

    function test(initResult, setupTestResult) {
        var moment=initResult.moment;
        var m = initResult.obj;
        for (var i=0; i<=3500; i++){
        m.isAfter(moment(new Date(2012, 3, 2, 3, 5, 5, 10)));
    }
    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();