(function() {

    function init() {
     
       
        return {request:require('./request_after/index')};
    }

    function setupTest(initResult) {
    
    }

    function test(initResult, setupTestResult) {
        var request = initResult.request;

        for (var i=0; i<100; i++) {
            request('http://localhost/8081', function (error, response, body) {
                if (!error && response.statusCode === 200) {


                }
            });
        }




    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
