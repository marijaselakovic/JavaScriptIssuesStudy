The following table gives an overview of studied performance issues and their root causes.

# Root causes of performance issues (RQ1)
| Pull request | Library | Description | Inefficient API usage | Inefficient iteration | Repeated execution | Inefficient copying | Special cases | API reimp. | Repeated checks | Generic API| Other |
| --- | --- | --- |--- | --- | --- | --- | --- | --- | --- | --- | --- |
| 102 | JQuery | Avoid Array.slice, for the case when argument is negative number | x | --- | --- | x | --- | --- | --- | x | --- |









