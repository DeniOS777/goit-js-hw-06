const buttonDecrementsRefs = document.querySelector('button[data-action="decrement"]');

const buttonIncrementsRefs = document.querySelector('button[data-action="increment"]');

const spanValueRefs = document.querySelector('#value');

let counterValue = 0;

const decrement = step => {
  counterValue -= step;
  spanValueRefs.textContent = counterValue;
};

const increment = step => {
  counterValue += step;
  spanValueRefs.textContent = counterValue;
};

buttonDecrementsRefs.addEventListener('click', () => decrement(1));
buttonIncrementsRefs.addEventListener('click', () => increment(1));
