const inputSymbolsRef = document.querySelector('input');

const isRemoveFocus = event => {
  const numberOfSymbols = event.currentTarget.value.trim().length;
  const minDataLength = event.currentTarget.dataset.length;

  if (numberOfSymbols < minDataLength) {
    inputSymbolsRef.classList.add('invalid');
    inputSymbolsRef.classList.remove('valid');
    alert(`Введите значение не меньше: ${minDataLength} символов`);
  } else {
    inputSymbolsRef.classList.add('valid');
    inputSymbolsRef.classList.remove('invalid');
  }
};

inputSymbolsRef.addEventListener('blur', isRemoveFocus);
