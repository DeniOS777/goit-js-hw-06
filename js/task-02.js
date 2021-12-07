const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const ingredientsArray = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add('item');
  return itemEl;
});

listRef.append(...ingredientsArray);
