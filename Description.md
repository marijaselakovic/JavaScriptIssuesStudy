The following table gives an overview of studied performance issues and their root causes.

# Root causes of performance issues (RQ1)
| Pull request | Library | Description | Root causes | 
| --- | --- | --- |--- | --- | 
| 102 | JQuery | Avoid Array.slice, for the case when argument is negative number | Inefficient API, Inefficient Copying, Generic API |
248 | JQuery | Give support for more elements to use innerHtml instead of appendChild in html() function | Inefficient API, Special cases |
367 | JQuery |When searching for a given element separate two cases: when element is undefined and when element is string into two conditions, avoid string check when element is undefined | Special cases |
590 | JQuery |Use for loop instead Jquery.each | Inefficient iteration |
725 | JQuery |Avoid unnecessary delegation, instead of .css call .style function that is called inside .css | Inefficient API usage |
7587 | JQuery |Prefer window.JSON at first place if available | Other |
295 (commit 1) | JQuery | Not adding arbitrary hooks into hmtl elements| Other |
295 (commit 2) | JQuery | Assign value to variable val only when value is not a function, instead of doing it always. Localize val variable to each block | JIT unfrendly |
200 | JQuery | Abstraction of method that clones the DOM element. This avoids calls to Jquery.find method | Inefficient API usage, Inefficient copying |
4359 | Angular | Use &1 instead of %2 for even odd checking| Other |










