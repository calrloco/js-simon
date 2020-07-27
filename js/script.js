var numeriCasuali = [];
var numeriUtente = [];
// timer
var clock = 3;
// inserisco numeri random
while (numeriCasuali.length < 5) {
  var numRandom = getRandomIntInclusive(1, 100);
  if (!numeriCasuali.includes(numRandom)) {
    numeriCasuali.push(numRandom);
  }
}
// visualizzo numeri casuali e avvio il timer
alert("Ricordati questi cinque numeri " + numeriCasuali);
setTimeout(checkArrays, clock, numeriCasuali, numeriUtente);
// funzione di gioco
function checkArrays(arr, arr1) {
  // regole
  alert(
    "Nel gioco dovrai inserire i cinque numeri visti prima i numeri devono essere compresi fra 1 e 100 e non si possono ripetere i numeri con la virgola non sono ammessi"
  );
  var numeriSbagliati =[];
  for (var i = 0; i < arr.length; i++) {
    var numero = Math.round(
      parseInt(prompt("inserisci un numero: " + "tentativo n: " + (i + 1)))
    );
   // se passa i controlli entra nell'altro if
    if (
      numero > 0 &&
      numero <= 100 &&
      !isNaN(numero) &&
      !numeriSbagliati.includes(numero) &&
      !arr1.includes(numero)
    ) {
      //pusha il numero se icluso nel primo array
      if (arr.includes(numero)) {
        arr1.push(numero);
      } else{
        numeriSbagliati.push(numero);
      }
    } else {
      // altrimente chiede di inserire valori corretti
      alert("Inserire un numero sempre diverso compreso fra 1 e 100");
      i--;
    }
  }
  // comunica il risultato
  if (arr1.length > 0 && arr1.length < arr.length) {
    alert(
      "hai ricordato " +
        arr1.length +
        " numeri su " +
        arr.length +
        " i numeri sono: " +
        arr1
    );
  } else if (arr1.length == arr.length) {
    alert("Bravo!! hai ricordato tutti i numeri che sono: " + arr1);
  } else {
    alert("Non hai ricordato nessun numero rietenta sarai piu fortunato");
  }
  location.reload();
}
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}