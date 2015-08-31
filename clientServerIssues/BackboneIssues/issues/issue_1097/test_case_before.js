(function () {

    function init() {
        
        return {backbone:require('./backbone_before'), underscore:require('./backbone_before/node_modules/underscore')};



    }

    function setupTest(initResult) {
        var Backbone=initResult.backbone;
        var events = Backbone.Events;
        var underscore=initResult.underscore;

        var bb = underscore.extend({x:0}, events);
        return {bb:bb}

    }

    function test(initResult, setupTestResult) {

        var bb=setupTestResult.bb;
        for (var i=0; i<10000; i++){

        [bb].forEach(function (obj) {
            obj.on('event1', function () {
                obj.x++;
            });
            obj.on('event2', function () {
                obj.x++;
            });

        });

        }
   

  


    
    }


    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();