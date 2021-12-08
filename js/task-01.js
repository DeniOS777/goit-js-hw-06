//..................1

const categoriesNumber = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${categoriesNumber}`);

//..................2

const loggingCategory = document.querySelectorAll('h2');
const amountElements = document.querySelectorAll('.item ul');

loggingCategory.forEach((item, idx) => {
  console.log(`Category: ${item.textContent}`);
  console.log(`Elements: ${amountElements[idx].children.length}`);
});
