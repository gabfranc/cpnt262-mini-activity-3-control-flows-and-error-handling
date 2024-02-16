
// Remove Trailing Whitespace in a Text
"use strict"
let textString = "Javascript";

let wSpace = textString.replace(/\s/g,'');
console.log(wSpace);


// adding the input text


function buttonInput () {
  const input = document.getElementById("nameInput");
  const text = document.getElementById("textName");

  text.innerHTML = "Welcome" + input.value + "!";
}
try {
  throw input.value;
  console.log('user is valid');
} catch(err) {
  console.error('user is invalid');
  document.getElementById("button").innerHTML = input.value;
}


