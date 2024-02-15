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

console.log(imgBox);

const imgContent = document.getElementById('imgBox');

for (let i = 0; i < imgBox.length; i++) {
  const imgElement = document.createElement('img');
  imgBox.src = imgBox[i];
  imgElement.appendChild(imgBox);
}

document.getElementById('imgBox').textContent = imgElement.appendChild(imgBox);


