/* 
Snack 3:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array
*/

const numbers = [];

for(i = 0; i<6; i++){
    numeri = Number(prompt("Inserisci un numero"));
    if(numeri % 2 != 0){
        numbers.push(numeri);
        console.log(numbers)
    };
}
document.getElementById("array-finale").innerHTML = `L'array finale è composta da numbers = [${numbers}]`;