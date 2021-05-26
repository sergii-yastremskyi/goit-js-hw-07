const fader = document.getElementById('font-size-control');
const resizer = () => {
    const text = document.getElementById('text');
    console.log(fader.value);
    text.style.fontSize = `${parseInt(fader.value)}px`;
}
fader.addEventListener('input', resizer);