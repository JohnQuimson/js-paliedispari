'use strict';

function palindroma(parola) {
  // Verifico che non ci siano maiuscole
  if (parola.toLowerCase() !== parola) {
    alert('Non inserire maiuscole');
    return 'Non inserire maiuscole';
  }

  // Creo una nuova parola senza spazi
  let nuovaParola = '';
  for (let k = 0; k < parola.length; k++) {
    if (parola[k] !== ' ') {
      nuovaParola += parola[k];
    }
  }

  // Riassegno nuovaParola a parola così il codice dopo non è da variare
  parola = nuovaParola;
  console.log(parola);

  // Verifico se la parola è palindroma
  for (let i = 0; i < parola.length / 2; i++) {
    if (parola[i] !== parola[parola.length - 1 - i]) {
      return 'La parola NON è palindroma';
    }
  }
  return 'La parola è palindroma';
}

const inputUtente = prompt('Inserisci la parola');
const risultato = palindroma(inputUtente);
console.log(risultato);
