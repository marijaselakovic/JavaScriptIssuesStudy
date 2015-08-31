

(function () {

    function init() {
        var nodelrucache = require('./node-lru-cache_before');
        return {nodelru: nodelrucache};
    }

    function setupTest(initResult) {
      var LRU= initResult.nodelru; 
      var cache = new LRU(2)
      cache.set("a", "A");
      cache.set("b", "B");
      cache.set("c", "C");
      return {cache:cache};


    }

    function test(initResult, setupTestResult) {
	var LRU=initResult.nodelru;
	var cache=setupTestResult.cache;
        for (var i=0; i<10000;i++) {
            cache.get("a");
            cache.get("b");
            cache.get("c");
        }




    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
