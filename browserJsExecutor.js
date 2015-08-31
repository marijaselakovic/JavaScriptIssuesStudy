/**
 * Created by marija on 26.06.15.
 */

var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var child = require('child_process');
var ss = require('simple-statistics');
var psTree = require('ps-tree');
var a1 = [];
var a2 = [];

var con_coef = 1.96;
var browser = process.argv[2];
var bugPath = process.argv[3];
var VM_invocations=process.argv[4];
var command1 = browser + ' http://localhost:8081/' + bugPath + 'v_before.html';
var command2 = browser + ' http://localhost:8081/' + bugPath + 'v_after.html';
console.log(command1);
console.log(command2);
var running_child = null;


app.set('port', process.env.PORT || 8000);

var server = app.listen(8081, function () {
    console.log('Listening on port %d', server.address().port);
    warmUpAndTest(command1, a1, function () {

        var mean1 = parseFloat(ss.mean(a1));
        var st_dev1 = ss.standard_deviation(a1);
        console.log('mean 1: ' + mean1);

        warmUpAndTest(command2, a2, function () {

            var mean2 = parseFloat(ss.mean(a2));
            var st_dev2 = ss.standard_deviation(a2);
            console.log('mean 2: ' + mean2);
            var results = compare2Alternatives(mean1, mean2, st_dev1, st_dev2, con_coef, 5);
            if (results[0] <= 0 && results[1] >= 0) {
                console.log('the performance difference is not statistically significant');
            } else {
                console.log('the performance difference is statistically significant');

                var diff = 100 - (mean2 * 100) / mean1;
                console.log('performance gain is: ' + diff + '%');
            }
            server.close();


        });


    });


});

function warmUpAndTest(command, array, f) {

    running_child = child.exec(command, function (error, stdout, stderr) {

        if (array.length<VM_invocations) {
            setTimeout(warmUpAndTest.bind(null, command,array, f), 0);
        } else {


            f();

        }


    }, 1000);

};
function compare2Alternatives(m1, m2, s1, s2, con_coef, N) {
    var m = Math.abs(m1 - m2);
    var s = Math.sqrt((Math.pow(s1, 2) + Math.pow(s2, 2)) / N);
    var interval = [];
    var lower = parseInt(m - con_coef * s);
    var upper = parseInt(m + con_coef * s);
    interval.push(lower);
    interval.push(upper);
    return interval;

}

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(express.static(path.join(__dirname, 'html')));
app.use('/clientIssues', express.static(__dirname + '/clientIssues'));
app.use('/clientServerIssues', express.static(__dirname + '/clientServerIssues'));

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.post('/', function (req, res) {
    res.send('ok');
    console.log('mean:' + req.body.mean);

    if (req.body.mark === 0) {

        a1.push(req.body.mean);

    } else if (req.body.mark === 1) {
        a2.push(req.body.mean);

    }
    setTimeout(psTree(running_child.pid, function (err, children) {
        child.spawn('kill', ['-9'].concat(children.map(function (p) {
            return p.PID
        })))
    }), 1000);


});












