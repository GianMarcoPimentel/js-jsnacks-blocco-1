/* 
Snack 3:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array
*/

//Crea un array vuoto.
const numbers = [];


//Chiedi per 6 volte all’utente di inserire un numero,
for(i = 0; i<6; i++){
    numeri = Number(prompt("Inserisci un numero"));

    //Solo se è dispari inseriscilo nell’array.
        if(numeri % 2 != 0){
        numbers.push(numeri); //Il push serve per appunto pushare ( spingere ) un elemento all'interno dell'array indicato!
        console.log(numbers)
    };
}

//Stampa a schermo il contenuto dell'array
document.getElementById("array-finale").innerHTML = `L'array finale è composta da numbers = [${numbers}]`;