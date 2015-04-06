Simple Localization
==================================================

### Reference ###
Include a script reference to 'simple-localization.js' in your html and specify the element(s) to run on as seen in 'Usage' below:
```html
<script src="js/simple-localization.js"></script>
```
### Usage ###
Simple Localization runs on an html element and will recurse into all child text nodes of that element, meaning it will not effect attributes such as 'href' in anchor tags, 'src' on images, alt text, title text etc. only visible text content on your pages.
```js
simpleLocalization( "AU", document.getElementById("translate-AU"), wordList);
```


### Word List ###
Simple Localization uses a word list (right now located in simple-localization.js as 'wordList'.
the word list is a JSON object sorted by countrycode. Add the US english versions of words as the keys, and translations as the values.
```json
 "AU": {
          "favorite": "favourite",
          "color": "colour",
          "personalized": "personalised",
          "tank top": "singlet",
          "tank tops": "singlets"
         }
```
