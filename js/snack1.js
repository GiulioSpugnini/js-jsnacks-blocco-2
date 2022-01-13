//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. 
//Esegui questo programma in due versioni, con il for e con il while.
const result = document.getElementById('result');
const enter = document.getElementById('enter');
const inputText = document.getElementById('inputText');
const add = document.getElementById('add');
// const inputUser = document.createElement('input');
// inputUser.setAttribute("input", "text");
let sum = 0;
result.classList.add('d-none');
const numbers = [];
add.addEventListener('click', function() {
    let valid = false;
    //#WHILE
    while (valid == false) {
        numbers.push(inputText.value);
        sum += parseInt(inputText.value);
        console.table(numbers);

        valid = true;
    }
    if (numbers.length == 5) {
        add.classList.add('d-none');
    }
})
console.log(numbers);
console.log(sum);

enter.addEventListener('click', function() {
    result.classList.remove('d-none');
    result.innerHTML = `${numbers[0]} + ${numbers[1]} + ${numbers[2]} + ${numbers[3]} + ${numbers[4]} La loro somma è : ${sum}`;

})




// //#FOR
// for (let i = 0; i < 5; i++) {
//     const userNumber = parseInt(prompt('inserisci un numero'));
//     sum += userNumber;
// }
// console.log(sum);


// //#DO WHILE
// do {
//     const userNumber = parseInt(prompt('inserisci un numero'));
//     sum += userNumber;
//     i++;
// } while (i !== 5);
// console.log(sum);