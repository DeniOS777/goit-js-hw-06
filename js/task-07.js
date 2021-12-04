const inputRangeValueRefs = document.querySelector('#font-size-control');

const spanTextSize = document.querySelector('#text');

const setSizeText = event => {
  const variableInputRange = event.currentTarget.value;
  spanTextSize.style.fontSize = `${variableInputRange}px`;
};

inputRangeValueRefs.addEventListener('input', setSizeText);
