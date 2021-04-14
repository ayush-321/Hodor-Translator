var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

var servedURL = "https://api.funtranslations.com/translate/hodor.json"

function getTranslationURL(text){
    return servedURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log('error occured', error);
    alert('App usage is at its maximum. Please try after some time')
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener('click', clickHandler);
