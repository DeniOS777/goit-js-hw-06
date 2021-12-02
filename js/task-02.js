const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRefs = document.querySelector('#ingredients');

const ingredientsArray = [];

for (const ingredient of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add('item');
  ingredientsArray.push(itemEl);
}

listRefs.append(...ingredientsArray);

console.log(listRefs);
