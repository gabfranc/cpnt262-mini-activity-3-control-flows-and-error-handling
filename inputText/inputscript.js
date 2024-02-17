
// Remove Trailing Whitespace in a Text
"use strict"
let textString = "Javascript";

let wSpace = textString.replace(/\s/g,'');
console.log(wSpace);


// adding the input text

document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault(); //If error shows form will not submit

  const myNameInput = document.getElementById('nameInput').value;
  const myText = document.getElementById('textName');
  if(isNaN(myNameInput)) {
    console.log('name is valid');
    myText.innerHTML = "Welcome" + myNameInput + "!";
  } else {

    //if user puts in a number error message will show up.
    console.error('name is invalid, please try again');
    myText.innerHTML = "name is invalid, please try again";
  }
})