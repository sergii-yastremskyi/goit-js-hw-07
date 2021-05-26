const input = document.querySelector("input");
// input.classList.add(#validation-input)
const validator = () => {
    if (input.value.length === parseInt(input.dataset.length)) {
        console.log('ok');
        input.classList.add('valid');
        input.classList.remove ('invalid')
    }
    else {
        console.log('not ok');
        input.classList.add('invalid');
        input.classList.remove ('valid');
    }
}
input.addEventListener('change', validator);