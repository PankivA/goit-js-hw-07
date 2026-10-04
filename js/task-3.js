const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputHandler);
function inputHandler(e) {
    let name = 'Anonymous';
    if (inputEl.value.trim()) {
        name = inputEl.value.trim();
    } 
    nameEl.textContent = name;
    return
}