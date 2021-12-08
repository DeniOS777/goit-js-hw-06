function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorRef = document.querySelector('button');
const colorTextValueRef = document.querySelector('.color');

const onButtonChangeColorClick = () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorTextValueRef.textContent = currentColor;
};

buttonChangeColorRef.addEventListener('click', onButtonChangeColorClick);
