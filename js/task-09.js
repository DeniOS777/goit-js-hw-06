function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorRef = document.querySelector('button');
const colorTextValueRef = document.querySelector('.color');

const onButtonChangeColorClick = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorTextValueRef.textContent = getRandomHexColor();
};

buttonChangeColorRef.addEventListener('click', onButtonChangeColorClick);
