//..................1

const categoriesNumber = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${categoriesNumber}`);

//..................2

const loggingCategory = document.querySelectorAll('h2');
const amountElements = document.querySelectorAll('.item ul');
console.log(`Category: ${loggingCategory[0].textContent}`);
console.log(`Elements: ${amountElements[0].children.length}`);

console.log(`Category: ${loggingCategory[1].textContent}`);
console.log(`Elements: ${amountElements[1].children.length}`);

console.log(`Category: ${loggingCategory[2].textContent}`);
console.log(`Elements: ${amountElements[2].children.length}`);

// for (let i = 0; i < loggingCategory.length; i += 1) {
//   console.log(`Category: ${loggingCategory[i].textContent}`);
//   console.log(`Elements: ${amountElements[i].children.length}`);
// }
