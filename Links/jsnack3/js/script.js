/* 
Snack 3:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array
*/
//array vuoto
const numbers = [];

for(i = 0; i < 6 ; i ++) {
    number = Number(prompt('Inserisci un numero'));
    if(number == null || isNaN(number)) {
        alert('Devi inserire un n umero, ricarica la pagina');
    }else if(number % 2 != 0){
        numbers.push(number);
       
    }
    
}

document.getElementById('array-finale').innerHTML = `[${numbers}]`;