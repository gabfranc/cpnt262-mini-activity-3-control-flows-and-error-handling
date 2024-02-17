"use strict";

//error Handling

// if user clicks the words "This is ..." there will be an error.
function clickTxt () {
  const click = document.getElementById("click").textContent;
    console.error("Sorry content not available");

}

// Text will change constantly on loading page
const textAnimate = document.getElementById('message');
const messages = ['HTML', 'CSS', 'JAVASCRIPT', 'PHOTOSHOP', 'INDESIGN', 'FIGMA', 'PYTHON', 'JAVA', 'BOOTSTRAP', 'GITHUB', 'GITBASH', 'C#', 'C++'];

let myIndexNum = 0;

function rotate(){
  textAnimate.textContent = messages[myIndexNum];
  myIndexNum = (myIndexNum + 3) % messages.length;
}

let myColorNum = 0;

textAnimate.style.transform = "rotate(360deg)";
textAnimate.style.color = "#024282";
// Setting the intervals for the text to change
setInterval(rotate, 360); // For every 2 seconds, the text will rotate constantly.


 