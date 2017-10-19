# jquery-async
Small inline head script allows you to load jQuery asynchronously and use regular inline scripts based on jQuery

## How to use
1. Include jQuery asynchronously with `async` attribute:
```html
<head>
	<!-- some tags here -->
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" async></script>
</head>
```
2. Put minified version of *jquery-async* in the `<head>` section of your HTML document:
```html
<head>
	<!-- some tags here -->
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" async></script>
	<script>!function(n){var e=[],t=function(n){e.push(n)},f=setInterval(function(){if("function"==typeof jQuery){clearInterval(f);for(var n=0,t=e.length;t>n;n++)jQuery(e[n])}},50);"undefined"!=typeof n.$&&(n.$=t)}(window);</script>
</head>
```
3. Use function `$` in your inline javascript code as you do with synchronus jQuery:
```html
<script>
$(function(){
    $('.foo').bar(); // jQuery call
});
</script>
```
## The purpose

It makes all your javascript asynchronous. Otherwise you have to include jQuery synchronously to use `$(function(){ ... })` which causes a delay in page load and warnings from PageSpeed Insights.
It is always better not to use inline javascript in your document, but if you have to - do it right.