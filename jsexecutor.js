#!/usr/bin/env node

(function () {
    var program = require('commander');
    var fs = require('fs');
//var util = require('util'); this can be used for measuring used memory
    var ss = require('simple-statistics');
 //   var anova = require('./anova');
    var child = require('child_process');
// var d3 = require("d3");
    var MIN_MEASURABLE_TIME = 5000000;
    function warmUpAndTest(path, vmRestartsLeft, nbWarmUpRepetitions, nbMeasurementRepetitions, measuredTimes, f) {
    console.log(vmRestartsLeft);
        var command = 'node jsexecutorWarmUpAndTest.js ' + path + " " + nbWarmUpRepetitions + " " + nbMeasurementRepetitions;

        child.exec(command, function (error, stdout, stderr) {
            if (error) {
                console.log('Error code: ' + error);
            }

            //for a longer term check the diff between .exec and .spawn and see does .spawn returns more than a string
            var measuredMeanTime = parseFloat(stdout.split('mean:')[1]);

            if (measuredMeanTime < MIN_MEASURABLE_TIME) {
                console.log("Warning: Measured time is below the minimum measurable time: " + measuredMeanTime);
                console.log("         Please increase running time by about "+Math.ceil(MIN_MEASURABLE_TIME / measuredMeanTime)+"x")
            }
            measuredTimes.push(measuredMeanTime);
            if (vmRestartsLeft - 1 > 0) {
// schedule another run of execute
                setTimeout(warmUpAndTest.bind(null, path, vmRestartsLeft - 1, nbWarmUpRepetitions, nbMeasurementRepetitions, measuredTimes, f), 0);
            } else {
                f(measuredTimes);
            }
        });
//console.log('Memory usage:'+util.inspect(process.memoryUsage()));
    }
//this is the first and most simple way of comparing two alternatives described in paper: Statistically Rigorous Java Performance Evaluation
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
    function write2File(path1, path2, mean1, mean2, result) {
        var message = 'Files: ' + path1.toString() + ', ' + path2.toString() + ' are executed 100 times';
        fs.writeFile('output.txt', message,
                function (err) {
                    if (err)
                        throw err;
                });
    }
    program
            .version('0.0.1')
            .usage('<path1> <path2> <#VM invocations> <#warm up repetitions> <#measurement repetitions> <alpha>')
            .parse(process.argv);
    if (!program.args.length) {
        program.help();
    } else if (program.args.length != 6) {
        console.log("Incorrect arguments. See --help.");
    }
    else {
//find a way to first validate inputs
        var path1 = program.args[0];
        var path2 = program.args[1];
        var nbVMInvocations = parseInt(program.args[2]);
        var nbWarmUpRepetitions = parseInt(program.args[3]);
        var nbMeasurementRepetitions = parseInt(program.args[4]);
        var alpha = parseFloat(program.args[5]);
//values obtained from the z table
//https://www.easycalculation.com/statistics/normal-ztable.php
        var con_coef;
        if (alpha === 0.90) {
            con_coef = 1.65;
        } else if (alpha === 0.95) {
            con_coef = 1.96;
        } else if (alpha === 0.99) {
            con_coef = 2.58;
        }
        var mean1 = 0;
        var mean2 = 0;
        var st_dev1 = 0;
        var st_dev2 = 0;
// measure execution time of first test case
        warmUpAndTest(path1, nbVMInvocations, nbWarmUpRepetitions, nbMeasurementRepetitions, [], function (measuredTimes1) {
            mean1 = Math.round(parseFloat(ss.mean(measuredTimes1)));
            st_dev1 = ss.standard_deviation(measuredTimes1);
            console.log('mean1: ' + mean1);
// measure execution time of second test case
            warmUpAndTest(path2, nbVMInvocations, nbWarmUpRepetitions, nbMeasurementRepetitions, [], function (measuredTimes2) {
                mean2 = Math.round(parseFloat(ss.mean(measuredTimes2)));
                st_dev2 = ss.standard_deviation(measuredTimes2);
                console.log('mean2: ' + mean2);
//comparing two alternatives means computing confidence interval for the difference of the means
                var results = compare2Alternatives(mean1, mean2, st_dev1, st_dev2, con_coef, nbVMInvocations);
                if (results[0] <= 0 && results[1] >= 0) {
                    console.log('the performance difference is not statistically significant');
                } else {
                    console.log('the performance difference is statistically significant');
                    var diff = 100 - (mean2 * 100) / mean1;
                    console.log('performance gain is: ' + diff + '%');
                }
            }, 0);
        }, 0);
/// var result = anova.anova(array1, array2, mean1, mean2,N);
// console.log('the difference is statistically significant:' + result + ' for the 0.05 significance level');
//export results to a file.....
//write2File(path1, path2, mean1, mean function (error, stdout, stderr) {
    }
})(this);
