function genNumeri(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function rangeNumero (numero, min, max) {
if (numero >= min && numero <= max) {
  return true
} else {
  return false;
}
}

function prompt5() {
  while (numeriInseriti.length < 5) {
    var numeroInseritoUtente = parseInt(prompt("inserisci un numero tra 1 e 10"));
    if (isNaN(numeroInseritoUtente) || rangeNumero(numeroInseritoUtente, 1 , 10) == false) {
      alert("devi inserire un numero tra 1 e 10")
    }
    else {
      numeriInseriti.push(numeroInseritoUtente);
    }
  }
  return numeriInseriti;
}

var arrayNumeri = []

for (var i = 0; i < 5; i++) {
  var numeriGenerati = genNumeri(1,10);
  arrayNumeri.push(numeriGenerati);
}
console.log(arrayNumeri);

alert("Ricordati questi numeri " + arrayNumeri)
var numeriInseriti = [];
prompt5();

console.log(numeriInseriti);

var indovinato = 0;
  for (var i = 0; i < numeriInseriti.length; i++) {
    if (arrayNumeri.includes(numeriInseriti[i])) {
      indovinato++;
    }
  };
  console.log(indovinato);
