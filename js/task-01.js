//..................1

const categoriesNumber = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${categoriesNumber}`);

//..................2

const loggingCategory = document.querySelectorAll('h2');
const amountElements = document.querySelectorAll('.item ul');

for (let i = 0; i < loggingCategory.length; i += 1) {
  console.log(`Category: ${loggingCategory[i].textContent}`);
  console.log(`Elements: ${amountElements[i].children.length}`);
}
