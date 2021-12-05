const inputRangeValueRef = document.querySelector('#font-size-control');

const spanTextSizeRef = document.querySelector('#text');

const setSizeText = event => {
  const variableInputRange = event.currentTarget.value;
  spanTextSizeRef.style.fontSize = `${variableInputRange}px`;
};

inputRangeValueRef.addEventListener('input', setSizeText);
