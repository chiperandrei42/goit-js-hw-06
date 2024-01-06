const categories = document.getElementById('categories');

const numberOfCategories = categories.querySelectorAll('.item').length;

console.log(`Number of Categories: ${numberOfCategories}`);

categories.querySelectorAll('.item').forEach(category => { 
    const categoryTitle = category.querySelector('h2').textContent;

    const numberOfElements = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberOfElements}`);
 })

