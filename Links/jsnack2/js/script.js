/* 
Snack 2:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let numeri = document.getElementById("numeri");
let somma = 0;

for(i = 0; i <10 ; i++){

        numeri = Number(prompt("inserisci un numero"));
        console.log(numeri);
        somma = somma + numeri;
        console.log(somma);

}

   document.getElementById("somma").innerHTML= `La somma dei numeri inseriti è "${somma}`;