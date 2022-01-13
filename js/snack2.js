//Inserisci un numero, se è pari stampa il numero,se è dispari stampa il numero successivo



const userNumber = parseInt(prompt('Inserisci un numero'));
let i = 0;
//!VALIDATION
if (isNaN(userNumber)) {
    alert('Puoi inserire solo un numero');
}
while (i < 1) {
    if (userNumber % 2 == 0) {
        console.log(userNumber);
    } else {
        console.log(userNumber + 1);
    }
    i++;

}