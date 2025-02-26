
// CHIEDERE ALL'UTENTE DI SCRIVERE UNA PAROLA // 
const userParola = prompt ("Inserisci una parola a tuo piacimento");
console.log(userParola);


// Creare una funzione per capire se la parola inserita è palindroma //
let userParolaDivisa = userParola.split('');
console.log(userParolaDivisa); 

userParolaDivisa = userParolaDivisa.reverse('');
console.log(userParolaDivisa);

const userParolaInvertita = userParolaDivisa.join('');
console.log(userParolaInvertita);

if (userParola === userParolaInvertita){
    console.log(`La parola è palindroma`);
} else {
    console.log(`la parola non è palindroma`);
}






/* const number = getRndInteger (1, 6);
console.log(number); */


