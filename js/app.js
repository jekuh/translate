var textInp = document.querySelector("textarea");
var output = document.querySelector("#output");
const btn = document.querySelector("#btn");


// Send test to transalation API server
// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(text){
    return serverUrl+"?"+"text="+text;
}

// var inputText = textInp.value;
function errorHandler(error){
    alert("Error, please try again later");
}

function clickHandler(){
    // console.log(textInp.value);
  fetch(getTranslationUrl(textInp.value)).then(response=>response.json()).then(json=>{
      output.innerText=json.contents.translated;
    
  }).catch(errorHandler) 
};
btn.addEventListener("click", clickHandler);



// there are other methods like
// creating a DOM element using document.createElement(),
// or using document.createTextNode() to create textNode,
// and then insert it using insertBefore() and appendChild(). Explore these pieces and write blogs on it when you understand this