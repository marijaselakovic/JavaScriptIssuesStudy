The following table gives an overview of studied performance issues and their root causes. The number in parentheses denotes commit number/s if the pull request contains more performance related optimizations.

# Root causes of performance issues (RQ1)
| Pull request | Library | Description | Root causes | 
| --- | --- | --- |--- | --- | 
| [102](https://github.com/jquery/jquery/issues/102) | JQuery | Avoid Array.slice, for the case when argument is negative number | Inefficient API, Inefficient/Redundant copying, Generic API |
[248](https://github.com/jquery/jquery/issues/248) | JQuery | Give support for more elements to use innerHtml instead of appendChild in html() function | Inefficient API, Special cases |
[367](https://github.com/jquery/jquery/issues/367) | JQuery |When searching for a given element separate two cases: when element is undefined and when element is string into two conditions, avoid string check when element is undefined | Special cases |
[590](https://github.com/jquery/jquery/issues/590) | JQuery |Use for loop instead Jquery.each | Inefficient iteration |
[725](https://github.com/jquery/jquery/issues/725) | JQuery |Avoid unnecessary delegation, instead of .css call .style function that is called inside .css | Inefficient API usage |
[7587](https://github.com/jquery/jquery/issues/7587) | JQuery |Prefer window.JSON at first place if available | Other |
[295 1](https://github.com/jquery/jquery/issues/295) | JQuery | Not adding arbitrary hooks into hmtl elements| Other |
[295 2](https://github.com/jquery/jquery/issues/295) | JQuery | Assign value to variable val only when value is not a function, instead of doing it always. Localize val variable to each block | JIT unfrendly |
[200](https://github.com/jquery/jquery/issues/200) | JQuery | Abstraction of method that clones the DOM element. This avoids calls to Jquery.find method | Inefficient API usage, Inefficient/Redundant copying |
[4359](https://github.com/angular/angular/issues/4359) | Angular | Use &1 instead of %2 for even odd checking| Other |
[4457](https://github.com/angular/angular/issues/4457) | Angular | Empty() or Html("") JQuery function| Inefficient API usage |
[5388](https://github.com/angular/angular/issues/5388) | Angular | To invoke function use f.apply instead of function call with arguments check (args.length)| Inefficient API usage, Special cases |
[5457](https://github.com/angular/angular/issues/5457) | Angular | Two calls to CharAt instead of substr| Inefficient API usage |
[7012](https://github.com/angular/angular/issues/7012) | Angular | Use Object.keys instead of for in + hop| Inefficient iteration |
[7163](https://github.com/angular/angular/issues/7163) | Angular | Caching the child scope class| Repeated execution |
[7501](https://github.com/angular/angular/issues/7501) | Angular | Avoid stringification with toJson (JSON.stringify) in case of number| Inefficient API usage, Generic API, Special cases |
[7735](https://github.com/angular/angular/issues/7735) | Angular | Native isArray instead of toString call| Inefficient API usage, API reimplementation |
[9942](https://github.com/angular/angular/issues/9942) | Angular | Use Array.slice for coping array instead of for loop| Inefficient/Redundant copying |
[8898](https://github.com/angular/angular/issues/8898) | Angular | Use for loop instead of forEach (angular method)| Inefficient iteration |
[11215](https://github.com/angular/angular/issues/11215) | Angular | Remove unnecessary checks: isArray, isRegExp, isObject, isTypedArray| Inefficient API usage, Repeated execution, Repeated checks|
[9369](https://github.com/angular/angular/issues/9369) | Angular | Use textContent property access instead of .text()| Generic API |
[8515 (7,8,10)](https://github.com/angular/angular/issues/8515) | Angular | Use for loop instead of forEach (angular method)| API reimplementation|
[8515 12](https://github.com/angular/angular/issues/8515) | Angular | Dont register DOM listener for $destroy event| Special cases|
[8515 31](https://github.com/angular/angular/issues/8515) | Angular | Trim if only string expression| Repeated checks|
[8515 39](https://github.com/angular/angular/issues/8515) | Angular | Use objects without prototype and by doing this expensive hasOwnProperty check is avoided| Inefficient API usage|
[8515 44](https://github.com/angular/angular/issues/8515) | Angular | Use object without prototype so hasOwnProperty check is not needed to check direct properties | Inefficient API usage|
[8515 46](https://github.com/angular/angular/issues/8515) | Angular | Exit method ($broadcast) if no element is listening | Special cases|
[9067](https://github.com/angular/angular/issues/9067) | Angular | Use .map built-in function instead of project's one | API reimplementation|
[7759 3](https://github.com/angular/angular/issues/7759) | Angular | Replace for in with hop with Object.keys | Inefficient iteration|
[7759 4](https://github.com/angular/angular/issues/7759) | Angular | Don't call function that generates keys for angular several time, since only one instance of angular is allowed. Unique id is given once per instance| Other |
[7759 7](https://github.com/angular/angular/issues/7759) | Angular | Use classList property of DOM element instead of using getAttribute('class') if classList has browser support | Inefficient API usage |
[7759 9](https://github.com/angular/angular/issues/7759) | Angular | document.window has reference to itself, for checking window property of document use this, instead of checking location and document | Inefficient API usage |
[7759 11](https://github.com/angular/angular/issues/7759) | Angular | Always use .textContext property access instead of .innerText in some cases | Inefficient API usage |
[10351](https://github.com/angular/angular/issues/10351) | Angular | Instead of setter method use getter.assign | Inefficient API usage |
[4263](https://github.com/emberjs/ember.js/issues/4263) | Ember | Use document.contains to see if element exist in DOM instead of looping DOM tree | Inefficient API usage, API reimplementation |
[4329 1](https://github.com/emberjs/ember.js/issues/4329) | Ember | Avoid for in, for checking object property use direct access | Repeated checks |
[4329 3](https://github.com/emberjs/ember.js/issues/4329) | Ember | Use internalized keys for accessing object properties | Other |
[4329 4](https://github.com/emberjs/ember.js/issues/4329) | Ember | Reduce usage of indexOf, it is considered as an expensive function| Other |
[5547](https://github.com/emberjs/ember.js/issues/5547) | Ember | Move try catch block in code-critical part | JIT unfriendly |
[9991](https://github.com/emberjs/ember.js/issues/9991) | Ember | Instead of indexOf(has_this) use lastIndexOf (has_this,0). The prefix has_this is always 'this.' and matches the access of properties like: this.bar | Inefficient API usage
[4158](https://github.com/emberjs/ember.js/issues/4158) | Ember | When retriving the unique id of the object (method guideFor) first check is it defined. If it is not defined, then generate new one and assign as: obj[prop]=value | Inefficient API usage |
[11338](https://github.com/emberjs/ember.js/issues/11338) | Ember | Avoid for in loop, use Object.keys | Inefficient iteration |
[3174](https://github.com/emberjs/ember.js/issues/3174) | Ember | Avoid console.assert, the condition that checks whether the assert should be called is inserted | Inefficient API usage, Repeated checks, Special cases|
[3288](https://github.com/emberjs/ember.js/issues/3288) | Ember | Use Ember.ArrayPolyfills.indexOf insteadOf Ember.EnumerableUtils.indexOf | Inefficient API usage |
[5212](https://github.com/emberjs/ember.js/issues/5212) | Ember | Caching computed properties of the object, since they are almost never changed | Inefficient iteration, Repeated execution |
[3665](https://github.com/facebook/react/issues/3665) | React | Use undefined===obj[prop] check instead of hasOwnProperty | Inefficient API usage |
[934](https://github.com/facebook/react/issues/934) | React | Simplified generation of node id | Inefficient API usage, Repeated checks |
[808](https://github.com/facebook/react/issues/808) | React | Use textContent instead of innerHtml | Inefficient API usage |
[1885](https://github.com/facebook/react/issues/1885) | React | Use RegExp test instead of several indexOf | Inefficient API usage, Generic API |
[68](https://github.com/jashkenas/underscore/issues/68) | Underscore | Algorithmic improvement based on user hint (give as input sorted array) | Special cases |
[572](https://github.com/jashkenas/underscore/issues/572) | Underscore | Replace Array.concat with Array.push | Inefficient API usage, Inefficient iteration |
[39](https://github.com/jashkenas/underscore/issues/39) | Underscore | Replace split.join with replace | Inefficient API usage |
[928](https://github.com/jashkenas/underscore/issues/928) | Underscore | Hoist function definition outside loop | Repeated execution, Repeated checks |
[1222](https://github.com/jashkenas/underscore/issues/1222) | Underscore | Replace for in with .keys and traditional for loop | Inefficient iteration |
[1223](https://github.com/jashkenas/underscore/issues/1223) | Underscore | Replace for in with .keys and traditional for loop | Inefficient iteration |
[1224](https://github.com/jashkenas/underscore/issues/1224) | Underscore | Replace for in with .keys and traditional for loop | Inefficient iteration |
[1578](https://github.com/jashkenas/underscore/issues/1578) | Underscore | Direct function call instead of .call | Inefficient API usage |
[1666](https://github.com/jashkenas/underscore/issues/1666) | Underscore | When comparing two objects, first compare do they have same number of properties and then is every property equal | Inefficient API usage, Inefficient iteration |
[1700](https://github.com/jashkenas/underscore/issues/1700) | Underscore | Prefer using .call instead of apply | Inefficient API usage, Inefficient iteration |
[1708](https://github.com/jashkenas/underscore/issues/1708) | Underscore | Replace functional programming style with for loop | Inefficient API usage, Inefficient iteration |
[1860](https://github.com/jashkenas/underscore/issues/1860) | Underscore | Explicitly apply an otherwise implicit type conversion to avoid applying it multiple times | Inefficient API usage, Inefficient iteration, Repeated execution |
[30](https://github.com/epeli/underscore.string/issues/30) | Underscore.string | Use Array.join instead of concatenation | Inefficient API usage, Inefficient iteration, API reimplementation |
[347 1](https://github.com/epeli/underscore.string/issues/347) | Underscore.string | Do implicit string conversion instead of String wrapper in startsWith method | Inefficient API usage |
[347 2](https://github.com/epeli/underscore.string/issues/347) | Underscore.string | Dont 'slice' the string, use indexOf and lastIndexOf methods | Inefficient API usage |
[2768](https://github.com/jashkenas/backbone/issues/2768) | Backbone | Instead of calling push with apply, iterate over set of elements and push each of them separately | Inefficient API usage, Inefficient iteration |
[2858](https://github.com/jashkenas/backbone/issues/2858) | Backbone | In the function that removes all callbacks for all events, the statement events={} is replaced by events=void 0 | Other |
[1766](https://github.com/jashkenas/backbone/issues/1766) | Backbone | Avoid unnecessary object creation | Inefficient/Redundant copying |
[1097](https://github.com/jashkenas/backbone/issues/1097) | Backbone | Caching regular expression | Repeated execution |
136a | EJS | Replaced buf.push() and buf.join() with string concatentation | Inefficient API usage |
136b | EJS | Replaced string.substr(i, 1) with string[i] | Inefficient API usage, Inefficient/Redundant copying |
136c | EJS | Hoisted str[i] out of loop| Repeated execution |
[1625 1](https://github.com/less/less.js/issues/1625) | Less | Cache array of functions for faster lookup | Repeated execution |
[1831](https://github.com/less/less.js/issues/1831) | Less | Caching matching elements | Repeated execution |
[317](https://github.com/moment/moment/issues/317) | Moment | Cache functions that are likely to be reused on the same object with the same input | Inefficient API usage, Repeated execution |
[1875](https://github.com/moment/moment/issues/1875) | Moment | Assuming that object has finite number of properties, instead of interating through list of properties and checking is it defined in object, try to check them in if conditionals | Inefficient API usage, Inefficient/Redundant copying |
[1885](https://github.com/moment/moment/issues/1885) | Moment | Adding check in the case of null input parameter and adapting the method's behaviour for this case | Generic API, Inefficient/Redundant copying, Special cases |
8 | Node-lru-cache | Avoid Object.keys(obj)[i]; instead use for in loop.  | Inefficient API usage, Inefficient iteration, Inefficient/Redundant copying |
8 | Node-lru-cache | Avoid Object.keys(obj)[i]; instead use for in loop.  | Inefficient API usage, Inefficient iteration, Inefficient/Redundant copying |
388 (2) | Cheerio | Avoid uneccessary function call in conditional | Repeated checks |
388 (5) | Cheerio | String concat instead of join | Inefficient API usage |
386 | Cheerio | Avoid unnecessary computation | Generic API |
385 | Cheerio | Check more on what proposed function do, but the idea is to switch to another, cheaper function call | Inefficient API usage |
369 (5)| Cheerio | Inline object lookup | Inefficient API usage, Inefficient/Redundant copying |
369 (8)| Cheerio | Avoid recomputing value that will be reused | Repeated execution |
27a | Chalk | Don't concatenate the arguments into string with slice.join if there is only one argument. In latter case use explicit string concatenation | Inefficient API usage, Generic API, Special cases |
27b | Chalk | Precomputed style function. Merge multiple return statements to one | Other |
28 | Chalk | Replace Array.prototype.reduce() with explicit for loop | Inefficient iteration |
701 | Mocha | Use instanceof where supported instead of toString.call(err) === "[object Error]" | Inefficient API usage |
763 | Mocha | The first commit is using Object.keys where possible instead of checking each property of the object | Inefficient API usage, API reimplementation, Inefficient/Redundant copying |
403 | Request | Computation from the if is moved to a global variable, so it is done only once | Repeated execution, Repeated checks |
1165 | Request | Remove everything from init() method that is not related to request initialization | Repeated execution |
573 | Socket.io | Optimized switch, the most common cases are checked first | Other |
689 | Socket.io | Combine two substring calls into one | Inefficient API usage, Inefficient/Redundant copying |





















