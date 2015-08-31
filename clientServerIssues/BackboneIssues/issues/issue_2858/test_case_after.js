(function () {

    function init() {
        
        return {backbone:require('./backbone_after'), underscore:require('./backbone_after/node_modules/underscore')};



    }

    function setupTest(initResult) {
        var Backbone=initResult.backbone;
        var events = Backbone.Events;
        var underscore=initResult.underscore;
       
       //this is single object
       //extend bind set of events and x into a single object, with property x and functions in events
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