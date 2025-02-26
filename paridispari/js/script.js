// L'UTENTE DEVE SCEGLIERE FRA PARI O DISPARI // 

const sceltaUserPariDispari = prompt ("Scegli pari o dispari");
console.log(sceltaUserPariDispari);
alert(`Hai scelto ${sceltaUserPariDispari}`);

// L'UTENTE DEVE SCEGLIERE UN NUMERO COMPRESO TRA 1 E 6 //

const sceltaUserNumero = prompt ("Scegli un numero da 1 a 6");
console.log(sceltaUserNumero);
alert (`Hai scelto ${sceltaUserNumero}`);

// IL COMPUTER DEVE PRODURRE UN NUMERO RANDOM COMPRESO TRA 1 E 6 //

const randomNumber = getRndInteger(1, 6);
console.log(randomNumber);




