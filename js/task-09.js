function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorRef = document.querySelector('button');
const colorTextValueRef = document.querySelector('.color');

const onButtonChangeColorClick = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorTextValueRef.textContent = color;
};

buttonChangeColorRef.addEventListener('click', onButtonChangeColorClick);
