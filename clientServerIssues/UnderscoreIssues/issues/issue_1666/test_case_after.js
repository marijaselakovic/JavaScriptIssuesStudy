

(function () {

    function init() {
        var underscore = require('./underscore_after.js');
        return {underscore: underscore};
    }

    function setupTest(initResult) {
        var obj1 = {a: 'a', b: 'b', c: 'c'};
        var obj2 = {a: 'a', b: 'b'};
        var obj3 = {a: 'a', b: 'b', d: 'd', e:'e'};

        return{obj1: obj1, obj2: obj2, obj3: obj3};

    }

    function test(initResult, setupTestResult) {
        var _ = initResult.underscore;
        var obj1 = setupTestResult.obj1;
        var obj2 = setupTestResult.obj2;
        var obj3 = setupTestResult.obj3;

        for (var i=0; i<=100; i++){

            _.isEqual(obj1,obj2);
            _.isEqual(obj2,obj3);
            _.isEqual(obj3,obj1);
        }
    



    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();