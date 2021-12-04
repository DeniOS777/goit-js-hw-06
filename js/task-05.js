const inputRefs = document.querySelector('#name-input');

const spanRefs = document.querySelector('#name-output');

const onEnterName = event => {
  const inputValue = event.target.value.trim();

  return (spanRefs.textContent = inputValue ? `${inputValue}` : 'Anonymous');
};

inputRefs.addEventListener('input', onEnterName);
