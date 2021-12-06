function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
console.log(inputRef);

const buttonCreateRef = document.querySelector('[data-create]');
console.log(buttonCreateRef);

const buttonDestroyRef = document.querySelector('[data-destroy]');
console.log(buttonDestroyRef);

const divRef = document.querySelector('#boxes');
console.log(divRef);

//.......................................................
let amount;

const onInputClick = event => {
  amount = Number(event.currentTarget.value);
  console.log(amount);
};

// Создание столько <div> сколько значение input
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

// Удаление всех созданных div
const destroyBoxes = () => {
  divRef.innerHTML = '';
};

buttonCreateRef.addEventListener('click', () => createBoxes(amount));
buttonDestroyRef.addEventListener('click', destroyBoxes);
inputRef.addEventListener('input', onInputClick);
