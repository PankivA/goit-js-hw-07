const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputHandler);
function inputHandler(e) {
    e.preventDefault();
    let name = 'Anonimus';
    if (inputEl.value.trim()) {
        name = inputEl.value.trim();
    } 
    nameEl.textContent = name;
    return
}