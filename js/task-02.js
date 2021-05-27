const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const mylist = ingredients.map(ingredient => {
    const myli = document.createElement('li');
  myli.textContent = ingredient;
  return myli;
    });
document.querySelector("ul").append(...mylist);



// const markup = ingredients.reduce(
//   (string, item) => string + `<li>${item}</li>`,
//   ""
// );
// console.log(markup);


