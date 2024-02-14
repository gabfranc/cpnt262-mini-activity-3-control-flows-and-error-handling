// toggle switch will turn body background light and turn to another page.
const btn = document.body;

function toggleEvent() {
  btn.classList.toggle("lightBtn");
}

const textButton = document.getElementById("textBtn").innerHTML;

function txtBtn() {
  document.getElementById("textBtn").textContent = textButton.toUpperCase();
}

console.error("This variable is not available");
