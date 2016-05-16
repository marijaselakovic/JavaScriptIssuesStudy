The following table gives an overview of studied performance issues and their root causes.

# Root causes of performance issues (RQ1)
| Pull request | Library | Description | Root causes | 
| --- | --- | --- |--- | --- | 
| 102 | JQuery | Avoid Array.slice, for the case when argument is negative number | Inefficient API, Inefficient Copying, Generic API |
248 | JQuery | Give support for more elements to use innerHtml instead of appendChild in html() function | Inefficient API, Special cases |
367 | JQuery |When searching for a given element separate two cases: when element is undefined and when element is string into two conditions, avoid string check when element is undefined | Special cases |
590 | JQuery |Use for loop instead Jquery.each | Inefficient iteration |










