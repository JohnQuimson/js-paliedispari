'use strict';

function myRandom() {
  const myNumber = Number(Math.floor(Math.random() * 5) + 1);
  return myNumber;
}

//Chiedo all'utente pari o dispari
let userInputPD = prompt('Pari o dispari ?');
//Rendo l'input tutto minuscolo per evitare problemi
userInputPD = userInputPD.toLowerCase();
console.log(`Hai scelto: ${userInputPD}`);

//Chiedo il numero all'utente
let userInputNum = Number(prompt('Numero da 1 a 5'));
console.log(`Hai scelto: ${userInputNum}`);

//Numero random del PC
const myNumber = myRandom();
console.log(`Numero PC: ${myNumber}`);
