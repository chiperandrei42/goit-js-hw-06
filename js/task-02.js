const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  let newNode = document.createElement("li");
  newNode.classList.add('item');
  newNode.textContent = `${ingredients[i]}`;
  list.appendChild(newNode);
}
