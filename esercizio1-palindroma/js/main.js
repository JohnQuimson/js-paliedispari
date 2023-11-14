'use strict';

function palindroma(parola) {
  for (let i = 0; i < parola.length / 2; i++) {
    if (parola[i] === parola[parola.length - 1 - i]) {
      return 'La parola è palindroma';
    }
  }
  return 'La parola NON è palindroma';
}

const inputUtente = prompt('Inserisci la parola');
const risultato = palindroma(inputUtente);
console.log(risultato);
