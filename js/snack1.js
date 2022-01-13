//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. 
//Esegui questo programma in due versioni, con il for e con il while.
let sum = 0;
let i = 0;
//#WHILE
while (i !== 5) {
    const userNumber = parseInt(prompt('inserisci un numero'));
    sum += userNumber;
    i++;
}
console.log(sum);



//#FOR
for (let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt('inserisci un numero'));
    sum += userNumber;
}
console.log(sum);


//#DO WHILE
do {
    const userNumber = parseInt(prompt('inserisci un numero'));
    sum += userNumber;
    i++;
} while (i !== 5);
console.log(sum);