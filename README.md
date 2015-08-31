# JavaScriptIssuesStudy
#Introduction

This repository contains reproduced 98 Real-World JavaScript performance issues from 16 JavaScript projects and the jsexecutor, tool for reliable performance measurement. 52 of all issues can be run only in browser environments, 28 in browser and node.js/io.js and 18 only in node.js/io.js environments.

#Requirements
We run all experiments on a machine with a quad-core 2.10GHz CPU and 16GB RAM. 
- To experiment with issues that run on server-side environments: Node.js environment, available at http://nodejs.org/, and/or io.js, available at https://iojs.org/ . We run experiments on Node v0.10.37 and v0.12 and io.js 3.2.0.
- Client-side issues can be run in Chrome or Firefox. We reproduce client-side issues in: Firefox 24, 31, 39 and Chrome 17, 29, 42. All releases of Firefox can be found at: https://ftp.mozilla.org/pub/firefox/releases/ and we downloaded all Chrome versions from: http://www.oldapps.com/google_chrome.php
- In the JavaScriptIssuesStudy directory:
    ```
    npm install
   ```
  This will install jsexecutor with all dependencies.
  
#Run Experiments
##To reproduce server-side performance issues:

In the JavaScriptIssuesStudy directory:

```
jsexecutor serverIssues/<folder containing tests and program versions>/issues/issue_<number>/test_case_before.js serverIssues/<folder containing tests and program versions>/issues/issue_<number>/test_case_after.js Nvm Nwarmup Nmeasure 0.9
```
OR
```
jsexecutor clientServerIssues/<folder containing tests and program versions>/issues/issue_<number>/test_case_before.js rclientServerIssues/<folder containing tests and program versions>/issues/issue_<number>/test_case_after.js Nvm Nwarmup Nmeasure 0.9
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

##To reproduce client-side performance issue:

In the JavaScriptIssuesStudy directory:
```
node browserJsExecutor.js <command to run browser> <issue path> Nvm
```




