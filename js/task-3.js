const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', (event) => {
    const rawValue = event.currentTarget.value;
    const trinValue = rawValue.trim();
    if (trinValue === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = trinValue;
    }
}); 