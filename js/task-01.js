const listItems = document.querySelectorAll(".item");
const categories = document.querySelectorAll("h2");
const fullList = document.getElementById("categories");
const numberOfElements = fullList.querySelectorAll("ul");

let num = 0;
for (let i = 0; i < listItems.length; i++) {
    num += 1;
}

console.log(`Number of Categories: ${num}`);

let arr = [];

for (let i = 0; i < categories.length; i++) {
    arr.push(categories[i].textContent);
}

for (let i = 0; i < numberOfElements.length; i++) {
    let listLength = numberOfElements[i].children.length;
    console.log(`Category: ${arr[i]}\nElements: ${listLength}`);
}



