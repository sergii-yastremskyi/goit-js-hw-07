
let counterValue = parseInt(document.getElementById('value').textContent);
console.log(typeof (counterValue));
function increment() {
    counterValue += 1;
     document.getElementById('value').textContent = counterValue;
}
function decrement() {
    counterValue -= 1; 
    document.getElementById('value').textContent = counterValue;
    
}
const btnDecrement = document.querySelector("#counter > button:nth-child(1)");
btnDecrement.addEventListener('click', decrement);
const btnIncrement = document.querySelector("#counter > button:nth-child(3)");
btnIncrement.addEventListener('click', increment);