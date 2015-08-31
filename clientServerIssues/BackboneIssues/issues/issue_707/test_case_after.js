(function () {

    function init() {
        var obj = {counter: 0};
        var _ = require('./backbone_after/node_modules/underscore');
        var Backbone = require('./backbone_after');
        var extended = _.extend(obj, Backbone.Events);

        return {object: extended};



    }

    function setupTest(initResult) {
        var obj=initResult.object;
        var incr1 = function(){ obj.counter += 1; obj.unbind('event', incr1); obj.trigger('event'); };
        var incr2 = function(){ obj.counter += 1; };
        obj.bind('event', incr1);
        obj.bind('event', incr2);
        
        return {bindobject:obj};
      
 
    }

    function test(initResult, setupTestResult) {
        var object=setupTestResult.bindobject;
        for(var i=0; i<10000; i++){
            object.trigger('event');
        }
     
  

    }
    //var initResult=init();
   // var setupTestResult=setupTest(initResult);
   // test(initResult,setupTestResult);

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();