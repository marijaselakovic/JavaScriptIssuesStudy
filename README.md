# JavaScriptIssuesStudy
#Introduction

Understanding the performance problems that JavaScript developers face in practice is crucial to improve the performance of JavaScript programs. This repository contains 98 reproduced performance issues from 16 popular client-side and server-side JavaScript projects. It also contains jsexecutor, a tool for reliably measuring the performance of a JavaScript program. We make these issues available
- to help developers to avoid common mistakes,
- to help researchers develop performance-related tools and techniques that address relevant problems, and
- to help developers of JavaScript engines to address prevalent bottleneck patterns.

#Requirements
We run all experiments on a machine with a Intel(R) Core(TM) i7-4600U CPU @ 2.10GHz and 16GB RAM. 
- To experiment with issues that run on server-side environments: [node.js](http://nodejs.org/) environment, and/or [io.js](https://iojs.org/). We run experiments on node v0.10.37 and v0.12 and io.js 3.2.0. To switch between different versions of node.js and io.js, we use [nvm](https://www.npmjs.com/package/nvm).
- Client-side issues can be run in Chrome or Firefox. We reproduce client-side issues in: Firefox 24, 31, 39 and Chrome 17, 29, 42. All releases of Firefox can be found at: https://ftp.mozilla.org/pub/firefox/releases/ and we downloaded all Chrome versions from: http://www.oldapps.com/google_chrome.php.
- In the JavaScriptIssuesStudy directory:
    ```
    npm install
   ```.
  This will install jsexecutor with all dependencies.
  
#Run Experiments
##To reproduce server-side performance issues:

In the JavaScriptIssuesStudy directory:

```
jsexecutor <issue path>/test_case_before.js <issue path>/test_case_after.js Nvm Nwarmup Nmeasure 0.9
```
Where:
- ``` Nvm ```: the number of repeadely launched VM instances
- ```Nwarmup```: the number of test repetitions to warmup JIT compiler
- ```Nmeasure```: number of test repetitions collected as an input to statistical test

We use the following values in our experiments:
``` Nvm = 5, Nwarmup=5, Nmeasure=10 ```

Example of reproducing perf issue that runs in server environments:
```
jsexecutor serverIssues/ChalkIssues/issues/issue_27a/test_case_before.js serverIssues/ChalkIssues/issues/issue_27a/test_case_after.js 5 5 10 0.9
```

##To reproduce client-side performance issues:

In the JavaScriptIssuesStudy directory:
```
node browserJsExecutor.js <command to run browser> <issue path> Nvm
```
Where:
- ``` Nvm ```: the number of repeadely launched VM instances. Values ```Nwarmup = 5 and Nmeasure =10``` are hardcoded, and the default value for ``` Nvm = 5 ```

Examples of reproducing perf issue in Chrome and Firefox:
```
node browserJsExecutor.js google-chrome clientIssues/AngularIssues/issues/issue_4359/ 5
```
OR
```
node browserJsExecutor.js firefox clientIssues/AngularIssues/issues/issue_4359/ 5
```
The full list of JavaScript performance issues can be found in: https://github.com/marijaselakovic/JavaScriptIssuesStudy/blob/master/Description.md Furthermore, we identified ten recurring optimization patterns and found 139 uknown occurences of these patterns accross studied programs. We reported several optimizations and information on reported and confirmed optimizations can be found in: https://github.com/marijaselakovic/JavaScriptIssuesStudy/blob/master/Confirmed.md






