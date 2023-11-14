'use strict';

function myRandom() {
  const pcNumber = Number(Math.floor(Math.random() * 5) + 1);
  return pcNumber;
}

function mySomma(userInputNum, pcNumber) {
  const sum = userInputNum + pcNumber;
  if (sum % 2 === 0) {
    return 'pari';
  } else {
    return 'dispari';
  }
}

//Chiedo all'utente pari o dispari
let userInputPD = prompt('Pari o dispari ?');
//Rendo l'input tutto minuscolo per evitare problemi
userInputPD = userInputPD.toLowerCase();
console.log(`Hai scelto: ${userInputPD}`);

//Chiedo il numero all'utente, con la condizione che se è fuori dal range, me lo richiede
let userInputNum = Number(prompt('Numero da 1 a 5'));

while (userInputNum < 1 || userInputNum > 5 || isNaN(userInputNum)) {
  alert('Inserisci un numero nel range 1-5');
  userInputNum = Number(prompt('Numero da 1 a 5'));
}
console.log(`Hai scelto: ${userInputNum}`);

//Numero random del PC
const pcNumber = myRandom();
console.log(`Numero PC: ${pcNumber}`);

//Richiamo la funzione della somma
const risultato = mySomma(userInputNum, pcNumber);
console.log(`La somma è: ${userInputNum + pcNumber} --> ${risultato}`);

//Condizioni di vittoria/sconfitta
if (risultato === userInputPD) {
  console.log('Hai vinto');
} else {
  console.log('Hai perso');
}
