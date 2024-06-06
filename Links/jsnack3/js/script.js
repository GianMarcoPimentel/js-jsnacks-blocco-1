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
        if(numeri == null || isNaN(numeri)){
            alert("Ricarica la pagina eInserisci numeri che soddisfino la richiesta")
        } else {
            if(numeri % 2 != 0){
            numbers.push(numeri); //Il push serve per appunto pushare ( spingere ) un elemento all'interno dell'array indicato!
            console.log(numbers)
              }
        }
}

//Stampa a schermo il contenuto dell'array
document.getElementById("array-finale").innerHTML = `L'array finale è composta da numbers = [${numbers}]`;

document.querySelector("h2").innerHTML = "Ecco l'eleno del mio array messo in una lista :"
const listElement = document.querySelector("ul");
for( let i = 0; i < numbers.length; i++){


        // creo un elemento html <li>
        const newElement = document.createElement("li");

        // ne cambio il testo interno
        newElement.innerText = numbers[i];
        // lo inserisco in pagina dentro al lista selezionta precedentemente
        listElement.append(newElement);
}