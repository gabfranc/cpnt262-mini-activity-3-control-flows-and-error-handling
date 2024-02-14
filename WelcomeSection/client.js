//toggle button animation 
const btnEffect = document.querySelector('a');
btnEffect.forEach(button => {
  button.addEventlistener('click', function(e) {
    let btnX = e.clientX - e.target.offsetLeft;
    let btnY = e.clientY - e.target.offsetTop;

    let ripEffect = document.getElementById('btnEffect');
    ripEffect.style.left = x + 'px';
    ripEffect.style.top = y + 'px';
    this.appendChild(ripEffect);
  });
})