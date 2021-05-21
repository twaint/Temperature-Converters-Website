"use strict";

/* When the input field receives input, convert the value from fahrenheit to celsius */

window.onload = function() {
    const findCelBtn = document.getElementById("findCelBtn");
   
    findCelBtn.onclick = findCelBtnClicked;
    resetBtn.onclick = findResetBtnClicked;
   
}

function findCelBtnClicked() {
    
    const inputFahrenheitField = document.getElementById("inputFahrenheit");
    let inputFahrenheit = Number(inputFahrenheitField.value);
    
    let convertCel = (inputFahrenheit - 32) * 5 / 9;
 
    
    //
    const outputCelField= document.getElementById("outputCel");
    outputCelField.value = convertCel;

}

function findResetBtnClicked() {

    const resetBtn = document.getElementById("Cel").reset();
  }
