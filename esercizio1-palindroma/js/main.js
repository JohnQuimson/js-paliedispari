'use strict';

function palindroma(parola) {
  for (let i = 0; i < parola.length / 2; i++) {
    console.log(i + '. ' + parola[i]);
  }
}

const inpuUtente = prompt('Inserisci la parola');
