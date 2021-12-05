const buttonDecrementsRef = document.querySelector('[data-action="decrement"]');

const buttonIncrementsRef = document.querySelector('[data-action="increment"]');

const spanValueRef = document.querySelector('#value');

let counterValue = 0;

const decrement = step => {
  counterValue -= step;
  spanValueRef.textContent = counterValue;
};

const increment = step => {
  counterValue += step;
  spanValueRef.textContent = counterValue;
};

buttonDecrementsRef.addEventListener('click', () => decrement(1));
buttonIncrementsRef.addEventListener('click', () => increment(1));
