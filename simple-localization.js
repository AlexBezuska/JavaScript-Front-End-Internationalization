var wordList = {
        "AU": {
          "favorite": "favourite",
            "color": "colour",
            "personalized": "personalised",
            "tank top": "singlet",
            "tank tops": "singlets",
            "pants": "trousers",
            "pajamas": "pyjamas",
            "jewelry": "Jewellery",
            "duvets": "doona",
          	"US Word List": "AU Word List"
        },
        "CA": {
          "favorite": "favourite",
            "color": "colour",
            "US Word List": "CA Word List"
        },
        "GB": {
          "favorite": "favourite",
            "color": "colour",
            "personalized": "personalised",
            "tank top": "vest",
            "tank tops": "vests",
            "pants": "trousers",
            "pajamas": "pyjamas",
            "jewelry": "Jewellery",
            "US Word List": "GB Word List"
        }
};

function simpleLocalization ( countryCode, parentNode, wordList ) {
  textNodesUnder(parentNode).forEach(replaceWords.bind(undefined, wordList[countryCode]));
}

function replaceWords ( wordList, textNode ){
  Object.keys(wordList).forEach(function(key) {
    var wordMatcher = new RegExp("\\b" + key + "\\b", "gi");
    textNode.textContent = textNode.textContent.replace(wordMatcher, function (match){
      // Lowercase
      if(match.charAt(0) == match.charAt(0).toLowerCase()){
        return  wordList[key];
      }
      // Uppercase
      if (match.charAt(1) == match.charAt(1).toUpperCase()){
        return wordList[key].toUpperCase();
      }
      // Title Case
      if(match.charAt(0) == match.charAt(0).toUpperCase()){
        return toTitleCase(wordList[key]);
      }
    });
  });
}

function textNodesUnder(node){
  var all = [];
  for (node=node.firstChild;node;node=node.nextSibling){
    if (node.nodeType==3) all.push(node);
    else all = all.concat(textNodesUnder(node));
  }
  return all;
}

function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}