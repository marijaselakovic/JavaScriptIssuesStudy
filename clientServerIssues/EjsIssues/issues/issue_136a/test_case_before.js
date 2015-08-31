(function () {

    function init() {
        var str = "<p><%=: users | map:'name' | join %></p>";


        return {ejs: require('./ejs_before_node'), str: str};
    }

    function setupTest(initResult) {




    }

    function test(initResult, setupTestResult) {

        var ejs = initResult.ejs;
        var str = initResult.str;
        for (var i=0; i<400; i++) {
            ejs.render(str, {
                users: [
                    {name: 'tj'},
                    {name: 'mape'},
                    {name: 'guillermo'}
                ]
            });
        }

    }

    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
