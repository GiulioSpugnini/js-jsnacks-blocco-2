// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const result = document.getElementById('result');
const numbers = [1, 5, 7, 4, 9, 3, 25, 30, 51, 22];
let i = 0;
let sum = 0;
while (i < numbers.length) {

    if (i % 2 != 0) {
        sum += numbers[i];
    }
    i++;
}
console.log(sum);
result.innerHTML = sum;