/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
 */


let number = prompt('inserisci un numero di 4 cifre');
let somma = 0;

if (number.length != 4 || isNaN(number)) {
    alert('devi inserire un numero di quattro cifre; ricarica la pagina')
}else {

    console.log(number);
}
for(i = 0; i<number.length; i++) {
    console.log(Number(number[i]));
    somma = somma + Number(number[i]);
    console.log(somma);
}
document.getElementById('numero').innerHTML = `La somma dei numeri inseriti è : "${somma}"`