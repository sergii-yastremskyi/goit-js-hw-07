const boxes = document.getElementById('boxes');
boxes.style.display = 'flex';
boxes.style.maxWidth = '1280px';
boxes.style.flexWrap = 'wrap';
const build = document.querySelector("#controls > button:nth-child(2)");
const destroy = document.querySelector("#controls > button:nth-child(3)");
let amount = '';
const inputElement = document.querySelector('input');
inputElement.addEventListener('change', (e) => {amount=e.target.value});
const createBoxes = (amount) => {
  console.log(amount);
  let width = 20;
  let height = 20;
  for (let i = 0; i <= amount-1; i++) {
  const crate = document.createElement("div");
        crate.style.backgroundColor = 'black';
     width += 10;
        crate.style.width = width + 'px';
    height += 10;
        crate.style.height = height + 'px';
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        crate.style.backgroundColor = '#' + randomColor;
        boxes.appendChild(crate);
      console.log('btn prsd');
      console.log(amount);    
    }       
}


const removecrate = () => {
   while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
}
    console.log('destroy');
};


build.addEventListener('click', () => { createBoxes(amount) });
destroy.addEventListener('click', removecrate);



