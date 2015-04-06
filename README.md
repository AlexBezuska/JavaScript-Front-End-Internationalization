Simple Localization
==================================================

### Usage ###
Include a script reference to 'simple-localization.js' in your html and specify the element(s) to run on as seen in 'Usage' below:
```html
<script src="js/simple-localization.js"></script>
```
### Usage ###
Simple Localization runs on an html element and will recurse into all child text nodes of that element, meaning it will not effect attributes such as 'href' in anchor tags, 'src' on images, alt text, title text etc. only visible text content on your pages.
```js
simpleLocalization( "AU", document.getElementById("translate-AU"), wordList);
```
