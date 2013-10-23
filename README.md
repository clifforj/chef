Chef.js
====

Chef.js is a simple bookmarklet provider. It takes the following three things and serves them up to the active window. (note: URLs used here must be absolute. After a bookmarklet is loaded relative URLs will be relative to the host page)

- Garnish - The additional CSS to be loaded for your bookmarklet
- Main - The JavaScript for your bookmarklet
- Base - The JQuery library required

Usage
---
Host a copy of Chef.js customised for your bookmarklet. The following code needs to be added as a bookmark/link on your browser/page with `http://yourdomain/` replaced with wherever your are hosting Chef.js. Once this is done, clicking the bookmark/link will cause Chef.js to run and your bookmarklet to load.

```javascript
javascript:(function(){var head=document.getElementsByTagName('head')[0],script=document.createElement('script');script.type='text/javascript';script.src='http://yourdomain/chef.js?' + Math.floor(Math.random()*99999);head.appendChild(script);})(); void 0
```

Explanation
---
The above JavaScript create a new script element in the `<head>` of the current page, and set it's source to your copy of Chef.js. The random number that gets appended to the end of the url is used to avoid problems caching (this can be modified as required)
