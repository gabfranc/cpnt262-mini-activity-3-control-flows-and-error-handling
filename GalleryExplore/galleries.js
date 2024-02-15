//alert = prompt ('Hello Universe! Enter Your Name');

//this is the settings of the gallery page

//adding images using array

const imgBox = [
  '/Images/1989edit.png',
  '/Images/conniebaby.png',
  '/Images/DOUBLE.png',
  '/Images/dumplingarts.png',
  '/Images/Karma is a Cat.png'
];



//this is the loading setting

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

