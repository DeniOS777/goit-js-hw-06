const inputRef = document.querySelector('#name-input');

const spanRef = document.querySelector('#name-output');

const onEnterName = event => {
  const inputValue = event.target.value.trim();

  return (spanRef.textContent = inputValue ? `${inputValue}` : 'Anonymous');
};

inputRef.addEventListener('input', onEnterName);
