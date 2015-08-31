(function () {

    function init() {
        
        return {backbone:require('./backbone_after')};



    }

    function setupTest(initResult) {
        var Backbone=initResult.backbone;
        var model = new Backbone.Model({a:1});
        
        return{model:model};
 
    }

    function test(initResult, setupTestResult) {
        var model=setupTestResult.model;
        
        for (var i=0; i<10000; i++){
           model.set('a', 1); 
            
        }
  

    }
    //var initResult=init();
   // var setupTestResult=setupTest(initResult);
   // test(initResult,setupTestResult);

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();