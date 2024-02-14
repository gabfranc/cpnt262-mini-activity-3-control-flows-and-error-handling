// Text will rotate for the loading page

const textAnimate = document.getElementById('message');
const messages = ['HTML', 'CSS', 'JAVASCRIPT', 'PHOTOSHOP', 'INDESIGN', 'FIGMA', 'PYTHON', 'JAVA', 'BOOTSTRAP', 'GITHUB', 'GITBASH'];

let myIndexNum = 0;

function rotate(){
  textAnimate.textContent = messages[myIndexNum];
  myIndexNum = (myIndexNum + 3) % messages.length;
}

let myColorNum = 0;

textAnimate.style.transform = "rotateY(360deg)";
textAnimate.style.color = "#024282";
// Setting the intervals for the text to rotate
setInterval(rotate, 2000); // For every 2 seconds, the text will rotate constantly.

