# JavaScriptIssuesStudy
#Introduction

This repository contains reproduced 98 Real-World JavaScript performance issues from 16 JavaScript projects and the jsexecutor, tool for reliable performance measurement. 52 of all issues can be run only in browser environments, 28 in browser and node.js/io.js and 18 only in node.js/io.js environments.

#Requirements
We run all experiments on a machine with a quad-core 2.10GHz CPU and 16GB RAM. 
- To experiment with issues that run on server-side environments: Node.js environment, available at http://nodejs.org/, and/or io.js, available at https://iojs.org/ . We run experiments on Node v0.10.37 and v0.12 and io.js 3.2.0.
- Client-side issues can be run in Chrome, Chromnium or Firefox. We run tests used to reproduce client-side issues in: Firefox 24, 31, 39 and Chrome 17, 29, 42. All releases of Firefox can be found at: https://ftp.mozilla.org/pub/firefox/releases/ and we downloaded all Chrome versions from: http://www.oldapps.com/google_chrome.php
- In the JavaScriptIssuesStudy directory:
    ```
    npm install
   ```
  This will install jsexecutor with all dependencies.

