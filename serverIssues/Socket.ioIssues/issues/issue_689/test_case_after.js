(function () {

    function init() {


        return {socketio: require('./socket.io_after/index.js')};
    }

    function setupTest(initResult) {
        var socketio=initResult.socketio;

        var parser = socketio.parser;
        return {parser:parser};
    }

    function test(initResult, setupTestResult) {
        var parser=setupTestResult.parser;
        for (var i=0; i<5000; i++) {

            parser.decodePayload('\ufffd5\ufffd3:::5\ufffd7\ufffd3:::53d'
            + '\ufffd3\ufffd0::');
        }

    }



    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
