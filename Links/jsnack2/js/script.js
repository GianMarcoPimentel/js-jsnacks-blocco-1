/* 
Snack 2:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
//let somma = 0;

for( i = 0 ; i<5 ; i++) {
        numeri = Number(prompt('Inserisci un numero'));

        if(numeri == null || isNaN(numeri)){
                alert('non è un numero , non verrà considerato nel conteggio');
        }else{
                //somma = somma + numeri; //con let somma =0
                somma =+ numeri ; //senza let somma=0
        }
        console.log(somma);
        document.getElementById('somma').innerHTML = `La somma dei numeri inseriti è "${somma}"`
        


}
