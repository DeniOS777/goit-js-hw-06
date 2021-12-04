const inputSymbolsRefs = document.querySelector('input');

const isRemoveFocus = event => {
  const numberOfSymbols = event.currentTarget.value.trim().length;
  const minDataLength = event.currentTarget.dataset.length;

  if (numberOfSymbols < minDataLength) {
    inputSymbolsRefs.classList.add('invalid');
    inputSymbolsRefs.classList.remove('valid');
  } else {
    inputSymbolsRefs.classList.add('valid');
    inputSymbolsRefs.classList.remove('invalid');
  }
};

inputSymbolsRefs.addEventListener('blur', isRemoveFocus);
