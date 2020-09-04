function genNumeri(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function duplicatoCheck(array, numero) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == numero) {
        return true;
    }
  }
  return false;
}
function rangeNumero (numero, min, max) {
if (numero >= min && numero <= max) {
  return true
} else {
  return false;
}
}

function prompt5() {
  var numeriInseriti = []
  while (numeriInseriti.length < 5) {
    var numeroInseritoUtente = parseInt(prompt("inserisci un numero tra 1 e 10"));
    if (isNaN(numeroInseritoUtente) || rangeNumero(numeroInseritoUtente, 1 , 10) == false) {
      alert("devi inserire un numero tra 1 e 10")
    }
    else {
      numeriInseriti.push(numeroInseritoUtente);
    }
  }
  return numeriInseriti
}

var arrayNumeri = []

for (var i = 0; i < 5; i++) {
  var numeriGenerati = genNumeri(1,10);
  arrayNumeri.push(numeriGenerati);
}
console.log(arrayNumeri);

alert("Ricordati questi numeri " + arrayNumeri)

setTimeout(prompt5, 5000)
console.log(prompt5());
