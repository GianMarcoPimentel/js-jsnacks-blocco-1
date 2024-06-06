/* 
Snack 1:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// chiedo all'utente di inserire due parole con prompt


// stampo la parola più corta
 

// stampo la parola più lunga


/* const parola1 = prompt("Inserisci una parola");
document.getElementById("parola-1").innerHTML = parola1;
console.log(parola1.length);

const parola2 = prompt("Inserisci un'altra parola");
document.getElementById("parola-2").innerHTML = parola2;
console.log(parola2.length);

if(parola1 == null || parola2 == null){
    alert("Ricarica la pagina e inserisci entrambe le parole")
}
if(parola1.length > parola2.length){
    document.getElementById("parola-1").innerHTML = parola2;
    document.getElementById("parola-2").innerHTML = parola1;
    document.getElementById("parola-3").innerHTML = `La parola "${parola2}" è più corta della "${parola1}"`;

} else if(parola1.length < parola2.length){
    document.getElementById("parola-1").innerHTML = parola1;
    document.getElementById("parola-2").innerHTML = parola2;
    document.getElementById("parola-3").innerHTML = `La parola "${parola1}" è più corta della "${parola2}"`;
} else{
    document.getElementById("parola-3").innerHTML = `Le due parole "${parola1}" e "${parola2}" hanno la stessa lunghezza`;

} */



const parola1 = prompt('Inserisci una parola');
document.getElementById('parola-1').innerHTML = parola1;

const parola2 = prompt("Inserisci un'altra parola");
document.getElementById('parola-2').innerHTML = parola2;

if ( parola1 == null || parola2 == null) {
    alert("Devi inserire almeno un carattere")
}
if (parola1.length > parola2.length) {
    document.getElementById("parola-1").innerHTML = parola1;
    document.getElementById("parola-2").innerHTML = parola2;
    document.getElementById("stampa").innerHTML = `Ordine crescente delle parola : ${parola2} - ${parola1}`;
    document.getElementById("parola-3").innerHTML = `La parola "${parola2}" è più corta della "${parola1}"`;

}
else if (parola1.length < parola2.length){
    document.getElementById("parola-1").innerHTML = parola1;
    document.getElementById("parola-2").innerHTML = parola2;
    document.getElementById("stampa").innerHTML = `${parola1} - ${parola2}`;
    document.getElementById("parola-3").innerHTML = `La parola "${parola1}" è più corta della parola "${parola2}"`;
}
else {
    document.getElementById("parola-1").innerHTML = parola1;
    document.getElementById("parola-2").innerHTML = parola2;
    document.getElementById("stampa").innerHTML = `${parola1} - ${parola2}`;
    document.getElementById("parola-3").innerHTML = `La parola "${parola1}" e la parola "${parola2}" hanno le stesse lettere`;
}
