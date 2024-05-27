const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkboxKeys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.pianoKeys');

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`)
    audio.play()

}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('blackPressed');
        return;
    }
    key.style.background = '#ddd';
}
const handleMouseUp = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('blackPressed')
        return;
    }
    key.style.background = '#fff';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
})

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcherActive');
        keysSection.classList.remove('disabledKeys')
        return;
    }
    switcher.classList.remove('switcherActive');
    keysSection.classList.add('disabledKeys')
});
const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "1":() => handleMouseDown(keys[1]),
    "q": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "w": () => handleMouseDown(keys[4]),
    "e": () => handleMouseDown(keys[5]),
    "4": () => handleMouseDown(keys[6]),
    "r": () => handleMouseDown(keys[7]),
    "5": () => handleMouseDown(keys[8]),
    "t": () => handleMouseDown(keys[9]),
    "6": () => handleMouseDown(keys[10]),
    "y": () => handleMouseDown(keys[11]),
    "u": () => handleMouseDown(keys[12]),
    "8": () => handleMouseDown(keys[13]),
    "i": () => handleMouseDown(keys[14]),
    "9": () => handleMouseDown(keys[15]),
    "0": () => handleMouseDown(keys[16]),
    "p": () => handleMouseDown(keys[17]),
    "-": () => handleMouseDown(keys[18]),
    "[": () => handleMouseDown(keys[19]),
    "=": () => handleMouseDown(keys[20]),
    "]": () => handleMouseDown(keys[21]),
    "Backspace": () => handleMouseDown(keys[22]),
    "\\": () => handleMouseDown(keys[23]),
   
}
document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
})