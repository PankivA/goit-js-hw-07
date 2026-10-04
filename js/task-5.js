const body = document.querySelector('body');
const color = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  const bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  color.textContent = `${bgColor}`;
}