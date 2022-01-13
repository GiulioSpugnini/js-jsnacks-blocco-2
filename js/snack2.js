//Inserisci un numero, se è pari stampa il numero,se è dispari stampa il numero successivo

const result = document.getElementById('result');
const enter = document.getElementById('enter');
const inputText = document.getElementById('inputText');
const add = document.getElementById('add');
let resultName = '';
let solution = 0;
let i = 0;

add.addEventListener('click', function() {
    while (i < 1) {
        if (inputText.value % 2 == 0) {
            // console.log(inputText.value);
            solution = parseInt(inputText.value);
            resultName = 'è pari';
        } else {
            console.log(inputText.value + 1);
            solution = parseInt(inputText.value) + 1;
            resultName = 'è dispari';
            // console.log(inputText.value);
        }
        i++;

    }
    add.classList.add('d-none');
})

//!VALIDATION
if (isNaN(inputText.value)) {
    alert('Puoi inserire solo un numero');
}
enter.addEventListener('click', function() {
    result.innerHTML = `Il numero: ${inputText.value} ${resultName} quindi esce ${solution}`;
    enter.classList.add('d-none');
})