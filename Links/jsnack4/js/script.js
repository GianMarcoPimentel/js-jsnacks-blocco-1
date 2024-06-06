/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
 */


const number = prompt("Inserisci un numero");
let somma = 0;

if (number.length != 4 || isNaN(number)){
    alert("noin hai inserito un numero di 4 cifre! Ricarica la pagina e correggi l'errore")
} else {
    for( let i = 0; i < number.length; i++){
        console.log(number[i]);
        somma = somma + Number(number[i]);
    }
}

 document.querySelector("numero").innerHTML = `La somma dei nuemri inseriti è "${somma}"`