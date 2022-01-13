// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,fino a quando ne avrà tanti quanti l’altro.

let first = [2, 3, 1];
let second = [12, 5, 8, 9];

while (first.length < second.length) {
    const addName = Math.floor(Math.random() * first.length);
    first.push(addName);
}
console.log(first, second);