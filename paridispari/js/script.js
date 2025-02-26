// L'UTENTE DEVE SCEGLIERE FRA PARI O DISPARI // 

const sceltaUserPariDispari = prompt ("Scegli pari o dispari");
console.log(sceltaUserPariDispari);


// L'UTENTE DEVE SCEGLIERE UN NUMERO COMPRESO TRA 1 E 6 //

const sceltaUserNumero = prompt ("Scegli un numero da 1 a 6");
console.log(sceltaUserNumero);


// IL COMPUTER DEVE PRODURRE UN NUMERO RANDOM COMPRESO TRA 1 E 6 //

function randomInteger(min, max) {
    let randomNumb= min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumb);
  }
  alert( randomInteger(1, 6) );





  





