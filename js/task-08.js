const boxes = document.getElementById('boxes');
boxes.style.display = 'flex';
boxes.style.maxWidth = '1280px';
boxes.style.flexWrap = 'wrap';
const createBoxes = () => {
    const amount = parseInt(document.querySelector('input').value);
  for (let i = 0; i <= amount-1; i++) {
  const crate = document.createElement("div");
        crate.style.backgroundColor = 'black';
        const min = Math.ceil(10);
        const max = Math.floor(200);
        const width = Math.floor(Math.random() * (max - min)) + min;
        crate.style.width = width + 'px';
        const height = Math.floor(Math.random() * (max - min)) + min;
        crate.style.height = height + 'px';
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        crate.style.backgroundColor = '#' + randomColor;
        boxes.appendChild(crate);
      console.log('btn prsd');
      console.log(amount);    
    }       
}
const build = document.querySelector("#controls > button:nth-child(2)");

const removecrate = () => {
   while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
}
    console.log('destroy');
};


build.addEventListener('click', createBoxes);

const destroy = document.querySelector("#controls > button:nth-child(3)");
destroy.addEventListener('click', removecrate);



