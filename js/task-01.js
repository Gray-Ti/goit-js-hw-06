const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categoris: ${categoriesList.length}`);

const firstCategotiesItem = item.firstElementChild;

const lastCategoriesItem = item.lastElementChild;

const listItem = item.children;



categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('ul > li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
    });