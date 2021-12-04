function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('button');

const colorTextValue = document.querySelector('.color');

const isClickChangeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorTextValue.textContent = `${getRandomHexColor()}`;
};

buttonChangeColor.addEventListener('click', isClickChangeColor);
