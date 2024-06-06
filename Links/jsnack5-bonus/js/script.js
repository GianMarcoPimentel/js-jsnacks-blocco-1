/* 
Snack 5:
Stampa il cubo dei primi N numeri,
(partendo da 1, il numero N indicato dall'utente è compreso)
dove N è un numero indicato dall’utente.
*/

/* const number = prompt("Inserisci un numero"); */
const number = "4";

const listElement = document.querySelector("ul");

for( let i = 1; 1 <= number; i++){

    const cube = Math.pow(i, 3);
    // const cube = i * i * i ;
    const newEl = document.createElement("li");
    newEl.innerText = cube;
    listElement.append(newEl);


      /*   console.log(Math.pow(i,3)); */
}
document.querySelector("h2").innerText = `Ecco i cubi dei primi ${number} numeri`