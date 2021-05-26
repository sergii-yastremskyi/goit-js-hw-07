const nameinput = document.getElementById('name-input');

const a = () => {
    if (nameinput.value == "") {
        document.querySelector("#name-output").textContent = 'Незнакомец'
    }
    else {
        document.querySelector("#name-output").textContent = nameinput.value
    }
};
nameinput.addEventListener('input', a);