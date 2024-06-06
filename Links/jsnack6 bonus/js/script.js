

const userNumber = Number(prompt("Inserisci un numero"));

let sum = 0;
let media = 0;
for(let i = 1; i <=10 ; i++){
    sum += i;
    console.log(i);
}
console.log(`Somma dei priomi ${userNumber} numeri : ${sum}`);
console.log(`Media dei primi ${userNumber} numeri : ${sum/10}`);