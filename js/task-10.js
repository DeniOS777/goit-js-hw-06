function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const buttonCreateRef = document.querySelector('[data-create]');
const buttonDestroyRef = document.querySelector('[data-destroy]');
const divRef = document.querySelector('#boxes');

let amount = 0;

const onInputClick = event => {
  amount = Number(event.currentTarget.value);
  console.log(amount);
};

const createBoxes = amount => {
  const arrayDivEl = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${i * 10 + 30}px`;
    divEl.style.height = `${i * 10 + 30}px`;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    arrayDivEl.push(divEl);
  }

  divRef.append(...arrayDivEl);
};

const destroyBoxes = () => {
  divRef.innerHTML = '';
  inputRef.value = 0;
  amount = 0;
};

buttonCreateRef.addEventListener('click', () => createBoxes(amount));
buttonDestroyRef.addEventListener('click', destroyBoxes);
inputRef.addEventListener('input', onInputClick);
