(function () {

    function init() {


        return {socketio: require('./socket.io_before')};
    }

    function setupTest(initResult) {
        var socketio=initResult.socketio;

        var parser = socketio.parser;
        return {parser:parser};
    }

    function test(initResult, setupTestResult) {
        var parser=setupTestResult.parser;
        for (var i=0; i<3000; i++) {
            parser.encodePacket({
                type: 'ack'
                , ackId: '12'
                , endpoint: ''
                , args: ['woot', 'wa']
            });
               parser.encodePacket({
                type: 'ack'
                , ackId: '140'
                , endpoint: ''
                , args: []
            });
            parser.encodePacket({
                type: 'ack'
                , ackId: '140'
                , endpoint: ''
                , args: []
            });



        }



    }

    


    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
