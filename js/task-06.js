const inputSymbolsRef = document.querySelector('input');

const onRemoveFocus = event => {
  const numberOfSymbols = event.currentTarget.value.trim().length;
  const minDataLength = event.currentTarget.dataset.length;

  if (numberOfSymbols != minDataLength) {
    inputSymbolsRef.classList.add('invalid');
    inputSymbolsRef.classList.remove('valid');
    return alert(`Введите значение равное: ${minDataLength} символам`);
  }
  inputSymbolsRef.classList.add('valid');
  inputSymbolsRef.classList.remove('invalid');
};

inputSymbolsRef.addEventListener('blur', onRemoveFocus);
