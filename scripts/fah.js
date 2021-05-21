"use strict";

/* When the input field receives input, convert the value from fahrenheit to celsius */

window.onload = function() {
    const findCelBtn = document.getElementById("findCelBtn");
   
    findFahBtn.onclick = findFahBtnClicked;
    resetBtn.onclick = findResetBtnClicked;
   
}

function findFahBtnClicked() {
    
    const inputCelsiusField = document.getElementById("inputCelsius");
    let inputCelsius = Number(inputCelsiusField.value);
    
    let convertFah = (inputCelsius + 32) * 9 / 5;
 
    
    //
    const outputFahField= document.getElementById("outputFah");
    outputFahField.value = convertFah;

}

function findResetBtnClicked() {

    const resetBtn = document.getElementById("Fah").reset();
  }