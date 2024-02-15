// toggle switch will turn body background light and turn to another page.
const btn = document.body;

let btnText = "hello universe!";
let txtStr = btnText.toUpperCase();

document.getElementById("btnText").innerHTML = txtStr;

function toggleEvent() {
  btn.classList.toggle("lightBtn");
}