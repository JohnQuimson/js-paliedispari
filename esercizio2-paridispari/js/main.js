'use strict';

function myRandom() {
  const myNumber = Number(Math.floor(Math.random() * 5) + 1);
  return myNumber;
}

const myNumber = myRandom();
console.log(myNumber);
