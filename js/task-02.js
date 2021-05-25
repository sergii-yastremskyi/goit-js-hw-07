const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const mylist = ingredients.forEach(ingredient => {
    const myli = document.createElement('li');
    myli.textContent = ingredient;
    document.querySelector("ul").appendChild(myli);
});



// const markup = ingredients.reduce(
//   (string, item) => string + `<li>${item}</li>`,
//   ""
// );
// console.log(markup);


