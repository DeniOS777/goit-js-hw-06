const buttonDecrementsRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementsRef = document.querySelector('[data-action="increment"]');
const spanValueRef = document.querySelector('#value');

let counterValue = 0;

const onDecrementButtonClick = step => {
  counterValue -= step;
  spanValueRef.textContent = counterValue;
};

const onIncrementButtonClick = step => {
  counterValue += step;
  spanValueRef.textContent = counterValue;
};

buttonDecrementsRef.addEventListener('click', () => onDecrementButtonClick(1));
buttonIncrementsRef.addEventListener('click', () => onIncrementButtonClick(1));
