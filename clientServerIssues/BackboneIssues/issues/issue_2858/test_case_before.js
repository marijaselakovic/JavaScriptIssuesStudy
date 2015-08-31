(function () {

    function init() {
        
        return {backbone:require('./backbone_before'), underscore:require('./backbone_before/node_modules/underscore')};



    }

    function setupTest(initResult) {
        var Backbone=initResult.backbone;
        var events = Backbone.Events;
        var underscore=initResult.underscore;
       
        var bb = underscore.extend({x:0}, events);
        [bb].forEach(function (obj) {
            obj.on('event1', function () {
                obj.x++;
            });
            obj.on('event2', function () {
                obj.x++;
            });
            obj.off();
        });
        
        return{bbevents:bb};
     




    }

    function test(initResult, setupTestResult) {
    var bbevents=setupTestResult.bbevents;

        for (var i=0; i<100000; i++) {
            bbevents.trigger('event1');
            bbevents.trigger('event2');
            bbevents.off();
        }



    
    }


    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();