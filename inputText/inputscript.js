
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

if (isNaN(input)) {
  console.log("Name is Valid");
} else {
  console.error("Name is invalid");
}

console.error("nameInput" + "sorry this is unavailable");

