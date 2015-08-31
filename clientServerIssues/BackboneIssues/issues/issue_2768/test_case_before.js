(function () {

    function init() {
        
        return {backbone:require('./backbone_before')};



    }

    function setupTest(initResult) {
        var Backbone = initResult.backbone;
        var collection = new Backbone.Collection;
        var models = [];
        var limit = 5000;
        for (var i = 0, il = limit; i < il; i++) {
            models.push(new Backbone.Model({id: i}));
        }
        return{collection:collection, models:models};
        




    }

    function test(initResult, setupTestResult) {
        var collection=setupTestResult.collection;
        var models=setupTestResult.models;
        collection.set(models);


    }
    var initResult=init();
    var setupTestResult=setupTest(initResult);
    test(initResult,setupTestResult);

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();