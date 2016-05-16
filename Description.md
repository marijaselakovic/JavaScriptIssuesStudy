The following table gives an overview of studied performance issues and their root causes. The number in parentheses denotes number/s of commit/s if the pull request contains more performance related optimizations.

# Root causes of performance issues (RQ1)
| Pull request | Library | Description | Root causes | 
| --- | --- | --- |--- | --- | 
| 102 | JQuery | Avoid Array.slice, for the case when argument is negative number | Inefficient API, Inefficient Copying, Generic API |
248 | JQuery | Give support for more elements to use innerHtml instead of appendChild in html() function | Inefficient API, Special cases |
367 | JQuery |When searching for a given element separate two cases: when element is undefined and when element is string into two conditions, avoid string check when element is undefined | Special cases |
590 | JQuery |Use for loop instead Jquery.each | Inefficient iteration |
725 | JQuery |Avoid unnecessary delegation, instead of .css call .style function that is called inside .css | Inefficient API usage |
7587 | JQuery |Prefer window.JSON at first place if available | Other |
295 (1) | JQuery | Not adding arbitrary hooks into hmtl elements| Other |
295 (2) | JQuery | Assign value to variable val only when value is not a function, instead of doing it always. Localize val variable to each block | JIT unfrendly |
200 | JQuery | Abstraction of method that clones the DOM element. This avoids calls to Jquery.find method | Inefficient API usage, Inefficient copying |
4359 | Angular | Use &1 instead of %2 for even odd checking| Other |
4457 | Angular | Empty() or Html("") JQuery function| Inefficient API usage |
5388 | Angular | To invoke function use f.apply instead of function call with arguments check (args.length)| Inefficient API usage, Special cases |
5457 | Angular | Two calls to CharAt instead of substr| Inefficient API usage |
7012 | Angular | Use Object.keys instead of for in + hop| Inefficient iteration |
7163 | Angular | Caching the child scope class| Repeated execution |
7501 | Angular | Avoid stringification with toJson (JSON.stringify) in case of number| Inefficient API usage, Generic API, Special cases |
7735 | Angular | Native isArray instead of toString call| Inefficient API usage, API reimplementation |
9942 | Angular | Use Array.slice for coping array instead of for loop| Inefficient copying |
8898 | Angular | Use for loop instead of forEach (angular method)| Inefficient iteration |
11215 | Angular | Remove unnecessary checks: isArray, isRegExp, isObject, isTypedArray| Inefficient API usage, Repeated execution, Repeated checks|
9369 | Angular | Use textContent property access instead of .text()| Generic API |
8515 (7,8,10)| Angular | Use for loop instead of forEach (angular method)| API reimplementation|
8515 (12)| Angular | Dont register DOM listener for $destroy event| Special cases|
8515 (31)| Angular | Trim if only string expression| Repeated checks|
8515 (39)| Angular | Use objects without prototype and by doing this expensive hasOwnProperty check is avoided| Inefficient API usage|
8515 (44)| Angular | Use object without prototype so hasOwnProperty check is not needed to check direct properties | Inefficient API usage|
8515 (46)| Angular | Exit method ($broadcast) if no element is listening | Special cases|
9067| Angular | Use .map built-in function instead of project's one | API reimplementation|
7759 (3)| Angular | Replace for in with hop with Object.keys | Inefficient iteration|
7759 (4)| Angular | Don't call function that generates keys for angular several time, since only one instance of angular is allowed. Unique id is given once per instance| Other |
7759 (7)| Angular | Use classList property of DOM element instead of using getAttribute('class') if classList has browser support | Inefficient API usage |
7759 (9)| Angular | document.window has reference to itself, for checking window property of document use this, instead of checking location and document | Inefficient API usage |
7759 (11)| Angular | Always use .textContext property access instead of .innerText in some cases | Inefficient API usage |
10351 | Angular | Instead of setter method use getter.assign | Inefficient API usage |













