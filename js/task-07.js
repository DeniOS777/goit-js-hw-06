const inputRangeValueRef = document.querySelector('#font-size-control');
const spanTextSizeRef = document.querySelector('#text');

const onChangeFontSizeText = event => {
  const variableInputRange = event.currentTarget.value;
  spanTextSizeRef.style.fontSize = `${variableInputRange}px`;
};

inputRangeValueRef.addEventListener('input', onChangeFontSizeText);
