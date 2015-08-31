(function () {

    function init() {



        return {q: require('./q_before.js')};
    }

    function setupTest(initResult) {
        var Q = initResult.q;
        var f = function () {
           
                Q.fcall(function () {
                    return 'hi';
                }).then(function (value1) {
                    return value1 + ' Q';
                }).then(function (value2) {
                    return value2 + ' library';
                }).then(function(value3){
                    return value3+'!';
                }).catch(function (error) {
                    console.log(error);
                }).done();
            




        };
        return {fun: f};




    }

    function test(initResult, setupTestResult) {
        var Q = initResult.q;
        var f = setupTestResult.fun;

        for (var i=0; i<9; i++) {
            f();
        }
        
         



    }


    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();